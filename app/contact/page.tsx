"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/lib/content";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid business email address."),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project category."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "Industrial Facility & Logistics",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form.");
      }

      setSubmitStatus("success");
      reset();
    } catch (err: unknown) {
      setSubmitStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      <Navbar />
      <MobileMenu />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-line pb-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="accent">COMMUNICATIONS // 06</Badge>
              <span className="font-mono text-xs text-muted">
                DIRECT INQUIRY & PROCUREMENT
              </span>
            </div>
            <h1 className="font-display font-black text-fluid-h1 uppercase tracking-tighter text-ink">
              GET IN TOUCH.
            </h1>
            <p className="font-body text-fluid-body text-muted max-w-2xl mt-4">
              Initiate structural feasibility assessments, commercial tower inquiries,
              or intermodal logistics procurement with our engineering directors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Direct Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-surface-light-card border border-line space-y-6 clip-chamfer-br">
                <div>
                  <span className="font-mono text-xs text-accent uppercase block mb-1">
                    PRIMARY HEADQUARTERS
                  </span>
                  <p className="font-display font-bold text-xl text-ink">
                    GraviPoint Engineering Systems
                  </p>
                  <p className="font-body text-sm text-muted mt-1">
                    Industrial Boulevard 44<br />
                    8005 Zürich, Switzerland
                  </p>
                </div>

                <div className="border-t border-line pt-4">
                  <span className="font-mono text-xs text-accent uppercase block mb-1">
                    REGIONAL HUBS
                  </span>
                  <p className="font-body text-sm text-ink font-bold">
                    Toronto, CA • London, UK • Oslo, NO
                  </p>
                </div>

                <div className="border-t border-line pt-4 space-y-2">
                  <span className="font-mono text-xs text-accent uppercase block">
                    TELECOMMUNICATIONS
                  </span>
                  <p className="font-mono text-sm text-ink font-bold">
                    inquiries@gravipoint.com
                  </p>
                  <p className="font-mono text-sm text-muted">+41 44 890 2200</p>
                </div>

                <div className="border-t border-line pt-4">
                  <span className="font-mono text-xs text-accent uppercase block mb-1">
                    OPERATIONAL PROTOCOL
                  </span>
                  <p className="font-mono text-xs text-muted">
                    Response latency: &lt; 24h // ISO 9001 Compliant
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 p-8 bg-surface-light-card border border-line shadow-sm relative clip-chamfer-br">
              <h2 className="font-display font-bold text-2xl uppercase mb-6 text-ink">
                REQUEST A CONSULTATION
              </h2>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-6 bg-ink text-paper border-l-4 border-accent clip-chamfer-br space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent inline-block" />
                      <span className="font-mono text-xs text-accent font-bold uppercase">
                        TRANSMISSION CONFIRMED
                      </span>
                    </div>
                    <p className="font-display font-bold text-lg text-white">
                      Thank you for your inquiry.
                    </p>
                    <p className="font-body text-sm text-muted-on-dark">
                      Our structural team has received your submission and will review the requirements within 24 hours.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setSubmitStatus("idle")}
                        className="font-mono text-xs text-accent hover:underline uppercase"
                      >
                        Submit another inquiry →
                      </button>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-4 bg-red-50 border-l-4 border-red-600 text-red-900 font-mono text-xs"
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="e.g. Alexander Vance"
                      className={`w-full px-4 py-3 bg-paper border ${
                        errors.name ? "border-accent" : "border-line"
                      } text-ink font-body text-sm focus:outline-none focus:border-accent transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-mono text-[11px] text-accent">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="alexander@company.com"
                      className={`w-full px-4 py-3 bg-paper border ${
                        errors.email ? "border-accent" : "border-line"
                      } text-ink font-body text-sm focus:outline-none focus:border-accent transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-mono text-[11px] text-accent">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2 font-bold">
                      Company / Organization
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      placeholder="e.g. Precision Dynamics"
                      className="w-full px-4 py-3 bg-paper border border-line text-ink font-body text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2 font-bold">
                      Project Category *
                    </label>
                    <select
                      {...register("projectType")}
                      className="w-full px-4 py-3 bg-paper border border-line text-ink font-body text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      <option>Industrial Facility & Logistics</option>
                      <option>Commercial Tower & Diagrid</option>
                      <option>Subterranean Infrastructure</option>
                      <option>Structural Assessment & Feasibility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2 font-bold">
                    Project Overview / Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Provide overview of site location, structural parameters, and target timeline..."
                    className={`w-full px-4 py-3 bg-paper border ${
                      errors.message ? "border-accent" : "border-line"
                    } text-ink font-body text-sm focus:outline-none focus:border-accent transition-colors`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-[11px] text-accent">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    chamfer
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[220px]"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "TRANSMIT INQUIRY"}
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
