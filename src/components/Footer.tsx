import Link from "next/link";

export default function Footer() {
	return (
		<footer className="relative z-10 mt-20 border-t border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
			<div className="mx-auto max-w-7xl px-6 py-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-sm text-white/60">© {new Date().getFullYear()} LawChanakyas. All rights reserved.</p>
					<nav className="flex items-center gap-6 text-sm text-white/70">
						<Link href="/about" className="hover:text-white transition">About</Link>
						<Link href="/blog" className="hover:text-white transition">Blog</Link>
						<Link href="/contact" className="hover:text-white transition">Contact</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}
