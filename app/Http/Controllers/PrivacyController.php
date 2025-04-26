<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PrivacyController extends Controller
{
    /**
     * プライバシーポリシーページを表示
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Privacy');
    }
}