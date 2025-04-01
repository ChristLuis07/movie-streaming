<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
           [
            'name' => 'Basic Plan',
            'price' => 200000,
            'active_period_in_months' => 3,
            'features' => json_encode([
                    'the basic plan includes 1 user',
                    'the basic plan includes 3 months of access',
                    'watch all movies and series in 720p quality',
                ]),
            ],
            [
                'name' => 'Premium Plan',
                'price' => 800000,
                'active_period_in_months' => 6,
                'features' => json_encode([
                    'the premium plan includes 3 users',
                    'the premium plan includes 6 months of access',
                    'watch all movies and series in 1080p quality',
                ]),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
