'use client';

import { useEffect, useReducer, useRef } from "react";
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

const FREQS: Record<Tag, number> = { software: 196, music: 261.63, tea: 329.63, literature: 392 };

export default function RadioFilter({ searchParams, totalItems, filteredItems }: { searchParams?: SearchParam, totalItems: number, filteredItems: number }) {

	const router = useRouter();
	const audioCtxRef = useRef<AudioContext | null>(null);

	function blip(freq: number) {
		try {
			audioCtxRef.current ??= new AudioContext();
			const audioContext = audioCtxRef.current;
			const startTime = audioContext.currentTime;
			const oscillator = audioContext.createOscillator();
			const gainNode = audioContext.createGain();
			oscillator.type = "triangle";
			oscillator.frequency.setValueAtTime(freq, startTime);
			gainNode.gain.setValueAtTime(0.0001, startTime);
			gainNode.gain.exponentialRampToValueAtTime(0.16, startTime + 0.005);
			gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.14);
			oscillator.connect(gainNode).connect(audioContext.destination);
			oscillator.start(startTime);
			oscillator.stop(startTime + 0.16);
		} catch {
			// Web Audio unavailable/blocked — fail silently, sound is decorative.
		}
	}

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
				newState.sort = newState.sort === "oldest" ? "newest" : "oldest";

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

	const searchParamsKey = searchParams?.join(",");

	useEffect(() => {
		if (searchParams) {
			dispatch({ type: "sync", params: searchParams });
		}
	}, [searchParamsKey]);

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

	}, [state, router])

	return (
		<section className="grid grid-cols-[minmax(220px,1fr)_auto] gap-4.5 rounded-[18px] bg-surface shadow-line p-4.5 max-[860px]:grid-cols-1">
			<div className="rounded-xl p-4.5 flex flex-col justify-between gap-4.5 min-h-37.5 bg-screen shadow-[inset_0_0_0_1px_rgba(163,181,121,.18)] text-screen-text font-mono min-w-0">
				<div className="flex items-center justify-between text-[10px] tracking-[.16em] uppercase opacity-55">
					<span>Filter bank</span>
					<span><Clock /></span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-[22px] tracking-[.02em] leading-[1.1] max-[640px]:text-[17px]">{state.tags.length ? state.tags.join(" + ").toUpperCase() : "ALL CHANNELS"}</span>
					<span className="text-xs opacity-60 tracking-[.08em]">{filteredItems} of {totalItems} · {state.sort}</span>
				</div>
				<RadioWaveBar volume={(state.tags.length === 0 ? 4 : state.tags.length) as 1 | 2 | 3 | 4} />
			</div>

			<div className="grid grid-cols-[repeat(4,84px)] auto-rows-21 gap-2.5 font-mono min-w-0 max-[860px]:grid-cols-[repeat(4,1fr)] max-[860px]:auto-rows-[minmax(72px,auto)] max-[640px]:auto-rows-[minmax(64px,auto)] max-[640px]:gap-1.75">
				{tags.map((tag, index) =>
					<RadioButton key={`filter-tag-${tag}`} index={index} name={tag} on={state.tags.includes(tag)} handler={() => { if (state.soundOn) blip(FREQS[tag]); dispatch({ type: "toggle-tag", tag: `${tag}` }); }} />
				)}
				<RadioButton index={5} name={"all"} on={state.tags.length === 0} handler={() => { if (state.soundOn) blip(523.25); dispatch({ type: "clear-tags" as const }); }} />
				<RadioButton index={6} name={state.sort} on={state.sort === "oldest"} handler={() => { if (state.soundOn) blip(440); dispatch({ type: "toggle-sort" as const }); }} />
				<RadioButton index={7} name={state.soundOn ? "snd-on" : "snd-off"} on={state.soundOn} handler={() => { if (!state.soundOn) blip(587.33); dispatch({ type: "toggle-sound" }); }} />
				<RadioButton index={8} name={"shuffle"} on={false} handler={() => { if (state.soundOn) blip(146.83); dispatch({ type: "shuffle-tags" }); }} />
			</div>
		</section >
	);
}
