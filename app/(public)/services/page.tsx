import { cn } from '@/lib/utils';
import { getAllServicesAction } from './_actions/services.action';
import SearchBar from '@/app/(public)/services/_components/searchBar';
import ServicesFilter from './_components/serviceFilters';
import CatetegoriesFilters from './_components/catetegoriesFilters';
import { ServiceCards } from './_components/serviceCards';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: 'Services - Fix It Now',
    },
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const ServicesPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const params = await searchParams
    const services = await getAllServicesAction(params)
    const totalServices = await getAllServicesAction()

    return (
        <div className={cn(
            "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
            "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950")}>
            <div className="max-w-11/12 mx-auto py-6 mb-20">
                <div className='space-y-2 mb-4'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-[raleway] font-bold'>All <span className='secondary-clr'>Services</span></h1>
                    <p className='text-sm text-black/70 dark:text-white/70'>Showing {services.data.length} of {totalServices.data.length} services</p>
                </div>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                    <SearchBar />
                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                        <CatetegoriesFilters />
                        <ServicesFilter />
                    </div>
                </div>
                <ServiceCards service={services} />
            </div>
        </div>
    )
}

export default ServicesPage