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
        <section>
            {dashboard}: {userActivity}
            <button onClick={togglePin}>
                {isPinned ? "Unpin" : "Pin"}
            </button>
        </section>
    )
}