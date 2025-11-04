import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Testimonials", description: "What our clients say." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Testimonials</h1>
				<div className="premium-card">Testimonials carousel placeholder.</div>
			</div>
		</PageTransition>
	);
}
