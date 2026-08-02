'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface StatsChartProps {
    myTotalBookings: number
    totalPaid: number
    totalReviewsGiven: number
}

export function StatsChart({ myTotalBookings, totalPaid, totalReviewsGiven }: StatsChartProps) {
    const data = [
        {
            name: 'Bookings',
            value: myTotalBookings,
        },
        {
            name: 'Amount Paid',
            value: totalPaid / 100, // Divided to make it visible on same scale
        },
        {
            name: 'Reviews',
            value: totalReviewsGiven,
        },
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
