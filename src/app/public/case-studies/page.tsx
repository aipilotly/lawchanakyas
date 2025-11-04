import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Case Studies", description: "Impactful legal outcomes and stories." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Case Studies</h1>
				<div className="premium-card">Case narratives and analyses coming soon.</div>
			</div>
		</PageTransition>
	);
}
