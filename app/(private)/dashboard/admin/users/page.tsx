import { getAllUsersAction } from './../../_actions/dashboardActions';
import { UsersTable } from './../../_components/users-table';

const AllUsersPage = async () => {
  const allUsers = await getAllUsersAction()
  // console.log(allUsers);

  return (
    <div className="px-4 lg:px-6">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-[raleway] font-bold">
          All <span className="secondary-clr">Users ({allUsers?.data?.length})</span>
        </h1>
      </div>
      <div>
        {allUsers.success && allUsers.data.length > 0 ? (
          <UsersTable users={allUsers.data} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No User found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllUsersPage