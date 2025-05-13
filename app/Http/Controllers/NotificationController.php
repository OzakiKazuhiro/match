<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class NotificationController extends Controller
{
    /**
     * 通知一覧を取得する
     */
    public function index()
    {
        $user = Auth::user();
        $notifications = $user->notifications()->paginate(10);
        
        return Inertia::render('Notifications/Index', [
            'notifications' => $notifications
        ]);
    }
    
    /**
     * 通知を既読にする
     */
    public function markAsRead(string $id)
    {
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            $notification = Auth::user()->notifications()->findOrFail($id);
            $notification->markAsRead();
            
            // トランザクションコミット
            DB::commit();
            
            return redirect()->back();
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('通知既読処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', '通知の既読処理に失敗しました。再度お試しください。');
            return redirect()->back();
        }
    }
    
    /**
     * すべての通知を既読にする
     */
    public function markAllAsRead()
    {
        try {
            // トランザクション開始
            DB::beginTransaction();
            
            Auth::user()->unreadNotifications->markAsRead();
            
            // トランザクションコミット
            DB::commit();
            
            return redirect()->back();
            
        } catch (\Exception $e) {
            // エラー時はロールバック
            DB::rollBack();
            
            // エラーログに記録
            Log::error('全通知既読処理でエラー発生: ' . $e->getMessage());
            
            session()->flash('error', '全通知の既読処理に失敗しました。再度お試しください。');
            return redirect()->back();
        }
    }
    
    /**
     * 未読の通知数を取得する（API）
     */
    public function getUnreadCount()
    {
        $count = Auth::user()->unreadNotifications()->count();
        
        return response()->json([
            'count' => $count
        ]);
    }
}