import type { Metadata } from "next";
import Image from "next/image";

import AboutContact from "@/components/AboutContact";
import AboutPrinciple from "@/components/AboutPrinciple";

export const metadata: Metadata = {
	title: "About",
	description: "Developer, bassist, and a few other things. A bit about who I am and what I'm building.",
	openGraph: {
		title: "About",
		description: "Developer, bassist, and a few other things. A bit about who I am and what I'm building.",
		type: "profile",
	},
};

const principles = [
	"Get 1% better today: mentally, physically, emotionally, spiritually, relationally.",
	"Want only what serves you or brings joy. Choose the simplest solution that fits, with room to grow.",
	"To stop creating is to stop living.",
	"Mundane, physical work keeps you honest. Earn your rest.",
	"Serve others in what you do. Care for what's in your charge.",
	"Don't try to look intelligent or win. Strive to understand.",
	"Speak to uplift. Let your yes be yes, your no be no.",
	"Do what must be done, and act according to what your moral compass tells you is just.",
	"Always look presentable. You never know what situation you'll find yourself in.",
];

const contactMethods = [
	{ name: "Email", address: "joshuahboardman@gmail.com", url: "" },
	{ name: "GitHub", address: "@JoshuahBoardman", url: "https://github.com/JoshuahBoardman" },
	{ name: "LinkedIn", address: "@JoshuahBoardman", url: "https://www.linkedin.com/in/joshuahboardman/" },
	{ name: "RSS", address: "/feed", url: "https://joshuahboardman.com/feed" },
];

export default function About() {
	return (
		<div className=" w-full flex flex-col gap-14 max-w-205 fade-up">
			<section className="grid grid-cols-[300px_1fr] gap-8.5 items-start max-[860px]:grid-cols-1">
				<div className="aspect-4/5 relative overflow-hidden rounded-2xl shadow-line bg-surface">
					<Image
						src="/portrait.png"
						alt="Joshuah Boardman"
						fill
						className="object-cover object-[50%_38%] scale-[1.06]"
					/>
					<span className="absolute inset-0 rounded-2xl shadow-line-vignette pointer-events-none"></span>
				</div>
				<div className="flex flex-col gap-4.5 pt-1">
					<h1 className="text-[38px] leading-[1.1]">Joshuah Boardman 🌻</h1>
					<p className="text-lg leading-[1.7] text-text2">
						Hey there, I'm Joshuah Boardman! I write software for fun and for a living, and
						I'm working toward moving from web development into systems programming.

						Outside of that, I read a lot, play bass, write about the things that matter to
						me, and drink far too much tea.
					</p>
					<p className="text-lg leading-[1.7] text-text2">
						This site is my cozy nook on the internet. I post about the parts of life that
						matter to me, and share what I'm learning and building.

						Follow along if you're curious what I'm up to, or just want to know what I'm
						about.
					</p>
				</div>
			</section>

			<section className="flex flex-col gap-4">
				<span className="text-[11px] tracking-[.14em] uppercase text-text2 font-mono">Principles</span>
				<div className="flex flex-col gap-0.5">
					{principles.map((principle, index) =>
						<AboutPrinciple key={`principle-${index}}`} index={index + 1} principle={principle} />
					)}
				</div>
			</section >

			< section className="flex flex-col gap-4" >
				<span className="text-[11px] tracking-[.14em] uppercase text-text2 font-mono">Contact</span>
				<div className="grid gap-3 font-mono" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
					{contactMethods.map(method =>
						<AboutContact key={`contact-method-${method.name}`} name={method.name} address={method.address} url={method.url} />
					)}
				</div>
			</section >
		</div >
	);
}
