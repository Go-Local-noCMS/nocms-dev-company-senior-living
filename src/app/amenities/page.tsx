import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GoldenDivider } from "@/components/GoldenDivider";
import { CTABanner } from "@/components/CTABanner";
import { GrovePattern } from "@/components/GrovePattern";
import * as motion from "motion/react-client";
import {
  Utensils, Activity, Music, Bus, Flower,
  Users, Clock, Star, ArrowRight, Dumbbell,
  HeartPulse, Palette, Coffee, Sun, MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Life & Amenities | Senior Living of Johnson County",
  description:
    "Discover the rich lifestyle at Senior Living of Johnson County — chef-crafted dining, wellness programs, daily activities, social events, and transportation services.",
};

const diningHighlights = [
  { label: "Restaurant-Style Dining Room", desc: "Enjoy breakfast, lunch, and dinner in our beautifully appointed dining room with white tablecloth service." },
  { label: "Executive Chef", desc: "Our executive chef creates seasonal menus using locally sourced ingredients whenever possible." },
  { label: "Private Dining Room", desc: "Reserve our private dining room for family birthdays, anniversaries, and special celebrations." },
  { label: "All Dietary Needs", desc: "Low-sodium, diabetic-friendly, kosher-style, and texture-modified options available for every resident." },
  { label: "Bistro Café", desc: "Our all-day bistro is always open for light bites, fresh-brewed coffee, smoothies, and casual socializing." },
  { label: "Outdoor Patio Dining", desc: "Dine al fresco in our landscaped courtyard patio when Johnson County weather permits." },
];

