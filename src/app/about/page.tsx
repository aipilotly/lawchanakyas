import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "About",
  description: "About LawChanakyas — our mission and values.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="h1 mb-6">About</h1>
        <div className="premium-card space-y-4">
          <p className="text-white/80">
            LawChanakyas blends jurisprudence with cutting‑edge technology to
            deliver a premium experience for legal professionals, students, and
            the public. We build tools that feel like a modern courtroom —
            elegant, authoritative, and precise.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
