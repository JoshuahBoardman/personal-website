export default function Footer() {

	const currentYear = new Date().getFullYear();
	return (

		<footer className="w-full max-w-270 flex flex-col mx-auto mt-20">
			<div className="flex items-end gap-1 h-4 w-full">
				<span className="w-1 h-1.75 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-3 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-4 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-2.25 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-3.5 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-1.5 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-2.75 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-4 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-2 rounded-xs bg-rust opacity-28"></span>
				<span className="w-1 h-3.25 rounded-xs bg-rust opacity-28"></span>
			</div>
			<div className="flex justify-between mt-4.5  mb-0 pt-6 border-t border-line gap-4 flex-wrap text-[11px] tracking-[0.08em] uppercase w-full text-text2 font-mono">
				<span className="rounded-lx">© {currentYear} Joshuah Boardman</span>
				<span className="rounded-lx">Built with love · No trackers</span>
			</div>
		</footer>
	);
}
