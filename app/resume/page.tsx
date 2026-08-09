"use client";

import { useEffect, useRef } from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Globe, Briefcase } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Download Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8 print-hide"
        >
          <div>
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              Resume
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Use the button below to save as PDF
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
            }}
            id="resume-print-btn"
          >
            <Download size={16} /> Save as PDF
          </button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 sm:p-10 resume-content"
          id="resume-printable"
        >
          {/* Header */}
          <div className="text-center mb-8 pb-6" style={{ borderBottom: "2px solid var(--accent)" }}>
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
              style={{ color: "var(--foreground)" }}
            >
              Vishal Kumar Sahu
            </h1>
            <p
              className="text-lg font-medium mb-4"
              style={{ color: "var(--accent)" }}
            >
              Growth & Product Marketing Lead
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: "var(--foreground-secondary)" }}>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} style={{ color: "var(--accent)" }} />
                sahuvishal395@gmail.com
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} style={{ color: "var(--accent)" }} />
                India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe size={14} style={{ color: "var(--accent)" }} />
                www.vishalkumarsahu.com
              </span>
              <span className="inline-flex items-center gap-1.5">
                <LinkedinIcon size={14} />
                linkedin.com/in/vishal-sahu-a56526238
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GithubIcon size={14} />
                github.com/sahuvishal395
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2
              className="text-lg font-bold uppercase tracking-wider mb-3 pb-1"
              style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
            >
              Professional Summary
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-secondary)" }}
            >
              Growth & Product Marketing Lead with 3+ years of experience in go-to-market strategy, product positioning, and end-to-end influencer marketing — including a $1.3M creator budget managed across discovery, negotiation, onboarding, video production, and performance reporting. Expert in leveraging tools like N8N, Claude, Replit, and Apify to automate content workflows, research scraping, and template-based image generation at scale. Passionate about bridging the gap between products and people through compelling narratives and data-driven insights.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2
              className="text-lg font-bold uppercase tracking-wider mb-4 pb-1"
              style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
            >
              Professional Experience
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap justify-between items-start mb-1">
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    Growth & Product Marketing Lead
                  </h3>
                  <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>March 2026 — Present</span>
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground-muted)" }}>TestMu AI (formerly LambdaTest)</p>
                <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground-secondary)" }}>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Own end-to-end influencer marketing, managing a <strong>$1.3M creator budget</strong> from discovery and briefing through to post-campaign reporting.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Scrape, research, and shortlist creators; run outreach, negotiate deliverables, usage rights, and commercials, and onboard influencers across nano, micro, and macro segments.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Collaborate with creators to script and produce campaign videos, publishing across Instagram, Facebook, X, and LinkedIn.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Measure campaign effectiveness across reach, engagement, CTR, and follower growth, reporting actionable insights to leadership.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Leading growth and product marketing post-rebranding from LambdaTest to TestMu AI, directing cross-channel positioning, website restructuring, and content strategy.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Built AI-powered automation workflows using N8N, Claude, and Apify for content research, scraping, and template-based image generation.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start mb-1">
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    Digital Marketing Executive
                  </h3>
                  <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>Nov 2023 — March 2026</span>
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground-muted)" }}>LambdaTest</p>
                <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground-secondary)" }}>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Promoted to executive role after 6 months of internship. Managed B2B search, display, and social ad campaigns (Google, Meta, LinkedIn).</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Secured 'Position 0' on search engine result pages (SERPs) and optimized 100+ landing pages to enhance conversions.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Managed Google My Business & Pinterest accounts (achieving 10k+ monthly views) and spearheaded LambdaTest's Product Hunt launch to #1 product.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start mb-1">
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    Digital Marketing Intern
                  </h3>
                  <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>May 2023 — Nov 2023</span>
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground-muted)" }}>LambdaTest</p>
                <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground-secondary)" }}>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Managed on-page and off-page search engine optimization campaigns.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Optimized 150+ articles and developed 40+ content webpages targeting organic growth.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Nurtured outreach campaigns to secure high-quality authority backlinks and coordinated influencer marketing collaborations.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start mb-1">
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    Digital Marketing Professional Program
                  </h3>
                  <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>Sep 2022 — May 2023</span>
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground-muted)" }}>Kraftshala</p>
                <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground-secondary)" }}>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Acquired extensive training in marketing strategy, positioning concepts, and user behaviors.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Designed detailed customer personas, user journeys, and full-funnel digital messaging patterns.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Pitched social and digital marketing strategies for prominent brands including MG, TATA, and HCL.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start mb-1">
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    Sales Trainee
                  </h3>
                  <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>July 2022 — Sep 2022</span>
                </div>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--foreground-muted)" }}>Byju's</p>
                <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground-secondary)" }}>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Excelled in customer outreach training, developing deep insight into consumer psychology and personas.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Tackled real-time user concerns and mapped solutions aligned to current market trends.</li>
                  <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Partnered with the outbound team to generate warm leads and converted two targeted accounts within six weeks.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2
              className="text-lg font-bold uppercase tracking-wider mb-3 pb-1"
              style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
            >
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>Marketing & Strategy</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                  Product Positioning • Go-to-Market Strategy • Competitive Intelligence • Sales Enablement • Content Strategy • Customer Research • Market Analysis • Launch Planning • Growth Marketing • Brand Strategy • SEO & SEM
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>Influencer & Creator Marketing</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                  End-to-End Campaign Management • Creator Research, Scouting & Outreach • Commercial Negotiation • Creator Onboarding • Influencer Budget Management • Campaign Planning & Content Calendars • Video Content Production • Performance Tracking (Reach, Engagement, CTR, Follower Growth)
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>AI & Automation Tools</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                  N8N Automation • Claude AI • ChatGPT / OpenAI • Replit • Apify Web Scraping • Prompt Engineering • AI Content Writing • AI Workflow Automation • Template-based Image Generation • Content Research Scraping
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>Tools & Platforms</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                  HubSpot • Figma • Google Analytics • Marketing Analytics • Cross-functional Collaboration • Team Leadership
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h2
              className="text-lg font-bold uppercase tracking-wider mb-3 pb-1"
              style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
            >
              Key Achievements
            </h2>
            <ul className="space-y-1.5 text-sm" style={{ color: "var(--foreground-secondary)" }}>
              <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Managed a $1.3M influencer marketing budget end-to-end across nano, micro, and macro creator segments</li>
              <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Built 50+ AI-powered automation workflows for marketing operations</li>
              <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Launched 10+ products with comprehensive go-to-market strategies</li>
              <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Built 15+ automated content pipelines reducing manual effort by 70%</li>
              <li className="flex gap-2"><span style={{ color: "var(--accent)" }}>•</span>Developed AI-driven content research and scraping systems using Apify and N8N</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .print-hide,
          nav,
          footer,
          .animated-bg {
            display: none !important;
          }
          body {
            background: white !important;
            color: #111 !important;
          }
          .glass-card {
            background: white !important;
            border: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
          }
          .resume-content {
            padding: 0 !important;
          }
          .resume-content * {
            color: #111 !important;
          }
          .resume-content span[style*="color: var(--accent)"] {
            color: #333 !important;
          }
          main {
            padding-top: 0 !important;
          }
        }
      `}</style>
    </PageTransition>
  );
}
