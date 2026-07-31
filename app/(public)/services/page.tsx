import { PopularServices } from '@/components/service-card';
import { cn } from '@/lib/utils';
import { getAllServicesAction } from './_actions/services.action';

const servicesPage = async () => {
    const services = await getAllServicesAction()
    // console.log(services);

    return (
        <div className={cn(
            "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
            "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950")}>
            <div>
                <h1 className='font-medium font-[raleway] text-lg lg:text-xl'>All Service <span className='text-sm'>${services?.data.length}</span></h1>
            </div>
            <div className="max-w-11/12 mx-auto py-6 mb-20">
                <PopularServices service={services} />
            </div>
        </div >
    )
}

export default servicesPage