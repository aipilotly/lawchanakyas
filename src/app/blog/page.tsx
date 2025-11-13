import PageTransition from "@/components/PageTransition";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Blog", description: "Insights, analysis, and updates from LawChanakyas." };

export default function Page() {
	const posts = getAllPosts();

	return (
		<PageTransition>
			<div className="mx-auto max-w-6xl px-6 py-16">
				<h1 className="h1 mb-12">Blog</h1>
				
				{posts.length === 0 ? (
					<div className="premium-card text-center py-12">
						<p className="text-lg text-black/70">No blog posts yet. Check back soon!</p>
					</div>
				) : (
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{posts.map((post) => (
							<article
								key={post.slug}
								className="premium-card hover-lift group cursor-pointer"
							>
								<Link href={`/blog/${post.slug}`} className="block">
									<div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 bg-black/5">
										{post.thumbnail ? (
											<Image
												src={post.thumbnail}
												alt={post.title}
												fill
												className="object-cover transition-transform duration-300 group-hover:scale-105"
											/>
										) : (
											<div className="flex items-center justify-center h-full text-black/30">
												<svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
												</svg>
											</div>
										)}
									</div>
									
									<h2 className="h2 mb-3 text-xl md:text-2xl group-hover:text-black/80 transition-colors">
										{post.title}
									</h2>
									
									<p className="text-black/70 mb-4 line-clamp-3">
										{post.excerpt}
									</p>
									
									<div className="flex items-center justify-between text-sm text-black/60 mb-4">
										<span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
										<span>{post.author}</span>
									</div>
									
									<div className="inline-flex items-center gap-2 text-black/80 font-medium group-hover:text-black transition-colors">
										Read more
										<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</Link>
							</article>
						))}
					</div>
				)}
			</div>
		</PageTransition>
	);
}
