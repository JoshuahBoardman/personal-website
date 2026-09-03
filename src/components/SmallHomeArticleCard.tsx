import { Post, ArticleFrontMatter } from "@/types";
import Link from "next/link";

export default function SmallHomeArticleCard({ article }: { article: Post<ArticleFrontMatter> }) {
	return (
		<Link href={`/articles/${article.slug}`}>
			<article className="flex flex-col justify-between gap-5 rounded-2xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] p-5.5 min-h-47.5 cursor-pointer transition-[background,transform] duration-200 ease w-full h-full">
				<span className="text-[11px] tracking-[0.08em] uppercase text-text2 font-mono">{article.data.date}</span>
				<div className="flex flex-col gap-3">
					<h3 className="text-[21px] leading-[1.2]">{article.data.name}</h3>
					<div className="flex items-center gap-2.5 flex-wrap text-[11px] tracking-[0.06em] uppercase font-mono">
						{article.data.tags.map(tag =>
							<span key={`${article.slug}-${tag}`} className="py-1 px-2.25 rounded-[999px] border border-rust/40 text-rust">{tag}</span>
						)}
					</div>
				</div>
			</article>
		</Link>
	);

}
