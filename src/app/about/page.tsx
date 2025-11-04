import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "About",
  description: "About LawChanakyas — our mission and values.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="h1 mb-6 text-black">About</h1>
        <div className="premium-card space-y-4">
          <p className="text-black/80">
            LawChanakyas blends jurisprudence with cutting‑edge technology to
            deliver a premium experience for legal professionals, students, and
            the public. We build tools that feel like a modern courtroom —
            elegant, authoritative, and precise.
          </p>
          <p className="text-black/80">
            Our platform focuses on three pillars: empowering advocates with
            productivity suites and AI assistance, preparing students through
            immersive courtroom simulations and structured learning paths, and
            serving the public with accessible legal information and services.
          </p>
          <p className="text-black/80">
            Every interaction is designed with clarity and trust in mind —
            minimal, high‑contrast visuals; premium typography; and smooth
            motion that never distracts from substance.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
