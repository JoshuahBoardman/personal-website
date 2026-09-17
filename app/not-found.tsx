import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center gap-10 py-24 text-center fade-up">
			<div className="w-full max-w-sm rounded-2xl bg-screen shadow-[inset_0_0_0_1px_rgba(163,181,121,.18)] p-8 flex flex-col items-center gap-6 font-mono">
				<div className="flex items-center justify-between w-full text-[10px] tracking-[.16em] uppercase text-screen-text opacity-55">
					<span>Channel</span><span>404</span>
				</div>
				<span className="text-[15px] tracking-[.08em] uppercase text-screen-text">No signal</span>
				{/* TODO: Use wavebar component */}
				<div className="flex gap-1.5 items-end h-8">
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-3"></span>
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-2"></span>
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-6"></span>
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-3.5"></span>
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-2.5"></span>
					<span className="wave-bar w-1.25 rounded-xs bg-screen-text opacity-65 h-4"></span>
				</div>
			</div>

			<div className="flex flex-col items-center gap-4 max-w-md">
				<h1 className="text-[46px] leading-[1.06] tracking-[-.02em] max-[640px]:text-[31px]">Page not found</h1>
				<p className="text-lg leading-[1.7] text-text2">Whatever you were looking for isn&apos;t on this frequency. It might have moved, or it might never have existed.</p>
				<Link href="/" className="mt-2 inline-block rounded-[10px] bg-rust text-on-accent py-3.5 px-5.5 text-[12px] tracking-widest uppercase cursor-pointer font-mono transition-[transform,filter] duration-150 hover:-translate-y-0.5 hover:brightness-[1.08]">
					← Back home
				</Link>
			</div>
		</div>
	);
}
