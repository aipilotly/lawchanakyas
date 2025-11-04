import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Workshops / Courses", description: "Hands-on workshops and courses." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Workshops / Courses</h1>
				<div className="premium-card">Dynamic curriculum modules coming soon.</div>
			</div>
		</PageTransition>
	);
}
