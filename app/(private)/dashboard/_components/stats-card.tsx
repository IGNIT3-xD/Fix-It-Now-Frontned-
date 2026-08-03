interface StatsCardProps {
    title: string
    value: string | number
    icon: React.ReactNode
    color?: string
}

export function StatsCard({ title, value, icon, color = 'bg-blue-100' }: StatsCardProps) {
    return (
        <div className="bg-white dark:bg-slate-900/30 dark:border-slate-700 rounded-lg shadow p-6 border border-gray-200">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-xl md:text-2xl font-semibold font-[manrope] mt-2">{value}</p>
                </div>
                <div className={`${color} dark:bg-slate-900/20 rounded-lg p-3 flex items-center justify-center`}>
                    {icon}
                </div>
            </div>
        </div>
    )
}
