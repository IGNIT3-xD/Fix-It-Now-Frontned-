import { CategoryCard } from '../../_components/category-card';
import { CreateCategoryForm } from '../../_components/create-category-form';
import { getAllCategoriesAction } from './../../_actions/dashboardActions';

type Category = {
    id: string;
    name: string;
    services: []
}

const AllCategoriesPage = async () => {
    const allCategories = await getAllCategoriesAction()
    // console.log(allCategories);

    return (
        <div className="px-4 lg:px-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-[raleway] font-bold">
                    All <span className="secondary-clr">Categories ({allCategories?.data?.length})</span>
                </h1>
                <CreateCategoryForm />
            </div>
            <div>
                {allCategories.success && allCategories.data.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {allCategories.data.map((category: Category) => (
                            <CategoryCard key={category.id} name={category.name} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No Category found</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllCategoriesPage