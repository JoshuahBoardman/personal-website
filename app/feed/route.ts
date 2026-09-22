import { Feed } from "feed";

import { getAllPosts } from "@/lib/content";
import { PostType, ArticleFrontMatter } from "@/types";

const SITE_URL = "https://joshuahboardman.com";


export const dynamic = "force-static";

export async function GET() {

	const author = {
		name: "Joshuah Boardman",
		email: "joshuahboardman@gmail.com",
		link: `${SITE_URL}/about`,
	}

	// NOTE: Might be worth adding an image and favicon in the future
	const feed = new Feed({
		title: "JoshuahBoardman.com",
		description: "Joshuah Boardmans blog RSS feed.",
		id: "joshuahboardman.com",
		link: SITE_URL,
		language: "en",
		//TODO: Update tehse 
		feedLinks: {
			json: `${SITE_URL}/feed/json`,
			atom: `${SITE_URL}/feed/atom`
		},
		author: author,
		copyright: `All rights reserved ${new Date().getFullYear()}, Joshuah Boardman`,
		updated: new Date(),
		generator: "Next.js",
	});


	const posts = getAllPosts<ArticleFrontMatter>(PostType.Article);

	posts.forEach(post => {
		const url = `${SITE_URL}/articles/${post.slug}`;
		feed.addItem({
			title: post.data.name,
			link: url,
			date: new Date(post.data.date),
			id: url,
			guid: url,
			description: post.data.description,
			author: [author],
		});
	});

	return new Response(feed.rss2(), {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
}
