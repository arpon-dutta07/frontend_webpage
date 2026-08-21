"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-paper text-ink border-t border-line relative z-20 overflow-hidden">
      {/* Upper Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monogram, Statement & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              {/* Brand Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent text-white flex items-center justify-center font-display font-black text-2xl clip-chamfer-br">
                  G
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl tracking-tight text-ink">
                    {siteContent.brand.name}
                  </span>
                  <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                    {siteContent.brand.tagline}
                  </span>
                </div>
              </div>

              {/* Editorial Statement */}
              <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight leading-tight max-w-xl">
                {siteContent.footer.statement}
              </h3>

              {/* Get in touch CTA */}
              <div>
                <Button href="/contact" variant="primary" size="md" chamfer>
                  GET IN TOUCH
                </Button>
              </div>
            </div>

            {/* Giant Monogram Outline Mark */}
            <div className="select-none pt-4 opacity-15 hover:opacity-25 transition-opacity">
              <svg
                className="w-36 h-36 sm:w-48 sm:h-48 text-muted"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
                <path
                  d="M65 52H50V68H68V35H32V68"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Navigation List & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            {/* Quick Links List with Dividers */}
            <div className="space-y-1">
              <span className="font-mono text-xs text-muted tracking-wider uppercase block mb-4">
                INDEX / DIRECTORY
              </span>
              <ul className="divide-y divide-line border-t border-b border-line">
                {siteContent.footer.links[0].items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-4 text-base sm:text-lg font-display font-bold text-ink hover:text-accent transition-colors duration-200"
                    >
                      <span className="tracking-wide group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Handles */}
            <div>
              <span className="font-mono text-xs text-muted tracking-wider uppercase block mb-4">
                COMMUNICATIONS
              </span>
              <div className="flex items-center gap-4">
                {siteContent.footer.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-line hover:border-accent flex items-center justify-center text-muted hover:text-accent hover:bg-surface-light-card transition-all duration-200 clip-chamfer-br"
                    aria-label={social.name}
                  >
                    {social.name === "LinkedIn" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {social.name === "X" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {social.name === "Instagram" && (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-line bg-surface-light-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted tracking-wider">
          <div>{siteContent.footer.copyright}</div>
          <div className="flex items-center gap-6">
            {siteContent.footer.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
