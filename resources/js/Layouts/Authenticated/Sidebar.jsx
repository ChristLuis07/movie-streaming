import { Link } from "@inertiajs/react";
import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "./MenuItem";
import { UserMenu, UserOther } from "./MenuList";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full bg-white">
            <div className="flex flex-col p-6 border-r border-gray-100 overflow-y-auto h-full">
                <a href="/" className="mb-8">
                    <img src="/images/moonton.svg" alt="MoontoN" />
                </a>

                <div className="flex flex-col h-full">
                    {/* Menu Section */}
                    <div className="mb-8">
                        <div className="text-gray-400 text-sm mb-4 px-2">
                            Menu
                        </div>
                        <div className="flex flex-col gap-1">
                            {UserMenu.map((menu, index) => {
                                let isActive = false;

                                if (menu.link === "user.dashboard.index") {
                                    isActive =
                                        route().current() ===
                                            "user.dashboard.index" ||
                                        route().current() ===
                                            "user.dashboard" ||
                                        window.location.pathname.endsWith(
                                            "/dashboard"
                                        );
                                } else if (menu.link) {
                                    isActive =
                                        route().current() === menu.link ||
                                        (typeof route().current() ===
                                            "string" &&
                                            route()
                                                .current()
                                                .startsWith(menu.link));
                                }

                                return (
                                    <MenuItem
                                        key={`${index}-${menu.text}`}
                                        link={menu.link}
                                        icon={menu.icon}
                                        text={menu.text}
                                        isActive={isActive}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    {/* Others Section */}
                    <div className="">
                        <div className="text-gray-400 text-sm mb-4 px-2">
                            Menu
                        </div>
                        <div className="flex flex-col gap-1">
                            {UserOther.map((menu, index) => {
                                let isActive = false;

                                if (menu.link === "user.dashboard.index") {
                                    isActive =
                                        route().current() ===
                                            "user.dashboard.index" ||
                                        route().current() ===
                                            "user.dashboard" ||
                                        window.location.pathname.endsWith(
                                            "/dashboard"
                                        );
                                } else if (menu.link) {
                                    isActive =
                                        route().current() === menu.link ||
                                        (typeof route().current() ===
                                            "string" &&
                                            route()
                                                .current()
                                                .startsWith(menu.link));
                                }

                                return (
                                    <MenuItem
                                        key={`other-${index}-${menu.text}`}
                                        link={menu.link}
                                        icon={menu.icon}
                                        text={menu.text}
                                        isActive={isActive}
                                        method={menu.method || "get"} 
                                    />
                                );
                            })}
                        </div>
                    </div>
                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Premium Plan"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
