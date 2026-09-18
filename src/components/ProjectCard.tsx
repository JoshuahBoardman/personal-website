import Link from "next/link";
import Tags from "./Tags";
import { ProjectFrontMatter, Post, PostType } from "@/types";

export default function ProjectCard({ project }: { project: Post<ProjectFrontMatter> }) {

	return (<Link href={`projects/${project.slug}`} className="min-w-0">
		<div className="flex flex-col gap-3.5 rounded-2xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] border-l-3 border-olive p-6.5 cursor-pointer transition-[background,transform] duration-200 ease hover:bg-surface2 hover:-translate-y-0.75">
			<div className="flex items-baseline justify-between gap-3 text-[11px] tracking-[.08em] uppercase text-text2 font-mono">
				<span>{project.data.type}</span><span>{project.data.date}</span>
			</div>
			<h3 className="text-[25px] leading-[1.15]">{project.data.name}</h3>
			<p className="text-base leading-[1.6] text-text2">{project.data.description}</p>
			<div className="flex gap-2 flex-wrap mt-0.5 text-[11px] tracking-[.06em] uppercase text-text2 font-mono">
				<Tags<ProjectFrontMatter> postType={PostType.Project} post={project} />
			</div>
		</div>
	</Link>
	);
}
