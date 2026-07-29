import { FeatureSection } from "@/components/features"
import { HeroSection } from "@/components/hero"
import { cn } from '@/lib/utils';


const HomePage = () => {
  return (
    <div className={cn(
      "bg-linear-to-b from-blue-50 via-blue-50/40 to-white",
      "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    )}>
      <HeroSection />

      <section className="py-10 max-w-11/12 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-[raleway] text-slate-900 dark:text-white mt-3 tracking-tight">
            Why Local Homeowners <span className="secondary-clr"> Trust Us</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 font-[manrope]">
            Explore our industry-leading service standards.
          </p>
        </div>
        <FeatureSection />
      </section>
    </div>
  )
}

export default HomePage