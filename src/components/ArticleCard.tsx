import Link from "next/link"
import Tags from "./Tags"
import { ArticleFrontMatter, PostType, Post } from "@/types"

export default function ArticleCard({ article }: { article: Post<ArticleFrontMatter> }) {

	return (<Link href={`/articles/${article.slug}`}>
		<article className="grid grid-cols-[110px_1fr] gap-6 items-start rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-6 px-6.5 cursor-pointer transition-[background,transform] duration-200 ease hover:bg-surface2 hover:translate-x-1 max-[640px]:grid-cols-1 max-[640px]:gap-2.5 max-[640px]:py-5 max-[640px]:px-5">
			<span className="text-[11px] tracking-[.06em] uppercase pt-1.5 text-text2 font-mono max-[640px]:pt-0">{article.data.date}</span>
			<div className="flex flex-col gap-2.5">
				<h3 className="text-[23px] leading-[1.2] max-[640px]:text-[20px]">{article.data.name}</h3>
				<p className="text-base leading-[1.6] max-w-[62ch] text-text2">{article.data.description}</p>
				<div className="flex gap-2 flex-wrap text-[11px] tracking-[.06em] uppercase mt-0.5 font-mono">
					<Tags<ArticleFrontMatter> postType={PostType.Article} post={article} />
					<span className="opacity-70 py-1 text-text2">{article.data.duration}</span>
				</div>
			</div>
		</article>
	</Link>
	)

}
