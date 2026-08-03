import Image from 'next/image';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SignupForm } from '@/app/auth/_components/signup-form';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: 'Sign Up - Fix It Now',
    },
}

export default function SignupPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link href="/">
                        <Image
                            className="w-24"
                            src='/logo.png'
                            width={256}
                            height={256}
                            loading="eager"
                            alt="Fix it now - logo"
                        />
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <SignupForm />
                    </div>
                </div>
            </div>
            <div className="relative lg:flex items-center justify-center hidden bg-muted dark:bg-slate-900/20">
                <div className="w-full">
                    <DotLottieReact
                        src="https://lottie.host/dd81e7e0-11a5-459b-ba6d-f806d7aa8ada/iGCBUDSoR7.json"
                        loop
                        autoplay
                        width={250}
                    />
                </div>
            </div>
        </div>
    )
}
