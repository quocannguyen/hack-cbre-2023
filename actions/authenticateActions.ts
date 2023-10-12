import axios from "axios"


export async function signIn(
    email: String,
    password: String,
) {
    return axios.post("/api/signin", {
        email, password
    }).then((response) => response.data as any[])
}