'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface StatsChartProps {
    totalUsers: number,
    totalTechnicians: number,
    totalCustomer: number,
    totalServices: number,
    totalBookings: number,
    totalRevenue: number
}

export function StatsChart({ totalUsers, totalTechnicians, totalCustomer, totalServices, totalBookings, totalRevenue }: StatsChartProps) {
    const data = [
        {
            name: 'Total Users',
            value: totalUsers,
        },
        {
            name: 'Total Technicians',
            value: totalTechnicians,
        },
        {
            name: 'Total Customers',
            value: totalCustomer,
        },
        {
            name: 'Total Services',
            value: totalServices,
        },
        {
            name: 'Total Bookings',
            value: totalBookings,
        },
        {
            name: 'Total Revenue',
            value: totalRevenue / 100, // Divided to make it visible on same scale
        }
    ]

    return (
        <div className="rounded-lg shadow p-6 border border-gray-200 dark:bg-slate-900/30 dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-4">Dashboard Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#3b82f6" name="Count" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
