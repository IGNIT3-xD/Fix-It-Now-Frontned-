"use client"
import { ArrowLeft, Award, Calendar, CheckCircle2, MapPin, ShieldCheck, Star, UserCheck, Zap } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";


const ServiceDetails = () => {
    const [selectedTab, setSelectedTab] = useState<"overview" | "reviews">("overview");

    return (
        <div>
            {/* Breadcrumb Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium truncate">
                    <Button asChild>
                        <Link href={'/'}><ArrowLeft className="w-4 h-4" /> Home</Link>
                    </Button>
                </nav>
            </div>

            {/* Top Header Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-3">
                            {/* Category Badge */}
                            <span className="text-xs font-bold tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase">
                                SERVICE
                            </span>

                            {/* Verified Badge */}
                            {/* {service.technician?.isVerified && (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Partner
                                </span>
                            )} */}

                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Partner
                            </span>
                        </div>

                        <h1 className="text-xl md:text-2xl lg:text-3xl font-[raleway] font-semibold dark:text-slate-200 text-slate-900 tracking-tight leading-snug">
                            Computer table, chair, door, bed etc.
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-200 mt-3 font-medium">
                            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span>Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/60 dark:bg-slate-900">
                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                <span>4.9</span>
                                <span className="text-slate-400 font-normal">reviews</span>
                            </div>

                            <div className="flex items-center gap-1 text-slate-400">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Listed: 12 june 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout (Left Column + Right Sticky Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Detailed Content (8 Cols) */}
                <div className="lg:col-span-8 space-y-8">

                    {/* Image */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xs p-4 sm:p-5">
                        <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900 mb-4 group">
                            <Image
                                src='/Hero_image.png'
                                alt="title"
                                height={450}
                                width={450}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-slate-900 dark:border-slate-700 rounded-2xl p-4 border border-slate-200/90 text-center shadow-2xs">
                            <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
                            <span className="text-[11px] text-slate-400 dark:text-slate-200 font-[manrope] font-bold uppercase block">Service Warranty</span>
                            <span className="text-sm font-semibold dark:text-slate-300 mt-4 text-slate-900">{30} Days Guaranteed</span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 dark:border-slate-700 rounded-2xl p-4 border border-slate-200/90 text-center shadow-2xs">
                            <Award className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
                            <span className="text-[11px] text-slate-400 dark:text-slate-200 font-[manrope] font-bold uppercase block">Tech Experience</span>
                            <span className="text-sm font-semibold dark:text-slate-300 mt-4 text-slate-900">{3}+ Years</span>
                        </div>
                    </div>

                    {/* Section Tabs (Overview / Technician / Reviews) */}
                    <div className="bg-white dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                        <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6 gap-6 text-sm font-bold">
                            <button
                                onClick={() => setSelectedTab("overview")}
                                className={`pb-3 transition-colors relative cursor-pointer ${selectedTab === "overview"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                Service Overview
                            </button>
                            <button
                                onClick={() => setSelectedTab("reviews")}
                                className={`pb-3 transition-colors relative cursor-pointer ${selectedTab === "reviews"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                Reviews & Ratings (48)
                            </button>
                        </div>

                        {/* Tab 1: Overview */}
                        {selectedTab === "overview" && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-[raleway] text-lg font-extrabold text-slate-900 dark:text-slate-200 mb-2">
                                        About This Service
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                        desc here
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Tab 3: Customer Reviews */}
                        {selectedTab === "reviews" && (
                            <div className="space-y-6">
                                {/* Rating Header */}
                                <div className="flex items-center gap-6 p-5 bg-amber-50/60 dark:bg-slate-900 dark:border-slate-800 border border-amber-200/60 rounded-2xl">
                                    <div className="text-center shrink-0">
                                        <div className="text-4xl font-extrabold text-slate-900 dark:text-slate-300 font-[raleway]">
                                            4.9
                                        </div>
                                        <div className="flex items-center justify-center gap-0.5 text-amber-400 my-1">
                                            <Star className="w-4 h-4 fill-amber-400" />
                                            <Star className="w-4 h-4 fill-amber-400" />
                                            <Star className="w-4 h-4 fill-amber-400" />
                                            <Star className="w-4 h-4 fill-amber-400" />
                                            <Star className="w-4 h-4 fill-amber-400" />
                                        </div>
                                        <span className="text-xs text-slate-500 dark:text-slate-300 font-medium font-[manrope]">Out of 5.0</span>
                                    </div>

                                    <div className="border-l border-amber-200 pl-6 text-xs text-slate-600 dark:text-slate-300 font-[manrope] space-y-1">
                                        <p className="font-medium mb-2 text-slate-900 dark:text-slate-300 text-sm">Customer Satisfaction Rating</p>
                                        <p>● Verified after service completion</p>
                                    </div>
                                </div>

                                {/* Review Cards */}
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 border border-slate-100 rounded-2xl space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-slate-900 text-sm dark:text-slate-300">Author</span>
                                                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                                                    Verified Booking
                                                </span>
                                            </div>
                                            <span className="text-xs text-slate-400 dark:text-slate-300">date</span>
                                        </div>

                                        <div className="flex items-center gap-1 text-amber-400 text-xs">
                                            {/* {Array.from({ length: rev.rating }).map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                                            ))} */}

                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                        </div>

                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            comment
                                        </p>

                                        <div className="text-[11px] text-slate-400 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> Location
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Column - Booking Card (4 Cols Sticky) */}
                <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
                    {/* Primary Action Card */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 dark:border-slate-800 border border-slate-200/80 shadow-md">
                        <div className="border-b border-slate-100 dark:border-slate-800  pb-4 mb-5">
                            <span className="text-xs font-semibold font-[manrope] uppercase tracking-wider text-slate-800  block mb-3 dark:text-slate-300">
                                Total Fixed Price
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-medium font-[raleway] text-slate-900 dark:text-slate-300">
                                    ৳ 1000
                                </span>
                                <span className="text-xs dark:bg-slate-800 text-emerald-600 dark:text-slate-300 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md font-[manrope]">
                                    No Hidden Fees 
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
                                Includes labor, diagnostic check, and basic equipment testing.
                            </p>
                        </div>

                        {/* Direct Booking CTA Button */}
                        <Button>
                            <Zap className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" /> Book This Service Now
                        </Button>

                        {/* Guarantee badges */}
                        <div className="font-[manrope] space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800 mt-5 text-xs">
                            <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span><strong>30-Day Money-Back Warranty:</strong> Complete peace of mind on all repairs.</span>
                            </div>
                            <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                                <UserCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span><strong>Verified Technician:</strong> Background checked and certified expert.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails