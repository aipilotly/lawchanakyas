import PageTransition from "@/components/PageTransition";

export const metadata = { title: "Contact", description: "Contact LawChanakyas." };

export default function Page() {
	return (
		<PageTransition>
			<div className="mx-auto max-w-3xl px-6 py-16">
				<h1 className="h1 mb-6">Contact</h1>
				<form className="premium-card grid gap-4">
					<input className="rounded-md bg-white/10 border border-white/20 px-4 py-2" placeholder="Your name" />
					<input className="rounded-md bg-white/10 border border-white/20 px-4 py-2" placeholder="Email" />
					<textarea className="rounded-md bg-white/10 border border-white/20 px-4 py-2" rows={5} placeholder="Message" />
					<button className="btn-primary justify-center">Send</button>
				</form>
			</div>
		</PageTransition>
	);
}
