import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="inline-flex items-center gap-3">
			<div className="relative h-9 w-9 rounded-full overflow-hidden border border-white/20 shadow-white/10 shadow-sm">
				<Image src="/logo.png" alt="LawChanakyas" fill sizes="36px" className="object-cover" />
			</div>
			<span className="text-lg font-semibold tracking-wide">LAWCHANAKYAS</span>
		</Link>
	);
}
