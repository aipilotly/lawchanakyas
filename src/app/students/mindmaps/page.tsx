import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Mindmap of bare acts", description: "Interactive legal mindmaps." };

export default function Page() {
	const mindmaps = [
		{
			title: "Indian Constitution",
			description: "Structure of the Union, Fundamental Rights & Duties, Directive Principles, schedules, and landmark amendments mapped for quick reference.",
			href: "/students/mindmaps/indian-constitution",
		},
		{
			title: "Indian Contract Act",
			description: "Offer, acceptance, consideration, breach, and remedies—simplified to help decode contractual obligations at a glance.",
			href: "/students/mindmaps/indian-contract-act",
		},
		{
			title: "Motor Vehicles Act (Old & New)",
			description: "Highlights the evolution from legacy provisions to the latest reforms, penalties, and compliance requirements for transport law.",
			href: "/students/mindmaps/motor-vehicles-act",
		},
		{
			title: "Consumer Protection Act",
			description: "Rights of consumers, redressal forums, dispute resolution process, and recent amendments for holistic consumer law prep.",
			href: "/students/mindmaps/consumer-protection-act",
		},
		{
			title: "Hindu Marriage Act, 1955",
			description: "This act governs marriage and divorce among Hindus, prohibiting bigamy and giving women equal rights to divorce and maintenance.",
			href: "/students/mindmaps/hindu-marriage-act-1955",
		},
		{
			title: "Hindu Succession Act, 1956",
			description:
				"This act deals with intestate succession, abolishing the Hindu woman's limited estate and granting her absolute property rights with 2005 amendments ensuring equal inheritance for daughters.",
			href: "/students/mindmaps/hindu-succession-act-1956",
		},
		{
			title: "Hindu Minority & Guardianship Act, 1956",
			description: "Sets out the law relating to guardianship of Hindu minors and their property, clarifying natural guardian hierarchy and duties.",
			href: "/students/mindmaps/hindu-minority-guardianship-act-1956",
		},
		{
			title: "Hindu Adoptions & Maintenance Act, 1956",
			description: "Governance of adoption procedures, eligibility, and the maintenance obligations toward dependents within Hindu law.",
			href: "/students/mindmaps/hindu-adoptions-maintenance-act-1956",
		},
	];

	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/20 bg-black px-3 py-1 text-[10px] uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
					<span className="h-1.5 w-1.5 rounded-full bg-white" />
					Hot
				</div>
				<h1 className="h1 mb-6 text-black">Mindmap of bare acts</h1>
				<p className="mb-10 max-w-2xl text-sm text-black/70">
					Dive into crisp, high-impact mindmaps crafted to make complex bare acts intuitive. Explore each collection to review, revise, or teach with ease.
				</p>

				<ul className="grid gap-6 md:grid-cols-2">
					{mindmaps.map((mindmap) => (
						<li key={mindmap.href}>
							<Link
								href={mindmap.href}
								className="group relative block overflow-hidden rounded-2xl border border-black/10 bg-white text-black shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								<div className="relative flex h-full flex-col gap-4 p-6">
									<div className="flex items-center justify-between">
										<div className="text-[11px] uppercase tracking-[0.2em] text-black/60 transition-colors group-hover:text-white/70">
											Core mindmap
										</div>
										<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black text-white transition group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
											<ArrowUpRight className="h-4 w-4" />
										</span>
									</div>
									<div>
										<h2 className="text-xl font-semibold tracking-tight">{mindmap.title}</h2>
										<p className="mt-3 text-sm leading-relaxed text-black/70 transition-colors group-hover:text-white/80">
											{mindmap.description}
										</p>
									</div>
									<div className="mt-auto text-sm font-medium uppercase tracking-widest text-black transition-colors group-hover:text-white">
										Explore mindmap
									</div>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</PageTransition>
	);
}
