import Link from "next/link";

export default function Footer() {
	return (
		<footer className="relative z-10 mt-20 border-t border-black/10 bg-white">
			<div className="mx-auto max-w-7xl px-6 py-10">
				<div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:items-center">
					<p className="text-sm text-black/70 w-full md:text-left text-center">© {new Date().getFullYear()} LawChanakyas. All rights reserved.</p>
					<p className="text-xs text-black/80 w-full text-center">
						Designed by <a href="http://aipilotly.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-black/30 underline-offset-2 hover:text-black">Aipilotly</a> with <span aria-label="love" title="love">♥</span> from India
					</p>
					<nav className="flex w-full items-center justify-center md:justify-end gap-6 text-sm text-black/80">
						<Link href="/about" className="hover:text-black transition">About</Link>
						<Link href="/blog" className="hover:text-black transition">Blog</Link>
						<Link href="/contact" className="hover:text-black transition">Contact</Link>
						<Link href="/privacy-policy" className="hover:text-black transition">Privacy Policy</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}
