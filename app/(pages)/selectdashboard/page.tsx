'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";
// import { initialCredentials } from "@/models/credentials.model";
import InputForm from "@/components/input/inputform";
import { signIn } from "@/actions/authenticateActions";
import { DashboardInformation, UserProfileProps } from "@/models/userprofile.model";
import { AppContext } from "@/app/context/appcontext";
import DashboardSelection from "@/components/dashboardselection";

export default function Page() {
    const appContext = useContext(AppContext)
    const router = useRouter()

    return (
        <section className="bg-[#faf0e6] h-screen">
            <section>
                <h2 className="text-black">Pinned Dashboards</h2>
                {appContext?.dashboards.filter(
                    dashboardInformation => dashboardInformation.isPinned
                ).map((dashboardInformation: DashboardInformation, index: number) => (
                    <DashboardSelection
                        key={index}
                        dashboard={dashboardInformation.dashboard}
                        userActivity={dashboardInformation.userActivity}
                        isPinned={dashboardInformation.isPinned} />
                ))}
            </section>
            <section>
                <h2 className="text-black">Dashboards by User Activities</h2>
                {appContext?.dashboards.filter(
                    dashboardInformation => !dashboardInformation.isPinned
                ).map((dashboardInformation: DashboardInformation, index: number) => (
                    <DashboardSelection
                        key={index}
                        dashboard={dashboardInformation.dashboard}
                        userActivity={dashboardInformation.userActivity}
                        isPinned={dashboardInformation.isPinned} />
                ))}
            </section>
        </section>
    )
}