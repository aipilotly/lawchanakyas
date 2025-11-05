import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Courtroom simulation app", description: "Interactive courtroom practice for advocates." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<div className="mb-4 text-[10px] uppercase tracking-wider rounded-full bg-black text-white px-2 py-0.5 border border-black/20 inline-block">Hot</div>
				<h1 className="h1 mb-6">Courtroom simulation app</h1>
				<div className="premium-card">Immersive simulations coming soon.</div>
			</div>
		</PageTransition>
	);
}
