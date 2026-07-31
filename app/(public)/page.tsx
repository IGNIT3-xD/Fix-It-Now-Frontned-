import { FeatureSection } from "@/components/features"
import { HeroSection } from "@/components/hero"
import { PopularServices } from "@/components/service-card";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { LogoCloud } from "@/components/logo-cloud";
import { getAllServicesAction } from './services/_actions/services.action';


const HomePage = async () => {
  const services = await getAllServicesAction()

  return (
    <div className={cn(
      "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
      "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    )}>
      <HeroSection />

      <section className="py-10 max-w-11/12 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-[raleway] text-slate-900 dark:text-white tracking-tight">
            Our Most <span className="secondary-clr">Popular</span> Services
          </h2>
          <p className="font-[manrope] text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
            Verified local professionals delivering top-rated home repairs and craftsman solutions at fixed upfront rates.
          </p>
        </div>
        <PopularServices service={services} />
        <div className="flex items-center justify-center">
          <Button className="btn-secondary mt-3">
            <Link href={'/services'} className="inline-flex items-center gap-1.5">View All Services <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <section className="py-10 max-w-11/12 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-[raleway] text-slate-900 dark:text-white mt-3 tracking-tight">
            Why Local Homeowners <span className="secondary-clr"> Trust Us</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 font-[manrope]">
            Explore our industry-leading service standards.
          </p>
        </div>
        <FeatureSection />
      </section>

      <section className="py-10 mb-20 border-b border-t border-slate-200 dark:border-slate-800 overflow-hidden relative">
        <div className="max-w-11/12 mx-auto text-center mb-8">
          <h2 className="text-center">
            <span className="font-[manrope] block font-medium text-xs sm:text-sm text-slate-500 uppercase tracking-widest mb-1">
              Already used by
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium font-[raleway] text-slate-900 dark:text-white tracking-tight">
              Meet Our <span className="secondary-clr">Honourable</span> Partners
            </span>
          </h2>
        </div>
        <LogoCloud />
      </section>
    </div>
  )
}

export default HomePage