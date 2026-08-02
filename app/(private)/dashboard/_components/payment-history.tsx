'use client'

import { format } from 'date-fns'

interface Payment {
    id: string
    status: string
    amount: number
    updatedAt: string
    service: {
        title: string
    }
}

interface PaymentHistoryProps {
    payments: Payment[]
}

export function PaymentHistory({ payments }: PaymentHistoryProps) {
    if (!payments || payments.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h3>
                <div className="text-center py-8">
                    <p className="text-gray-500">No payment history available</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white dark:bg-slate-900/30 dark:border-slate-700 rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Payment History</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-slate-900/30 dark:border-slate-700 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Service</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {payments.map((payment) => (
                            <tr key={payment.id} className="hover:bg-gray-50 hover:dark:bg-slate-800/30">
                                <td className="px-6 py-4 text-sm">{payment.service.title}</td>
                                <td className="px-6 py-4 text-sm font-semibold">Tk. {payment.amount}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {format(new Date(payment.updatedAt), 'MMM dd, yyyy')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
