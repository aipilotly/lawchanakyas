import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Internship Lisitngs", description: "Find internships in the legal field." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Internship Lisitngs</h1>
				<div className="premium-card">Open roles and application tips coming soon.</div>
			</div>
		</PageTransition>
	);
}
