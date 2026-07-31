import { PopularServices } from '@/components/service-card';
import { cn } from '@/lib/utils';
import { getAllServicesAction } from './_actions/services.action';
import SearchBar from '@/app/(public)/services/_components/searchBar';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const ServicesPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const params = await searchParams
    const services = await getAllServicesAction(params)

    return (
        <div className={cn(
            "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
            "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950")}>
            <div className="max-w-11/12 mx-auto py-6 mb-20">
                <div className='flex items-center justify-between'>
                    <SearchBar />
                </div>
                <PopularServices service={services} />
            </div>
        </div>
    )
}

export default ServicesPage