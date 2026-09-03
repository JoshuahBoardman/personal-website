
export enum PostType {
	Article = "articles",
	Project = "projects"
}

export interface Post<T extends FrontMatter = FrontMatter> {
	slug: string;
	data: T;
	content: string;
}

export interface FrontMatter {
	name: string;
	date: string;
	description: string;
	tags: string[];
}

export interface ArticleFrontMatter extends FrontMatter {
	status: "draft" | "published" | "archived";
	duration: string;
}

export interface ProjectFrontMatter extends FrontMatter {
	status: "active" | "paused" | "finished" | "archived";
	type: string;
	repoLink: string;
	articleLink?: string;
}

