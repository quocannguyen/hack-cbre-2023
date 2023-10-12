'use client'

import { AppContext } from "@/app/context/appcontext"
import { initialUserProfile } from "@/models/userprofile.model"
import Link from "next/link"
import { useContext } from "react"
import NavbarButton from "./navbarbutton"

export default function Navbar() {
    const appContext = useContext(AppContext)

    function signOut() {
        appContext?.setUserProfile(initialUserProfile)
    }

    return (
        <header className="bg-[#faf0e6]">
            <section className="mx-5">
                {/* <nav className="bg-white flex justify-between px-4 py-6 shadow-xl">
                    <div>{appContext?.userProfile.name}</div>
                    <div className="flex gap-4 something">
                        <Link href="/">Home</Link>
                        {
                            appContext?.userProfile != initialUserProfile && <Link href="/selectdashboard">Select Dashboard</Link>
                        }
                        {
                            appContext?.userProfile == initialUserProfile ? <Link href="/signin">Sign In</Link>
                            : <button onClick={signOut}>Sign Out</button>
                        }
                    </div>
                </nav> */}
                <nav className="flex flex-row w-3/5 items-center">
                    <NavbarButton link="profile" text="Profile" />
                    <NavbarButton link="selectdashboard" text="Dashboard" />
                    <NavbarButton link="insights" text="Insights" />
                </nav>
                <div
                    className="border-solid h-px shrink-0 border-t border-b-0 border-black border-x-0"
                />
            </section>
        </header>
    )
}