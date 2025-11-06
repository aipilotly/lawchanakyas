import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Play, CheckCircle, Users, Gavel, GraduationCap, Building2, Award, FileText, Shield, AlertCircle } from "lucide-react";

export const metadata = { 
	title: "Virtual Courtroom Drama — AI-driven Virtual Courtroom Simulator for Law Students & Young Advocates",
	description: "Step into \"Real Court meets Virtual Reality.\" Virtual Courtroom Drama is an immersive, AI-powered simulation that lets law students and junior advocates argue, object, and win — practice courtroom skills, receive instant feedback, and build confidence before the real bench."
};

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-7xl px-6 py-16">
				{/* Hot Badge */}
				<div className="mb-4 text-[10px] uppercase tracking-wider rounded-full bg-black text-white px-2 py-0.5 border border-black/20 inline-block">Hot</div>

				{/* Hero Section */}
				<section className="mb-16">
					<h1 className="h1 mb-4 text-black">Real Court. Virtual Practice. Win with Confidence.</h1>
					<p className="text-xl text-black/70 mb-6 max-w-3xl leading-relaxed">
						An immersive AI courtroom simulator where law students and junior advocates argue, object, and strategize — all in a safe, realistic, gamified environment.
					</p>
					<p className="text-sm text-black/60 mb-8 max-w-2xl">
						No installation. Browser-based. Role-play as counsel, judge, or witness. Real-time objections, timed hearings, and AI judge feedback.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link href="/courtroom-simulation/demo" className="btn-primary">
							<Play className="h-4 w-4" /> Try a Free Demo
						</Link>
						<Link href="/courtroom-simulation/video" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white text-black hover:bg-black/5 transition">
							Watch 90-sec Demo
						</Link>
					</div>
				</section>

				{/* One-liner / Value prop */}
				<section className="mb-16">
					<div className="premium-card text-center py-8">
						<p className="text-xl font-semibold text-black italic">
							Practice the pressure, master the procedure — rehearse real courtroom drama with AI that listens, judges, and teaches.
						</p>
					</div>
				</section>

				{/* Key Product Features */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Key Product Features</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Realistic Courtroom Engine</h3>
							<p className="text-black/70 text-sm">Procedural courtroom environment (bench, witnesses, exhibits, objections, hearings).</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">AI Judge & Benchroom Rulings</h3>
							<p className="text-black/70 text-sm">Natural language understanding to accept/reject objections, rule on points of law, and give written reasons.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Role-Based Practice</h3>
							<p className="text-black/70 text-sm">Switch roles: Plaintiff/Prosecution, Defence, Judge, Witness, Clerk.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Live Objections & Interventions</h3>
							<p className="text-black/70 text-sm">Practice phrasing objections and responses; receive instant ruling and rationale.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Case Library & Templates</h3>
							<p className="text-black/70 text-sm">Pre-built civil, criminal, family, and property mock cases, editable facts and exhibits.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Performance Analytics & Grading</h3>
							<p className="text-black/70 text-sm">Metrics: clarity, legal accuracy, objection success rate, time management, persuasiveness score.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Feedback & Learning Tracks</h3>
							<p className="text-black/70 text-sm">Auto-generated coach notes + recommended readings and videos based on performance.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Multiplayer & Moot Mode</h3>
							<p className="text-black/70 text-sm">Team up for moot courts or compete in tournaments with matchmaking.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Recorder & Playback</h3>
							<p className="text-black/70 text-sm">Record sessions, jump to key moments, annotate and share with mentors.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Integrations</h3>
							<p className="text-black/70 text-sm">Export transcripts, send to LMS, share certificates.</p>
						</div>
					</div>
				</section>

				{/* How It Works */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">How It Works — 3 Steps</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="premium-card text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-4">1</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Pick a Case or Upload One</h3>
							<p className="text-black/70 text-sm">Choose from our curated case library (Family, Property, Criminal, Civil) or upload your fact-sheet and exhibits.</p>
						</div>
						<div className="premium-card text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-4">2</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Enter the Virtual Courtroom</h3>
							<p className="text-black/70 text-sm">Take your seat as counsel, question witnesses, file motions, or raise objections. The AI judge listens in real time.</p>
						</div>
						<div className="premium-card text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-4">3</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Get Instant Rulings & Coach Feedback</h3>
							<p className="text-black/70 text-sm">Receive a ruling, an explanation of the law applied, and a detailed performance report with micro-lessons to improve.</p>
						</div>
					</div>
				</section>

				{/* Who Is This For */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Who Is This For?</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="premium-card">
							<GraduationCap className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Law students</h3>
							<p className="text-black/70 text-sm">Practice oral arguments, learning courtroom decorum and timing.</p>
						</div>
						<div className="premium-card">
							<Gavel className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Junior advocates</h3>
							<p className="text-black/70 text-sm">Test case strategies, rehearse cross-examinations, practice objections.</p>
						</div>
						<div className="premium-card">
							<Users className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Moot court teams</h3>
							<p className="text-black/70 text-sm">Run tournament-style practice sessions with analytics.</p>
						</div>
						<div className="premium-card">
							<Building2 className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Law faculties & institutions</h3>
							<p className="text-black/70 text-sm">Integrate into curricula with classroom accounts and grading tools.</p>
						</div>
						<div className="premium-card">
							<Award className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Legal trainers & coaching institutes</h3>
							<p className="text-black/70 text-sm">Scalable simulated courtroom batches and assessment reports.</p>
						</div>
					</div>
				</section>

				{/* Benefits */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Benefits (What You Actually Get)</h2>
					<div className="premium-card">
						<ul className="space-y-3 text-black/70">
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>Sharpen courtroom language and cadence without the stakes.</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>Learn objection strategy: when to object, how to phrase, and how to respond to rulings.</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>Accelerate learning with data — objective performance metrics replace subjective impressions.</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>Save travel/time: practice remotely with peers or mentors.</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>Build confidence — rehearse stressful hearings until your delivery is crisp.</span>
							</li>
						</ul>
					</div>
				</section>

				{/* Use-case Scenarios */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Use-Case Scenarios (Realistic Examples)</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">First-year student</h3>
							<p className="text-black/70 text-sm">Practices examination-in-chief and develops witness control.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Young advocate</h3>
							<p className="text-black/70 text-sm">Rehearses a surrender of property hearing, optimizes cross-examination, and tests settlement offers.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Moot team</h3>
							<p className="text-black/70 text-sm">Runs five back-to-back simulated rounds with analytics to prioritize training.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Professor</h3>
							<p className="text-black/70 text-sm">Assigns a mock trial and uses analytics to grade student performance objectively.</p>
						</div>
					</div>
				</section>

				{/* Pricing */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Pricing (Suggested Tiers)</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Student (Monthly)</h3>
							<p className="text-black/70 text-sm">Access to case library, single-player mode, recordings, basic analytics.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Advocate (Pro Monthly)</h3>
							<p className="text-black/70 text-sm">Multiplayer, AI judge feedback, advanced analytics, customizable cases, export transcripts.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Institution / Law School (Annual)</h3>
							<p className="text-black/70 text-sm">Multi-seat admin, LMS integration, class rosters, assessment dashboard, bulk discounts.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Enterprise / Training Partner</h3>
							<p className="text-black/70 text-sm">White-label options, API access, custom case-building and private servers.</p>
						</div>
					</div>
					<p className="mt-4 text-sm text-black/60 text-center">
						(Include a "Compare Plans" pricing table on the pricing page with exact features per tier.)
					</p>
				</section>

				{/* Testimonials */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Testimonials</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="premium-card">
							<p className="text-black/80 italic mb-3">"Practicing objections in Virtual Courtroom Drama changed how I approach hearings — I'm calmer and more precise."</p>
							<p className="text-sm text-black/60">— 3rd-year law student, National Law School.</p>
						</div>
						<div className="premium-card">
							<p className="text-black/80 italic mb-3">"Our moot team improved their win rate after six sessions — the analytics showed where we were losing points."</p>
							<p className="text-sm text-black/60">— Moot Coach, City Law College.</p>
						</div>
						<div className="premium-card">
							<p className="text-black/80 italic mb-3">"Great for junior advocates. The AI judge's written reasons taught me nuances I'd otherwise have missed."</p>
							<p className="text-sm text-black/60">— Litigation Associate, Regional Law Firm.</p>
						</div>
					</div>
				</section>

				{/* Demo & Onboarding */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Demo & Onboarding</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Live demo</h3>
							<p className="text-black/70 text-sm">20-minute guided walk-through with a sample case.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Self-onboarding</h3>
							<p className="text-black/70 text-sm">Interactive tutorial, first case walkthrough, checklist for practice sessions.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Mentor mode</h3>
							<p className="text-black/70 text-sm">Invite a senior advocate to watch, annotate, and provide feedback.</p>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">FAQ</h2>
					<div className="space-y-4">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: Is this legal advice?</h3>
							<p className="text-black/70">A: No. Virtual Courtroom Drama is an educational simulation. It provides training, not legal advice for real cases.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: Do I need a VR headset?</h3>
							<p className="text-black/70">A: No. The experience is fully immersive in the browser. Optional VR mode available for premium users.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: Can I practice real client cases?</h3>
							<p className="text-black/70">A: Yes — you can upload anonymized case facts and exhibits. We recommend removing identifying details for confidentiality.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: Is the AI judge accurate?</h3>
							<p className="text-black/70">A: The AI is trained on procedural rules and precedent patterns for training purposes. It provides reasoned rulings and citations for learning, but it is not a substitute for real judges.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: How is my data protected?</h3>
							<p className="text-black/70">A: We use industry-standard encryption. Institution plans include private instances and data export controls.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: Certificates & transcripts — available?</h3>
							<p className="text-black/70">A: Yes. Export transcripts and download practice completion certificates for course credit or portfolios.</p>
						</div>
					</div>
				</section>
			</div>
		</PageTransition>
	);
}
