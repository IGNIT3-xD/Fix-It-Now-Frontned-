// app/(private)/dashboard/layout.tsx
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { getMeAction } from '@/app/auth/_actions/auth.action';
import { Navbar } from '@/components/navbar';
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

export default async function DashboardLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const user = await getMeAction()

    return (
        <>
            <Navbar user={user} />
            <SidebarProvider
                style={{
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties}
                className="pt-(--navbar-height)"
            >
                <AppSidebar role={user.data.role} variant="inset" className="pt-18" />
                <SidebarInset>
                    <SiteHeader role={user.data.role}/>
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}