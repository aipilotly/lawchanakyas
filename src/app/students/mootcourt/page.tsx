import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Mootcourt Competitions", description: "Track and prepare for mootcourts." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Mootcourt Competitions</h1>
				<div className="premium-card">Listings and resources coming soon.</div>
			</div>
		</PageTransition>
	);
}
