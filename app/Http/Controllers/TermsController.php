<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TermsController extends Controller
{
    /**
     * 利用規約ページを表示する
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Terms');
    }
} 