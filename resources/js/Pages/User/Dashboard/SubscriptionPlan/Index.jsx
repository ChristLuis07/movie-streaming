import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscriptionPlans, env }) {
   const selectSubscription = (id) => {
       // Get the CSRF token from the meta tag
       const token = document
           .querySelector('meta[name="csrf-token"]')
           .getAttribute("content");

       axios
           .post(
               route("user.dashboard.subscriptionPlan.userSubscribe", {
                   subscriptionPlan: id,
               }),
               {}, // Empty data object
               {
                   headers: {
                       "X-CSRF-TOKEN": token,
                       "X-Inertia": false, // Tell the server this is not an Inertia request
                       Accept: "application/json",
                   },
               }
           )
           .then((response) => {
               if (response.data.userSubscription) {
                   onSnapMidtrans(response.data.userSubscription);
               }
           })
           .catch((error) => {
               console.error(error);
           });
   };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            // Optional
            onSuccess: function (result) {
                Inertia.visit(route("user.dashboard.index"));
            },
            // Optional
            onPending: function (result) {
                console.log({ result });
            },
            // Optional
            onError: function (result) {
                console.log({ result });
            },
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Subscription Plan">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {subscriptionPlans.map((subscriptionPlan) => (
                        <SubscriptionCard
                            name={subscriptionPlan.name}
                            price={subscriptionPlan.price}
                            durationInMonth={
                                subscriptionPlan.active_period_in_months
                            }
                            features={JSON.parse(subscriptionPlan.features)}
                            isPremium={subscriptionPlan.name === "Premium Plan"}
                            key={subscriptionPlan.id}
                            onSelectSubscription={() =>
                                selectSubscription(subscriptionPlan.id)
                            }
                        />
                    ))}
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
