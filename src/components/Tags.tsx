import { Post, FrontMatter, PostType } from "@/types";

export default function Tags<T extends FrontMatter>({ postType, post, maxCount = 3 }: { postType: PostType, post: Post<T>, maxCount?: number }) {

	const amountOfHiddenTags = post.data.tags.length - maxCount;
	const displayHiddenTagNumber = amountOfHiddenTags > 0;

	const TagStyles = {
		software: "border-rust/40 text-rust",
		music: "border-olive/40 text-olive",
		tea: "border-gold/40 text-gold",
		literature: "border-ink/40 text-ink"

	} as const;

	type Tag = keyof typeof TagStyles;


	function isKnownTag(tag: string): tag is Tag {
		return tag in TagStyles;
	}

	function tagStyle(tag: string): string {

		const isArticle = postType === PostType.Article;

		let style = "text-[11px] tracking-[0.06em] uppercase font-mono ";

		style += isArticle ? "rounded-[999px] border" : "rounded-md bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 "

		if (isArticle) {
			style += ` ${isKnownTag(tag) ? TagStyles[tag] : "border-line text-text2"}`;
		}

		return style;
	}

	return (
		<>
			{post.data.tags.slice(0, maxCount).map((tag: string) =>
				(<span key={`${post.slug}-${tag}`} className={`py-1 px-2.25 ${tagStyle(tag.toLowerCase())}`}>{tag}</span>)
			)}
			{/*TODO: Add a on hover component to view hidden tags*/}
			{displayHiddenTagNumber && (
				<span className={`py-1 px-2.25 ${tagStyle("")}`}> +{amountOfHiddenTags}</span >
			)}
		</>

	)
}
