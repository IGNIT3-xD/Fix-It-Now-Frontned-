import { cn } from '@/lib/utils';
import { ContactPage } from './_components/contact';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: 'Contact Us - Fix It Now',
    },
}

const contactPage = () => {
    return (
        <div className={cn(
            "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
            "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950")}>
            <div className="max-w-11/12 mx-auto py-6">
                <ContactPage />
            </div>
        </div>
    )
}

export default contactPage