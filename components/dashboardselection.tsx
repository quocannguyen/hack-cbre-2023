"use client"

import { AppContext } from "@/app/context/appcontext"
import { useContext } from "react"

export default function DashboardSelection({
    dashboard,
    userActivity,
    isPinned,
}: {
    dashboard: string,
    userActivity: number,
    isPinned: boolean
}) {
    const appContext = useContext(AppContext)

    function togglePin() {
        let newDashboards = [...appContext!.dashboards]
        const index = newDashboards.findIndex(
            dashboardInformation => dashboardInformation.dashboard === dashboard
        )
        newDashboards[index].isPinned = !newDashboards[index].isPinned
        appContext?.setDashboards(newDashboards)
    }

    return (
        <div id="NewRootRoot" className="flex flex-col">
            <div className="border-solid bg-[#29bb80] flex flex-row justify-end gap-10 h-16 shrink-0 items-start px-1 py-2 border-black border-2">
                <div className="font-['Kanit'] uppercase text-white mt-1">
                    {dashboard}: {userActivity}
                </div>
                <div className="self-end">
                    <button
                        onClick={togglePin}
                        className="text-xs font-['Kanit'] bg-white w-12 shrink-0 items-center px-3 rounded-[100px] text-black"
                    >
                        {isPinned ? "Unpin" : "Pin"}
                    </button>
                </div>
            </div>
        </div>
    )
}