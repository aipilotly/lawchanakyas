import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Courtroom simulation app", description: "Practice courtroom proceedings for students." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<div className="mb-4 text-[10px] uppercase tracking-wider rounded-full bg-white/15 text-white px-2 py-0.5 border border-white/20 inline-block">Hot</div>
				<h1 className="h1 mb-6">Courtroom simulation app</h1>
				<div className="premium-card">Student-focused scenarios coming soon.</div>
			</div>
		</PageTransition>
	);
}
