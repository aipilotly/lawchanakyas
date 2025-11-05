import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="inline-flex items-center">
			<div className="relative h-12 w-auto">
				<Image 
					src="/logo.png" 
					alt="LawChanakyas" 
					width={130}
					height={48}
					className="object-contain"
					priority
				/>
			</div>
		</Link>
	);
}
