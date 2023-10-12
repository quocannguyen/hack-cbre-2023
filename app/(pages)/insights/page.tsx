"use client"

import { getInsights } from "@/actions/insightActions";
import { AppContext } from "@/app/context/appcontext";
import Insight from "@/components/insight/insight";
import { InsightProps } from "@/models/insight.model";
import { useContext, useEffect, useState } from "react";

export default function Page() {
    const [insightsState, setInsightsState] = useState<InsightProps[]>([])
    const appContext = useContext(AppContext)
    
    useEffect(() => {
        async function setInsights() {
            const insightResults = await getInsights(appContext!.userProfile.location, appContext!.userProfile.client)
            const insights: InsightProps[] = insightResults.map(result => {
                return {
                    address: result[0],
                    insight1: result[1],
                    insight2: result[2],
                    driver: result[3],
                    account: result[4],
                    criticality: result[5]
                }
            })
            setInsightsState(insights)
        }
        setInsights()
    }, [])

    return (
        <section>
            {insightsState.map((insight: InsightProps, index: number) => (
                <Insight 
                    key={index}
                    insightProps={insight}
                />
            ))}
        </section>
    )
}