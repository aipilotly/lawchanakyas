import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Job Lisitngs", description: "Opportunities for legal professionals." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Job Lisitngs</h1>
				<div className="premium-card">Curated legal jobs coming soon.</div>
			</div>
		</PageTransition>
	);
}
