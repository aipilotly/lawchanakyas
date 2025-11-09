import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Client/Case Dashboard", description: "Client and case management dashboard." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16 text-black">
				<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/20 bg-black px-3 py-1 text-[10px] uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
					Hot
				</div>
				<h1 className="h1 mb-6">Client/Case Dashboard</h1>
				<div className="premium-card">Dashboard for tracking clients and cases coming soon.</div>
			</div>
		</PageTransition>
	);
}



