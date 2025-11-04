import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export const metadata = { title: "For Law Students", description: "Tools and resources for law students." };

const links = [
  { href: "/students/mindmaps", label: "Mindmap of bare acts", hot: true },
  { href: "/students/courtroom-simulation", label: "Courtroom simulation app", hot: true },
  { href: "/students/mootcourt", label: "Mootcourt Competitions" },
  { href: "/students/internships", label: "Internship Lisitngs" },
  { href: "/students/workshops", label: "Workshops / Courses" },
];

export default function StudentsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="h1 mb-8">For Law Students</h1>
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
