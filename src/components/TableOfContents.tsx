
//TODO: Make a type for headers input
export default function TableOfContents({ headers }: { headers: { title: string, slug: string, depth: number }[] }) {

	return (
		< aside className="rounded-3.5 bg-surface shadow-[inset_0_0_0_1px_var(--line)] p-5.5 flex flex-col gap-3.5 sticky top-6 font-mono rounded-[14px]" >
			<span className="text-[10px] tracking-[.16em] uppercase text-text2">Stack</span>
			<div className="flex flex-col gap-2.25 text-[12.5px] leading-normal">
				{headers.map(header =>
					<span key={`toc-${header.slug}`} style={{ paddingLeft: `${(header.depth - 2) * 12}px` }} className="flex gap-2.25">
						<span className=" text-olive">·</span><a href={`#${header.slug}`} className="transition-colors duration-200 hover:text-gold">{header.title}</a>
					</span>
				)}
			</div>
		</aside >


	)
	//
}
