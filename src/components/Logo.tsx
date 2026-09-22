export default function Logo() {
	return (
		<div title="Home" className="flex">
			{/* Superseded by the flower-chip mark below, kept for reference:
			<div className="grid grid-cols-[repeat(3,7px)] grid-rows-[repeat(3,7px)] gap-[2.5px] p-1.25 rounded-[7px] bg-surface shadow-line">
				<span className="row-start-1 col-start-3 row-end-3 col-end-4 rounded-[2.5px] bg-rust"></span>
				<span className="row-start-3 col-start-1 row-end-4 col-end-4 rounded-[2.5px] bg-rust"></span>
				<span className="row-start-1 col-start-1 row-end-2 col-end-3 rounded-[2.5px] bg-olive opacity-35"></span>
				<span className="row-start-2 col-start-1 row-end-3 col-end-3 rounded-[2.5px] bg-olive opacity-20"></span>
			</div>
			*/}
			<svg width="30" height="30" viewBox="0 0 64 64" className="block">
				<g>
					<g fill="var(--rust)">
						<rect x="27" y="1" width="10" height="17" rx="4" />
						<rect x="27" y="46" width="10" height="17" rx="4" />
						<rect x="1" y="27" width="17" height="10" rx="4" />
						<rect x="46" y="27" width="17" height="10" rx="4" />
						<rect x="27" y="1" width="10" height="17" rx="4" transform="rotate(45 32 32)" />
						<rect x="27" y="46" width="10" height="17" rx="4" transform="rotate(45 32 32)" />
						<rect x="1" y="27" width="17" height="10" rx="4" transform="rotate(45 32 32)" />
						<rect x="46" y="27" width="17" height="10" rx="4" transform="rotate(45 32 32)" />
					</g>
					<rect x="15" y="15" width="34" height="34" rx="8" fill="var(--mark-body)" />
					<rect x="27" y="27" width="12" height="12" rx="3.5" fill="var(--olive)" />
					<circle cx="20.5" cy="20.5" r="1.7" fill="var(--olive)" />
				</g>
			</svg>
		</div>
	);
}
