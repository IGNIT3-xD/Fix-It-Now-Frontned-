import React from "react";
import { cn } from "@/lib/utils";
import {
    RotateCcwClock,
    TruckElectric,
    BadgeDollarSign,
    UserRoundCheck,
    Sparkles,
    PhoneCall,
    Award,
    Video
} from "lucide-react";

export interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    key?: React.Key;
}

export function FeatureSection({
    features = [
        {
            title: "24/7 Emergency Response",
            description: "On-call master plumbers ready to dispatch anytime, day or night, weekends and holidays included.",
            icon: <RotateCcwClock className="w-6 h-6" />,
        },
        {
            title: "60-Minute Arrival Guarantee",
            description: "GPS-tracked technicians equipped to handle your plumbing emergency with record speed.",
            icon: <TruckElectric className="w-6 h-6" />,
        },
        {
            title: "Upfront Flat-Rate Pricing",
            description: "No hidden fees, no hourly surprises. You approve the exact quote before any work begins.",
            icon: <BadgeDollarSign className="w-6 h-6" />,
        },
        {
            title: "100% Satisfaction Guarantee",
            description: "All repairs and installs are backed by a full 1-year parts and labor warranty.",
            icon: <UserRoundCheck className="w-6 h-6" />,
        },
        {
            title: "Licensed & Background Checked",
            description: "Rigorous vetting and ongoing training ensure courteous, trustworthy experts in your home.",
            icon: <Award className="w-6 h-6" />,
        },
        {
            title: "HD Video Camera Inspection",
            description: "State-of-the-art sewer camera scans locate exact pipe blockages without digging up lawns.",
            icon: <Video className="w-6 h-6" />,
        },
        {
            title: "Clean Home Guarantee",
            description: "Booties, floor coverings, and post-service cleanup ensure your home stays spotless.",
            icon: <Sparkles className="w-6 h-6" />,
        },
        {
            title: "Instant Phone Consultation",
            description: "Speak directly with an experienced technician to diagnose water or gas emergencies fast.",
            icon: <PhoneCall className="w-6 h-6" />,
        },
    ] }: { features?: FeatureItem[] }) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-5")}>
            {features.map((feature, index) => (
                <Feature
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    index={index}
                    total={features.length}
                />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
    total,
}: FeatureItem & { index: number; total: number }) => {
    // Column counts at each breakpoint, matching the grid above
    const cols = { base: 1, md: 2, lg: 4 };

    const isFirstCol = (colCount: number) => index % colCount === 0;
    const isLastRow = (colCount: number) => {
        const rowIndex = Math.floor(index / colCount);
        const lastRowIndex = Math.floor((total - 1) / colCount);
        return rowIndex === lastRowIndex;
    };

    const firstColBase = isFirstCol(cols.base);
    const firstColMd = isFirstCol(cols.md);
    const firstColLg = isFirstCol(cols.lg);

    const lastRowBase = isLastRow(cols.base);
    const lastRowMd = isLastRow(cols.md);
    const lastRowLg = isLastRow(cols.lg);

    return (
        <div
            className={cn(
                "flex flex-col py-10 relative group/feature border-slate-200 dark:border-slate-800 border-r",
                // Left border: on for the first column at the CURRENT breakpoint's layout
                firstColBase ? "border-l" : "border-l-0",
                firstColMd ? "md:border-l" : "md:border-l-0",
                firstColLg ? "lg:border-l" : "lg:border-l-0",
                // Bottom border: on for every row except the last one at the CURRENT breakpoint's layout
                lastRowBase ? "border-b-0" : "border-b",
                lastRowMd ? "md:border-b-0" : "md:border-b",
                lastRowLg ? "lg:border-b-0" : "lg:border-b"
            )}
        >
            {index < total / 2 ? (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-blue-50/80 dark:from-slate-900 to-transparent pointer-events-none" />
            ) : (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-blue-50/80 dark:from-slate-900 to-transparent pointer-events-none" />
            )}

            <div className="mb-4 relative z-10 px-10 text-blue-600 dark:text-blue-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 dark:bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center" />
                <span className="font-[manrope] group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-900 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="font-[raleway] text-sm text-slate-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed">
                {description}
            </p>
        </div>
    );
};