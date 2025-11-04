import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Draft bundles", description: "Curated legal draft bundles for advocates." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Draft bundles</h1>
				<div className="premium-card">Coming soon: meticulously prepared pleadings, petitions, and templates.</div>
			</div>
		</PageTransition>
	);
}
