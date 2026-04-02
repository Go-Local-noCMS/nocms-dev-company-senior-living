import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GoldenDivider } from "@/components/GoldenDivider";
import { CTABanner } from "@/components/CTABanner";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GrovePattern } from "@/components/GrovePattern";
import * as motion from "motion/react-client";
import {
  Heart, Star, Shield, Users, Award, BookOpen,
  CheckCircle, ArrowRight, Lightbulb, Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Community | Senior Living of Johnson County",
  description:
    "Learn about Senior Living of Johnson County — our mission, values, 25+ years of history, dedicated staff, and commitment to outstanding senior care.",
};

const values = [
  {
    icon: Heart,
    title: "Warmth & Compassion",
    desc: "We treat every resident like a cherished member of our family. Genuine warmth is built into everything we do — from daily care to how we greet you in the hallway.",
  },
  {
    icon: Shield,
    title: "Dignity & Respect",
    desc: "Every person who calls this community home deserves to be honored as the full, complete individual they are. We never reduce a resident to their diagnosis or their care needs.",
  },
  {
    icon: Lightbulb,
    title: "Purpose & Vitality",
    desc: "We believe meaningful engagement, new experiences, and lasting friendships are not luxuries — they are essentials of a life well-lived at any age.",
  },
  {
    icon: Handshake,
    title: "Family Partnership",
    desc: "Families are our partners, not bystanders. We communicate openly, welcome your involvement, and make sure you always feel informed, included, and at ease.",
  },
];

const timelineEvents = [
  { year: "1999", title: "Founded in Overland Park", desc: "Senior Living of Johnson County opened its doors with 48 residents and a vision to create a community that genuinely felt like home." },
  { year: "2005", title: "Assisted Living Wing Opens", desc: "We expanded our campus with a dedicated assisted living neighborhood, bringing personalized support to residents who needed more day-to-day help." },
  { year: "2011", title: "Memory Care Neighborhood", desc: "Our purpose-built, secure memory care neighborhood was created with guidance from dementia specialists to deliver evidence-based care with compassion." },
  { year: "2016", title: "Wellness Center Expansion", desc: "A $3.2M expansion brought our full-service fitness center, aquatics therapy pool, and spa suite to campus — raising the wellness bar for everyone." },
  { year: "2020", title: "Family Connection Portal", desc: "We launched our digital family portal, giving loved ones real-time updates, care notes, and direct access to our care team — expanding trust during challenging times." },
  { year: "2024", title: "25 Years of Excellence", desc: "We celebrated 25 years of serving Johnson County families — with 200+ residents, a team of 120+ dedicated professionals, and counting." },
];

const leadershipTeam = [
  {
    name: "Patricia Holloway, NHA",
    role: "Executive Director",
    bio: "With 20 years in senior living administration, Patricia brings a people-first philosophy and deep roots in Johnson County to every decision she makes.",
    initial: "P",
  },
  {
    name: "Dr. James Osei, MD",
    role: "Medical Director",
    bio: "Board-certified in geriatric medicine, Dr. Osei oversees clinical outcomes and collaborates closely with residents, families, and our nursing team.",
    initial: "J",
  },
  {
    name: "Sandra Kowalski, RN, MSN",
    role: "Director of Care Services",
    bio: "Sandra leads our licensed nursing team with a focus on person-centered care planning, staff development, and clinical excellence across all three care levels.",
    initial: "S",
  },
  {
    name: "Marcus Webb",
    role: "Director of Life Enrichment",
    bio: "Marcus designs the vibrant 200+ activity calendar each month, channeling his background in therapeutic recreation into programs that spark joy and purpose.",
    initial: "M",
  },
];

const awards = [
  { icon: Award, title: "Best Senior Living, Johnson County", year: "2023", org: "Johnson County Business Journal" },
  { icon: Star, title: "5-Star CMS Quality Rating", year: "2024", org: "Centers for Medicare & Medicaid Services" },
  { icon: Shield, title: "CARF Accreditation", year: "Ongoing", org: "Commission on Accreditation of Rehabilitation Facilities" },
  { icon: Heart, title: "Alzheimer's Association Recognized Program", year: "2022–2024", org: "Alzheimer's Association, Heart of America Chapter" },
  { icon: Users, title: "Top Workplace Award", year: "2023", org: "Kansas City Star" },
  { icon: BookOpen, title: "Outstanding Dining Program", year: "2024", org: "LeadingAge Kansas" },
];

const communityTestimonials = [
  {
    quote: "The staff here have become like second family to us. They know my father by name, remember his stories, and genuinely care about his happiness — not just his health. That means everything.",
    author: "Linda Stephens",
    relationship: "Daughter of Resident",
    community: "Memory Care Family — Leawood, KS",
    rating: 5,
  },
  {
    quote: "I toured six communities before choosing this one. The difference was obvious the moment I walked in — the warmth was real, not rehearsed. Two years later, I've never looked back.",
    author: "George Patterson",
    relationship: "Independent Living Resident",
    community: "Resident since 2022",
    rating: 5,
  },
  {
    quote: "What sets Senior Living of Johnson County apart is that the leadership actually listens. When I had concerns about Mom's care, the director called me personally within the hour. That's rare.",
    author: "Carolyn Murray",
    relationship: "Daughter of Resident",
    community: "Assisted Living Family",
    rating: 5,
  },
];

