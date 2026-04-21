import type { ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
    >
      {children}
    </a>
  );
}

type Role = {
  company: string;
  title: string;
  period: string;
  url?: string;
  bullets: ReactNode[];
};

const roles: Role[] = [
  {
    company: "FinalRun",
    title: "Co-Founder & CTO",
    period: "Nov 2024 — Present",
    url: "https://finalrun.app",
    bullets: [
      "Building an AI QA agent for mobile apps that turns product intent into reliable end-to-end test runs on iOS and Android.",
      <>
        Shipped the open-source{" "}
        <InlineLink href="https://github.com/final-run/finalrun-agent">
          FinalRun agent
        </InlineLink>{" "}
        and cloud runner; early teams run full suites on every PR.
      </>,
    ],
  },
  {
    company: "Whatfix",
    title: "SDE-II, Android",
    period: "Apr 2022 — Nov 2024",
    url: "https://whatfix.com",
    bullets: [
      "Primary engineer on the enterprise Android SDK — hardened it for enterprise scale and compliance.",
      "Wrote the migration tooling that moved all 77 SDKs from Maven to JFrog.",
      "Helped grow mobile ARR by ~$1.4M, landing UPS, NASA-JPL, and Heineken; flew on-site (LCG) to unblock a go-live.",
    ],
  },
  {
    company: "Leap (acq. Whatfix)",
    title: "Android Developer",
    period: "Mar 2019 — Apr 2022",
    bullets: [
      "Second engineer. Turned the founders' POC into the shipped product.",
      "Led SDK integrations across early enterprise customers including Jio, redBus, and Yatra.",
    ],
  },
  {
    company: "SmartBeings",
    title: "Android Developer",
    period: "Jul 2017 — Feb 2019",
    bullets: [
      "First engineer on a voice-AI hardware startup. Set up the mobile team, processes, and infra.",
      "Integrated hotword detection (\"Hey Woohoo\") with Google ASR and shipped voice services for music, news, weather, Q&A, and video calling.",
    ],
  },
];

type Press = {
  outlet: string;
  title: string;
  date: string;
  url: string;
};

const press: Press[] = [
  {
    outlet: "CXO Today",
    title:
      "2-person startup FinalRun sets new global record as top autonomous mobile AI agent, surpassing DeepSeek, Alibaba, and ByteDance",
    date: "Sep 2025",
    url: "https://cxotoday.com/press-release/2-person-startup-finalrun-sets-new-global-record-as-top-autonomous-mobile-ai-agent-surpassing-deepseek-alibaba-and-bytedance/",
  },
  {
    outlet: "TimesTech",
    title:
      "FinalRun sets global record in autonomous AI, surpasses DeepSeek, Alibaba & ByteDance",
    date: "Sep 2025",
    url: "https://timestech.in/finalrun-sets-global-record-in-autonomous-ai-surpasses-deepseek-alibaba-bytedance/",
  },
];

type Highlight = {
  year: string;
  label: string;
  description: ReactNode;
};

const highlights: Highlight[] = [
  {
    year: "2025",
    label: "#1 on Android World",
    description: (
      <>
        FinalRun tops Google DeepMind&apos;s Android World leaderboard for
        autonomous mobile agents with a{" "}
        <InlineLink href="https://finalrun.app/benchmark">
          97.4% success rate
        </InlineLink>{" "}
        (113 / 116 tasks), ahead of AutoDevice (94.8%), DroidRun (91.4%), and
        mobile-use (91.4%).
      </>
    ),
  },
  {
    year: "2023",
    label: "Patent",
    description:
      "Co-inventor, \"System and Method for Element Detection in Mobile Devices\" (PLW Ref 10875-09977 US) — the technique behind robust mobile element detection.",
  },
  {
    year: "2022",
    label: "Hackathon",
    description:
      "Won an internal Whatfix hackathon by applying computer vision to mobile UI element identification.",
  },
];

const links = {
  email: "ashish@finalrun.app",
  github: "https://github.com/droid-ash",
  linkedin: "https://www.linkedin.com/in/ashdroid/",
  twitter: "https://twitter.com/droidash",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 antialiased dark:bg-neutral-950 dark:text-neutral-200">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Building{" "}
            <a
              href="https://finalrun.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
            >
              FinalRun
            </a>
            <span className="text-neutral-400 dark:text-neutral-600">·</span>
            <span>San Francisco</span>
          </div>
          <ThemeToggle />
        </div>

        <header className="mb-16 space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-50">
            Ashish Yadav
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Co-founder and CTO of{" "}
            <a
              href="https://finalrun.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
            >
              FinalRun
            </a>
            , an AI QA agent for mobile apps. Previously shipped enterprise
            Android SDKs at Whatfix (and at Leap, before it was acquired). Eight
            years of mobile engineering across startups and enterprise rollouts.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-500">
            Work
          </h2>
          <ol className="space-y-10">
            {roles.map((role) => (
              <li key={`${role.company}-${role.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    {role.title}
                    <span className="text-neutral-400 dark:text-neutral-500"> · </span>
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 hover:decoration-neutral-600 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
                      >
                        {role.company}
                      </a>
                    ) : (
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {role.company}
                      </span>
                    )}
                  </h3>
                  <span className="text-sm tabular-nums text-neutral-500">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[0.6em] h-px w-3 flex-none bg-neutral-300 dark:bg-neutral-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            Highlights
          </h2>
          <ul className="space-y-6">
            {highlights.map((h) => (
              <li key={h.year} className="flex gap-6">
                <span className="w-12 flex-none text-sm tabular-nums text-neutral-500">
                  {h.year}
                </span>
                <div>
                  <p className="text-[15px] font-medium text-neutral-900 dark:text-neutral-200">
                    {h.label}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {h.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            Press
          </h2>
          <ul className="space-y-5">
            {press.map((p) => (
              <li key={p.url} className="flex gap-6">
                <span className="w-12 flex-none text-sm tabular-nums text-neutral-500">
                  {p.date}
                </span>
                <div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
                  >
                    {p.title}
                  </a>
                  <p className="mt-1 text-sm text-neutral-500">{p.outlet}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            Elsewhere
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <li>
              <a
                href={`mailto:${links.email}`}
                className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 hover:decoration-neutral-600 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 hover:decoration-neutral-600 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 hover:decoration-neutral-600 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 hover:decoration-neutral-600 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-neutral-50 dark:hover:decoration-neutral-400"
              >
                Twitter
              </a>
            </li>
          </ul>
        </section>

        <footer className="border-t border-neutral-200 pt-8 text-sm text-neutral-500 dark:border-neutral-900 dark:text-neutral-600">
          © {new Date().getFullYear()} Ashish Yadav
        </footer>
      </div>
    </div>
  );
}
