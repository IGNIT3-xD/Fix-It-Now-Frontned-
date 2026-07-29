import { MapPin, CheckCircle2, Star, ArrowRight } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export interface PopularService {
    title: string;
    description: string;
    price: number;
    isActive: boolean;
    createdAt: string;
    category: {
        name: string;
    };
    location: string;
    isVerified: boolean;
    avgRating: number;
    image: string;
}

const popularServicesData: PopularService[] = [
    {
        title: "Computer table, chair, door, bed etc.",
        description: "Make table, chair, door, bed and other stuffs with best wood and best price.",
        price: 3499,
        isActive: true,
        createdAt: "2026-07-10T09:25:17.010Z",
        category: {
            name: "CARPENTRY"
        },
        location: "Whole Dhaka, Bangladesh",
        isVerified: true,
        avgRating: 4.9,
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&auto=format&fit=crop&q=80"
    },
    {
        title: "Full House Plumbing & Water Pipe Repair",
        description: "Complete leak detection, pipe replacement, bathroom fitting and water pump repair services.",
        price: 2499,
        isActive: true,
        createdAt: "2026-07-15T14:10:00.000Z",
        category: {
            name: "PLUMBING"
        },
        location: "Gulshan & Banani, Dhaka",
        isVerified: true,
        avgRating: 4.8,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80"
    },
    {
        title: "AC Master Servicing & Gas Refill",
        description: "Deep chemical cleaning, jet wash, gas leakage check and cooling optimization for all AC brands.",
        price: 1850,
        isActive: true,
        createdAt: "2026-07-18T11:45:22.000Z",
        category: {
            name: "APPLIANCE REPAIR"
        },
        location: "Mirpur & Uttara, Dhaka",
        isVerified: true,
        avgRating: 4.9,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=80"
    },
    {
        title: "Electrical Wiring & Circuit Breaker Setup",
        description: "Safe household electrical wiring, short circuit fix, switchboard & light fitting experts.",
        price: 1299,
        isActive: true,
        createdAt: "2026-07-20T08:30:10.000Z",
        category: {
            name: "ELECTRICAL"
        },
        location: "Dhanmondi, Dhaka",
        isVerified: true,
        avgRating: 5.0,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80"
    }
];

export function PopularServices() {
    return (
        <section className="py-5">
            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularServicesData.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 hover:border-blue-500/50 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                    >
                        <div>
                            {/* Image Header with Overlay */}
                            <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    height={400}
                                    width={400}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                                {/* Top Badges */}
                                <div className="font-[manrope] absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-slate-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full uppercase shadow-2xs">
                                        {service.category.name}
                                    </span>

                                    {service.isVerified && (
                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50/95 border border-emerald-200/80 px-2 py-0.5 rounded-full backdrop-blur-md shadow-2xs">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                                        </span>
                                    )}
                                </div>

                                {/* Rating badge on bottom right of image */}
                                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-amber-300" />
                                    <span>{service.avgRating > 0 ? service.avgRating.toFixed(1) : "New"}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-2.5">
                                <h3 className="font-[raleway] font-semibold text-slate-900 text-base dark:text-white leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {service.title}
                                </h3>

                                <p className="font-[manrope] text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-300 pt-1">
                                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                    <span className="truncate">{service.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Footer with Price & View Services CTA */}
                        <div className="font-[manrope] px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-2 mt-auto">
                            <div>
                                <span className="text-[10px] text-slate-400 dark:text-white uppercase font-semibold block">Starting at</span>
                                <span className="text-lg font-extrabold text-slate-900 dark:text-slate-200">
                                    ৳{service.price.toLocaleString()}
                                </span>
                            </div>

                            <Button className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs">
                                View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

        </section >
    );
}
