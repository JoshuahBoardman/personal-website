import AboutContact from "@/components/AboutContact";
import AboutPrinciple from "@/components/AboutPrinciple";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Developer, bassist, and a few other things. A bit about who I am and what I'm building.",
	openGraph: {
		title: "About",
		description: "Developer, bassist, and a few other things. A bit about who I am and what I'm building.",
		type: "profile",
	},
};

//TODO: FIll out the principles and contact methods arrays
const principles = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
	"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
	"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
];

const contactMethods = [
	{ name: "Email", address: "lorem.ipsum@example.com", url: "" },
	{ name: "GitHub", address: "@lorem-ipsum", url: "https://github.com/JoshuahBoardman" },
	{ name: "RSS", address: "/lorem.xml", url: "" },
	{ name: "Elsewhere", address: "@lorem-ipsum", url: "" }
];

export default function About() {
	return (
		<div className=" w-full flex flex-col gap-14 max-w-205 fade-up">
			<section className="grid grid-cols-[300px_1fr] gap-8.5 items-start max-[860px]:grid-cols-1">
				<div className="aspect-4/5 rounded-2xl flex items-end p-3.5 shadow-[inset_0_0_0_1px_var(--line)] bg-[repeating-linear-gradient(135deg,var(--surface),var(--surface)_9px,var(--surface2)_9px,var(--surface2)_18px)]">
					<span className="text-[10px] tracking-[.12em] uppercase py-1.25 px-2 rounded-md bg-bg text-text2 font-mono">portrait — 4:5</span>
				</div>
				<div className="flex flex-col gap-4.5 pt-1">
					<h1 className="text-[38px] leading-[1.1]">Joshuah Boardman</h1>
					<p className="text-lg leading-[1.7] text-text2">I write software for a living and play bass for the part of me that software doesn&apos;t reach. Most days that means a terminal in the morning, a pot of something oxidised in the afternoon, and a fretboard at night.</p>
					<p className="text-lg leading-[1.7] text-text2">This site is where those things sit next to each other without apologising for it. Notes on systems I&apos;ve built, on modal interchange, on a Yunnan gold that changed my mind about breakfast tea, on books I read too slowly on purpose.</p>
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
