export default function AboutPrinciple({ index = 1, principle }: { index: number, principle: string }) {

	return (
		<div className="grid grid-cols-[44px_1fr] gap-4 items-baseline py-4.5 px-5 rounded-xl mb-2 bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
			<span className="text-xs tracking-[.06em] text-rust font-mono">{index > 9 ? index : `0${index}`}</span>
			<p className="text-[19px] leading-leading-normal font-serif">{principle}</p>
		</div>
	);
}
