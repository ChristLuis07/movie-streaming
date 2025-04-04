<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $status)
    {
        if($status == 'true' && !Auth::user()->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'))->with('error', 'Please subscribe to a plan to access this feature.');
        }
        if($status == 'false' && Auth::user()->isActive) {
            return redirect(route('user.dashboard.index'))->with('error', 'You are already subscribed to a plan.');
        }
        return $next($request);
    }
}
