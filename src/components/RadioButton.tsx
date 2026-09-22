export default function({ index, name, on, handler }: { index: number, name: string, on: boolean, handler: () => void }) {

	function formatBtnName(name: string): string {
		let formattedName = name.replaceAll("-", " ");
		return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
	}

	return (
		<button key={`filter-option - ${name} `} onClick={handler} type="button" data-pad={name} data-pad-on={on} className="cursor-pointer border-none bg-bg shadow-line text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start max-[640px]:p-1.75 max-[640px]:rounded-[10px]">
			<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
				<span data-led className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>{(index > 9) ? index.toString() : `0${index} `}
			</span>
			<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight max-[640px]:text-[9.5px] max-[640px]:tracking-[.02em]">{formatBtnName(name)}</span>
		</button>
	)
}
