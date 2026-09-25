'use client';

enum Theme {
	Dark = "dark",
	Light = "light"
}

export default function ThemeToggle() {

	function toggleTheme(): void {
		const newTheme = document.documentElement.getAttribute("data-theme") === Theme.Dark ? Theme.Light : Theme.Dark;
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("theme", newTheme);
	}

	return (
		<button onClick={toggleTheme} className="font-[inherit] cursor-pointer ml-2 flex items-center gap-2 border-none bg-surface shadow-line text-text2 px-2
				py-3 min-h-6 rounded-lg transition-[background] duration-200 hover:bg-surface2 max-[640px]:col-span-4 max-[640px]:ml-0 max-[640px]:justify-center">
			<span className="w-2.25 h-2.25 rounded-[50%] glow-gold bg-gold"></span>
			<span className="theme-label-light">Light</span>
			<span className="theme-label-dark">Dark</span>
		</button>

	)
}
