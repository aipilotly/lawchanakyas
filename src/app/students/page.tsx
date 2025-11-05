import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export const metadata = { title: "For Law Students", description: "Tools and resources for law students." };

const services = [
  {
    icon: "🧠",
    title: "Simplify Law with Visual Mindmaps",
    description: "LawChanakyas introduces a unique way to learn — interactive mindmaps of Indian Bare Acts that break down complex legal provisions into clear, visual flowcharts. Explore every section, clause, and amendment with color-coded nodes and logical relationships, helping you understand how laws connect, overlap, and apply in real cases. Perfect for law students, exam preparation, and quick revision.",
    cta: "Explore Mindmap Library",
    href: "/students/mindmaps",
    section: "📚 Mindmap of Bare Acts",
    hot: true
  },
  {
    icon: "🏛️",
    title: "Step into the Courtroom — Learn by Arguing",
    description: "Experience real courtroom proceedings in an interactive simulation. Act as a lawyer, judge, or witness, present arguments, raise objections, and get feedback based on your performance. A next-generation learning tool for moot preparation, advocacy training, and trial practice — designed to build confidence before stepping into real courts.",
    cta: "Start Courtroom Simulation",
    href: "/students/courtroom-simulation",
    section: "⚖️ Virtual Courtroom Simulation App",
    hot: true
  },
  {
    icon: "🏆",
    title: "Compete. Learn. Excel.",
    description: "Stay ahead with our nationwide listing of Moot Court Competitions, Debates, and Legal Fests — all in one place. Get updates on registration deadlines, eligibility, and topics, and even register directly through our platform. LawChanakyas ensures that every aspiring litigator never misses a chance to compete and grow.",
    cta: "View Moot Court Listings",
    href: "/students/mootcourt",
    section: "⚔️ Moot Court Competitions"
  },
  {
    icon: "🧾",
    title: "Find the Right Legal Internship for You",
    description: "Launch your legal career with our curated list of internship opportunities from law firms, chambers, NGOs, and startups. Each listing includes verified details like stipend, duration, and eligibility, ensuring safe and transparent opportunities for students and graduates. LawChanakyas connects you to real-world legal experience — not just listings.",
    cta: "Browse Legal Internships",
    href: "/students/internships",
    section: "💼 Internship Listings"
  },
  {
    icon: "🎤",
    title: "Learn Practical Law from Industry Experts",
    description: "Join hands-on workshops and certified online courses designed by legal experts, advocates, and professors. Learn practical skills — from contract drafting and case analysis to understanding new bills and reforms. Earn certificates, boost your resume, and turn theory into practice through interactive live sessions and recorded modules.",
    cta: "Join Upcoming Workshops",
    href: "/students/workshops",
    section: "🎓 Workshops & Courses"
  }
];

export default function StudentsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="h1 mb-12 text-black">For Law Students</h1>
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
