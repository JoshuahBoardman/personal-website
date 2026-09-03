import Link from "next/link";

import { getPost, getAllPosts, generateHtml, extractHeaders } from "@/lib/content";
import { PostType, ProjectFrontMatter } from "@/types";
import RelatedPosts from "@/components/RelatedPosts";
import TableOfContents from "@/components/TableOfContents";


export function generateStaticParams() {
	const projects = getAllPosts<ProjectFrontMatter>(PostType.Project);

	return projects.map(project => ({ slug: project.slug }));
}

export const dynamicParams = false

export default async function Page(
	{
		params
	}: {
		params: Promise<{ slug: string }>
	}) {

	const { slug } = await params;

	const project = getPost<ProjectFrontMatter>(PostType.Project, slug);

	const contentHtml = await generateHtml(project.content);

	const headers = extractHeaders(project.content);

	return (
		<div className="flex flex-col gap-11">
			<div className="flex flex-col gap-5.5">
				<Link href="/projects" >
					<span className="self-start border-none bg-transparent p-0 text-[11px] tracking-widest uppercase text-text2 font-mono">← Projects</span>
				</Link>
				<div className="flex gap-2 flex-wrap text-[11px] tracking-[.06em] uppercase text-text2 font-mono">
					{project.data.tags.map(tag =>
						<span key={`${project.slug} -${tag} `} className="py-1 px-2.25 rounded-md bg-surface shadow-[inset_0_0_0_1px_var(--line)] border-l-2 border-olive">{tag}</span>
					)}
				</div>
				<h1 className="text-[46px] leading-[1.06] tracking-[-.02em]">{project.data.name}</h1>
				<p className="text-[19px] leading-[1.7] max-w-[62ch] text-text2">{project.data.description}</p>
				<div className="flex gap-4 flex-wrap items-center text-xs tracking-[.06em] border-t border-line pt-4 text-text2 font-mono">
					<span className="flex items-center gap-1.75"><span className="w-1.75 h-1.75 rounded-[50%] bg-olive"></span>{project.data.status}</span>
					<span className="opacity-40">/</span><span>{project.data.date}</span>
					<span className="opacity-40">/</span><span>{project.data.type}</span>
				</div>
				{/* TODO: Update these to link to specified links in the frontmatter */}
				<div className="flex gap-3 flex-wrap">
					<span className="rounded-[10px] bg-rust text-on-accent py-3.5 px-5.5 text-[12px] tracking-widest uppercase cursor-pointer font-mono">
						<Link href={project.data.repoLink} target="_blank" rel="noopener noreferrer">View repository →</Link>
					</span>
					{project.data.articleLink &&
						<span className="rounded-[10px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-3.5 px-5.5 text-[12px] tracking-widest uppercase cursor-pointer font-mono">
							<Link href={project.data.articleLink} target="_blank" rel="noopener noreferrer">Related writing</Link>
						</span>}
				</div>
			</div>

			<div className="grid grid-cols-[1fr_240px] gap-11 items-start">

				<div className="content flex flex-col gap-6.5 max-w-[66ch]" dangerouslySetInnerHTML={{ __html: contentHtml }} />

				<TableOfContents headers={headers} />

			</div>

			{/* TODO: Decide how to end projects 
				- I like the buttons, but I'm unsure, if they should be part of the Related Posts section or not */}
			<div className="flex gap-3 flex-wrap">
				<span className="rounded-[10px] bg-rust text-on-accent py-3.5 px-5.5 text-[12px] tracking-widest uppercase cursor-pointer font-mono">
					<Link href={project.data.repoLink} target="_blank" rel="noopener noreferrer">View repository →</Link>
				</span>
				{project.data.articleLink &&
					<span className="rounded-[10px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-3.5 px-5.5 text-[12px] tracking-widest uppercase cursor-pointer font-mono">
						<Link href={project.data.articleLink} target="_blank" rel="noopener noreferrer">Related writing</Link>
					</span>}
			</div>

			<RelatedPosts<ProjectFrontMatter> postType={PostType.Project} currentPost={project} />

		</div>
	);
}
