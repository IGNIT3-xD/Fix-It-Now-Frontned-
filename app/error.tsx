'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Button } from '@/components/ui/button'
import { RotateCcw, Home } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col bg-linear-to-b from-blue-50 via-blue-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="flex-1 flex flex-col items-center justify-center px-4 pt-(--navbar-height) py-12 text-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80">
                    <DotLottieReact
                        src="https://lottie.host/e9391ba2-905b-44b5-ba75-49064ee5e816/bXkl7xkk2c.json"
                        loop
                        autoplay
                        className="w-full h-full"
                    />
                </div>

                <div className="flex flex-col items-center gap-3 -mt-4">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Something went wrong
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-sm">
                        An unexpected error occurred. You can try again, or head back home.
                    </p>
                    {process.env.NODE_ENV === 'development' && (
                        <p className="text-xs text-red-500 max-w-md font-mono bg-red-50 dark:bg-red-950 px-3 py-2 rounded-md mt-2">
                            {error.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => reset()}>
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Try Again
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                        <Link href="/">
                            <Home className="w-4 h-4 mr-1" />
                            Return Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}