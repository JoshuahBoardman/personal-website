import type { Metadata } from "next";
import { PostType, ProjectFrontMatter } from "@/types";
import { getAllPosts } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
	title: "Projects",
	description: "Things I keep coming back to.",
	openGraph: {
		title: "Projects",
		description: "Things I keep coming back to.",
		type: "website",
	},
};

export default function Projects() {

	//NOTE: MAYBE: Update the sort to be adjustable in the UI.
	const projects = getAllPosts<ProjectFrontMatter>(PostType.Project).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

	return (
		<div className="flex flex-col gap-6 fade-up">
			<div className="flex items-baseline justify-between gap-4 flex-wrap">
				<h1 className="text-[30px] leading-[1.2]">Projects</h1>
				<span className="text-[11px] tracking-widest uppercase text-text2 font-mono">Things I keep coming back to</span>
			</div>

			{ /*TODO: Update this to have default displays if a property is missing*/}
			<div className="grid grid-cols-2 gap-3.5 max-[860px]:grid-cols-1">

				{projects.map(project =>
					<ProjectCard key={project.data.name} project={project} />
				)}
			</div>


		</div>
	);
}
