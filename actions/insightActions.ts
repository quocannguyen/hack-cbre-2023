import { InsightProps } from "@/models/insight.model"
import axios from "axios"


export async function getInsights(
    location: String,
    client: String,
) {
    return axios.post("/api/getinsights", {
        location, client
    }).then((response) => response.data as any[])
}