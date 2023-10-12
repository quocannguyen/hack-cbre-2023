import { AppContext } from "@/app/context/appcontext"
import ProfileInfo from "@/components/profileinfo/profileinfo"
import { useContext } from "react"

export default function Page() {
    const appContext = useContext(AppContext)
    const userProfile = appContext!.userProfile

    return (
        <section>
            <div>
                <div>
                    Welcome {userProfile.name}
                </div>
            </div>
            <div>
                <ProfileInfo field="Name" value={userProfile.name} />
                <ProfileInfo field="Email" value={userProfile.email} />
                <ProfileInfo field="Role" value={userProfile.role} />
                <ProfileInfo field="Business Line" value={userProfile.businessLine} />
                <ProfileInfo field="Location" value={userProfile.location} />
                <ProfileInfo field="Client" value={userProfile.client} />
            </div>
        </section>
    )
}