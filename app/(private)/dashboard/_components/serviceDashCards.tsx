import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DashSerCards } from "@/lib/types";

const truncate = (text: string, maxWords: number) => {
    const words = text.trim().split(/\s+/)
    if (words.length <= maxWords) return text;

    return words.slice(0, maxWords).join(" ") + "...";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ServiceCards({ service }: any) {
    // console.log(service);
    if (!service) {
        return (
            <div className="font-medium font-[raleway] text-lg lg:text-xl">
                <h1>No Service Found</h1>
            </div>
        )
    }

    return (
        <section className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.map((service: DashSerCards) => (
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