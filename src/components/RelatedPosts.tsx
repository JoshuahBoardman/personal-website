import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { Post, FrontMatter, PostType, ArticleFrontMatter } from "@/types";
import Tags from "./Tags";

export default function <T extends FrontMatter = FrontMatter>({ postType, currentPost }: { postType: PostType, currentPost: Post<T> }) {

	const relatedPosts = getAllPosts<T>(postType).filter(post => {
		return post.slug !== currentPost.slug &&
			post.data.tags.some((tag) => currentPost.data.tags.includes(tag))
	}).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).slice(0, 3);

	return (<div className="flex flex-col gap-6.5 border-t border-line pt-6.5">
		<span className="text-[11px] tracking-[.14em] uppercase text-text2 font-mono">Related {postType}</span>
		<div className="grid grid-cols-3 gap-3">
			{relatedPosts.map(post =>
				<Link href={`/${postType}/${post.slug}`} key={`related-post-${post.slug}`}>
					<article className="flex flex-col justify-between gap-4 min-h-40 rounded-3.5 bg-surface rounded-[14px] shadow-[inset_0_0_0_1px_var(--line)] border-l-3 border-olive p-5 cursor-pointer h-full w-full">
						<span className="text-[11px] tracking-[.08em] uppercase text-text2 font-mono">{post.data.date}</span>
						<div className="flex flex-col gap-2.5">
							<h3 className="text-[18px] leading-tight">{post.data.name}</h3>
							<div className=" flex gap-2 flex-wrap">
								<Tags<T> postType={postType} post={post} maxCount={1} />
							</div>
						</div>
					</article>
				</ Link>
			)}
		</div>
	</div>
	)
}
