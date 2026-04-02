"use client";

import { useState } from "react";
import {
  CheckCircle, Calendar, User, Phone, Mail,
  MessageSquare, ChevronDown,
} from "lucide-react";

interface VisitFormProps {
  title?: string;
  subtitle?: string;
}

export function VisitForm({
  title = "Schedule Your Personal Visit",
  subtitle = "We'd love to show you around. Fill out the form below and our team will contact you within 24 hours to confirm your visit.",
}: VisitFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    careLevel: "",
    visitDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-background rounded-3xl p-10 border border-text/5 shadow-xl shadow-accent/5 text-center">
        <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-accent" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-text mb-2">
          Visit Request Received!
        </h3>
        <p className="text-text/70 font-body max-w-sm mx-auto leading-relaxed">
          Thank you, {form.firstName}! Our team will call you within 24 hours
          to confirm your visit date and answer any questions.
        </p>
        <p className="mt-4 text-sm text-accent font-medium font-body">
          We look forward to welcoming you.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-3xl p-8 lg:p-10 border border-text/5 shadow-xl shadow-accent/5">
      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-2">
        {title}
      </h3>
      <p className="text-text/65 font-body text-sm mb-8 leading-relaxed">
        {subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-text mb-1.5 font-body"
            >
              First Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text/40 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="firstName"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full bg-surface border border-text/10 rounded-xl pl-10 pr-4 py-3 text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition font-body text-sm"
                placeholder="Margaret"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-text mb-1.5 font-body"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
              className="w-full bg-surface border border-text/10 rounded-xl px-4 py-3 text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition font-body text-sm"
              placeholder="Williams"
            />
          </div>
        </div>

        {/* Contact row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text mb-1.5 font-body"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text/40 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-surface border border-text/10 rounded-xl pl-10 pr-4 py-3 text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition font-body text-sm"
                placeholder="margaret@gmail.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-text mb-1.5 font-body"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text/40 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-surface border border-text/10 rounded-xl pl-10 pr-4 py-3 text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition font-body text-sm"
                placeholder="(913) 555-0198"
              />
            </div>
          </div>
        </div>

        {/* Care Level */}
        <div>
          <label
            htmlFor="careLevel"
            className="block text-sm font-medium text-text mb-1.5 font-body"
          >
            Care Level Interest
          </label>
          <div className="relative">
            <select
              id="careLevel"
              name="careLevel"
              value={form.careLevel}
              onChange={handleChange}
              className="w-full appearance-none bg-surface border border-text/10 rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition font-body text-sm"
            >
              <option value="">Select a care level…</option>
              <option value="independent">Independent Living</option>
              <option value="assisted">Assisted Living</option>
              <option value="memory">Memory Care</option>
              <option value="unsure">Not sure yet — I'd like guidance</option>
            </select>
            <ChevronDown
              className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text/40 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Preferred Visit Date */}
        <div>
          <label
            htmlFor="visitDate"
            className="block text-sm font-medium text-text mb-1.5 font-body"
          >
            Preferred Visit Date
          </label>
          <div className="relative">
            <Calendar
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text/40 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="visitDate"
              name="visitDate"
              type="date"
              value={form.visitDate}
              onChange={handleChange}
              className="w-full bg-surface border border-text/10 rounded-xl pl-10 pr-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition font-body text-sm"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text mb-1.5 font-body"
          >
            Questions or Notes{" "}
            <span className="text-text/40 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <MessageSquare
              className="absolute left-3.5 top-3.5 h-4 w-4 text-text/40 pointer-events-none"
              aria-hidden="true"
            />
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-surface border border-text/10 rounded-xl pl-10 pr-4 py-3 text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30 transition font-body text-sm resize-none"
              placeholder="Any specific questions or special requests…"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-background font-semibold px-8 py-4 rounded-xl text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {loading ? "Sending your request…" : "Schedule My Visit →"}
        </button>

        <p className="text-center text-xs text-text/40 font-body">
          Your information is kept private and never sold.
        </p>
      </form>
    </div>
  );
}
