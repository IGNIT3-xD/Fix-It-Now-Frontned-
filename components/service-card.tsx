import { MapPin, CheckCircle2, Star, ArrowRight } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ServiceProps } from "@/lib/types";
import Link from 'next/link';

const truncate = (text: string, maxWords: number) => {
    const words = text.trim().split(/\s+/)
    if (words.length <= maxWords) return text;

    return words.slice(0, maxWords).join(" ") + "...";
}

export function PopularServices({ service }: ServiceProps) {
    // console.log(service);
    if (!service?.data || service?.data.length === 0) {
        return (
            <div className="font-medium font-[raleway] text-lg lg:text-xl">
                <h1>No Service Found</h1>
            </div>
        )
    }

    return (
        <section className="py-5">
            <div className="grid  grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                {service.data.map((service) => (
                    <div
                        key={service.id}
                        className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 hover:border-blue-500/50 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                    >
                        <div>
                            {/* Image Header with Overlay */}
                            <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={service.thumbnail}
                                    alt={service.title}
                                    height={450}
                                    width={450}
                                    loading="eager"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                                {/* Top Badges */}
                                <div className="font-[manrope] absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-slate-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full uppercase shadow-2xs">
                                        {service.category.name}
                                    </span>

                                    {service.technician.isVerified && (
                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50/95 border border-emerald-200/80 px-2 py-0.5 rounded-full backdrop-blur-md shadow-2xs">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                                        </span>
                                    )}
                                </div>

                                {/* Rating badge on bottom right of image */}
                                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-amber-300" />
                                    <span>{service.technician.avgRating > 0 ? service.technician.avgRating.toFixed(1) : "New"}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-2.5">
                                <h3 className="font-[raleway] font-semibold text-slate-900 text-base dark:text-white leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {service.title}
                                </h3>

                                <p className="font-[manrope] text-xs text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                                    {truncate(service.description, 30)}
                                </p>

                                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-300 pt-1">
                                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                    <span className="truncate">{service.technician.location}</span>
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

                            <Button asChild className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs">
                                <Link href={`/services/${service.id}`}>
                                    View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}