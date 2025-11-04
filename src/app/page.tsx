import { Gavel, Scale, Landmark } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "LawChanakyas — Law. Order. Intelligence.",
};

export default function Home() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/10 px-3 py-1 text-xs uppercase tracking-wider text-black/80">
                <Scale className="h-3.5 w-3.5" /> Courtroom • Law • Justice
              </div>
              <h1 className="h1 text-black">LawChanakyas</h1>
              <p className="text-lg text-black/70 max-w-prose">
                An authoritative, elegant, and high‑tech legal platform crafted for
                advocates, law students, and the public. Explore AI legal guidance,
                courtroom simulations, premium resources, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/advocates/ai-legal-chatbot" className="btn-primary">
                  <Gavel className="h-4 w-4" /> AI Legal Chatbot
                </Link>
                <Link href="/students/mindmaps" className="btn-primary">
                  <Landmark className="h-4 w-4" /> Mindmaps
                </Link>
              </div>
            </div>
            <div className="premium-card">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-black/10">
                <Image src="/logo.png" alt="LawChanakyas" fill className="object-contain p-8 opacity-90" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm text-black/70">
                <div className="rounded-lg border border-black/10 bg-black/5 p-3">Advocates</div>
                <div className="rounded-lg border border-black/10 bg-black/5 p-3">Students</div>
                <div className="rounded-lg border border-black/10 bg-black/5 p-3">Public</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
