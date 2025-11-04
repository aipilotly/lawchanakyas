import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Networking Events", description: "Meet-ups and conferences for advocates." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Networking Events</h1>
				<div className="premium-card">Calendar and RSVP features coming soon.</div>
			</div>
		</PageTransition>
	);
}
