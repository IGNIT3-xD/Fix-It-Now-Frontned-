import { getTechnicianBookings } from "../../_actions/dashboardActions"
import { BookingsTable } from "../../_components/booking-table"

const Bookings = async () => {
    const bookings = await getTechnicianBookings()
    // console.log(bookings);
    return (
        <div className="px-4 lg:px-6">
            <div className="mb-6">
                <h1 className="text-xl md:text-2xl font-[raleway] font-bold">
                    All <span className="secondary-clr">Bookings ({bookings?.data?.length})</span>
                </h1>
            </div>
            <div>
                {bookings.success && bookings.data.length > 0 ? (
                    <BookingsTable bookings={bookings.data} />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No bookings found</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Bookings
