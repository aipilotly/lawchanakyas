import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Privacy Policy", description: "LawChanakyas Privacy Policy" };

export default function PrivacyPolicyPage() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-5xl px-6 py-16 text-black">
				<h1 className="h1 mb-6">Privacy Policy</h1>
				<p className="text-black/80 mb-4">This is a placeholder privacy policy page. Add your data handling, cookies, and user rights statements here.</p>
				<p className="text-black/70">For questions, contact us via the Contact page.</p>
			</div>
		</PageTransition>
	);
}
