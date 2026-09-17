import { PostType, ArticleFrontMatter, FrontMatter, Post } from "@/types";
import { getAllPosts } from "@/lib/content";
import Link from "next/link";
import Tags from "@/components/Tags";
import RadioFilter from "@/components/RadioFilter";

export default async function Articles({ searchParams }: { searchParams: Promise<{ [key: string]: string | boolean | undefined }> }) {

	const filters = Object.keys(await searchParams);

	// TODO: update this to check for specific strings
	function filterPosts<T extends FrontMatter>(posts: Post<T>[], filters: string[] = []): Post<T>[] {
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


	//TODO: Need to grab the URL params and filter based on them.
	const articles = getAllPosts<ArticleFrontMatter>(PostType.Article);
	const filteredArticles = filterPosts<ArticleFrontMatter>(articles, filters);

	return (

		<div className="flex flex-col gap-6.5 fade-up">
			<h1 className="text-[30px] leading-[1.2]">Writing</h1>
			{/* TODO: Update the total and filteredItems to be based on the sorted list*/}
			<RadioFilter searchParams={filters} totalItems={articles.length} filteredItems={filteredArticles.length} />

			{ /*TODO: Update this to have default displays if a property is missing*/}
			{/* TODO: Break this out into a article card component */}
			<div className="flex flex-col gap-3">
				{filteredArticles.map(article =>
					<Link key={article.slug} href={`/articles/${article.slug}`}>
						<article className="grid grid-cols-[110px_1fr] gap-6 items-start rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-6 px-6.5 cursor-pointer transition-[background,transform] duration-200 ease hover:bg-surface2 hover:translate-x-1 max-[640px]:grid-cols-1 max-[640px]:gap-2.5 max-[640px]:py-5 max-[640px]:px-5">
							<span className="text-[11px] tracking-[.06em] uppercase pt-1.5 text-text2 font-mono max-[640px]:pt-0">{article.data.date}</span>
							<div className="flex flex-col gap-2.5">
								<h3 className="text-[23px] leading-[1.2] max-[640px]:text-[20px]">{article.data.name}</h3>
								<p className="text-base leading-[1.6] max-w-[62ch] text-text2">{article.data.description}</p>
								<div className="flex gap-2 flex-wrap text-[11px] tracking-[.06em] uppercase mt-0.5 font-mono">
									{/* TODO: Update tags to display an array of tags with a limit of like 3 */}
									<Tags<ArticleFrontMatter> postType={PostType.Article} post={article} />
									<span className="opacity-70 py-1 text-text2">{article.data.duration}</span>
								</div>
							</div>
						</article>
					</Link>
				)}
			</div>

			{/* TODO: Mights want to implement pagination */}
		</div>
	);
}
