import type { Metadata } from "next";
import { PostType, ArticleFrontMatter, Post } from "@/types";
import { getAllPosts } from "@/lib/content";
import RadioFilter from "@/components/RadioFilter";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
	title: "Writing",
	description: "The musings of my mind.",
	openGraph: {
		title: "Writing",
		description: "The musings of my mind.",
		type: "website",
	},
};

function filterArticles(posts: Post<ArticleFrontMatter>[], filters: string[] = []): Post<ArticleFrontMatter>[] {
	let filteredPosts = [...posts];
	const sortOldest = filters.includes("oldest");

	filteredPosts.sort((a, b) => {
		return sortOldest ? new Date(a.data.date).getTime() - new Date(b.data.date).getTime()
			: new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
	});

	const tagFilters = filters.filter(filter => filter != "oldest");

	const tagSet = new Set(tagFilters);

	return tagFilters.length === 0 ? filteredPosts : filteredPosts.filter(post => {
		return post.data.tags.some(tag => tagSet.has(tag.toLowerCase()));
	})
}

export default async function Articles({ searchParams }: { searchParams: Promise<{ [key: string]: string | boolean | undefined }> }) {

	const filters = Object.keys(await searchParams);

	const articles = getAllPosts<ArticleFrontMatter>(PostType.Article);
	const filteredArticles = filterArticles(articles, filters);

	return (

		<div className="flex flex-col gap-6.5 fade-up">
			<h1 className="text-[30px] leading-[1.2]">Writing</h1>
			<RadioFilter searchParams={filters} totalItems={articles.length} filteredItems={filteredArticles.length} />

			<div className="flex flex-col gap-3">
				{filteredArticles.length === 0 ? (
					<p className="text-base text-text2">
						{articles.length === 0 ? "Nothing published yet." : "No articles match this filter."}
					</p>
				) : (
					filteredArticles.map(article =>
						<ArticleCard key={article.slug} article={article} />
					)
				)}
			</div>

			{/* NOTE: MAYBE: Mights want to implement pagination */}
		</div>
	);
}
