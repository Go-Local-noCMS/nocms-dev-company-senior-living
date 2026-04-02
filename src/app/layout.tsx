import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior Living of Johnson County",
  description:
    "Johnson County's premier senior living community — independent living, assisted living, and memory care in Overland Park, KS.",
};

const navLinks = [
  {
    label: "Care Options",
    href: "/care-options",
    children: [
      { label: "Independent Living", href: "/independent-living" },
      { label: "Assisted Living", href: "/assisted-living" },
      { label: "Memory Care", href: "/memory-care" },
      { label: "Compare All Care Levels", href: "/care-options" },
    ],
  },
  { label: "Life & Amenities", href: "/amenities" },
  { label: "About Our Community", href: "/about-community" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const footerColumns = [
  {
    title: "Care & Living",
    links: [
      { label: "Independent Living", href: "/independent-living" },
      { label: "Assisted Living", href: "/assisted-living" },
      { label: "Memory Care", href: "/memory-care" },
      { label: "Compare Care Options", href: "/care-options" },
    ],
  },
  {
    title: "Our Community",
    links: [
      { label: "Life & Amenities", href: "/amenities" },
      { label: "About Our Community", href: "/about-community" },
      { label: "Blog & Resources", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "For Families",
    links: [
      { label: "Schedule a Visit", href: "/schedule-visit" },
      { label: "Admissions Process", href: "/schedule-visit#process" },
      { label: "Payment Options", href: "/care-options#payment-options" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar
          logo="Senior Living JCO"
          links={navLinks}
          phone="(913) 555-0198"
          ctaText="Schedule a Visit"
          ctaHref="/schedule-visit"
        />
        {children}
        <Footer
          companyName="Senior Living of Johnson County"
          tagline="Where every chapter of life is celebrated"
          phone="(913) 555-0198"
          email="hello@seniorlivingjco.com"
          address="8901 Metcalf Avenue, Overland Park, KS 66212"
          columns={footerColumns}
        />
      </body>
    </html>
  );
}
