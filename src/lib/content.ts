import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import remarkRehype from 'remark-rehype'
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { Heading, InlineCode, PhrasingContent, Text } from "mdast";
import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";

import type { Post, PostType, FrontMatter } from "@/types";

const contentPath = path.join(process.cwd(), "content");

const postsCache = new Map<PostType, Post<FrontMatter>[]>();

export function getAllPosts<T extends FrontMatter = FrontMatter>(type: PostType): Post<T>[] {

	const cached = postsCache.get(type);
	if (cached) return cached as Post<T>[];

	const directory = path.join(contentPath, type);

	if (!fs.existsSync(directory)) return [];

	const files: string[] = fs.readdirSync(directory).filter(file => file.endsWith(".md"));

	const posts = files
		.map(file => {
			const slug = file.replace(/\.md/g, "");
			const rawData = fs.readFileSync(path.join(directory, file), "utf-8");
			const { data, content } = matter(rawData);
			return { slug, data: data as T, content };
		})
		.filter(isRenderablePost);

	postsCache.set(type, posts as Post<FrontMatter>[]);
	return posts;
}

function isRenderablePost<T extends FrontMatter>(post: Post<T>): boolean {
	return Boolean(post.data?.name) && Boolean(post.content?.trim());
}

export function getPost<T extends FrontMatter = FrontMatter>(type: PostType, slug: string): Post<T> {

	const filePath = path.join(contentPath, type, `${slug}.md`);

	const rawData = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(rawData);

	return { slug, data: data as T, content };
}

export async function generateHtml(content: string) {

	const processedContent = await remark()
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeStringify)
		.process(content);

	return processedContent.toString();
}

export function extractHeaders(content: string): { title: string, slug: string, depth: number }[] {
	const tree = remark().parse(content);
	const headers: { title: string, slug: string, depth: number }[] = [];
	const slugger = new GithubSlugger();

	visit(tree, 'heading', function(node: Heading) {
		const text = node.children
			.filter((child: PhrasingContent): child is Text | InlineCode => child.type === 'text' || child.type === 'inlineCode')
			.map(child => child.value)
			.join("");

		const slug = slugger.slug(text);

		headers.push({ title: text, slug: slug, depth: node.depth });
	});

	return headers;
}
