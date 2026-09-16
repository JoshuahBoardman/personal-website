import { PostType, ArticleFrontMatter } from "@/types";
import { getAllPosts } from "@/lib/content";
import Link from "next/link";
import Tags from "@/components/Tags";
import RadioFilter from "@/components/RadioFilter";


// TODO: this whole page (filter pads, meter, feed sort/filter) is currently
// a static mockup of the original "synth channel strip" concept. Recommend
// making the device panel a client component with its own useState for the
// active tag(s) / sort order, and reintroducing the design's CSS variables +
// data-theme attribute (or next-themes) for the light/dark toggle once that
// gets wired up globally.
export default function Articles() {

	const articles = getAllPosts<ArticleFrontMatter>(PostType.Article).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

	return (

		<div className="flex flex-col gap-6.5 fade-up">
			<h1 className="text-[30px] leading-[1.2]">Writing</h1>

			<RadioFilter totalItems={8} filteredItems={8} />

			{ /*TODO: Update this to have default displays if a property is missing*/}
			{/* TODO: Break this out into a article card component */}
			<div className="flex flex-col gap-3">
				{articles.map(article =>
					<Link key={article.slug} href={`/articles/${article.slug}`}>
						<article className="grid grid-cols-[110px_1fr] gap-6 items-start rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-6 px-6.5 cursor-pointer transition-[background,transform] duration-200 ease hover:bg-surface2 hover:translate-x-1">
							<span className="text-[11px] tracking-[.06em] uppercase pt-1.5 text-text2 font-mono">{article.data.date}</span>
							<div className="flex flex-col gap-2.5">
								<h3 className="text-[23px] leading-[1.2]">{article.data.name}</h3>
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
