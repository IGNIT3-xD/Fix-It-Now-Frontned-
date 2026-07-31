import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getMeAction } from './../auth/_actions/auth.action';

export default async function SiteLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const user = await getMeAction()

    return (
        <>
            <Navbar user={user} />
            {children}
            <Footer />
        </>
    );
}