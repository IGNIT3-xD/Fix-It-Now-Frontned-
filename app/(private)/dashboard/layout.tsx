import { Navbar } from "@/components/navbar";
import { getMeAction } from "@/app/auth/_actions/auth.action";

export default async function SiteLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const user = await getMeAction()

    return (
        <>
            <Navbar user={user} />
            {children}
        </>
    );
}