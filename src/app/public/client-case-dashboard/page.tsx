import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Client/Case Dashboard", description: "Client and case management dashboard." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16 text-black">
				<h1 className="h1 mb-6">Client/Case Dashboard</h1>
				<div className="premium-card">Dashboard for tracking clients and cases coming soon.</div>
			</div>
		</PageTransition>
	);
}



