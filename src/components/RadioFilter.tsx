'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type SearchParam = string[] | undefined;

function formatOption(option: string): string {
	let formattedOption = option.replaceAll("-", " ");
	return formattedOption.charAt(0).toUpperCase() + formattedOption.slice(1);
}

//TODO: Might want to make this usable for any pare that lists content types
export default function RadioFilter({ searchParams }: { searchParams?: SearchParam }) {

	const router = useRouter();

	const [params, setParams] = useState([] as SearchParam);

	useEffect(() => {
		if (searchParams) {
			setParams(searchParams);
		}
	}, [searchParams]);

	useEffect(() => {

		const urlParams = params?.map(param => {
			return `${param}=true`;
		}).join("&");

		const slug = params ? `/articles?${urlParams}` : `/articles`;

		router.push(slug);

	}, [params])

	//TODO: Figure out a pattern that handles all and shuffle seperatly.
	//- newest and snd-on are a different category as well...
	const options: { name: string, handler: () => void }[] = ["software", "music", "tea", "literature", "all", "newest", "snd-on", "shuffle"].map(option => {
		return {
			name: option,
			handler: () => {
				const name = option;
				const newParams = params ? [...params] : [];

				if (params?.includes(name)) {
					setParams(newParams.filter(param => param !== name));
				} else {
					newParams.push(name);
					setParams(newParams);
				}
				console.log(params);
			}
		}

	});


	// TODO: Make this a client component that handles:
	// - Mangages the url params
	// - Naviagates to the URL paramas


	// NOTE: The parent page will be what filters the list based on the params set by this component.
	return (
		<section className="grid grid-cols-[minmax(220px,1fr)_auto] gap-4.5 rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] p-4.5">
			<div className="rounded-xl p-4.5 flex flex-col justify-between gap-4.5 min-h-37.5 bg-screen shadow-[inset_0_0_0_1px_rgba(163,181,121,.18)] text-screen-text font-mono">
				<div className="flex items-center justify-between text-[10px] tracking-[.16em] uppercase opacity-55">
					<span>Filter bank</span><span>00:00</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-[22px] tracking-[.02em] leading-[1.1]">Lorem ipsum dolor sit amet</span>
					<span className="text-xs opacity-60 tracking-[.08em]">Lorem ipsum dolor sit amet, consectetur</span>
				</div>
				{/* TODO: bar heights should come from a live audio-style meter animation */}
				<div className="flex gap-1 items-end h-5">
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-2"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3.5"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-4"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-2.5"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-4.5"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-5"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-2"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-3.5"></span>
					<span className="w-1.25 rounded-xs bg-screen-text opacity-65 h-4"></span>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-2.5 font-mono" style={{ gridAutoRows: "84px", gridTemplateColumns: "repeat(4, 84px)" }}>
				{options.map((option, index) =>
					<button key={`filter-option - ${option.name} `} onClick={option.handler} type="button" className="cursor-pointer border-none bg-bg shadow-[inset_0_0_0_1px_var(--line)] text-text2 rounded-xl p-2.25 flex flex-col justify-between items-start">
						<span className="flex items-center gap-1.25 text-[9px] tracking-widest opacity-70">
							<span className="w-1.25 h-1.25 rounded-[50%] bg-text2 opacity-50"></span>{(index > 9) ? index.toString() : `0${index} `}
						</span>
						<span className="text-[11px] tracking-[.06em] uppercase text-left leading-tight">{formatOption(option.name)}</span>
					</button>
				)}
			</div>
		</section >
	);
}
