import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Investigation", description: "Legal investigation services for the public." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16 text-black">
				<h1 className="h1 mb-6">Investigation</h1>
				<div className="premium-card">Investigation services and resources coming soon.</div>
			</div>
		</PageTransition>
	);
}



