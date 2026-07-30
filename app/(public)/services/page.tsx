import { PopularServices } from '@/components/service-card';
import { cn } from '@/lib/utils';

const servicesPage = () => {
    return (
        <div className={cn(
            "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
            "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950")}>
            <div className="max-w-11/12 mx-auto py-6 mb-20">
                <PopularServices />
            </div>
        </div >
    )
}

export default servicesPage