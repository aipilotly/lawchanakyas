import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { MessageSquare, Scale, FileText, Target, Shield, Zap, Gavel, GraduationCap, Users, CheckCircle, AlertCircle, Play } from "lucide-react";

export const metadata = { 
	title: "AI Legal Chatbot — Indian Law Assistant | LawChanakyas",
	description: "Ask legal questions and get fast, accurate answers from an AI trained on Indian bare acts, case law, and judicial precedent. For advocates, students, and citizens — precise, context-aware legal assistance."
};

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-7xl px-6 py-16">
				{/* Hot Badge */}
				<div className="mb-4 text-[10px] uppercase tracking-wider rounded-full bg-black text-white px-2 py-0.5 border border-black/20 inline-block">Hot</div>

				{/* Hero Section */}
				<section className="mb-16">
					<h1 className="h1 mb-4 text-black">Ask. Understand. Act. — Legal answers you can trust.</h1>
					<p className="text-xl text-black/70 mb-8 max-w-3xl leading-relaxed">
						Your 24/7 legal assistant — trained on Indian Bare Acts, judgements & precedents. A conversational AI trained exclusively on Indian Bare Acts, case laws, and judicial precedents. Fast, context-aware legal answers for advocates, students, and the public — like ChatGPT, but legally precise.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link href="/ai-legal-chatbot/chat" className="btn-primary">
							<MessageSquare className="h-4 w-4" /> Chat with the Legal Bot
						</Link>
						<Link href="/ai-legal-chatbot/demo" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white text-black hover:bg-black/5 transition">
							See Demo • API & Integration
						</Link>
					</div>
				</section>

				{/* Why Section */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Why LawChanakyas' AI Legal Chatbot?</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Indian law first</h3>
							<p className="text-black/70">Trained only on Indian legislation, notifications, and verified case law — reducing cross-jurisdiction confusion.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Context-aware answers</h3>
							<p className="text-black/70">Provides statute citations, relevant precedent extracts, and step-by-step guidance.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Drafting help</h3>
							<p className="text-black/70">Generate clause-level language, outlines for pleadings, basic drafts, and template suggestions.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Designed for every user</h3>
							<p className="text-black/70">Use it for quick research, courtroom prep, student learning, or initial client triage.</p>
						</div>
					</div>
				</section>

				{/* Key Features */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Key Features</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="premium-card">
							<div className="text-3xl mb-3">⚖️</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Legal-First Knowledge Base</h3>
							<p className="text-black/70 text-sm">Built from Indian Bare Acts, judgments, legal commentaries, and verified public sources — curated and updated by legal researchers.</p>
						</div>
						<div className="premium-card">
							<div className="text-3xl mb-3">🧾</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Precise Citations & References</h3>
							<p className="text-black/70 text-sm">Each substantive answer can include references to bare act sections and case citations (where applicable) so you can follow up with original sources.</p>
						</div>
						<div className="premium-card">
							<div className="text-3xl mb-3">🗂️</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Drafting Assistant</h3>
							<p className="text-black/70 text-sm">Generate contract clauses, notice drafts, petition outlines, or tailor a template — then download or adapt for your needs.</p>
						</div>
						<div className="premium-card">
							<div className="text-3xl mb-3">🎯</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Contextual Q&A</h3>
							<p className="text-black/70 text-sm">Ask multi-part questions — the chatbot remembers context within a session and provides coherent follow-ups.</p>
						</div>
						<div className="premium-card">
							<div className="text-3xl mb-3">🔐</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Privacy & Confidentiality</h3>
							<p className="text-black/70 text-sm">All conversations are encrypted in transit and at rest. We do not use case-specific private data to train the model. (See full Privacy Policy.)</p>
						</div>
						<div className="premium-card">
							<div className="text-3xl mb-3">🔌</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Integrations & API</h3>
							<p className="text-black/70 text-sm">Embed the chatbot into your firm's portal, LMS, or client dashboard via our API (enterprise plans). Also available as a web widget.</p>
						</div>
					</div>
				</section>

				{/* How It Works */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">How It Works (Simple 3-Step Flow)</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="premium-card text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-4">1</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Ask naturally</h3>
							<p className="text-black/70 text-sm">Type or speak your legal question. Example: "What are the grounds for summary eviction in Maharashtra?"</p>
						</div>
						<div className="premium-card text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-4">2</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Get a structured answer</h3>
							<p className="text-black/70 text-sm">The bot returns a concise plain-language response + statute/case citations and suggested next steps.</p>
						</div>
						<div className="premium-card text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-xl font-bold mb-4">3</div>
							<h3 className="font-semibold text-lg mb-2 text-black">Act or escalate</h3>
							<p className="text-black/70 text-sm">Export the answer as a PDF, generate a draft, or connect to a verified advocate for a consultation.</p>
						</div>
					</div>
				</section>

				{/* Who It's For */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Who It's For</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="premium-card">
							<Gavel className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Advocates & Law Firms</h3>
							<p className="text-black/70">Quick research, draft suggestions, and client triage — save hours of baseline work.</p>
						</div>
						<div className="premium-card">
							<GraduationCap className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Law Students</h3>
							<p className="text-black/70">Case law summaries, statute breakdowns, and moot preparation support.</p>
						</div>
						<div className="premium-card">
							<Users className="h-8 w-8 text-black/60 mb-3" />
							<h3 className="font-semibold text-lg mb-2 text-black">Entrepreneurs & Citizens</h3>
							<p className="text-black/70">Fast, reliable clarity on basic legal questions, documents, and next steps.</p>
						</div>
					</div>
				</section>

				{/* Use Cases */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Use Cases / Example Prompts</h2>
					<div className="premium-card">
						<ul className="space-y-3 text-black/70">
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>"Summarize Section 498A IPC and list recent landmark judgments interpreting cruelty."</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>"Draft a short rental agreement clause limiting subletting for 11 months tenancy in Karnataka."</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>"What remedies are available for breach of contract under the Indian Contract Act?"</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="h-5 w-5 text-black/40 mt-0.5 flex-shrink-0" />
								<span>"Explain the procedure and timeline for filing a civil suit in a district court."</span>
							</li>
						</ul>
					</div>
				</section>

				{/* Limitations & Legal Disclaimer */}
				<section className="mb-16">
					<div className="premium-card border-l-4 border-l-black">
						<div className="flex items-start gap-3 mb-3">
							<AlertCircle className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
							<h3 className="font-semibold text-lg text-black">Limitations & Legal Disclaimer</h3>
						</div>
						<p className="text-black/70">
							The AI Legal Chatbot provides informational and research assistance — it is not a substitute for professional legal advice. For case-specific representation or binding legal advice, please consult a qualified advocate. LawChanakyas is not responsible for actions taken solely on AI-provided information.
						</p>
					</div>
				</section>

				{/* Security & Data Policy */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Security & Data Policy (Short)</h2>
					<div className="premium-card space-y-3">
						<p className="text-black/70">• Conversations are encrypted.</p>
						<p className="text-black/70">• Sensitive personal data should only be shared after starting a secure consultation session with a verified advocate.</p>
						<p className="text-black/70">• We do not use your private case data to retrain the model. Read our full Privacy Policy and Terms of Use for details.</p>
					</div>
				</section>

				{/* Pricing Snapshot */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Pricing Snapshot (Example)</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Free Tier</h3>
							<p className="text-black/70 text-sm mb-4">Limited Q&A, access to statutory summaries, 10 queries/month.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Pro (Students/Advocates)</h3>
							<p className="text-black/70 text-sm mb-4">Unlimited queries, drafting assistant, priority responses.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Enterprise</h3>
							<p className="text-black/70 text-sm mb-4">API access, self-hosted options, SLAs, and bulk user management.</p>
						</div>
					</div>
					<p className="mt-4 text-sm text-black/60 text-center">
						(Exact pricing and plans → <Link href="/pricing" className="underline hover:text-black">/pricing</Link>)
					</p>
				</section>

				{/* Testimonials */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">Testimonials (Placeholder)</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="premium-card">
							<p className="text-black/80 italic mb-3">"The chatbot cut our initial research time by 60% — citations were accurate and immediately helpful."</p>
							<p className="text-sm text-black/60">— Senior Associate, Mumbai Law Firm</p>
						</div>
						<div className="premium-card">
							<p className="text-black/80 italic mb-3">"Excellent study companion for moots and exams."</p>
							<p className="text-sm text-black/60">— 3rd Year Law Student</p>
						</div>
					</div>
					<p className="mt-4 text-sm text-black/60 text-center">
						(Real testimonials will appear here after user approvals.) → <Link href="/public/testimonials" className="underline hover:text-black">/testimonials</Link>
					</p>
				</section>

				{/* Call to Action */}
				<section className="mb-16">
					<div className="premium-card text-center py-12">
						<h2 className="h2 mb-4 text-black">Ready to try it?</h2>
						<p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
							Start a free trial and see how the AI Legal Chatbot can speed up research, sharpen arguments, and simplify drafting.
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link href="/ai-legal-chatbot/signup" className="btn-primary">
								Start Free Trial
							</Link>
							<Link href="/contact#enterprise-demo" className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-white text-black hover:bg-black/5 transition">
								Request Enterprise Demo
							</Link>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="mb-16">
					<h2 className="h2 mb-6 text-black">FAQ (Short)</h2>
					<div className="space-y-4">
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: Is the chatbot legally authoritative?</h3>
							<p className="text-black/70">A: The chatbot provides informational responses and references; it is not a substitute for legal advice from a licensed practitioner.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: How often are legal sources updated?</h3>
							<p className="text-black/70">A: Core legal sources and major judgments are updated weekly; statutory amendments are reflected within 48–72 hours of notification for critical laws.</p>
						</div>
						<div className="premium-card">
							<h3 className="font-semibold text-lg mb-2 text-black">Q: Can the bot draft full pleadings or complex agreements?</h3>
							<p className="text-black/70">A: It can generate drafts and clause suggestions for common use-cases. Complex, case-specific pleadings should be reviewed and finalized by a qualified advocate.</p>
						</div>
					</div>
				</section>
			</div>
		</PageTransition>
	);
}
