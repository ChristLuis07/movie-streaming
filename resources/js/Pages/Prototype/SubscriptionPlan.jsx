import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function SubscriptionPlan() {
    return (
        <Authenticated>
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
                    {/* Basic */}
                    <SubscriptionCard
                        name="Basic"
                        price={299000}
                        durationInMonth={3}
                        features={[
                            "Watch all you want. Ad-free.",
                            "Recommendations just for you.",
                            "Change or cancel anytime.",
                        ]}
                    />
                    {/* <!-- For Greatest --> */}
                    <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={899999}
                        durationInMonth={6}
                        features={[
                            "The best for the brightest.",
                            "Watch all you want. Ad-free.",
                            "Recommendations just for you.",
                            "best quality video.",
                            "everything on your device.",
                        ]}
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
