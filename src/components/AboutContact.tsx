'use client';

import { useState } from "react";
import Link from "next/link";

export default function AboutContact({ name, address, url }: { name: string, address: string, url: string }) {

	const [copied, setCopied] = useState(false);

	async function copyAddress() {
		try {
			await navigator.clipboard.writeText(address);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			// clipboard unavailable/blocked — fail silently
		}
	}

	const cardClassName = "rounded-xl bg-surface shadow-[inset_0_0_0_1px_var(--line)] py-4.5 px-5 flex flex-col gap-1.5 cursor-pointer transition-[background,transform] duration-200 ease hover:bg-surface2 hover:-translate-y-0.75";

	const content = (
		<>
			<span className="text-[10px] tracking-[.14em] uppercase text-text2">{copied ? "Copied" : name}</span>
			<span className="text-sm text-rust">{address}</span>
		</>
	);

	if (!url) {
		return (
			<button type="button" onClick={copyAddress} className={`${cardClassName} border-none font-[inherit] text-left w-full`}>
				{content}
			</button>
		)
	}

	return (
		<Link href={url} target="_blank" rel="noopener noreferrer">
			<div className={cardClassName}>
				{content}
			</div>
		</Link>
	)
}