const wellnessFeatures = [
  { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art cardio and strength training equipment suited for all fitness levels." },
  { icon: HeartPulse, title: "Aquatics Therapy Pool", desc: "Heated indoor pool for water aerobics, swimming, and low-impact aquatic therapy." },
  { icon: Activity, title: "Yoga & Balance Classes", desc: "Daily yoga, tai chi, and balance classes designed specifically for senior wellness." },
  { icon: HeartPulse, title: "On-Site Wellness Clinic", desc: "Regular health screenings, medication management consultations, and preventive care visits." },
  { icon: Star, title: "Massage & Spa Services", desc: "Licensed massage therapists available by appointment in our on-site spa suite." },
  { icon: Flower, title: "Therapy Garden", desc: "Horticultural therapy garden where residents tend raised beds and enjoy nature's seasonal changes." },
];

const activities = [
  { time: "8:00 AM", activity: "Morning Stretch & Yoga", category: "Wellness" },
  { time: "9:30 AM", activity: "Watercolor & Painting Studio", category: "Arts" },
  { time: "10:00 AM", activity: "Morning Walking Group", category: "Fitness" },
  { time: "10:30 AM", activity: "Book Club Meeting", category: "Social" },
  { time: "1:30 PM", activity: "Bingo & Card Games Lounge", category: "Games" },
  { time: "2:00 PM", activity: "Live Music Performance", category: "Entertainment" },
  { time: "3:00 PM", activity: "Aquatics Class", category: "Fitness" },
  { time: "4:00 PM", activity: "Trivia & Brain Games", category: "Cognitive" },
  { time: "6:30 PM", activity: "Movie Night in the Theater", category: "Entertainment" },
  { time: "7:00 PM", activity: "Evening Stroll & Stargazing", category: "Outdoors" },
];

const socialEvents = [
  { icon: Music, title: "Live Entertainment Nights", desc: "Weekly performances by local musicians, pianists, and performers right in our community center." },
  { icon: Users, title: "Community Socials", desc: "Monthly themed dinner parties, holiday celebrations, and seasonal festivals that bring everyone together." },
  { icon: Bus, title: "Excursions & Outings", desc: "Scheduled outings to Johnson County attractions, the Nelson-Atkins Museum, Kauffman Center, and more." },
  { icon: Palette, title: "Arts & Crafts Showcases", desc: "Quarterly art showcases where residents display their paintings, sculptures, and creative work." },
  { icon: Coffee, title: "Intergenerational Programs", desc: "Regular visit programs with local schools and youth groups for mentoring and meaningful connections." },
  { icon: Sun, title: "Seasonal Celebrations", desc: "Holiday banquets, summer cookouts, fall harvest festivals, and community garden events throughout the year." },
];

const transportServices = [
  { icon: MapPin, title: "Medical Transportation", desc: "Scheduled rides to doctors, specialists, labs, and therapy appointments throughout Johnson County." },
  { icon: Bus, title: "Shopping Trips", desc: "Weekly group trips to local grocers, pharmacies, and shopping centers in Overland Park and Lenexa." },
  { icon: Star, title: "Cultural Outings", desc: "Monthly outings to local theaters, museums, parks, and cultural events in the greater Kansas City area." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Our courtesy vehicle and driver service accommodates individual appointment needs throughout the week." },
];

const galleryItems = [
  { label: "Dining Room", bg: "from-accent/20 to-primary/10" },
  { label: "Wellness Center", bg: "from-primary/15 to-secondary/20" },
  { label: "Art Studio", bg: "from-accent/10 to-accent/25" },
  { label: "Garden Courtyard", bg: "from-secondary/15 to-primary/10" },
  { label: "Private Suite", bg: "from-surface to-accent/15" },
  { label: "Community Lounge", bg: "from-primary/10 to-secondary/15" },
];

export default function AmenitiesPage() {
  return (
    <main id="main-content">
      <Hero
        headline={"Life at Its Finest —\nEvery Single Day"}
        subheadline="At Senior Living of Johnson County, every amenity, program, and activity is designed to help you live with purpose, joy, and connection."
        badge="200+ activities and programs every month"
        showSearch={false}
        ctaText="Schedule a Tour"
        ctaHref="/schedule-visit"
        secondaryCtaText="View Care Options"
        secondaryCtaHref="/care-options"
        compact={true}
      />

      {/* Dining Section */}
      <section
        className="bg-background py-24 lg:py-32"
        aria-labelledby="dining-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 max-w-[40px] bg-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                  The Dining Experience
                </span>
              </div>
              <h2
                id="dining-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-6"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Dining That Feels Like a Fine Restaurant
              </h2>
              <p className="text-text/70 leading-relaxed font-body mb-10">
                Mealtimes are a highlight of every day here. Our executive chef and culinary
                team craft fresh, seasonal menus that honor both nutrition and the pure
                pleasure of great food shared with great company.
              </p>
              <ul className="space-y-4" aria-label="Dining program highlights">
                {diningHighlights.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="h-7 w-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Utensils className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-text font-body">{item.label}:</span>{" "}
                      <span className="text-sm text-text/65 font-body">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-accent/15 via-surface to-primary/10 border border-text/5 shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mx-auto mb-3">
                    <Utensils className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-text/30 font-body">Executive dining room photo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* Wellness Center */}
      <section
        className="bg-primary py-24 lg:py-32 relative overflow-hidden"
        aria-labelledby="wellness-heading"
      >
        <GrovePattern opacity={0.05} className="text-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 text-sm font-medium text-accent mb-6">
              Wellness &amp; Fitness
            </span>
            <h2
              id="wellness-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-background tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              A Whole-Person Approach to Wellness
            </h2>
            <p className="text-lg text-background/75 max-w-2xl mx-auto font-body">
              Our wellness program is built on the belief that health is physical, mental,
              social, and spiritual — and every resident deserves support in all four.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/10 hover:bg-background/15 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-background mb-2">{item.title}</h3>
                <p className="text-sm text-background/70 font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section
        className="bg-surface py-24 lg:py-32"
        aria-labelledby="activities-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium text-accent mb-6">
              Daily Programming
            </span>
            <h2
              id="activities-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              A Day Full of Possibilities
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-body">
              Every day features a rich mix of wellness, arts, social, and leisure activities.
              Pick what sparks your interest — there&rsquo;s always something wonderful to join.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {activities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 bg-background rounded-xl p-4 border border-text/5 hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-center shrink-0 w-16">
                  <p className="text-xs font-semibold text-accent font-body">{item.time}</p>
                </div>
                <div className="h-px w-px bg-text/10 self-stretch" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text font-body leading-tight">{item.activity}</p>
                  <span className="inline-flex items-center bg-primary/8 text-primary text-xs font-medium px-2 py-0.5 rounded-full mt-1 font-body">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-text/50 font-body mt-8">
            Sample daily schedule — programming varies and is updated monthly.
          </p>
        </div>
      </section>

      <GoldenDivider />

      {/* Social Events */}
      <section
        className="bg-background py-24 lg:py-32"
        aria-labelledby="social-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium text-accent mb-6">
              Community &amp; Events
            </span>
            <h2
              id="social-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Connection Makes It Home
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-body">
              From live entertainment to family celebrations and community outings, our
              events calendar is designed to spark joy and build lasting friendships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialEvents.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-background rounded-2xl p-8 border border-text/5 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text/65 font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section
        className="bg-surface py-24 lg:py-28"
        aria-labelledby="transport-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 max-w-[40px] bg-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                  Transportation Services
                </span>
              </div>
              <h2
                id="transport-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-6"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Get Where You Need to Go — Comfortably
              </h2>
              <p className="text-text/70 leading-relaxed font-body mb-6">
                Staying independent means staying connected to the community you love.
                Our transportation services ensure residents can get to appointments,
                errands, and outings throughout Johnson County — safely and on schedule.
              </p>
              <a
                href="/schedule-visit"
                className="inline-flex items-center gap-2 bg-accent text-background font-semibold px-8 py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {transportServices.map((item) => (
                  <div
                    key={item.title}
                    className="bg-background rounded-2xl p-5 border border-text/5 shadow-sm hover:shadow-md hover:shadow-accent/5 transition-all duration-200"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-3">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-text mb-1">{item.title}</h3>
                    <p className="text-xs text-text/60 font-body leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section
        className="bg-background py-24 lg:py-32"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium text-accent mb-6">
              Photo Gallery
            </span>
            <h2
              id="gallery-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              See Our Community in Every Detail
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-body">
              Every space in our community is thoughtfully designed for comfort, beauty,
              and the warmth that makes a house feel like home.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`relative rounded-2xl overflow-hidden border border-text/5 shadow-sm hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 ${
                  i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bg} flex items-end p-4`}
                >
                  <span className="text-sm font-semibold text-text/50 font-body bg-background/60 backdrop-blur-sm rounded-lg px-3 py-1">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Experience It for Yourself"
        subheading="No brochure can capture the warmth of our community. Come for a personal tour and see — and feel — the difference for yourself."
        ctaText="Schedule My Tour"
        ctaHref="/schedule-visit"
        phone="(913) 555-0198"
      />
    </main>
  );
}
