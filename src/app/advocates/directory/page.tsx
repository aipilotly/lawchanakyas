import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Advocates Directory", description: "Discover and connect with advocates." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Advocates Directory</h1>
				<div className="premium-card">Search and profiles coming soon.</div>
			</div>
		</PageTransition>
	);
}
