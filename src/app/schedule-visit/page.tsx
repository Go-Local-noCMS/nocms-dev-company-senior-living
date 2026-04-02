import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GoldenDivider } from "@/components/GoldenDivider";
import { GrovePattern } from "@/components/GrovePattern";
import { VisitForm } from "@/components/VisitForm";
import * as motion from "motion/react-client";
import {
  Phone, Mail, MapPin, Clock, ArrowRight,
  CheckCircle, FileText, Users, CalendarCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule a Visit | Senior Living of Johnson County",
  description:
    "Schedule a personal tour of Senior Living of Johnson County. Meet our team, explore the community, and discover the warmth that sets us apart.",
};

const admissionsSteps = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Schedule Your Tour",
    desc: "Call us or complete the form below. Our admissions advisor will reach out within 24 hours to confirm your preferred date and time and answer any initial questions.",
  },
  {
    step: "02",
    icon: Users,
    title: "Personal Tour & Assessment",
    desc: "Visit our community with your family. We'll walk you through every amenity, introduce you to our care team, and conduct a complimentary care needs assessment — no obligation.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Custom Care Plan & Pricing",
    desc: "Within 48 hours, we'll provide a personalized care plan and transparent pricing proposal based on your loved one's specific needs, preferences, and level of support required.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Welcome Home",
    desc: "Once you're ready, our move-in coordinator handles every detail — from suite personalization to care team introductions — so your first day feels like coming home.",
  },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(913) 555-0198",
    href: "tel:9135550198",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@seniorlivingjco.com",
    href: "mailto:hello@seniorlivingjco.com",
  },
  {
    icon: MapPin,
    label: "Our Address",
    value: "8901 Metcalf Avenue\nOverland Park, KS 66212",
    href: "https://maps.google.com/?q=8901+Metcalf+Avenue+Overland+Park+KS+66212",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri: 8 AM – 6 PM\nSat–Sun: 10 AM – 4 PM",
    href: null,
  },
];

export default function ScheduleVisitPage() {
  return (
    <main id="main-content">
      <Hero
        headline={"Come See for Yourself —\nYou're Always Welcome"}
        subheadline="There is no substitute for experiencing our community in person. Schedule a personal tour today and let us show you what makes Senior Living of Johnson County special."
        badge="Tours available 7 days a week"
        showSearch={false}
        ctaText="Jump to the Form"
        ctaHref="#visit-form"
        secondaryCtaText="Call (913) 555-0198"
        secondaryCtaHref="tel:9135550198"
        compact={true}
      />

      {/* Form + Contact Section */}
      <section
        id="visit-form"
        className="bg-background py-24 lg:py-32"
        aria-labelledby="form-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Form — wider column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <VisitForm
                  title="Schedule Your Personal Visit"
                  subtitle="Fill out the form and our care advisor will call you within 24 hours to confirm your visit and answer any questions you have."
                />
              </motion.div>
            </div>

            {/* Contact sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2
                  id="form-heading"
                  className="font-heading text-2xl sm:text-3xl font-bold text-text mb-2"
                >
                  Reach Us Directly
                </h2>
                <p className="text-text/65 font-body text-sm leading-relaxed mb-8">
                  Prefer to talk with someone right away? Our care advisors are available
                  seven days a week and are always happy to answer questions, no matter
                  where you are in your decision.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 bg-surface rounded-2xl p-5 border border-text/5 hover:shadow-md hover:shadow-accent/5 transition-all duration-200"
                    >
                      <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-text/50 font-body font-medium mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold text-text hover:text-accent transition-colors font-body whitespace-pre-line leading-snug"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-text font-body whitespace-pre-line leading-snug">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Brochure Download CTA */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-accent/8 border border-accent/20 rounded-2xl p-6">
                  <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-3">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-1">
                    Download Our Brochure
                  </h3>
                  <p className="text-sm text-text/65 font-body mb-4 leading-relaxed">
                    Get our full community guide — care levels, amenities, pricing overview,
                    and resident profiles — delivered to your inbox.
                  </p>
                  <a
                    href="/schedule-visit"
                    className="inline-flex items-center gap-2 bg-accent text-background font-semibold px-6 py-3 rounded-xl text-sm shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Request the Brochure
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href="https://maps.google.com/?q=8901+Metcalf+Avenue+Overland+Park+KS+66212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden border border-text/5 shadow-sm hover:shadow-md transition-all duration-300 group"
                  aria-label="View our location on Google Maps"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-surface to-secondary/10 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mx-auto mb-2 group-hover:bg-accent group-hover:text-background transition-colors duration-200">
                        <MapPin className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-text font-body">
                        8901 Metcalf Avenue
                      </p>
                      <p className="text-xs text-text/50 font-body">Overland Park, KS 66212</p>
                      <p className="text-xs text-accent font-medium font-body mt-1">
                        View on Google Maps →
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <GoldenDivider />

      {/* Admissions Process */}
      <section
        className="bg-surface py-24 lg:py-32 relative overflow-hidden"
        aria-labelledby="process-heading"
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
              The Admissions Process
            </span>
            <h2
              id="process-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Simple, Supportive, and Stress-Free
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-body">
              We know that finding the right senior living community can feel overwhelming.
              Our admissions process is designed to give you guidance, clarity, and
              confidence at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionsSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {i < admissionsSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] h-px bg-accent/20"
                    aria-hidden="true"
                  />
                )}
                <div className="bg-background rounded-2xl p-6 border border-text/5 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span
                      className="font-heading text-3xl font-bold text-text/10"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-text/65 font-body leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-text/60 font-body text-sm mb-4">
              Have questions before scheduling? We&rsquo;re happy to chat first.
            </p>
            <a
              href="tel:9135550198"
              className="inline-flex items-center gap-2 border border-text/15 text-text font-semibold px-8 py-4 rounded-xl hover:bg-background hover:border-text/25 transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call (913) 555-0198
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA with trust line */}
      <section
        className="bg-primary py-20 relative overflow-hidden"
        aria-labelledby="final-cta-heading"
      >
        <GrovePattern opacity={0.05} className="text-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id="final-cta-heading"
              className="font-heading text-3xl sm:text-4xl font-bold text-background mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              No Pressure. Just a Conversation.
            </h2>
            <p className="text-background/75 font-body max-w-xl mx-auto mb-8">
              Our care advisors are here to listen and answer questions — whether you&rsquo;re
              ready to move forward or just beginning to explore your options. There&rsquo;s
              never any obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#visit-form"
                className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-10 py-4 rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Schedule a Tour
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="tel:9135550198"
                className="inline-flex items-center gap-2 border border-background/25 text-background/85 font-medium px-8 py-4 rounded-xl hover:bg-background/10 transition-all focus-visible:ring-2 focus-visible:ring-background/50"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                (913) 555-0198
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
