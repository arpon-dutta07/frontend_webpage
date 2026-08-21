"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      <Navbar />
      <MobileMenu />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-line pb-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="accent">COMMUNICATIONS</Badge>
              <span className="font-mono text-xs text-muted">DIRECT INQUIRY & CONSULTATION</span>
            </div>
            <h1 className="font-display font-black text-fluid-h1 uppercase tracking-tighter text-ink">
              GET IN TOUCH.
            </h1>
            <p className="font-body text-fluid-body text-muted max-w-2xl mt-4">
              Initiate project feasibility consultations, structural assessments, or commercial inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-surface-light-card border border-line space-y-6">
                <div>
                  <span className="font-mono text-xs text-accent uppercase block mb-1">HEADQUARTERS</span>
                  <p className="font-display font-bold text-lg text-ink">
                    GraviPoint Engineering Systems
                  </p>
                  <p className="font-body text-sm text-muted">
                    Industrial Boulevard 44<br />
                    8005 Zürich, Switzerland
                  </p>
                </div>

                <div className="border-t border-line pt-4">
                  <span className="font-mono text-xs text-accent uppercase block mb-1">DIRECT CONTACT</span>
                  <p className="font-mono text-sm text-ink font-bold">inquiries@gravipoint.com</p>
                  <p className="font-mono text-sm text-muted">+41 44 890 2200</p>
                </div>

                <div className="border-t border-line pt-4">
                  <span className="font-mono text-xs text-accent uppercase block mb-1">OPERATING HOURS</span>
                  <p className="font-mono text-xs text-muted">08:00 – 18:00 CET // MON – FRI</p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 p-8 bg-white border border-line">
              <h2 className="font-display font-bold text-xl uppercase mb-6">
                REQUEST A CONSULTATION
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-4 py-3 bg-paper border border-line text-ink font-body text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="alexander@company.com"
                      className="w-full px-4 py-3 bg-paper border border-line text-ink font-body text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 bg-paper border border-line text-ink font-body text-sm focus:outline-none focus:border-accent">
                    <option>Industrial Facility & Logistics</option>
                    <option>Commercial Tower & Diagrid</option>
                    <option>Subterranean Infrastructure</option>
                    <option>Structural Assessment / Feasibility</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Project Overview / Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe project scope, timeline, and key requirements..."
                    className="w-full px-4 py-3 bg-paper border border-line text-ink font-body text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <Button variant="primary" size="lg" chamfer type="submit">
                    TRANSMIT INQUIRY
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
