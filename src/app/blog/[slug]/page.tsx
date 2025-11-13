import PageTransition from "@/components/PageTransition";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	
	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<PageTransition>
			<div className="mx-auto max-w-4xl px-6 py-16">
				<Link
					href="/blog"
					className="inline-flex items-center gap-2 text-black/70 hover:text-black mb-8 transition-colors"
				>
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
					Back to Blog
				</Link>

				<article className="premium-card">
					{post.image && (
						<div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl mb-8 -mx-6 md:-mx-10 -mt-6 md:-mt-10">
							<Image
								src={post.image}
								alt={post.title}
								fill
								className="object-cover"
								priority
							/>
						</div>
					)}

					<header className="mb-8">
						<h1 className="h1 mb-4">{post.title}</h1>
						
						<div className="flex flex-wrap items-center gap-4 text-sm text-black/60 pb-6 border-b border-black/10">
							<span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
							<span>•</span>
							<span>By {post.author}</span>
						</div>
					</header>

					<div className="prose prose-lg max-w-none">
						{post.content.split("\n\n").map((paragraph, index) => {
							const trimmed = paragraph.trim();
							if (!trimmed) return null;
							
							if (trimmed.startsWith("## ")) {
								return <h2 key={index} className="h2 mt-8 mb-4">{trimmed.replace(/^## /, "")}</h2>;
							}
							if (trimmed.startsWith("### ")) {
								return <h3 key={index} className="text-2xl font-serif mt-6 mb-3">{trimmed.replace(/^### /, "")}</h3>;
							}
							if (trimmed.match(/^\d+\.\s/)) {
								// Numbered list
								const items = trimmed.split(/\n(?=\d+\.\s)/);
								return (
									<ol key={index} className="list-decimal list-inside space-y-2 mb-4 text-black/90">
										{items.map((item, itemIndex) => (
											<li key={itemIndex} className="leading-relaxed">{item.replace(/^\d+\.\s/, "")}</li>
										))}
									</ol>
								);
							}
							if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
								// Bullet list
								const items = trimmed.split(/\n(?=[-*]\s)/);
								return (
									<ul key={index} className="list-disc list-inside space-y-2 mb-4 text-black/90">
										{items.map((item, itemIndex) => (
											<li key={itemIndex} className="leading-relaxed">{item.replace(/^[-*]\s/, "")}</li>
										))}
									</ul>
								);
							}
							return <p key={index} className="text-black/90 leading-relaxed mb-4">{trimmed}</p>;
						})}
					</div>
				</article>
			</div>
		</PageTransition>
	);
}

