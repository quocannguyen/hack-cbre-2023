'use client'

import { AppContext } from "@/app/context/appcontext"
import { initialUserProfile } from "@/models/userprofile.model"
import Link from "next/link"
import { useContext } from "react"

export default function Navbar() {
    const appContext = useContext(AppContext)

    function signOut() {
        appContext?.setUserProfile(initialUserProfile)
    }

    return (
        <header>
            <nav className="bg-black flex justify-between px-4 py-6 shadow-xl">
                <div>{appContext?.userProfile.name}</div>
                <div className="flex gap-4 something">
                    <Link href="/">Home</Link>
                    {
                        appContext?.userProfile != initialUserProfile && <Link href="selectdashboard">Select Dashboard</Link>
                    }
                    {
                        appContext?.userProfile == initialUserProfile ? <Link href="/signin">Sign In</Link>
                        : <button onClick={signOut}>Sign Out</button>
                    }
                </div>
            </nav>
        </header>
    )
}