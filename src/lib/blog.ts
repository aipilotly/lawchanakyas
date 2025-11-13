import blogPosts from "@/data/blog-posts.json";

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	image: string;
	thumbnail: string;
	date: string;
	author: string;
}

export function getAllPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
	return getAllPosts().slice(0, limit);
}

