import { AlertCircle, Wallet, Hammer, NotebookPen, Check, Users } from 'lucide-react'
import { StatsCard } from '../_components/stats-card'
import { redirect } from 'next/navigation';
import { getMeAction } from '@/app/auth/_actions/auth.action';
import { technicianDashboardStatsAction } from '../_actions/dashboardActions';
import { Star } from 'lucide-react';
import { StatsChart } from '../_components/stats-chart-technician';

async function DashboardContent() {
  const user = await getMeAction()
  const statsResult = await technicianDashboardStatsAction()
  // console.log(statsResult);

  if (user.data?.role !== 'TECHNICIAN') {
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

  const { myServiceTotalBookings = 0, myServices = 0, totalServicesCompleted = 0, totalServicesRequested = 0, totalEarned = 0, totalReviewsReceived = 0 } = statsResult.data || {}

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-[raleway]">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-200 mt-2">Welcome back! Here&apos;s your stats overview.</p>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="My Services"
            value={myServices}
            icon={<Hammer className="w-6 h-6 text-amber-800" />}
            color="bg-gray-100"
          />
          <StatsCard
            title="My Services Bookings"
            value={myServiceTotalBookings}
            icon={<NotebookPen className="w-6h-6 text-blue-600" />}
            color="bg-blue-100"
          />
          <StatsCard
            title="Total Completed Services"
            value={totalServicesCompleted}
            icon={<Check className="w-6 h-6 text-blue-900" />}
            color="bg-green-100"
          />
          <StatsCard
            title="Requested Services"
            value={totalServicesRequested}
            icon={<Users className="w-6 h-6 text-blue-900" />}
            color="bg-green-100"
          />
          <StatsCard
            title="Total Reviews Received"
            value={totalReviewsReceived}
            icon={<Star className="w-6 h-6 text-yellow-500" />}
            color="bg-slate-100"
          />
          <StatsCard
            title="Total Earned"
            value={`Tk. ${totalEarned}`}
            icon={<Wallet className="w-6 h-6 text-green-600" />}
            color="bg-green-100"
          />
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <StatsChart
            myServiceTotalBookings={myServiceTotalBookings}
            myServices={myServices}
            totalServicesCompleted={totalServicesCompleted}
            totalReviewsReceived={totalReviewsReceived}
            totalEarned={totalEarned}
          />
        </div>
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