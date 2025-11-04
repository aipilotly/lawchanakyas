import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Blog", description: "Insights, analysis, and updates from LawChanakyas." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16">
				<h1 className="h1 mb-6">Blog</h1>
				<div className="premium-card">Publish articles here. MDX/Headless CMS ready.</div>
			</div>
		</PageTransition>
	);
}
