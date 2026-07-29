"use client"
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
    return (
        <footer className={cn(
            "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
            "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        )}>
            <div className="max-w-11/12 mx-auto">
                {/* Newsletter Subscription Banner */}
                <div className="relative overflow-hidden bg-[#4F39E5] rounded-4xl px-12 py-16 text-white shadow-xl mb-16">

                    {/* Ring Pattern SVG decoration on top-left corner */}
                    <div className="absolute top-0 left-0 pointer-events-none select-none -translate-x-4 -translate-y-4  opacity-90">
                        <Image
                            src="https://landingfoliocom.imgix.net/store/collection/saasui/images/newsletter/3/ring-pattern.svg"
                            alt="Decorative ring pattern"
                            width={192}
                            height={192}
                            className="w-48 h-48 object-contain"
                        />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[raleway] text-white tracking-tight mb-8 sm:mb-10">
                            Subscribe to our newsletter
                        </h2>
                        <form className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-3xl mx-auto">
                            <div className="w-full sm:w-64">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full px-5 py-3.5 rounded-xl sm:rounded-2xl bg-transparent border border-white/70 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white text-sm font-medium transition-all"
                                />
                            </div>

                            <div className="w-full sm:w-72">
                                <input
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    className="w-full px-5 py-3.5 rounded-xl sm:rounded-2xl bg-transparent border border-white/70 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-white text-sm font-medium transition-all"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="px-8 py-6 rounded-xl font-semibold text-slate-900 bg-[#f4a826] hover:bg-[#B4C5FF] transition-colors duration-300">
                                Subscribe Now
                                <ArrowRight />
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Footer Navigation & Brand Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
                    {/* Brand Info (Left Column) */}
                    <div className="md:col-span-5 pr-0 md:pr-8 flex flex-col justify-between">
                        <div>
                            {/* Logo */}
                            <Link href="/">
                                <Image
                                    className="w-24"
                                    src='/logo.png'
                                    width={256}
                                    height={256}
                                    alt="Fix it now - logo"
                                />
                            </Link>

                            {/* Tagline / Description */}
                            <p className="font-[manrope] text-slate-500 dark:text-slate-300 text-sm leading-relaxed max-w-sm my-6 font-medium">
                                Clarity gives you the blocks and components you need to create Link truly professional website.
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <Link
                                href="#twitter"
                                aria-label="Twitter"
                                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-white hover:shadow-sm transition-all"
                            >
                                <FaXTwitter className="w-4 h-4 fill-current" />
                            </Link>
                            <Link
                                href="#facebook"
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-white hover:shadow-sm transition-all"
                            >
                                <FaFacebookF className="w-4 h-4 fill-current" />
                            </Link>
                            <Link
                                href="#instagram"
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:bg-white hover:shadow-sm transition-all"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#github"
                                aria-label="GitHub"
                                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-sm transition-all"
                            >
                                <FaGithub className="w-4 h-4 fill-current" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns (Right Columns) */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Column 1: COMPANY */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2563eb] mb-5">
                                COMPANY
                            </h3>
                            <ul className="space-y-3.5 text-sm font-medium text-slate-600 dark:text-slate-200">
                                <li>
                                    <Link href="#about" className="hover:text-slate-900 transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#features" className="hover:text-slate-900 transition-colors">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#works" className="hover:text-slate-900 transition-colors">
                                        Works
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#career" className="hover:text-slate-900 transition-colors">
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: HELP */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2563eb] mb-5">
                                HELP
                            </h3>
                            <ul className="space-y-3.5 text-sm font-medium text-slate-600 dark:text-slate-200">
                                <li>
                                    <Link href="#support" className="hover:text-slate-900 transition-colors">
                                        Customer Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#delivery" className="hover:text-slate-900 transition-colors">
                                        Delivery Details
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#terms" className="hover:text-slate-900 transition-colors">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#privacy" className="hover:text-slate-900 transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: RESOURCES */}
                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2563eb] mb-5">
                                RESOURCES
                            </h3>
                            <ul className="space-y-3.5 text-sm font-medium text-slate-600 dark:text-slate-200">
                                <li>
                                    <Link href="#ebooks" className="hover:text-slate-900 transition-colors">
                                        Free eBooks
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#tutorial" className="hover:text-slate-900 transition-colors">
                                        Development Tutorial
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#blog" className="hover:text-slate-900 transition-colors">
                                        How to - Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#youtube" className="hover:text-slate-900 transition-colors">
                                        YouTube Playlist
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom subtle divider line */}
                <div className="pt-6 border-t border-slate-200/80"></div>
            </div>
        </footer>
    );
}
