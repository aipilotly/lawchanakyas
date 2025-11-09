"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
	ChevronDown,
	Gavel,
	Scale,
	Landmark,
	BookOpen,
	Users2,
	GraduationCap,
	PenTool,
	MessageSquareWarning,
	Network,
	BriefcaseBusiness,
	Bot,
	Sparkles,
	FileText,
	Building2,
	Shield,
	Newspaper,
	Phone,
	Menu,
	X,
} from "lucide-react";
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
		{ href: "/courtroom-simulation", label: "Courtroom simulation app", highlight: true },
		{ href: "/ai-legal-chatbot", label: "AI based legal chat bot", highlight: true },
		{ href: "/advocates/directory", label: "Advocates Directory" },
		{ href: "/advocates/draft-bundles", label: "Draft bundles" },
		{ href: "/advocates/jobs", label: "Job Lisitngs" },
		{ href: "/advocates/networking-events", label: "Networking Events" },
	],
};

const students: MegaMenu = {
	label: "For Law Students",
	icon: <GraduationCap className="h-4 w-4" />,
	baseHref: "/students",
	items: [
		{ href: "/courtroom-simulation", label: "Courtroom simulation app", highlight: true },
		{ href: "/ai-legal-chatbot", label: "AI based legal chat bot", highlight: true },
		{ href: "/students/mindmaps", label: "Mindmap of bare acts", highlight: true },
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
		{ href: "/public/client-case-dashboard", label: "Client/Case Dashboard", highlight: true },
		{ href: "/public/legal-consultation", label: "Legal Consultation Services" },
		{ href: "/public/case-studies", label: "Case Studies" },
	],
};

const menus: MegaMenu[] = [advocates, students, publicMenu];

const isProduction = process.env.NODE_ENV === "production";
const showNavigation = !isProduction;

export default function Navbar() {
	const [open, setOpen] = useState<string | null>(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileSection, setMobileSection] = useState<string | null>(null);

	useEffect(() => {
		if (!showNavigation) {
			return;
		}

		if (mobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	const toggleMobileSection = (label: string) => {
		setMobileSection((prev) => (prev === label ? null : label));
	};

	return (
		<div className="sticky top-0 z-50">
			<header className="border-b border-black/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/90">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex h-16 justify-between">
						<Logo />
						{showNavigation && (
							<>
								<nav className="hidden md:flex items-center gap-1 text-black">
									{menus.map((m) => (
										<div key={m.label} className="relative">
											<button
												className="nav-link"
												onMouseEnter={() => setOpen(m.label)}
												onMouseLeave={() => setOpen((v) => (v === m.label ? null : v))}
											>
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
														className="absolute left-0 mt-2 min-w-[300px] rounded-xl border border-black/10 bg-white p-3 shadow-xl"
														onMouseEnter={() => setOpen(m.label)}
														onMouseLeave={() => setOpen(null)}
													>
														<div className="grid grid-cols-1 gap-1">
															{m.items.map((i) => (
																<Link key={i.href} href={i.href} className="group px-3 py-2 rounded-md hover:bg-black/5 transition inline-flex items-center justify-between gap-6">
																	<span className="text-sm text-black">{i.label}</span>
																	{i.highlight && (
																		<span className="text-[10px] uppercase tracking-wider rounded-full bg-black text-white px-2 py-0.5 border border-black/20">Hot</span>
																	)}
																</Link>
															))}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									))}
									<Link href="/blog" className="nav-link">
										Blog
									</Link>
									<Link href="/about" className="nav-link">
										About
									</Link>
									<Link href="/contact" className="nav-link">
										Contact
									</Link>
								</nav>
								<button
									type="button"
									className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/40"
									onClick={() => setMobileOpen((prev) => !prev)}
									aria-label="Toggle navigation"
								>
									{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
								</button>
							</>
						)}
					</div>
				</div>
				{showNavigation && (
					<AnimatePresence>
						{mobileOpen && (
							<motion.div
								className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
							>
								<div className="space-y-4 px-6 py-4">
									{menus.map((m) => {
										const isActive = mobileSection === m.label;

										return (
											<div key={m.label} className="rounded-lg border border-black/10 bg-white">
												<button
													type="button"
													className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-black"
													onClick={() => toggleMobileSection(m.label)}
												>
													<span className="inline-flex items-center gap-2">
														{m.icon}
														{m.label}
													</span>
													<ChevronDown className={`h-4 w-4 transition-transform ${isActive ? "rotate-180" : ""}`} />
												</button>
												<AnimatePresence initial={false}>
													{isActive && (
														<motion.div
															initial={{ height: 0, opacity: 0 }}
															animate={{ height: "auto", opacity: 1 }}
															exit={{ height: 0, opacity: 0 }}
															transition={{ duration: 0.2 }}
															className="overflow-hidden border-t border-black/10"
														>
															<div className="flex flex-col gap-1 px-4 py-3">
																<Link href={m.baseHref} className="text-xs font-semibold uppercase tracking-wide text-black">
																	View all {m.label.toLowerCase()}
																</Link>
																{m.items.map((i) => (
																	<Link
																		key={i.href}
																		href={i.href}
																		className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-black hover:bg-black/5"
																	>
																		<span>{i.label}</span>
																		{i.highlight && (
																			<span className="text-[10px] uppercase tracking-wider rounded-full bg-black text-white px-2 py-0.5 border border-black/20">
																				Hot
																			</span>
																		)}
																	</Link>
																))}
															</div>
														</motion.div>
													)}
												</AnimatePresence>
											</div>
										);
									})}
									<div className="space-y-2 rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black">
										<Link href="/blog" className="flex items-center gap-2 transition hover:text-black/60">
											<BookOpen className="h-4 w-4" />
											<span>Blog</span>
										</Link>
										<Link href="/about" className="flex items-center gap-2 transition hover:text-black/60">
											<Building2 className="h-4 w-4" />
											<span>About</span>
										</Link>
										<Link href="/contact" className="flex items-center gap-2 transition hover:text-black/60">
											<Phone className="h-4 w-4" />
											<span>Contact</span>
										</Link>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				)}
			</header>
		</div>
	);
}
