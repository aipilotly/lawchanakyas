import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export const metadata = { title: "For Public", description: "Accessible legal services for everyone." };

const links = [
  { href: "/public/legal-consultation", label: "Legal Consultation Services" },
  { href: "/public/testimonials", label: "Testimonials" },
  { href: "/public/patent-filing", label: "Patent Filing Services" },
  { href: "/public/register-land-will-deed", label: "Register Land, Will or  Deed" },
  { href: "/public/case-studies", label: "Case Studies" },
];

export default function PublicPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="h1 mb-8">For Public</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="premium-card">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
