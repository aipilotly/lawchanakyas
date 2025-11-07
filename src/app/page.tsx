"use client";

import { Gavel, GraduationCap, Users2, Scale } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeParticles from "@/components/HomeParticles";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section with Particles */}
      <section
        className="relative overflow-hidden min-h-[80vh] flex items-center"
      >
        {/* Particles Background */}
        <HomeParticles />
        
        {/* Hero Image - Right Side */}
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-start justify-end pr-6 pt-10 z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[60vh] w-auto"
          >
            {/* <Image
              src="/assets/half1.png"
              alt="Legal Professional"
              width={400}
              height={600}
              className="object-contain h-full w-auto"
              priority
            /> */}
          </motion.div>
        </div>
        
        {/* Content with proper z-index */}
        <div className="relative z-10 w-full px-6 pt-14 pb-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div {...fadeUp}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider text-black/80">
                  <Scale className="h-3.5 w-3.5" /> Courtroom • Law • Justice
                </div>
                <h1 className="h1 text-black">Smart Law. Simplified Justice.</h1>
                <p className="text-lg text-black/70 max-w-prose">
                  A one-stop digital ecosystem for every legal need — from AI-powered legal queries to virtual courtroom learning and verified legal services.
                </p>
                <div className="text-sm tracking-wide uppercase text-black/60">⚖️ "Explore Your Legal World with LawChanakyas"</div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link href="/advocates" className="btn-primary hover-lift"><Gavel className="h-4 w-4" /> For Advocates</Link>
                  <Link href="/students" className="btn-primary hover-lift"><GraduationCap className="h-4 w-4" /> For Students</Link>
                  <Link href="/public" className="btn-primary hover-lift"><Users2 className="h-4 w-4" /> For Public</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why LawChanakyas? */}
      <section className="relative overflow-hidden bg-white">
        <div className="w-full px-6 py-10">
          <h2 className="h2 mb-6 text-black">Why LawChanakyas?</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {["Bridging the gap between law and technology","Empowering advocates, students, and citizens","Redefining how India learns, practices, and accesses law"].map((title, idx) => (
              <motion.div key={title} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 * idx }} className="premium-card text-black hover-lift">
                <div className="font-semibold mb-1">{title}</div>
                <p className="text-black/70">&nbsp;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative overflow-hidden bg-white">
        <div className="w-full px-6 py-10">
          <h2 className="h2 mb-6 text-black">Quick Links:</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div {...fadeUp} className="hover-lift">
              <Link href="/advocates" className="premium-card text-black">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"><Gavel className="h-4 w-4" /></div>
                  <div className="font-medium">🧑‍⚖️ Practice Smarter (Advocates)</div>
                </div>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }} className="hover-lift">
              <Link href="/students" className="premium-card text-black">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"><GraduationCap className="h-4 w-4" /></div>
                  <div className="font-medium">🎓 Learn Practically (Students)</div>
                </div>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="hover-lift">
              <Link href="/public" className="premium-card text-black">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"><Users2 className="h-4 w-4" /></div>
                  <div className="font-medium">🧍 Get Legal Help (Public)</div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="relative overflow-hidden bg-white">
        <div className="w-full px-6 pb-12">
          <div className="grid gap-4 md:grid-cols-3">
            {["3 Core Platforms","25+ Legal Draft Templates","AI trained on 10,000+ Case Laws"].map((t, i) => (
              <motion.div key={t} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 * i }} className="rounded-xl border border-black/10 bg-white p-5 text-center hover-lift">
                <div className="text-2xl font-semibold text-black">{t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
