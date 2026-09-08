import { PostType, ProjectFrontMatter } from "@/types";
import { getAllPosts } from "@/lib/content";
import Link from "next/link";
import Tags from "@/components/Tags";

export default function Projects() {

	// TODO: Filter this by published date
	// - MAYBE make the filter selectable
	const projects = getAllPosts<ProjectFrontMatter>(PostType.Project).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());


	return (
		<div className="flex flex-col gap-6 fade-up">
			<div className="flex items-baseline justify-between gap-4 flex-wrap">
				<h1 className="text-[30px] leading-[1.2]">Projects</h1>
				<span className="text-[11px] tracking-widest uppercase text-text2 font-mono">Things I keep coming back to</span>
			</div>

			{ /*TODO: Update this to have default displays if a property is missing*/}
			<div className="grid grid-cols-2 gap-3.5">

				{/* TODO: Break this out into a project component */}
				{projects.map(project =>
					<Link key={project.data.name} href={`projects/${project.slug}`} >
						<div className="flex flex-col gap-3.5 rounded-2xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] border-l-3 border-olive p-6.5 cursor-pointer transition-[background,transform] duration-200 ease hover:bg-surface2 hover:-translate-y-[3px]">
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
				)}
			</div>


		</div>
	);
}
