import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "For Advocates",
  description: "Resources and tools for advocates.",
};

const links = [
  { href: "/advocates/draft-bundles", label: "Draft bundles" },
  { href: "/advocates/directory", label: "Advocates Directory" },
  { href: "/advocates/ai-legal-chatbot", label: "AI based legal chat bot", hot: true },
  { href: "/advocates/courtroom-simulation", label: "Courtroom simulation app", hot: true },
  { href: "/advocates/networking-events", label: "Networking Events" },
  { href: "/advocates/jobs", label: "Job Lisitngs" },
];

export default function AdvocatesPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="h1 mb-8">For Advocates</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="premium-card flex items-center justify-between">
              <span>{l.label}</span>
              {l.hot && <span className="text-[10px] uppercase tracking-wider rounded-full bg-white/15 text-white px-2 py-0.5 border border-white/20">Hot</span>}
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
