import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "About",
  description: "About LawChanakyas — our mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="h1 mb-12 text-black">About</h1>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="h2 mb-4 text-black">Our Mission</h2>
          <div className="premium-card">
            <p className="text-lg text-black/80 leading-relaxed">
              To revolutionize the legal ecosystem in India using AI and technology — making justice more efficient, accessible, and transparent for all.
            </p>
          </div>
        </section>

        {/* Our Vision */}
        <section className="mb-12">
          <h2 className="h2 mb-4 text-black">Our Vision</h2>
          <div className="premium-card">
            <p className="text-lg text-black/80 leading-relaxed">
              A connected digital legal world where advocates, students, and citizens collaborate, learn, and access justice seamlessly.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="h2 mb-4 text-black">Our Story</h2>
          <div className="premium-card space-y-4">
            <p className="text-black/80 leading-relaxed">
              LawChanakyas was founded with one question in mind —
            </p>
            <p className="text-xl font-semibold text-black italic">
              Why hasn't the legal industry gone digital the way finance or healthcare has?
            </p>
            <p className="text-black/80 leading-relaxed">
              We are building tools that make law smarter, education immersive, and justice more reachable.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="h2 mb-6 text-black">Core Values</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="premium-card">
              <h3 className="font-semibold text-lg mb-2 text-black">Integrity in every action</h3>
              <p className="text-black/70">We uphold the highest ethical standards in all our work and interactions.</p>
            </div>
            <div className="premium-card">
              <h3 className="font-semibold text-lg mb-2 text-black">Innovation that simplifies</h3>
              <p className="text-black/70">We create technology that makes complex legal processes intuitive and accessible.</p>
            </div>
            <div className="premium-card">
              <h3 className="font-semibold text-lg mb-2 text-black">Impact that empowers</h3>
              <p className="text-black/70">We build solutions that give power back to users — advocates, students, and citizens.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="h2 mb-6 text-black">Team</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="premium-card">
              <h3 className="font-semibold text-lg mb-2 text-black">Founder/CEO from Tech & Legal background</h3>
              <p className="text-black/70">Leading the vision and strategic direction of LawChanakyas.</p>
            </div>
            <div className="premium-card">
              <h3 className="font-semibold text-lg mb-2 text-black">Legal Research Team</h3>
              <p className="text-black/70">Expert legal professionals ensuring accuracy and relevance in all our resources.</p>
            </div>
            <div className="premium-card">
              <h3 className="font-semibold text-lg mb-2 text-black">AI & Tech Development Team</h3>
              <p className="text-black/70">Building the intelligent systems and platforms that power LawChanakyas.</p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
