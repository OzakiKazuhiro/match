<?php

namespace App\Providers;

use App\Models\JobListing;
use App\Notifications\NewResetPassword;
use App\Policies\JobListingPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Models\User;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        JobListing::class => JobListingPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // 退会済みユーザーを認証から除外
        $this->app['auth']->viaRequest('web', function ($request) {
            if ($request->session()->has('auth')) {
                $user = User::find($request->session()->get('auth.id'));
                if ($user && !$user->is_deleted) {
                    return $user;
                }
            }
            return null;
        });
    }
} 