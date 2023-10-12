import axios from "axios"


export async function getrecommendations(
    username: String,
) {
    return axios.post("/api/getrecommendations", {
        username
    }).then((response) => response.data as any[])
}