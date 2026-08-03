interface CategoryCardProps {
    name: string
}

export function CategoryCard({ name }: CategoryCardProps) {
    return (
        <div className="flex items-center justify-center p-6 rounded-xl border bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-400 hover:dark:border-purple-700 transition-all duration-300">
            <span className="text-sm font-semibold font-[manrope] text-slate-900 dark:text-white">
                {name}
            </span>
        </div>
    )
}