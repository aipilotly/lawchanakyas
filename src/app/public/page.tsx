import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export const metadata = { title: "For Public", description: "Accessible legal services for everyone." };

const services = [
  {
    icon: "🗂️",
    title: "Personalized Legal Advice from Verified Experts",
    description: "LawChanakyas connects you with verified and experienced advocates for all your legal needs — from family disputes to business compliance. Whether you need quick advice or a detailed case strategy, our platform ensures secure, transparent, and affordable consultations. Book a consultation based on your area, budget, and case type — all online, without paperwork.",
    cta: "Get Legal Help",
    href: "/public/legal-consultation",
    section: "⚖️ Legal Consultation Services"
  },
  {
    icon: "⭐",
    title: "What Our Clients Say About Us",
    description: "Hear directly from our users — advocates, students, and clients — who have transformed their legal journeys with LawChanakyas. From courtroom simulations to successful case resolutions, our testimonials reflect trust, innovation, and real results. \"LawChanakyas made legal help simple and digital. Their chatbot saved me hours of research!\"",
    cta: "Read Testimonials",
    href: "/public/testimonials",
    section: "💬 Testimonials"
  },
  {
    icon: "💡",
    title: "Protect Your Innovation with Ease",
    description: "We simplify patent filing and intellectual property protection for startups, inventors, and professionals. From drafting patent specifications to filing applications and renewals, LawChanakyas provides end-to-end IP services with expert legal support. Ensure your innovation stays protected — legally and globally.",
    cta: "Start Patent Filing",
    href: "/public/patent-filing",
    section: "🧬 Patent Filing Services"
  },
  {
    icon: "🏡",
    title: "Streamlined Property & Document Registration",
    description: "Avoid the long queues and confusion at government offices. LawChanakyas helps you digitally prepare, verify, and register your land deeds, wills, and property documents with complete legal support. Our experts guide you through every step — ensuring compliance, accuracy, and peace of mind.",
    cta: "Register Documents",
    href: "/public/register-land-will-deed",
    section: "🏠 Register Land, Will or Deed"
  },
  {
    icon: "📖",
    title: "Real Cases. Real Insights.",
    description: "Dive deep into landmark judgments, legal precedents, and case analyses curated by our experts. Each case study explains the facts, issues, and interpretations in simple terms, helping students, lawyers, and clients understand law in action.",
    cta: "Read Case Studies",
    href: "/public/case-studies",
    section: "📚 Case Studies"
  },
  {
    icon: "🔍",
    title: "Verified Investigation & Background Check Services",
    description: "Our legal investigation unit assists clients and businesses with background verification, evidence collection, and document validation for critical cases. Ensure due diligence in property deals, partnerships, or disputes through ethical, discreet, and legally compliant investigation services.",
    cta: "Request Investigation",
    href: "/public/investigation",
    section: "🕵️ Investigation"
  },
  {
    icon: "🧑‍💻",
    title: "Your Complete Case Management Portal",
    description: "A personalized Client Dashboard that keeps you updated with case progress, hearing dates, shared evidence, line of arguments, and lawyer notes — all in one secure digital space. Designed for both clients and advocates, it simplifies communication, documentation, and follow-ups.",
    features: [
      "View live case status",
      "Upload or review documents securely",
      "Get automated notifications before hearings"
    ],
    cta: "Access Your Dashboard",
    href: "/public/client-case-dashboard",
    section: "💼 Client / Case Dashboard"
  }
];

export default function PublicPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="h1 mb-12 text-black">For Public</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.href} className="premium-card text-black">
              <div className="mb-4">
                <div className="text-4xl mb-3">{service.icon}</div>
                <div className="text-sm font-semibold text-black/60 mb-2">{service.section}</div>
                <h2 className="h2 text-xl mb-3">{service.title}</h2>
                <p className="text-black/70 leading-relaxed mb-4">{service.description}</p>
                {service.features && (
                  <div className="mb-4 pl-4 border-l-2 border-black/10">
                    <div className="text-sm font-semibold text-black/80 mb-2">Features:</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-black/70">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Link 
                href={service.href} 
                className="inline-flex items-center gap-2 text-black font-medium hover:text-black/80 transition group"
              >
                <span>🔗 {service.cta}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
