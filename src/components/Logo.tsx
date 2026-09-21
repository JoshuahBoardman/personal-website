export default function Logo() {
	return (
		<div className="grid grid-cols-[repeat(3,7px)] grid-rows-[repeat(3,7px)] gap-[2.5px] p-1.25 rounded-[7px] bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
			<span className="row-start-1 col-start-3 row-end-3 col-end-4 rounded-[2.5px] bg-rust"></span>
			<span className="row-start-3 col-start-1 row-end-4 col-end-4 rounded-[2.5px] bg-rust"></span>
			<span className="row-start-1 col-start-1 row-end-2 col-end-3 rounded-[2.5px] bg-text2 opacity-20"></span>
			<span className="row-start-2 col-start-1 row-end-3 col-end-3 rounded-[2.5px] bg-text2 opacity-20"></span>
		</div>
	);
}
