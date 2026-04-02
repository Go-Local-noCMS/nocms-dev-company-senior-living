import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CareTypesGrid } from "@/components/CareTypesGrid";
import { StatsBar } from "@/components/StatsBar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTABanner } from "@/components/CTABanner";
import { GoldenDivider } from "@/components/GoldenDivider";
import { GrovePattern } from "@/components/GrovePattern";
import * as motion from "motion/react-client";
import { ArrowRight, Utensils, Activity, Palette, TreePine, Play, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Senior Living of Johnson County | Independent, Assisted & Memory Care",
  description:
    "Johnson County's premier senior living community — independent living, assisted living, and memory care in the heart of Overland Park, KS. Serving families for over 25 years.",
  openGraph: {
    title: "Senior Living of Johnson County",
    description:
      "Where Johnson County families find warmth, dignity, and vibrant senior living.",
    type: "website",
  },
};

const homeStats = [
  { value: "25+", label: "Years Serving Johnson County" },
  { value: "3", label: "Levels of Personalized Care" },
  { value: "200+", label: "Residents Call Us Home" },
  { value: "98%", label: "Family Satisfaction" },
];

const homeTestimonials = [
  {
    quote:
      "Moving my mother here was the best decision our family ever made. The staff treats her like their own family, and she's more active and joyful than she's been in years.",
    author: "Sarah Mitchell",
    relationship: "Daughter of Resident",
    community: "Assisted Living Resident — Overland Park",
    rating: 5,
  },
  {
    quote:
      "I was nervous about leaving my home, but from the very first visit I knew this was right. The dining is incredible, the activities are plentiful, and I've made wonderful friends.",
    author: "Robert Chen",
    relationship: "Independent Living Resident",
    community: "Resident since 2021",
    rating: 5,
  },
  {
    quote:
      "The memory care program gave us our father back. The specialized activities engage him in ways we couldn't manage at home. The staff truly understands dementia care.",
    author: "Maria Santos",
    relationship: "Daughter of Resident",
    community: "Memory Care Family — Olathe, KS",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero
        headline={"Johnson County's\nPremier Senior Living"}
        subheadline="Discover a community where warmth, dignity, and vibrant living come together — right here in the heart of Johnson County."
        badge="Serving Johnson County families for 25+ years"
        showSearch={false}
        ctaText="Schedule a Visit"
        ctaHref="/schedule-visit"
        secondaryCtaText="Take a Virtual Tour"
        secondaryCtaHref="#virtual-tour"
      />

      <StatsBar stats={homeStats} />

      {/* Virtual Tour Section */}
      <section
        id="virtual-tour"
        className="bg-surface py-24 lg:py-32 relative overflow-hidden"
        aria-labelledby="virtual-tour-heading"
      >
        <GrovePattern opacity={0.03} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 max-w-[40px] bg-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                  Explore Our Community
                </span>
              </div>
              <h2
                id="virtual-tour-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight leading-tight mb-6"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                See What Makes Us Johnson County&rsquo;s Favorite
              </h2>
              <p className="text-text/70 leading-relaxed font-body mb-8 max-w-lg">
                Stroll through our beautiful common areas, dining room, wellness center,
                and private residences — all from the comfort of your sofa. Our virtual
                tour makes it easy to picture your loved one thriving here before you
                even visit in person.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/schedule-visit"
                  className="inline-flex items-center gap-2 bg-accent text-background font-semibold px-8 py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Schedule an In-Person Visit
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              <ul className="mt-8 space-y-3" aria-label="Community highlights">
                {[
                  "Beautiful private and companion suites",
                  "Chef-crafted restaurant-style dining room",
                  "Full-service wellness center & pool",
                  "Landscaped walking gardens & courtyards",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-text/70 font-body">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tour Preview */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-text/5 shadow-2xl shadow-text/10 bg-gradient-to-br from-primary/10 via-surface to-accent/10 group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-20 w-20 rounded-full bg-accent flex items-center justify-center text-background shadow-2xl shadow-accent/30 group-hover:scale-110 transition-transform duration-300 mx-auto mb-3">
                      <Play className="h-8 w-8 fill-background ml-1" aria-hidden="true" />
                    </div>
                    <p className="text-text/50 text-sm font-body tracking-wide">
                      Virtual Community Tour
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-primary/20 to-transparent" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldenDivider />

      <CareTypesGrid />

      {/* Lifestyle Section */}
      <section
        className="bg-surface py-24 lg:py-32 relative overflow-hidden"
        aria-labelledby="lifestyle-heading"
      >
        <GrovePattern opacity={0.03} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 max-w-[40px] bg-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
                  Life Here
                </span>
              </div>
              <h2
                id="lifestyle-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight leading-tight mb-6"
              >
                More Than a Home &mdash;<br />A Vibrant Lifestyle
              </h2>
              <p className="text-text/70 leading-relaxed font-body mb-10 max-w-lg">
                From farm-to-table dining to art studios and nature walkways, every day
                offers new ways to engage, grow, and connect with neighbors and friends.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Utensils,
                    title: "Chef-Crafted Dining",
                    desc: "Seasonal menus by our executive chef with full dietary accommodations.",
                  },
                  {
                    icon: Activity,
                    title: "Wellness & Fitness",
                    desc: "Fitness center, yoga, aquatics therapy, and personalized programs.",
                  },
                  {
                    icon: Palette,
                    title: "Arts & Culture",
                    desc: "Art studios, music programs, lectures, book clubs, and cultural outings.",
                  },
                  {
                    icon: TreePine,
                    title: "Nature & Gardens",
                    desc: "Beautifully landscaped walking paths, gardens, and outdoor living spaces.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-background transition-colors duration-200">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-text">{item.title}</h3>
                      <p className="text-sm text-text/65 font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="/amenities"
                  className="inline-flex items-center gap-2 border-2 border-text/10 text-text font-semibold px-8 py-4 rounded-xl hover:bg-background hover:border-text/20 transition-all focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Explore All Amenities
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            {/* Right image card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 via-surface to-accent/10 border border-text/5 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                      <TreePine className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-text/30 font-body">Community lifestyle photo</p>
                  </div>
                </div>
                <div
                  className="absolute -bottom-6 -left-6 bg-accent text-primary rounded-2xl p-5 shadow-lg shadow-accent/20 max-w-[200px]"
                  aria-hidden="true"
                >
                  <p
                    className="font-heading text-3xl font-bold"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    200+
                  </p>
                  <p className="text-sm text-primary/70 font-medium">Activities each month</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsSection
        heading="Stories From Johnson County Families"
        testimonials={homeTestimonials}
      />

      <CTABanner
        heading="Ready to Discover Your New Home?"
        subheading="Schedule a personal tour and experience the warmth, care, and vibrant lifestyle that sets Senior Living of Johnson County apart."
        ctaText="Schedule Your Visit"
        ctaHref="/schedule-visit"
        phone="(913) 555-0198"
      />
    </main>
  );
}
