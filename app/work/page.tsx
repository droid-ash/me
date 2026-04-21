import type { ReactNode } from "react";

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
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
    title: "Co-founder & CTO",
    period: "Nov 2024 — Present",
    url: "https://finalrun.app",
    bullets: [
      "Building an AI QA agent for mobile apps that turns product intent into reliable end-to-end test runs on iOS and Android.",
      <>
        Shipped the open-source{" "}
        <ExtLink href="https://github.com/final-run/finalrun-agent">
          FinalRun agent
        </ExtLink>{" "}
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
      "Co-inventor on a pending U.S. patent application, \"System and Method for Element Detection in Mobile Devices\" (PLW Ref 10875-09977 US).",
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

export default function WorkPage() {
  return (
    <>
      <h1 className="mb-7 text-balance font-semibold text-neutral-900 dark:text-neutral-100">
        Work
      </h1>
      <p className="mt-7">
        Eight years of mobile engineering across startups and enterprise
        rollouts.
      </p>
      <ol className="mt-10 space-y-10">
        {roles.map((role) => (
          <li
            key={`${role.company}-${role.period}`}
            className="flex flex-col gap-1 sm:flex-row sm:gap-6"
          >
            <span className="flex-none font-mono text-xs tabular-nums whitespace-nowrap text-neutral-500 sm:w-36 sm:pt-1">
              {role.period}
            </span>
            <div className="min-w-0">
              <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
                {role.title}
                <span className="text-neutral-400 dark:text-neutral-500">
                  {" "}
                  ·{" "}
                </span>
                {role.url ? (
                  <ExtLink href={role.url}>{role.company}</ExtLink>
                ) : (
                  <span>{role.company}</span>
                )}
              </h2>
              <ul className="mt-2 space-y-2">
                {role.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
