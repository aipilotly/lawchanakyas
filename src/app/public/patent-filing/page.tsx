import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Patent Filing Services", description: "End-to-end patent filing assistance." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Patent Filing Services</h1>
				<div className="premium-card">Process overview and CTA coming soon.</div>
			</div>
		</PageTransition>
	);
}
