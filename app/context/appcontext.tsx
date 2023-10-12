"use client"

import { DashboardInformation, UserProfileProps, initialUserProfile } from "@/models/userprofile.model";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

/**
 * 
 * Usage: const context = useContext(Context)
 */

type AppContextType = {
    //
    userProfile: UserProfileProps,
    setUserProfile: Dispatch<SetStateAction<UserProfileProps>>,
    dashboards: DashboardInformation[],
    setDashboards: Dispatch<SetStateAction<DashboardInformation[]>>
}

export const AppContext = createContext<AppContextType | null>(null)

export function AppContextProvider(
    { children } : { children: ReactNode }
) {
    // 
    const [ userProfileState, setUserProfileState ] = useState(initialUserProfile)
    const [ dashboardsState, setDashboardsState ] = useState<DashboardInformation[]>([])

    const appContext: AppContextType = {
        // 
        userProfile: userProfileState,
        setUserProfile: setUserProfileState,
        dashboards: dashboardsState,
        setDashboards: setDashboardsState
    }
    return (
        <AppContext.Provider value={appContext}>
            {children}
        </AppContext.Provider>
    )
}