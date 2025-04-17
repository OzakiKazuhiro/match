<?php

namespace App\Http\Controllers;

use App\Models\ConversationGroup;
use App\Models\DirectMessage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class DirectMessageController extends Controller
{
    /**
     * Display a listing of the conversation groups.
     */
    public function index(): Response
    {
        $user = Auth::user();
        $conversationGroups = ConversationGroup::with(['jobOwner', 'applicant', 'latestMessage.sender'])
            ->where('job_owner_id', $user->id)
            ->orWhere('applicant_id', $user->id)
            ->orderBy('updated_at', 'desc')
            ->get();

        return Inertia::render('Messages/Index', [
            'conversationGroups' => $conversationGroups,
        ]);
    }

    /**
     * Show the messages in a conversation group.
     */
    public function show(ConversationGroup $conversationGroup): Response
    {
        // Check if the authenticated user is a participant of this conversation
        if (!$conversationGroup->hasParticipant(Auth::id())) {
            abort(403, 'Unauthorized action.');
        }

        $conversationGroup->load(['jobOwner', 'applicant']);
        $messages = $conversationGroup->messages()
            ->with('sender')
            ->orderBy('created_at', 'asc')
            ->get();
            
        $participants = $conversationGroup->getAllParticipants();

        return Inertia::render('Messages/Show', [
            'conversationGroup' => $conversationGroup,
            'messages' => $messages,
            'participants' => $participants,
        ]);
    }

    /**
     * Store a new message in the conversation.
     */
    public function store(Request $request, ConversationGroup $conversationGroup): RedirectResponse
    {
        // Validate request
        $request->validate([
            'message' => 'required|string|max:1000',
        ]);

        // Check if the authenticated user is a participant of this conversation
        if (!$conversationGroup->hasParticipant(Auth::id())) {
            abort(403, 'Unauthorized action.');
        }

        // Create message
        $message = new DirectMessage([
            'sender_id' => Auth::id(),
            'message' => $request->message,
        ]);

        $conversationGroup->messages()->save($message);
        $conversationGroup->touch(); // Update the updated_at timestamp

        return redirect()->back();
    }

    /**
     * Create a new conversation group with a user.
     */
    public function create(User $user): RedirectResponse
    {
        $currentUser = Auth::user();
        
        // Check if conversation already exists
        $existingConversation = ConversationGroup::where(function($query) use ($currentUser, $user) {
            $query->where('job_owner_id', $currentUser->id)
                  ->where('applicant_id', $user->id);
        })->orWhere(function($query) use ($currentUser, $user) {
            $query->where('job_owner_id', $user->id)
                  ->where('applicant_id', $currentUser->id);
        })->first();

        if ($existingConversation) {
            return redirect()->route('messages.show', $existingConversation);
        }

        // Create new conversation group
        $conversationGroup = ConversationGroup::create([
            'job_owner_id' => $currentUser->id,
            'applicant_id' => $user->id
        ]);

        return redirect()->route('messages.show', $conversationGroup);
    }
} 