'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface StatsChartProps {
    myServiceTotalBookings: number
    myServices: number
    totalServicesCompleted: number
    totalReviewsReceived: number
    totalEarned: number
}

export function StatsChart({ myServiceTotalBookings, myServices, totalServicesCompleted, totalReviewsReceived, totalEarned }: StatsChartProps) {
    const data = [
        {
            name: 'Total Bookings',
            value: myServiceTotalBookings,
        },
        {
            name: 'My Total Services',
            value: myServices,
        },
        {
            name: 'Total Service Completed',
            value: totalServicesCompleted,
        },
        {
            name: 'Total Reviews Received',
            value: totalReviewsReceived,
        },
        {
            name: 'Total Revenue',
            value: totalEarned / 100
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
