import {
    LayoutDashboardIcon,
    ListIcon,
    ChartBarIcon,
    FolderIcon,
    UsersIcon,
    CalendarIcon,
    ClipboardListIcon,
    WrenchIcon,
    StarIcon,
    SettingsIcon,
} from "lucide-react"

export type NavItem = {
    title: string
    url: string
    icon?: React.ReactNode
}

export const NAV_BY_ROLE: Record<string, NavItem[]> = {
    ADMIN: [
        { title: "Dashboard", url: "/dashboard/admin", icon: <LayoutDashboardIcon /> },
        { title: "Users", url: "/dashboard/users", icon: <UsersIcon /> },
        { title: "Technicians", url: "/dashboard/technicians", icon: <WrenchIcon /> },
        { title: "Bookings", url: "/dashboard/bookings", icon: <ClipboardListIcon /> },
        { title: "Analytics", url: "/dashboard/analytics", icon: <ChartBarIcon /> },
        { title: "Categories", url: "/dashboard/categories", icon: <FolderIcon /> },
    ],
    TECHNICIAN: [
        { title: "Dashboard", url: "/dashboard/technician", icon: <LayoutDashboardIcon /> },
        { title: "My Services", url: "/dashboard/technician/services", icon: <ListIcon /> },
        { title: "Bookings", url: "/dashboard/technician/bookings", icon: <CalendarIcon /> },
        { title: "Technician Profile", url: "/dashboard/technician/profile", icon: <StarIcon /> }
    ],
    CUSTOMER: [
        { title: "Dashboard", url: "/dashboard/customer", icon: <LayoutDashboardIcon /> },
        { title: "My Bookings", url: "/dashboard/bookings", icon: <CalendarIcon /> },
        { title: "Reviews", url: "/dashboard/reviews", icon: <StarIcon /> },
        { title: "Settings", url: "/dashboard/settings", icon: <SettingsIcon /> },
    ],
}

// Fallback for a missing/unrecognized role, so the sidebar never renders empty
export const DEFAULT_NAV: NavItem[] = NAV_BY_ROLE.CUSTOMER