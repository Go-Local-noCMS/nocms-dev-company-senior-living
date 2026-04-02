import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GoldenDivider } from "@/components/GoldenDivider";
import { CTABanner } from "@/components/CTABanner";
import * as motion from "motion/react-client";
import {
  CheckCircle, Home, HeartHandshake, Brain,
  ArrowRight, DollarSign, Shield, Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Care & Living Options | Senior Living of Johnson County",
  description:
    "Explore independent living, assisted living, and memory care at Senior Living of Johnson County. Personalized support at every stage of life.",
};

const careTypes = [
  {
    id: "independent",
    icon: Home,
    label: "Independent Living",
    headline: "Freedom. Community. Purpose.",
    description:
      "Our independent living community is designed for active seniors who want a maintenance-free lifestyle surrounded by friends, activities, and all the comforts of home. Live independently — but never alone.",
    services: [
      "Spacious studio, one-bedroom, and two-bedroom apartment homes",
      "Three chef-crafted meals daily in our restaurant-style dining room",
      "Weekly housekeeping and linen service included",
      "Scheduled transportation to medical appointments and shopping",
      "Full access to fitness center, pool, and wellness programs",
      "Rich calendar of 200+ social, cultural, and recreational activities monthly",
      "24-hour emergency call response system in every suite",
      "Covered parking and secured building access",
    ],
    forWhom:
      "Active seniors aged 55+ who are largely self-sufficient but want community life, convenience, and built-in peace of mind.",
    pricing: "Starting at $2,800/month",
    ctaHref: "/independent-living",
    reverse: false,
  },
  {
    id: "assisted",
    icon: HeartHandshake,
    label: "Assisted Living",
    headline: "Support When You Need It. Independence When You Want It.",
    description:
      "Our assisted living program provides personalized care tailored to each resident's unique needs — helping with daily activities while preserving dignity, choice, and as much independence as possible.",
    services: [
      "Individualized care plan developed with resident and family",
      "Assistance with bathing, dressing, medication management, and grooming",
      "Three meals plus snacks daily with special dietary accommodations",
      "24-hour licensed nursing supervision and on-call physician coverage",
      "Weekly housekeeping, linen service, and personal laundry",
      "Cognitive and wellness programs designed for engagement and mobility",
      "Scheduled transportation to medical appointments",
      "Secure family portal for real-time updates and communication",
    ],
    forWhom:
      "Seniors who need help with some daily activities but don't require around-the-clock skilled nursing care.",
    pricing: "Starting at $4,200/month",
    ctaHref: "/assisted-living",
    reverse: true,
  },
  {
    id: "memory",
    icon: Brain,
    label: "Memory Care",
    headline: "Safety. Dignity. Specialized Connection.",
    description:
      "Our secure memory care neighborhood is thoughtfully designed for individuals living with Alzheimer's, dementia, and other memory-related conditions. Our certified specialists provide compassionate, evidence-based care around the clock.",
    services: [
      "Secure, purpose-built neighborhood designed for safety and comfort",
      "All staff certified and trained in dementia care best practices",
      "Consistent structured daily routines that reduce anxiety and promote calm",
      "Sensory, reminiscence, and life skills therapy programs",
      "Regular family support groups and care conferences",
      "All meals, snacks, and hydration programming included",
      "Music, art, and pet therapy woven into daily life",
      "24/7 nursing oversight and rapid emergency response",
    ],
    forWhom:
      "Individuals diagnosed with Alzheimer's disease, vascular dementia, Parkinson's-related cognitive decline, or other memory conditions.",
    pricing: "Starting at $5,500/month",
    ctaHref: "/memory-care",
    reverse: false,
  },
];

const paymentOptions = [
  {
    icon: Shield,
    title: "Long-Term Care Insurance",
    desc: "We accept most long-term care insurance policies and will help you navigate your benefits and claims from day one.",
  },
  {
    icon: DollarSign,
    title: "Private Pay",
    desc: "Month-to-month private pay with transparent, all-inclusive pricing. No surprise fees — ever.",
  },
  {
    icon: HeartHandshake,
    title: "Veterans Benefits",
    desc: "Aid and Attendance benefits available for qualifying veterans and surviving spouses. Our team guides you through the process.",
  },
  {
    icon: Phone,
    title: "Financial Counseling",
    desc: "Our admissions advisors provide complimentary guidance on Medicaid planning, trust arrangements, and available financial pathways.",
  },
];

export default function CareOptionsPage() {
  return (
    <main id="main-content">
      <Hero
        headline={"Personalized Care for\nEvery Journey"}
        subheadline="Whether you are looking for a vibrant independent lifestyle or specialized memory care, we have the right level of support — right here in Johnson County."
        badge="Three levels of care, one close-knit community"
        showSearch={false}
        ctaText="Schedule a Consultation"
        ctaHref="/schedule-visit"
        secondaryCtaText="Explore Payment Options"
        secondaryCtaHref="#payment-options"
        compact={true}
      />

      {careTypes.map((care, index) => (
        <section
          key={care.id}
          id={care.id}
          className={index % 2 === 0 ? "bg-background py-24 lg:py-32" : "bg-surface py-24 lg:py-32"}
          aria-labelledby={`${care.id}-heading`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                care.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <care.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                    {care.label}
                  </span>
                </div>
                <h2
                  id={`${care.id}-heading`}
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight mb-4"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  {care.headline}
                </h2>
                <p className="text-text/70 leading-relaxed font-body mb-8 max-w-xl">
                  {care.description}
                </p>

                <div className="bg-accent/8 border border-accent/15 rounded-2xl p-5 mb-8">
                  <p className="text-sm font-semibold text-text mb-1">Perfect For</p>
                  <p className="text-sm text-text/70 font-body leading-relaxed">{care.forWhom}</p>
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                    <DollarSign className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-text/50 font-body">Monthly pricing</p>
                    <p className="font-heading text-xl font-bold text-text">{care.pricing}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/schedule-visit"
                    className="inline-flex items-center gap-2 bg-accent text-background font-semibold px-8 py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Schedule a Tour
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href={care.ctaHref}
                    className="inline-flex items-center gap-2 border border-text/15 text-text font-medium px-6 py-4 rounded-xl hover:bg-surface hover:border-text/25 transition-all focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>

              {/* Services list card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="bg-background rounded-2xl p-8 border border-text/5 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-text mb-6">
                    Everything That&rsquo;s Included
                  </h3>
                  <ul className="space-y-3" aria-label={`${care.label} included services`}>
                    {care.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <CheckCircle
                          className="h-5 w-5 text-accent shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-text/75 font-body leading-relaxed">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <GoldenDivider />

      {/* Payment Options */}
      <section
        id="payment-options"
        className="bg-surface py-24 lg:py-28"
        aria-labelledby="payment-heading"
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
              Financial Planning
            </span>
            <h2
              id="payment-heading"
              className="font-heading text-4xl sm:text-5xl font-bold text-text tracking-tight mb-4"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Flexible Payment Options
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto font-body">
              We work with every family to find the right financial path, with guidance
              and support every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentOptions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-text/5 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
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

      <CTABanner
        heading="Not Sure Which Care Level is Right?"
        subheading="Our care advisors are here to listen and help you find the perfect fit — no pressure, just honest guidance from people who genuinely care."
        ctaText="Schedule a Free Consultation"
        ctaHref="/schedule-visit"
        phone="(913) 555-0198"
      />
    </main>
  );
}
