"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Gavel, Scale, Landmark, BookOpen, Users2, GraduationCap, PenTool, MessageSquareWarning, Network, BriefcaseBusiness, Bot, Sparkles, FileText, Building2, Shield, Newspaper, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

type MenuItem = { href: string; label: string; highlight?: boolean };

type MegaMenu = {
	label: string;
	icon: React.ReactNode;
	items: MenuItem[];
	baseHref: string;
};

const advocates: MegaMenu = {
	label: "For Advocates",
	icon: <Gavel className="h-4 w-4" />,
	baseHref: "/advocates",
	items: [
		{ href: "/advocates/draft-bundles", label: "Draft bundles" },
		{ href: "/advocates/directory", label: "Advocates Directory" },
		{ href: "/advocates/ai-legal-chatbot", label: "AI based legal chat bot", highlight: true },
		{ href: "/advocates/courtroom-simulation", label: "Courtroom simulation app", highlight: true },
		{ href: "/advocates/networking-events", label: "Networking Events" },
		{ href: "/advocates/jobs", label: "Job Lisitngs" },
	],
};

const students: MegaMenu = {
	label: "For Law Students",
	icon: <GraduationCap className="h-4 w-4" />,
	baseHref: "/students",
	items: [
		{ href: "/students/mindmaps", label: "Mindmap of bare acts", highlight: true },
		{ href: "/students/courtroom-simulation", label: "Courtroom simulation app", highlight: true },
		{ href: "/students/mootcourt", label: "Mootcourt Competitions" },
		{ href: "/students/internships", label: "Internship Lisitngs" },
		{ href: "/students/workshops", label: "Workshops / Courses" },
	],
};

const publicMenu: MegaMenu = {
	label: "For Public",
	icon: <Users2 className="h-4 w-4" />,
	baseHref: "/public",
	items: [
		{ href: "/public/legal-consultation", label: "Legal Consultation Services" },
		{ href: "/public/testimonials", label: "Testimonials" },
		{ href: "/public/patent-filing", label: "Patent Filing Services" },
		{ href: "/public/register-land-will-deed", label: "Register Land, Will or  Deed" },
		{ href: "/public/case-studies", label: "Case Studies" },
	],
};

const menus: MegaMenu[] = [advocates, students, publicMenu];

export default function Navbar() {
	const [open, setOpen] = useState<string | null>(null);

	return (
		<div className="sticky top-0 z-50">
			<header className="border-b border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex h-16 items-center justify-between">
						<Logo />
						<nav className="hidden md:flex items-center gap-1">
							<Link href="/about" className="px-3 py-2 rounded-md hover:bg-white/10 transition inline-flex items-center gap-2"><Landmark className="h-4 w-4" />About</Link>
							{menus.map((m) => (
								<div key={m.label} className="relative">
									<button
										className="px-3 py-2 rounded-md hover:bg-white/10 transition inline-flex items-center gap-2"
										onMouseEnter={() => setOpen(m.label)}
										onMouseLeave={() => setOpen((v) => (v === m.label ? null : v))}
									>
										{m.icon}
										<span>{m.label}</span>
										<ChevronDown className="h-4 w-4" />
									</button>
									<AnimatePresence>
										{open === m.label && (
											<motion.div
												initial={{ opacity: 0, y: 6 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: 6 }}
												transition={{ duration: 0.18 }}
												className="absolute left-0 mt-2 min-w-[300px] rounded-xl border border-white/10 bg-black/80 p-3 backdrop-blur"
												onMouseEnter={() => setOpen(m.label)}
												onMouseLeave={() => setOpen(null)}
											>
												<div className="grid grid-cols-1 gap-1">
													{m.items.map((i) => (
														<Link key={i.href} href={i.href} className="group px-3 py-2 rounded-md hover:bg-white/10 transition inline-flex items-center justify-between gap-6">
															<span className="text-sm">{i.label}</span>
															{i.highlight && (
																<span className="text-[10px] uppercase tracking-wider rounded-full bg-white/15 text-white px-2 py-0.5 border border-white/20">Hot</span>
															)}
														</Link>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
							<Link href="/blog" className="px-3 py-2 rounded-md hover:bg-white/10 transition inline-flex items-center gap-2"><Newspaper className="h-4 w-4" />Blog</Link>
							<Link href="/contact" className="px-3 py-2 rounded-md hover:bg-white/10 transition inline-flex items-center gap-2"><Phone className="h-4 w-4" />Contact</Link>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}
