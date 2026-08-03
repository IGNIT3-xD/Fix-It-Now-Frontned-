import { Wallet, MessageSquare, Calendar, AlertCircle } from 'lucide-react'
import { customerDashboardStatsAction, getCustomerBookings } from '../_actions/dashboardActions'
import { PaymentHistory } from '../_components/payment-history'
import { StatsCard } from '../_components/stats-card'
import { StatsChart } from '../_components/stats-chart'
import { getMeAction } from './../../../auth/_actions/auth.action';
import { redirect } from 'next/navigation';

async function DashboardContent() {
  const user = await getMeAction()
  const statsResult = await customerDashboardStatsAction()
  const bookingsResult = await getCustomerBookings()

  if (user.data?.role !== 'CUSTOMER') {
    redirect('/auth/login')
  }

  if (!statsResult.success) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-gray-900 font-semibold">Failed to load dashboard</p>
          <p className="text-gray-600 text-sm mt-1">Please try refreshing the page</p>
        </div>
      </div>
    )
  }


  const { myTotalBookings = 0, totalPaid = 0, totalReviewsGiven = 0 } = statsResult.data || {}

  // Filter bookings that have been paid
  const paidBookings = bookingsResult.data?.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (booking: any) => booking.payment && booking.payment.status === 'PAID'
  ) || []

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-[raleway]">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-200 mt-2">Welcome back! Here&apos;s your service activity overview.</p>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="My Total Bookings"
            value={myTotalBookings}
            icon={<Calendar className="w-6 h-6 text-blue-600" />}
            color="bg-blue-100"
          />
          <StatsCard
            title="Total Paid"
            value={`Tk. ${totalPaid}`}
            icon={<Wallet className="w-6 h-6 text-green-600" />}
            color="bg-green-100"
          />
          <StatsCard
            title="Total Reviews Given"
            value={totalReviewsGiven}
            icon={<MessageSquare className="w-6 h-6 text-purple-600" />}
            color="bg-purple-100"
          />
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <StatsChart
            myTotalBookings={myTotalBookings}
            totalPaid={totalPaid}
            totalReviewsGiven={totalReviewsGiven}
          />
        </div>

        {/* Payment History Section */}
        <PaymentHistory payments={paidBookings} />
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <>
      <DashboardContent />
    </>
  )
}
