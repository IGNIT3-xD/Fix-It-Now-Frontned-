import { AlertCircle, Wallet, Hammer, User, UsersRound, Settings, NotebookPen } from 'lucide-react'
import { StatsCard } from '../_components/stats-card'
import { adminDashboardStatsAction } from './../_actions/dashboardActions';
import { StatsChart } from '../_components/stats-chart-admin';
import { redirect } from 'next/navigation';
import { getMeAction } from '@/app/auth/_actions/auth.action';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: 'Admin Dashboard - Fix It Now',
    },
}

async function DashboardContent() {
  const user = await getMeAction()
  const statsResult = await adminDashboardStatsAction()

  if (user.data?.role !== 'ADMIN') {
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

  const { totalUsers = 0, totalTechnicians = 0, totalCustomer = 0, totalServices = 0, totalBookings = 0, totalRevenue = 0 } = statsResult.data || {}

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-[raleway]">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-200 mt-2">Welcome back! Here&apos;s your website stats overview.</p>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Users"
            value={totalUsers}
            icon={<User className="w-6h-6 text-blue-600" />}
            color="bg-blue-100"
          />
          <StatsCard
            title="Total Technicians"
            value={totalTechnicians}
            icon={<Hammer className="w-6 h-6 text-amber-800" />}
            color="bg-gray-100"
          />
          <StatsCard
            title="Total Customers"
            value={totalCustomer}
            icon={<UsersRound className="w-6 h-6 text-blue-900" />}
            color="bg-green-100"
          />
          <StatsCard
            title="Total Services"
            value={totalServices}
            icon={<Settings className="w-6 h-6 text-purple-400" />}
            color="bg-blue-100"
          />
          <StatsCard
            title="Total Bookings"
            value={totalBookings}
            icon={<NotebookPen className="w-6 h-6 text-purple-600" />}
            color="bg-purple-100"
          />
          <StatsCard
            title="Total Revenue"
            value={`Tk. ${totalRevenue}`}
            icon={<Wallet className="w-6 h-6 text-green-600" />}
            color="bg-green-100"
          />
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <StatsChart
            totalUsers={totalUsers}
            totalTechnicians={totalTechnicians}
            totalCustomer={totalCustomer}
            totalServices={totalServices}
            totalBookings={totalBookings}
            totalRevenue={totalRevenue}
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
