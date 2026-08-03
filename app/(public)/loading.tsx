import Loader from "@/components/loading-comp";

export default function Loading() {
    return <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-50 via-blue-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <Loader />
    </div>
}