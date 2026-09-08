import { Post, ArticleFrontMatter, PostType } from "@/types";
import Tags from "./Tags";
import Link from "next/link";

export default function SmallHomeArticleCard({ article }: { article: Post<ArticleFrontMatter> }) {
	return (
		<Link href={`/articles/${article.slug}`}>
			<article className="flex flex-col justify-between gap-5 rounded-2xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] p-5.5 min-h-47.5 cursor-pointer transition-[background,transform] duration-200 ease w-full h-full hover:bg-surface2 hover:-translate-y-[3px]">
				<span className="text-[11px] tracking-[0.08em] uppercase text-text2 font-mono">{article.data.date}</span>
				<div className="flex flex-col gap-3">
					<h3 className="text-[21px] leading-[1.2]">{article.data.name}</h3>
					<div className="flex items-center gap-2.5 flex-wrap text-[11px] tracking-[0.06em] uppercase font-mono">
						<Tags<ArticleFrontMatter> postType={PostType.Article} post={article} maxCount={1} />
					</div>
				</div>
			</article>
		</Link>
	);

}
