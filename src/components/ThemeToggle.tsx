'use client';

import { useState, useEffect } from "react";

enum Theme {
	Dark = "dark",
	Light = "light"
}

export default function ThemeToggle() {

	const [theme, setTheme] = useState(Theme.Light);

	useEffect(() => {
		const current = document.documentElement.getAttribute("data-theme");
		if (current === Theme.Dark) setTheme(Theme.Dark);
	}, []);

	function toggleTheme(): void {
		const newTheme = document.documentElement.getAttribute("data-theme") === Theme.Dark ? Theme.Light : Theme.Dark;
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
		setTheme(newTheme);
	}

	function capitalizeFirstLetter(str: string) {
		if (!str) return str;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return (
		<button onClick={toggleTheme} className="font-[inherit] cursor-pointer ml-2 flex items-center gap-2 border-none bg-surface shadow-[inset_0_0_0_1px_var(--line)] text-text2 px-2
				py-3 rounded-lg transition-[backgroud] duration-200">
			<span className="w-2.25 h-2.25 rounded-[50%] shadow-[0_0_8px_color-mix(in_oklab,var(--gold)_70%,transparent)] bg-gold"></span> {capitalizeFirstLetter(theme)}
		</button>

	)
}
