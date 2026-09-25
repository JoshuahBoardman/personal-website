export default function Logo() {
	return (
		<div title="Home" className="flex">
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
