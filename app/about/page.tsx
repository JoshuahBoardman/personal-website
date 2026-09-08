
export default function About() {
	return (
		<div className=" w-full flex flex-col gap-14 max-w-205 fade-up">
			<section className="grid grid-cols-[300px_1fr] gap-8.5 items-start">
				<div className="aspect-[4/5] rounded-2xl flex items-end p-3.5 shadow-[inset_0_0_0_1px_var(--line)] bg-[repeating-linear-gradient(135deg,var(--surface),var(--surface)_9px,var(--surface2)_9px,var(--surface2)_18px)]">
					<span className="text-[10px] tracking-[.12em] uppercase py-1.25 px-2 rounded-md bg-bg text-text2 font-mono">portrait — 4:5</span>
				</div>
				<div className="flex flex-col gap-4.5 pt-1">
					<h1 className="text-[38px] leading-[1.1]">Joshuah Boardman</h1>
					<p className="text-lg leading-[1.7] text-text2">I write software for a living and play bass for the part of me that software doesn&apos;t reach. Most days that means a terminal in the morning, a pot of something oxidised in the afternoon, and a fretboard at night.</p>
					<p className="text-lg leading-[1.7] text-text2">This site is where those things sit next to each other without apologising for it. Notes on systems I&apos;ve built, on modal interchange, on a Yunnan gold that changed my mind about breakfast tea, on books I read too slowly on purpose.</p>
				</div>
			</section>

			{/* TODO: Populate from a principles list — currently a fixed-length loop of 5 in the source design */}
			<section className="flex flex-col gap-4">
				<span className="text-[11px] tracking-[.14em] uppercase text-text2 font-mono">Principles</span>
				<div className="flex flex-col gap-0.5">
					<div className="grid grid-cols-[44px_1fr] gap-4 items-baseline py-4.5 px-5 rounded-xl mb-2 bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
						<span className="text-xs tracking-[.06em] text-rust font-mono">01</span>
						<p className="text-[19px] leading-[1.5] font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
					</div>
					<div className="grid grid-cols-[44px_1fr] gap-4 items-baseline py-4.5 px-5 rounded-xl mb-2 bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
						<span className="text-xs tracking-[.06em] text-rust font-mono">02</span>
						<p className="text-[19px] leading-[1.5] font-serif">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
					</div>
					<div className="grid grid-cols-[44px_1fr] gap-4 items-baseline py-4.5 px-5 rounded-xl mb-2 bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
						<span className="text-xs tracking-[.06em] text-rust font-mono">03</span>
						<p className="text-[19px] leading-[1.5] font-serif">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
					</div>
					<div className="grid grid-cols-[44px_1fr] gap-4 items-baseline py-4.5 px-5 rounded-xl mb-2 bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
						<span className="text-xs tracking-[.06em] text-rust font-mono">04</span>
						<p className="text-[19px] leading-[1.5] font-serif">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
					</div>
					<div className="grid grid-cols-[44px_1fr] gap-4 items-baseline py-4.5 px-5 rounded-xl mb-2 bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
						<span className="text-xs tracking-[.06em] text-rust font-mono">05</span>
						<p className="text-[19px] leading-[1.5] font-serif">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
					</div>
				</div>
			</section>

			{/* TODO: Populate contact values from real handles/links; hrefs intentionally omitted for now */}
			<section className="flex flex-col gap-4">
				<span className="text-[11px] tracking-[.14em] uppercase text-text2 font-mono">Contact</span>
				<div className="grid gap-3 font-mono" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
					<div className="rounded-xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-4.5 px-5 flex flex-col gap-1.5">
						<span className="text-[10px] tracking-[.14em] uppercase text-text2">Email</span>
						<span className="text-sm text-rust">lorem.ipsum@example.com</span>
					</div>
					<div className="rounded-xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-4.5 px-5 flex flex-col gap-1.5">
						<span className="text-[10px] tracking-[.14em] uppercase text-text2">GitHub</span>
						<span className="text-sm text-rust">@lorem-ipsum</span>
					</div>
					<div className="rounded-xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-4.5 px-5 flex flex-col gap-1.5">
						<span className="text-[10px] tracking-[.14em] uppercase text-text2">RSS</span>
						<span className="text-sm text-rust">/lorem.xml</span>
					</div>
					<div className="rounded-xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-4.5 px-5 flex flex-col gap-1.5">
						<span className="text-[10px] tracking-[.14em] uppercase text-text2">Elsewhere</span>
						<span className="text-sm text-rust">@lorem-ipsum</span>
					</div>
				</div>
			</section>
		</div>
	);
}
