import { PostType, ArticleFrontMatter } from "@/types";
import { getAllPosts } from "@/lib/content";
import Link from "next/link";


// TODO: this whole page (filter pads, meter, feed sort/filter) is currently
// a static mockup of the original "synth channel strip" concept. Recommend
// making the device panel a client component with its own useState for the
// active tag(s) / sort order, and reintroducing the design's CSS variables +
// data-theme attribute (or next-themes) for the light/dark toggle once that
// gets wired up globally.
export default function Articles() {

	const articles = getAllPosts<ArticleFrontMatter>(PostType.Article).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

	return (
		<div className="flex flex-col gap-6.5">
			<h1 className="text-[30px] leading-[1.2]">Writing</h1>

			{/* TODO: Break out the whole radio filter into its own component */}
			<section className="grid grid-cols-[minmax(220px,1fr)_auto] gap-4.5 rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] p-4.5">
				<div className="rounded-xl p-4.5 flex flex-col justify-between gap-4.5 min-h-37.5 bg-screen shadow-[inset_0_0_0_1px_rgba(163,181,121,.18)] text-screen-text font-mono">
					<div className="flex items-center justify-between text-[10px] tracking-[.16em] uppercase opacity-55">
						<span>Filter bank</span><span>00:00</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-[22px] tracking-[.02em] leading-[1.1]">Lorem ipsum dolor sit amet</span>
						<span className="text-xs opacity-60 tracking-[.08em]">Lorem ipsum dolor sit amet, consectetur</span>
					</div>
					{/* TODO: bar heights should come from a live audio-style meter animation */}
					<div className="flex gap-1 items-end h-5">
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-2"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3.5"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-4"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-2.5"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-4.5"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-2"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3.5"></span>
						<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-4"></span>
					</div>
				</div>

				{/* TODO: each pad should toggle a tag filter (01-04), reset/sort/mute/shuffle (05-08) — currently inert.
				    Pads stay neutral here on purpose: in the source design, the 01-04 taxonomy colors (rust/olive/gold/text2)
				    only appear once a pad is toggled "on", which needs the state above to exist first. */}
				<div className="grid grid-cols-4 gap-2.5 font-mono" style={{ gridAutoRows: "84px", gridTemplateColumns: "repeat(4, 84px)" }}>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>01
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">Software</span>
					</button>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>02
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">Music</span>
					</button>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>03
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">Tea</span>
					</button>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>04
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">Literature</span>
					</button>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>05
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">All</span>
					</button>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>06
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">Newest</span>
					</button>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>07
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">Snd on</span>
					</button>
					<button type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>08
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-start">Shuffle</span>
					</button>
				</div>
			</section>

			{ /*TODO: Update this to have default displays if a property is missing*/}
			{/* TODO: Break this out into a article card component */}
			<div className="flex flex-col gap-3">
				{articles.map(article =>
					<Link key={article.slug} href={`/articles/${article.slug}`}>
						<article className="grid grid-cols-[110px_1fr] gap-6 items-start rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-6 px-6.5 cursor-pointer">
							<span className="text-[11px] tracking-[.06em] uppercase pt-1.5 text-text2 font-mono">{article.data.date}</span>
							<div className="flex flex-col gap-2.5">
								<h3 className="text-[23px] leading-[1.2]">{article.data.name}</h3>
								<p className="text-base leading-[1.6] max-w-[62ch] text-text2">{article.data.description}</p>
								<div className="flex gap-2 flex-wrap text-[11px] tracking-[.06em] uppercase mt-0.5 font-mono">
									{/* TODO: Update tags to display an array of tags with a limit of like 3 */}
									<span className="py-1 px-2.25 rounded-[999px] border border-rust/40 text-rust">{article.data.tags[0]}</span>
									<span className="opacity-70 py-1 text-text2">{article.data.duration}</span>
								</div>
							</div>
						</article>
					</Link>
				)}
			</div>

			{/* TODO: Mights want to implement pagination */}
		</div>
	);
}
