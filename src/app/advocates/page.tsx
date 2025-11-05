import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "For Advocates",
  description: "Resources and tools for advocates.",
};

const services = [
  {
    icon: "📜",
    title: "Ready-to-Use Legal Draft Templates",
    description: "Save valuable time with our collection of professionally drafted legal templates across multiple categories — including affidavits, rental agreements, property deeds, wills, family matters, and corporate contracts. Each draft is reviewed by experienced advocates to ensure accuracy and compliance with Indian law.",
    cta: "Explore Draft Bundles",
    href: "/advocates/draft-bundles",
    section: "🧾 Draft Bundles"
  },
  {
    icon: "🧭",
    title: "Find Verified Lawyers Near You",
    description: "Discover a comprehensive directory of practicing advocates across India, organized by state, city, taluk, and area of specialization — from criminal and civil to intellectual property and family law. Whether you're seeking legal representation or collaboration, LawChanakyas helps you find the right professional with verified credentials and reviews.",
    cta: "Browse Advocates Directory",
    href: "/advocates/directory",
    section: "👨‍⚖️ Advocates Directory"
  },
  {
    icon: "💬",
    title: "Your Personal Legal Assistant — 24/7",
    description: "Ask any legal question and get instant, accurate, and context-based answers from our AI-powered legal chatbot, trained exclusively on Indian Bare Acts, case laws, and judicial precedents. Designed for advocates, students, and individuals — it ensures precise, reliable, and fast responses, without the complexity of legal jargon.",
    cta: "Chat with AI Legal Assistant",
    href: "/advocates/ai-legal-chatbot",
    section: "🤖 AI-Based Legal Chatbot",
    hot: true
  },
  {
    icon: "🏛️",
    title: "Step into the Courtroom of the Future",
    description: "Experience real-world legal drama through our Virtual Courtroom Simulation App. Re-create live proceedings, argue as a lawyer, object, cross-examine witnesses, and build courtroom confidence — all in an interactive, gamified environment. A powerful tool for law students, interns, and young advocates to practice and learn trial advocacy safely and immersively.",
    cta: "Explore Virtual Courtroom",
    href: "/advocates/courtroom-simulation",
    section: "⚖️ Virtual Courtroom Simulation App",
    hot: true
  },
  {
    icon: "🤝",
    title: "Connect. Collaborate. Grow.",
    description: "Join exclusive networking events connecting advocates, students, and legal professionals across India. From virtual panels to offline meetups and collaborative legal forums, LawChanakyas brings the legal community together to share knowledge, build partnerships, and shape the future of legal innovation.",
    cta: "View Upcoming Events",
    href: "/advocates/networking-events",
    section: "🌐 Networking Events"
  },
  {
    icon: "📢",
    title: "Discover Legal Internships & Opportunities",
    description: "Stay ahead in your career with our curated job listings for law students, paralegals, interns, and advocates. Browse verified openings from law firms, startups, and legal organizations, updated regularly — because every opportunity begins with the right connection.",
    cta: "Explore Legal Jobs",
    href: "/advocates/jobs",
    section: "💼 Job Listings"
  }
];

export default function AdvocatesPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="h1 mb-12 text-black">For Advocates</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.href} className="premium-card text-black">
              <div className="mb-4">
                <div className="text-4xl mb-3">{service.icon}</div>
                <div className="text-sm font-semibold text-black/60 mb-2">{service.section}</div>
                <h2 className="h2 text-xl mb-3">{service.title}</h2>
                <p className="text-black/70 leading-relaxed mb-4">{service.description}</p>
              </div>
              <Link 
                href={service.href} 
                className="inline-flex items-center gap-2 text-black font-medium hover:text-black/80 transition group"
              >
                <span>🔗 {service.cta}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                {service.hot && (
                  <span className="ml-2 text-[10px] uppercase tracking-wider rounded-full bg-black/10 text-black px-2 py-0.5 border border-black/10">Hot</span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
