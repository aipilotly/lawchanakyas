import type { CSSProperties, ReactNode } from "react";

type FullBleedLayoutProps = {
	children: ReactNode;
	className?: string;
	innerClassName?: string;
	style?: CSSProperties;
};

function combineClassNames(...classes: Array<string | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export default function FullBleedLayout({
	children,
	className,
	innerClassName,
	style,
}: FullBleedLayoutProps) {
	return (
		<div
			className={combineClassNames("full-bleed-layout", className)}
			style={style}
		>
			<div className={combineClassNames("full-bleed-layout__inner", innerClassName)}>
				{children}
			</div>
		</div>
	);
}

