import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Mindmap of bare acts", description: "Interactive legal mindmaps." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<div className="mb-4 text-[10px] uppercase tracking-wider rounded-full bg-white/15 text-white px-2 py-0.5 border border-white/20 inline-block">Hot</div>
				<h1 className="h1 mb-6">Mindmap of bare acts</h1>
				<div className="premium-card">Plug your mindmap tool here.</div>
			</div>
		</PageTransition>
	);
}
