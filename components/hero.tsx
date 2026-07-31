'use client'
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const socialProof = {
    avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    ],
    text: "Join 4,200+ happy homeowners this month",
}

const programs = [
    {
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
        category: "IMMEDIATE",
        title: "Emergency Drain Cleaning",
    },
    {
        image: "https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80",
        category: "SYSTEM",
        title: "Smart Water Heater Install",
    },
    {
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",
        category: "UTILITY",
        title: "Pipe Leak Maintenance"
    },
    {
        image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&auto=format&fit=crop&q=80",
        category: "KITCHEN",
        title: "Modern Fixture Upgrade"
    },
    {
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&auto=format&fit=crop&q=80",
        category: "INSPECTION",
        title: "Video Camera Line Scan"
    },
]

export function HeroSection() {
    return (
        <section
            className={cn("relative w-full min-h-screen flex flex-col overflow-hidden")}
            role="banner"
            aria-label="Hero section"
        >
            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 ">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center text-center max-w-4xl gap-6 sm:gap-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="font-[manrope] inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-950/40 secondary-clr rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Trusted by 10,000+ Homeowners
                        </div>
                    </motion.div>

                    {/* Title */}
                    <h1 className="font-[raleway] text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        Local <span className='secondary-clr'>home service</span> expertise.<br />Right when you need it.
                    </h1>

                    {/* Subtitle */}
                    <p className="font-[manrope] text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                        Connect with certified professionals for plumbing, electrical, and home maintenance. High-quality work guaranteed at transparent prices.
                    </p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="font-[raleway] flex flex-col sm:flex-row items-center gap-4 pt-2"
                    >
                        <Button asChild className="btn-primary">
                            <Link href={'/services'}> Services<ArrowRightIcon /></Link>
                        </Button>
                        <Button variant={'secondary'} className="btn-secondary">
                            <Link href={'/contact-us'}>Contact Us</Link>
                        </Button>
                    </motion.div>

                    {/* Disclaimer */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="font-[manrope] text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic"
                    >
                        *100% Satisfaction Guaranteed • No Hidden Surcharges • Upfront Flat Rates
                    </motion.p>

                    {/* Social Proof */}
                    {socialProof && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-row items-center gap-3 pt-2"
                        >
                            <div className="flex flex-row -space-x-3">
                                {socialProof.avatars.map((avatar, index) => (
                                    <Image
                                        key={index}
                                        src={avatar}
                                        alt={`User ${index + 1}`}
                                        height={40}
                                        width={40}
                                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow-xs"
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 italic">
                                {socialProof.text}
                            </span>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Program Cards Carousel */}
            {programs.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="relative z-10 w-full overflow-hidden"
                    style={{
                        paddingTop: "60px",
                        paddingBottom: "60px",
                    }}
                >
                    {/* Gradient Overlays - responsive width, and now theme-aware via Tailwind gradient utilities */}
                    <div
                        className={cn(
                            "absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-6 sm:w-25 lg:w-37.5",
                            "bg-linear-to-r from-white dark:from-slate-950 to-transparent"
                        )}
                    />
                    <div
                        className={cn(
                            "absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-6 sm:w-25 lg:w-37.5",
                            "bg-linear-to-l from-white dark:from-slate-950 to-transparent"
                        )}
                    />

                    {/* Scrolling Container */}
                    <motion.div
                        className="flex items-center"
                        animate={{
                            x: [0, -((programs.length * 380) / 2)],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: programs.length * 3,
                                ease: "linear",
                            },
                        }}
                        style={{
                            gap: "24px",
                            paddingLeft: "24px",
                        }}
                    >
                        {/* Duplicate programs for seamless loop */}
                        {[...programs, ...programs].map((program, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="shrink-0 cursor-pointer relative overflow-hidden w-70 h-95 sm:w-89 sm:h-120 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                            >
                                {/* Image */}
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    height={350}
                                    width={350}
                                    loading="eager"
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                                    }}
                                />

                                {/* Text Content */}
                                <div className="font-[manrope] absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                                    <span className="text-xs font-medium text-white/80 uppercase tracking-widest">
                                        {program.category}
                                    </span>
                                    <h3 className="font-[raleway] text-2xl font-semibold text-white leading-tight">
                                        {program.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}