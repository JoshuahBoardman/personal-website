import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/content";
import { PostType, ArticleFrontMatter, ProjectFrontMatter } from "@/types";

const SITE_URL = "https://joshuahboardman.com";

export default function sitemap(): MetadataRoute.Sitemap {

	const articles = getAllPosts<ArticleFrontMatter>(PostType.Article);
	const projects = getAllPosts<ProjectFrontMatter>(PostType.Project);

	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: SITE_URL, changeFrequency: "weekly", priority: 1 },
		{ url: `${SITE_URL}/articles`, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
	];

	const articleRoutes: MetadataRoute.Sitemap = articles.map(article => ({
		url: `${SITE_URL}/articles/${article.slug}`,
		lastModified: article.data.date,
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	const projectRoutes: MetadataRoute.Sitemap = projects.map(project => ({
		url: `${SITE_URL}/projects/${project.slug}`,
		lastModified: project.data.date,
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [...staticRoutes, ...articleRoutes, ...projectRoutes];
}
