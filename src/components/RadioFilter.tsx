'use client';

import { useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";
import Clock from "./Clock";
import RadioButton from "./RadioButton";
import RadioWaveBar from "./RadioWaveBar";


type SearchParam = string[] | undefined;

type FilterState = {
	tags: string[],
	sort: "newest" | "oldest",
	soundOn: boolean
}

type FilterAction = { type: "toggle-tag", tag: string }
	| { type: "sync", params: string[] }
	| { type: "clear-tags" }
	| { type: "shuffle-tags" }
	| { type: "toggle-sort" }
	| { type: "toggle-sound" }


const tags = ["software", "music", "tea", "literature"] as const;
type Tag = (typeof tags)[number];

//TODO: Might want to make this usable for any pare that lists content types
export default function RadioFilter({ searchParams, totalItems, filteredItems }: { searchParams?: SearchParam, totalItems: number, filteredItems: number }) {

	const router = useRouter();

	function reducer(state: FilterState, action: FilterAction): FilterState {
		const newState = structuredClone(state);

		switch (action.type) {
			case "toggle-tag":
				if (!tags.includes(action.tag as Tag)) break;

				if (newState.tags.includes(action.tag)) {
					newState.tags = newState.tags.filter(tag => tag !== action.tag)
				} else {
					newState.tags.push(action.tag);
				}

				break;
			case "sync":
				console.log(action.params);
				newState.sort = action.params.includes("oldest") ? "oldest" : "newest";

				newState.tags = action.params ? action.params.filter(tag => tags.includes(tag as Tag)) : [];

				break;
			case "clear-tags":
				newState.tags = [];

				break;
			case "shuffle-tags":
				const randomNumber = Math.floor(Math.random() * tags.length);

				newState.tags = [];
				newState.tags.push(tags[randomNumber]);

				break;
			case "toggle-sort":
				newState.sort === "oldest" ? newState.sort = "newest" : newState.sort = "oldest";

				break;
			case "toggle-sound":
				newState.soundOn = !newState.soundOn;

				break;
		}

		return newState;

	}

	const [state, dispatch] = useReducer(
		reducer,
		{ tags: [], sort: "newest", soundOn: false } as FilterState
	);

	useEffect(() => {
		if (searchParams) {
			dispatch({ type: "sync", params: searchParams });
		}
	}, [searchParams?.join(",")]); //NOTE: I dont think the dependency is needed, but why not...

	useEffect(() => {
		const urlParams = state.tags.map(tag => {
			return `${tag}=true`;
		});

		if (state.sort === "oldest") {
			urlParams.push("oldest=true");
		}

		const paramString = urlParams.join("&");

		const slug = urlParams.length ? `/articles?${paramString}` : `/articles`;
		router.push(slug);

	}, [state])

	return (
		<section className="grid grid-cols-[minmax(220px,1fr)_auto] gap-4.5 rounded-[18px] bg-surface shadow-[inset_0_0_0_1px_var(--line)] p-4.5">
			<div className="rounded-xl p-4.5 flex flex-col justify-between gap-4.5 min-h-37.5 bg-screen shadow-[inset_0_0_0_1px_rgba(163,181,121,.18)] text-screen-text font-mono">
				<div className="flex items-center justify-between text-[10px] tracking-[.16em] uppercase opacity-55">
					<span>Filter bank</span>
					<span><Clock /></span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-[22px] tracking-[.02em] leading-[1.1]">{state.tags.length ? state.tags.join(" + ").toUpperCase() : "ALL CHANNELS"}</span>
					<span className="text-xs opacity-60 tracking-[.08em]">{filteredItems} of {totalItems} · {state.sort}</span>
				</div>
				<RadioWaveBar volume={(state.tags.length === 0 ? 4 : state.tags.length) as 1 | 2 | 3 | 4} />
			</div>

			<div className="grid grid-cols-4 gap-2.5 font-mono" style={{ gridAutoRows: "84px", gridTemplateColumns: "repeat(4, 84px)" }}>
				{tags.map((tag, index) =>
					<RadioButton key={`filter-tag-${tag}`} index={index} name={tag} on={state.tags.includes(tag)} handler={() => dispatch({ type: "toggle-tag", tag: `${tag}` })} />
				)}
				<RadioButton index={5} name={"all"} on={state.tags.length === 0} handler={() => dispatch({ type: "clear-tags" as const })} />
				<RadioButton index={6} name={state.sort} on={state.sort === "oldest"} handler={() => dispatch({ type: "toggle-sort" as const })} />
				<RadioButton index={7} name={state.soundOn ? "snd-on" : "snd-off"} on={state.soundOn} handler={() => dispatch({ type: "toggle-sound" })} />
				<RadioButton index={8} name={"shuffle"} on={false} handler={() => dispatch({ type: "shuffle-tags" })} />
			</div>
		</section >
	);
}
