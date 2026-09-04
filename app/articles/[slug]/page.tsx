import Link from "next/link";
import { remark } from "remark";


import { getPost, getAllPosts, generateHtml, extractHeaders } from "@/lib/content";
import { PostType, ArticleFrontMatter } from "@/types";
import RelatedPosts from "@/components/RelatedPosts";
import TableOfContents from "@/components/TableOfContents";
import Tags from "@/components/Tags";


export function generateStaticParams() {
	const articles = getAllPosts<ArticleFrontMatter>(PostType.Article);
	return articles.map(article => ({ slug: article.slug }));
}

export const dynamicParams = false

// TODO: once there's a real content source (CMS/MDX), this becomes
// `export default async function Page({ params }: PageProps<"/Articles/[slug]">)`
// and looks the article up by `(await params).slug`. Left static for now —
// no data layer to look up against yet.
export default async function Page(
	{
		params
	}: {
		params: Promise<{ slug: string }>
	}) {

	const { slug } = await params;

	const article = getPost<ArticleFrontMatter>(PostType.Article, slug);

	const contentHtml = await generateHtml(article.content);

	const headers = extractHeaders(article.content);

	return (
		<div className="flex flex-col gap-11">
			<div className="flex flex-col gap-5.5 max-w-[70ch]">
				<Link href="/articles"><span className="self-start border-none bg-transparent p-0 text-[11px] tracking-[.1em] uppercase text-text2 font-mono">← Articles</span> </Link>
				< div className="flex gap-2 flex-wrap text-[11px] tracking-[.06em] uppercase font-mono">
					<Tags<ArticleFrontMatter> postType={PostType.Article} post={article} />
				</div>
				<h1 className="text-[46px] leading-[1.06] tracking-[-.02em]">{article.data.name}</h1>
				<div className="flex gap-4 flex-wrap text-xs tracking-[.06em] border-t border-line pt-4 text-text2 font-mono">
					<span>{article.data.date}</span><span className="opacity-40">/</span><span>{article.data.duration} read</span>
				</div>
			</div>

			<div className="grid grid-cols-[1fr_240px] gap-11 items-start">
				<div className="content flex flex-col gap-6.5 max-w-[68ch]" dangerouslySetInnerHTML={{ __html: contentHtml }} />
				<TableOfContents headers={headers} />
			</div>
			<RelatedPosts<ArticleFrontMatter> postType={PostType.Article} currentPost={article} />

		</div >
	);
}
