import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Legal Consultation Services", description: "Schedule trusted legal consultations." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Legal Consultation Services</h1>
				<div className="premium-card">Booking and intake form placeholder.</div>
			</div>
		</PageTransition>
	);
}
