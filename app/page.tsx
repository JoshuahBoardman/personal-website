import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import { PostType, ArticleFrontMatter, ProjectFrontMatter } from "@/types";
import Clock from "@/components/Clock";
import SmallHomeArticleCard from "@/components/SmallHomeArticleCard";
import Tags from "@/components/Tags";

export const metadata: Metadata = {
	title: "JoshuahBoardman.com",
	description: "Joshuah's cozy corner of the internet.",
	openGraph: {
		title: "JoshuahBoardman.com",
		description: "Joshuah's cozy corner of the internet.",
		type: "website",
	},
};

export default function Home() {

	const articles = getAllPosts<ArticleFrontMatter>(PostType.Article).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
	const activeProjects = getAllPosts<ProjectFrontMatter>(PostType.Project).filter((project) => project.data.status === "active");

	const updatedDate = new Date()
		.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
		.toUpperCase()
		.replace(",", "");

	return (
		<div className="max-w-270 my-0 mx-auto fade-up">
			<div className="flex items-baseline justify-between gap-4 mb-4.5 flex-wrap">
				<h1 className="text-[30px] leading-[1.2]">What I'm doing right now</h1>
				<span className="text-[11px] tracking-widest uppercase text-text2 font-mono">Updated {updatedDate}</span>
			</div>
			<div className="grid grid-cols-4 gap-3.5 max-[860px]:grid-cols-1">

				{articles[0] ? (
					<Link href={`/articles/${articles[0].slug}`} className="col-span-2 row-span-2 min-w-0 max-[860px]:col-span-1 max-[860px]:row-span-1">
						<article className="flex flex-col justify-between gap-7 rounded-2xl bg-surface shadow-line hover-shadow-line-lift p-7.5 cursor-pointer transition-[background,transform,box-shadow] duration-200 ease w-full h-full hover:bg-surface2 hover:-translate-y-0.75">
							<div className="flex items-center gap-2.5 text-[11px] tracking-widest uppercase text-text2 font-mono">
								<span className="w-1.75 h-1.75 rounded-xs bg-rust"></span> Latest
							</div>
							<div className="flex flex-col gap-4">
								<h2 className="text-[40px] leading-[1.08] max-[640px]:text-[29px] max-[640px]:leading-[1.12]">{articles[0].data.name}</h2>
								<p className="text-[17px] leading-[1.65] max-w-[46ch] text-text2 max-[640px]:text-[16px]">{articles[0].data.description}</p>
								<div className="flex items-center gap-2.5 flex-wrap text-[11px] tracking-[0.06em] uppercase font-mono">
									<Tags<ArticleFrontMatter> postType={PostType.Article} post={articles[0]} />
									<span className="text-text2">{articles[0].data.date}</span>
								</div>
							</div>
						</article>
					</Link>
				) : (
					<div className="col-span-2 row-span-2 min-w-0 max-[860px]:col-span-1 max-[860px]:row-span-1 flex flex-col justify-between gap-7 rounded-2xl bg-surface shadow-line p-7.5 w-full h-full">
						<div className="flex items-center gap-2.5 text-[11px] tracking-widest uppercase text-text2 font-mono">
							<span className="w-1.75 h-1.75 rounded-xs bg-rust opacity-50"></span> Latest
						</div>
						<div className="flex flex-col gap-4">
							<h2 className="text-[40px] leading-[1.08] max-[640px]:text-[29px] max-[640px]:leading-[1.12] text-text2">Nothing published yet</h2>
							<p className="text-[17px] leading-[1.65] max-w-[46ch] text-text2 max-[640px]:text-[16px]">Check back soon.</p>
						</div>
					</div>
				)}

				<SmallHomeArticleCard article={articles[1]} />

				<SmallHomeArticleCard article={articles[2]} />

				{/* This is for stats that I would like to keep people up to date with */}
				<section className="col-span-2 min-w-0 max-[860px]:col-span-1 max-[860px]:row-span-1 rounded-2xl py-5.5 px-6 bg-screen shadow-[inset_0_0_0_1px_rgba(163,181,121,.18)] flex flex-col gap-3.5 font-mono">
					<div className="flex items-center justify-between text-[11px] tracking-[.14em] uppercase text-screen-text opacity-70">
						<span>Currently</span> < Clock />
					</div>
					<div className="flex gap-3.5 items-baseline text-[13px] leading-normal text-screen-text">
						<span className="min-w-21.5 opacity-70 tracking-[.08em] uppercase text-[11px]">Reading</span> <span>The Manager's Path - Camille Fournier</span>
					</div>
					<div className="flex gap-3.5 items-baseline text-[13px] leading-normal text-screen-text">
						<span className="min-w-21.5 opacity-70 tracking-[.08em] uppercase text-[11px]">Learning</span> <span>Studying for CompTIA Security+</span>
					</div>
					<div className="flex gap-3.5 items-baseline text-[13px] leading-normal text-screen-text">
						<span className="min-w-21.5 opacity-70 tracking-[.08em] uppercase text-[11px]">Building</span> <span>Fat Lotto - Weighted Lottery Group Decision Bot</span>
					</div>
					<div className="flex gap-3.5 items-baseline text-[13px] leading-normal text-screen-text">
						<span className="min-w-21.5 opacity-70 tracking-[.08em] uppercase text-[11px]">Steeping</span> <span>Piper & Leaf, Monk's Meditation, hot steep</span>
					</div>

				</section>

				{activeProjects[0] ? (
					<Link href={`/projects/${activeProjects[0].slug}`} className="col-span-2 min-w-0 max-[860px]:col-span-1 max-[860px]:row-span-1">
						<article className="rounded-2xl bg-surface shadow-line p-5.5 flex flex-col gap-4 cursor-pointer transition-[background,transform] duration-200 ease w-full h-full hover:bg-surface2 hover:-translate-y-0.75">
							<div className="flex items-center gap-2.5 text-[11px] tracking-widest uppercase text-text2 font-mono">
								<span className="w-1.75 h-1.75 rounded-xs bg-olive"></span> Active Project
							</div>
							<h3 className="text-[26px] leading-[1.15]">{activeProjects[0].data.name}</h3>
							<p className="text-[16px] leading-[1.6] text-text2">{activeProjects[0].data.description}</p>
							<div className="flex gap-2 flex-wrap text-[11px] tracking-[.06em] uppercase text-text2 font-mono">
								<Tags<ProjectFrontMatter> postType={PostType.Project} post={activeProjects[0]} />
							</div>
						</article>
					</Link>
				) : (
					<div className="col-span-2 min-w-0 max-[860px]:col-span-1 max-[860px]:row-span-1 rounded-2xl bg-surface shadow-line p-5.5 flex flex-col gap-4 w-full h-full">
						<div className="flex items-center gap-2.5 text-[11px] tracking-widest uppercase text-text2 font-mono">
							<span className="w-1.75 h-1.75 rounded-xs bg-olive opacity-50"></span> Active Project
						</div>
						<h3 className="text-[26px] leading-[1.15] text-text2">No active projects right now</h3>
						<p className="text-[16px] leading-[1.6] text-text2">Check back soon.</p>
					</div>
				)}

				<SmallHomeArticleCard article={articles[3]} />


				<Link href="/articles" className="min-w-0">
					<button className="cursor-pointer text-left border-none rounded-xl bg-surface shadow-line p-5.5 min-h-47.5 flex flex-col justify-between gap-4 text-[12px] tracking-[.08em] uppercase transition-[background,transform,color] duration-200 ease text-text2 font-mono w-full h-full hover:bg-rust hover:text-on-accent hover:-translate-y-0.75">
						<span className="grid grid-cols-[repeat(2,8px)] gap-0.75">
							<span className="w-2 h-2 rounded-xs bg-current opacity-[.85]"></span>
							<span className="w-2 h-2 rounded-xs bg-current opacity-[.5]"></span>
							<span className="w-2 h-2 rounded-xs bg-current opacity-[.5]"></span>
							<span className="w-2 h-2 rounded-xs bg-current opacity-[.85]"></span>
						</span>
						<span className="text-[15px] tracking-[0.06em]">All Writing<br></br> <span className="opacity-[0.85] text-[11px]">{articles.length} Pieces</span></span>
					</button>
				</Link>
			</div >
		</div >
	);
}
