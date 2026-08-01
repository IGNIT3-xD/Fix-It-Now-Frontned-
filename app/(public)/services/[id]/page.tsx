import { cn } from '@/lib/utils';
import ServiceDetails from './../_components/serviceDetails';
import { getServiceByIdAction } from './../_actions/services.action';
import { getMeAction } from '@/app/auth/_actions/auth.action';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const service = await getServiceByIdAction(id)
    const user = await getMeAction()
    
    return (
        <div className={cn(
            "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
            "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950")}>
            <div className="max-w-11/12 mx-auto py-6 mb-10">
                <ServiceDetails service={service} user={user}/>
            </div>
        </div>)
}