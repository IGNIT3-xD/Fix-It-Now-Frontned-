import {
    Phone,
    Mail,
    MapPin,
    Clock,
    AlertCircle,
    ShieldCheck,
    Building2,
    ArrowLeft,
    FileText,
    PhoneCall,
    ArrowRight
} from "lucide-react";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function ContactPage() {
    return (
        <div className="py-6">
            <div>
                {/* Navigation / Back Button */}
                <div className="flex items-center justify-between mb-8 font-[manrope]">
                    <Link
                        href={'/'}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 dark:bg-slate-800 dark:text-slate-300
                        dark:border-slate-500 dark:hover:text-blue-600 dark:hover:border-blue-600 font-semibold text-sm shadow-2xs hover:shadow-sm transition-all cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <div className="flex items-center gap-3">
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 24/7 Support Active
                        </span>
                        <Link
                            href="tel:18005557586"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-sm transition-all"
                        >
                            <PhoneCall className="w-4 h-4" /> (800) 555-PLUMB
                        </Link>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h1 className="font-[raleway] text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight dark:text-white">
                        Get in Touch With Our Local Experts
                    </h1>
                    <p className="font-[manrope] text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
                        Have a question, need an emergency fix, or looking for a custom service quote? Send us a message or call our 24/7 hotline.
                    </p>
                </div>

                {/* Contact Info Cards (4 Column Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* Phone Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 dark:bg-slate-900 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 dark:bg-slate-900 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-700 mb-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-[raleway] font-bold text-slate-900 dark:text-slate-300 text-lg mb-1">Phone & Hotline</h3>
                            <p className="font-[manrope] dark:text-slate-400 text-xs text-slate-500 mb-4">24/7 Emergency response & dispatch team</p>
                            <Link
                                href="tel:18005557586"
                                className="text-base font-extrabold text-blue-600 hover:underline block"
                            >
                                (800) 555-999
                            </Link>
                            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">+880 1700-000000</span>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
                            <span>Avg. Wait: &lt; 2 mins</span>
                            <span className="text-emerald-600 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available
                            </span>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 dark:bg-slate-900 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 dark:bg-slate-900 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-700 mb-4">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-[raleway] font-bold text-slate-900 dark:text-slate-300 text-lg mb-1">Email Support</h3>
                            <p className="font-[manrope] dark:text-slate-400 text-xs text-slate-500 mb-4">Send us inquiries & project RFPs</p>
                            <Link
                                href="mailto:support@flowmaster.com"
                                className="text-sm font-bold text-slate-900 dark:text-blue-600 hover:text-blue-600 dark:hover:text-white transition-colors block truncate"
                            >
                                support@flowmaster.com
                            </Link>
                            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">quotes@flowmaster.com</span>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500">
                            Response within 1-2 hours
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 dark:bg-slate-900 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 dark:bg-slate-900 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-700 mb-4">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-[raleway] font-bold text-slate-900 dark:text-slate-300 text-lg mb-1">Main Headquarter</h3>
                            <p className="font-[manrope] dark:text-slate-400 text-xs text-slate-500 mb-4">Service hubs across Dhaka & Metro</p>
                            <p className="text-xs font-semibold text-slate-800 dark:text-slate-400 leading-snug">
                                House #42, Road #11, Block F, Gulshan-1, Dhaka 1212
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500">
                            Whole Dhaka Coverage
                        </div>
                    </div>

                    {/* Hours Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 dark:bg-slate-900 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 dark:bg-slate-900 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-700 mb-4">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="font-[raleway] font-bold text-slate-900 dark:text-slate-300 text-lg mb-1">Operating Hours</h3>
                            <p className="font-[manrope] dark:text-slate-400 text-xs text-slate-500 mb-4">Office & Scheduled Appointments</p>
                            <p className="text-xs text-slate-700 dark:text-slate-400 font-medium">Sat - Thu: 8:00 AM - 9:00 PM</p>
                            <p className="text-xs text-slate-700 dark:text-slate-400 font-medium">Fri: 10:00 AM - 9:00 PM</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-amber-600 font-semibold flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" /> Emergency: 24/7 Active
                        </div>
                    </div>
                </div>

                {/* Main Section: Contact Form + Side Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">

                    {/* Left: Contact Form (7 Cols) */}
                    <div className="lg:col-span-7 bg-white dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
                        <div className="mb-8">
                            <h2 className="font-[raleway] text-2xl font-bold text-slate-900 tracking-tight">
                                Send Us a Message
                            </h2>
                            <p className="text-slate-600 text-sm mt-1">
                                Fill out the details below and our service supervisor will get back to you immediately.
                            </p>
                        </div>


                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                                        Your Full Name *
                                    </label>
                                    <div>
                                        <Input
                                            type="text"
                                            name="fullName"
                                            required
                                            placeholder="e.g. Your Name"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                                        Phone Number *
                                    </label>
                                    <div>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="017XX-XXXXXX"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                                        Email Address *
                                    </label>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                                    Subject / Short Summary
                                </label>
                                <Input
                                    type="text"
                                    name="subject"
                                    placeholder="e.g. Leaking kitchen sink or furniture assembly quote"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                                    Detailed Message *
                                </label>
                                <Input
                                    name="message"
                                    required
                                    placeholder="Please describe your problem or requirements, preffered time, or location..."
                                ></Input>
                            </div>

                            {/* Submit button */}
                            <Button
                                type="submit"
                                className="w-full py-6">
                                Send Message <ArrowRight />
                            </Button>
                        </form>
                    </div>

                    {/* Right: Map / Direct Service Branches (5 Cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Direct Booking CTA Card */}
                        <div className="bg-linear-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-md">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-xs font-bold mb-4">
                                <AlertCircle className="w-3.5 h-3.5 text-blue-400" /> Need Instant Booking?
                            </div>
                            <h3 className="font-[raleway] text-2xl font-extrabold tracking-tight mb-2">
                                Need a technician right now?
                            </h3>
                            <p className="text-slate-300 font-[manrope] text-xs sm:text-sm leading-relaxed mb-6">
                                Skip the contact form and use our instant 3-step online booking tool to reserve a slot with an estimated cost immediately.
                            </p>
                            <Link href={'/services'}
                                className=" w-full py-3.5 bg-white text-slate-900 hover:bg-blue-50 font-bold rounded-2xl text-sm dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-blue-600 transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                            >
                                <FileText className="w-4 h-4 text-blue-600" /> Book Service Instantly
                            </Link>
                        </div>

                        {/* Service Hubs List */}
                        <div className="bg-white dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-6 border border-slate-200/90 shadow-xs">
                            <h3 className="font-bold text-slate-900 dark:text-slate-300 text-lg mb-4 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-blue-600" /> Our Dhaka Service Hubs
                            </h3>

                            <div className="space-y-4 text-xs">
                                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-slate-300">Gulshan & Banani Hub</h4>
                                        <p className="text-slate-500 mt-0.5">House 42, Road 11, Gulshan-1</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-slate-300">Mirpur & Uttara Hub</h4>
                                        <p className="text-slate-500 mt-0.5">Sector 10, Main Avenue, Uttara</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-slate-300">Dhanmondi & Lalmatia Hub</h4>
                                        <p className="text-slate-500 mt-0.5">Road 27, Dhanmondi R/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
