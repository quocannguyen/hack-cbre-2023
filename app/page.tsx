'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";
// import { initialCredentials } from "@/models/credentials.model";
import InputForm from "@/components/input/inputform";
import { signIn } from "@/actions/authenticateActions";
import { DashboardInformation, UserProfileProps } from "@/models/userprofile.model";
import { AppContext } from "@/app/context/appcontext";
import cbrelogo from "@/assets/cbre-logo.png"

export default function Home() {
    const appContext = useContext(AppContext)
    // const [credentialsState, setCredentialsState] = useState(initialCredentials)
    const [credentialsState, setCredentialsState] = useState({
        email: "",
        password: ""
    })
    const router = useRouter()

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCredentialsState({
            ...credentialsState,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: FormEvent) {
        event.preventDefault() // Prevent refreshing when submitting
        const userResults = await signIn(credentialsState.email, credentialsState.password)
        if (userResults.length == 0) {
            console.log(`No users with email ${credentialsState.email}`)
        } else {
            const userProfile: UserProfileProps = {
                name: userResults[0][0],
                email: userResults[0][1],
                role: userResults[0][2],
                businessLine: userResults[0][3],
                location: userResults[0][4],
                client: userResults[0][5]
            }
            appContext?.setUserProfile(userProfile)

            const dashboards: DashboardInformation[] = userResults.map(result => {
                return {
                    dashboard: result[6],
                    userActivity: result[7],
                    isPinned: false
                }
            })
            appContext?.setDashboards(dashboards)

            router.push("/insights")
        }
    }

    return (
        <section className="bg-[#faf0e6] h-screen">
            <section className="px-10">
                <div className="h-10"></div>
                <img
                    src={cbrelogo.src}
                    className="h-24 mx-auto"
                />
            </section>
            <section className="my-auto">
                <InputForm
                    onSubmit={onSubmit}
                    onChange={handleChange}
                    inputs={[
                        {
                            id: "email",
                            value: credentialsState.email
                        },
                        {
                            id: "password",
                            value: credentialsState.password
                        }
                    ]}
                    buttonString="Login" />
            </section>
        </section>
    )
}