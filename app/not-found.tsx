import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { Navbar } from './../components/navbar';
import { getMeAction } from '@/app/auth/_actions/auth.action';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: '404: Not Found - Fix It Now',
    },
}

export default async function NotFound() {
    const user = await getMeAction()

    return (
        <div className="min-h-screen flex flex-col bg-linear-to-b from-blue-50 via-blue-50/40 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <Navbar user={user} />

            <div className="flex-1 flex flex-col items-center justify-center px-4 pt-(--navbar-height) py-12 text-center">
                <div className="w-80 h-80 sm:w-96 sm:h-96">
                    <DotLottieReact
                        src="https://lottie.host/e9391ba2-905b-44b5-ba75-49064ee5e816/bXkl7xkk2c.json"
                        loop
                        autoplay
                        className="w-full h-full"
                    />
                </div>

                <div className="flex flex-col items-center gap-3 -mt-4">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Page not found
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-sm">
                        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                        <Link href="/">
                            <Home className="w-4 h-4 mr-1" />
                            Return Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                        <Link href="/services">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Browse Services
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}