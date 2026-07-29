import React from "react";
import { InfiniteSlider } from "@/components/infinite-slider";
import { ProgressiveBlur } from "@/components/progressive-blur";
import Image from 'next/image';

export type Logo = {
    src: string;
    alt: string;
}[];

const logos: Logo = [
    {
        src: "https://svgl.app/library/nvidia-wordmark-light.svg",
        alt: "Nvidia Logo",
    },
    {
        src: "https://svgl.app/library/supabase_wordmark_light.svg",
        alt: "Supabase Logo",
    },
    {
        src: "https://svgl.app/library/openai_wordmark_light.svg",
        alt: "OpenAI Logo",
    },
    {
        src: "https://svgl.app/library/turso-wordmark-light.svg",
        alt: "Turso Logo",
    },
    {
        src: "https://svgl.app/library/vercel_wordmark.svg",
        alt: "Vercel Logo",
    },
    {
        src: "https://svgl.app/library/github_wordmark_light.svg",
        alt: "GitHub Logo",
    },
    {
        src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
        alt: "Claude AI Logo",
    },
    {
        src: "https://svgl.app/library/clerk-wordmark-light.svg",
        alt: "Clerk Logo",
    }
]

export function LogoCloud() {
    return (
        <div className={`relative max-w-11/12 mx-auto border border-slate-200 bg-linear-to-r from-slate-100 via-transparent to-slate-100 py-6 md:border-x overflow-hidden dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:border-slate-800`}>
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-slate-200/80" />
            <InfiniteSlider gap={60} reverse speed={40} speedOnHover={80}>
                {logos.map((logo) => (
                    <div key={`logo-${logo.alt}`} className="flex items-center justify-center px-3">
                        <Image
                            alt={logo.alt}
                            height={160}
                            width={160}
                            className={`pointer-events-none h-20 select-none opacity-75 hover:opacity-100 transition-opacity`}
                            loading="lazy"
                            src={logo.src}
                        />
                    </div>
                ))}
            </InfiniteSlider>

            <ProgressiveBlur
                blurIntensity={1}
                className="pointer-events-none absolute top-0 left-0 h-full w-30 sm:w-40"
                direction="left"
            />
            <ProgressiveBlur
                blurIntensity={1}
                className="pointer-events-none absolute top-0 right-0 h-full w-30 sm:w-40"
                direction="right"
            />

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-slate-200/80" />
        </div>
    );
}