export default function AboutCommunityPage() {
  return (
    <main id="main-content">
      <Hero
        headline={"Our Story. Our Mission.\nOur Family."}
        subheadline="For 25 years, Senior Living of Johnson County has been a place where residents thrive, families find peace of mind, and every team member shows up with purpose."
        badge="Founded 1999 — Overland Park, Kansas"
        showSearch={false}
        ctaText="Meet Our Team"
        ctaHref="#leadership"
        secondaryCtaText="Schedule a Visit"
        secondaryCtaHref="/schedule-visit"
        compact={true}
      />

      {/* Mission Section */}
      <section
        className="bg-background py-24 lg:py-32"
        aria-labelledby="mission-heading"
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
                  Our Mission
                </span>
              </div>
              <h2
                id="mission-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-6"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                To Honor Every Chapter of Life
              </h2>
              <p className="text-text/70 leading-relaxed font-body mb-6 text-lg">
                Our mission is to create an environment where every resident feels deeply
                valued, purposefully engaged, and joyfully at home — from their first day
                to every day after.
              </p>
              <p className="text-text/70 leading-relaxed font-body">
                We believe the later chapters of life deserve the same richness, beauty,
                and possibility as any other season. That belief drives every hire we make,
                every meal we prepare, and every activity we create.
              </p>
              <div className="mt-8">
                <a
                  href="/schedule-visit"
                  className="inline-flex items-center gap-2 bg-accent text-background font-semibold px-8 py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Experience Our Community
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((val) => (
                  <div
                    key={val.title}
                    className="bg-surface rounded-2xl p-6 border border-text/5 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <val.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-text mb-1.5">{val.title}</h3>
                    <p className="text-xs text-text/65 font-body leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* History Timeline */}
      <section
        className="bg-surface py-24 lg:py-32 relative overflow-hidden"
        aria-labelledby="history-heading"
      >
        <GrovePattern opacity={0.03} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium text-accent mb-6">
              Our History
            </span>
            <h2
              id="history-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              25 Years of Caring for Johnson County
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-body">
              From a founding vision to a thriving community of 200+ residents, here&rsquo;s
              the journey that shaped who we are today.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-accent/20 lg:left-1/2"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative pl-16 lg:pl-0 ${
                    i % 2 === 0
                      ? "lg:pr-[calc(50%+2rem)] lg:text-right"
                      : "lg:pl-[calc(50%+2rem)] lg:text-left"
                  }`}
                >
                  <div
                    className="absolute left-3 top-1 h-6 w-6 rounded-full bg-accent border-2 border-background shadow-sm lg:left-1/2 lg:-translate-x-1/2"
                    aria-hidden="true"
                  />
                  <div className="bg-background rounded-2xl p-6 border border-text/5 shadow-sm">
                    <span className="inline-flex items-center bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3 font-body">
                      {event.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-text mb-2">{event.title}</h3>
                    <p className="text-sm text-text/65 font-body leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        id="leadership"
        className="bg-background py-24 lg:py-32"
        aria-labelledby="leadership-heading"
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
              Our Leadership
            </span>
            <h2
              id="leadership-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              The People Behind the Care
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-body">
              Our leadership team brings decades of experience in senior care, clinical
              excellence, and community building — all united by a passion for this work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-6 border border-text/5 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-background">
                    {member.initial}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold text-text mb-0.5">{member.name}</h3>
                <p className="text-xs text-accent font-semibold font-body mb-3">{member.role}</p>
                <p className="text-xs text-text/60 font-body leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* Awards & Recognition */}
      <section
        className="bg-primary py-24 lg:py-32 relative overflow-hidden"
        aria-labelledby="awards-heading"
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
              Awards &amp; Recognition
            </span>
            <h2
              id="awards-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-background tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Recognized for Excellence
            </h2>
            <p className="text-lg text-background/75 max-w-2xl mx-auto font-body">
              Our commitment to quality care and vibrant community living has earned us
              recognition from the organizations that set and uphold the highest standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-background/10 backdrop-blur-sm rounded-2xl p-5 border border-background/10 hover:bg-background/15 transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <award.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading text-base font-bold text-background leading-tight mb-0.5">
                    {award.title}
                  </p>
                  <p className="text-xs text-accent font-medium font-body">{award.year}</p>
                  <p className="text-xs text-background/60 font-body mt-0.5">{award.org}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-background/70 text-sm font-body">
              <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
              Fully licensed by the State of Kansas — License #KS-SL-00219
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection
        heading="What Our Families Say"
        testimonials={communityTestimonials}
      />

      <CTABanner
        heading="Come Experience the Difference"
        subheading="The best way to understand what makes Senior Living of Johnson County special is to visit us in person. We'd love to show you around."
        ctaText="Schedule a Personal Tour"
        ctaHref="/schedule-visit"
        phone="(913) 555-0198"
      />
    </main>
  );
}
