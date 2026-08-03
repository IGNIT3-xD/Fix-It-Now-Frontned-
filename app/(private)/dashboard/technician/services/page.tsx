import { getTechnicianServicesAction } from '../../_actions/dashboardActions';
import { ServiceCards } from '../../_components/serviceDashCards';
import { CreateServiceForm } from './../../_components/createServiceForm';
import { getCategoriesAction } from './../../_actions/dashboardActions';

const MyService = async () => {
    const services = await getTechnicianServicesAction()
    const categories = await getCategoriesAction()
    // console.log(services);
    // console.log(categories.data);

    return (
        <div className="px-4 lg:px-6">
            <div className='flex items-center justify-between'>
                <h1 className="text-xl md:text-2xl font-[raleway] font-bold">
                    My <span className="secondary-clr">Services ({services?.data?.services.length ?? "0"})</span>
                </h1>
                <CreateServiceForm categories={categories?.data} />
            </div>

            {services.success && services.data.services.length > 0 ? (
                <ServiceCards service={services?.data?.services} />
            ) : (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No service found</p>
                </div>
            )}
        </div>
    )
}

export default MyService