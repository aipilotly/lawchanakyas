import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="inline-flex">
			<div className="relative h-12 w-auto">
				<Image 
					src="/logo.png" 
					alt="LawChanakyas" 
					width={128}
					height={48}
					className="object-contain"
					priority
				/>
			</div>
		</Link>
	);
}
