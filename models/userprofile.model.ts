export interface DashboardInformation {
    dashboard: string,
    userActivity: number,
    isPinned: boolean
}

export interface UserProfileProps {
    name: string,
    email: string,
    role: string,
    businessLine: string,
    location: string,
    client: string
}

export const initialUserProfile: UserProfileProps = {
    name: "",
    email: "",
    role: "",
    businessLine: "",
    location: "",
    client: ""
}