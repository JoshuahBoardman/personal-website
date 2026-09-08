'use client';

import Link from 'next/link'
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation'

export default function Header() {

	const sections = [
		{ href: "/", name: "Home" },
		{ href: "/articles", name: "Articles" },
		{ href: "/projects", name: "Projects" },
		{ href: "/about", name: "About" }
	];

	const path = usePathname();

	return (
		<header className="w-full max-w-270 my-0 mx-auto flex items-center justify-between gap-6 pt-6.5 px-0 pb-10 flex-wrap">
			<Link href="/">
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="grid grid-cols-2 gap-0.75 p-1.25 rounded-md bg-surface shadow-[inset_0_0_0_1px_var(--line)]">
						<span className="w-2.5 h-2.5 rounded-xs bg-rust"></span>
						<span className="w-2.5 h-2.5 rounded-xs bg-olive"></span>
						<span className="w-2.5 h-2.5 rounded-xs bg-text2 opacity-50"></span>
						<span className="w-2.5 h-2.5 rounded-xs bg-gold"></span>
					</div>
					<span className="text-[13px] tracking-tight font-mono">JoshuahBoardman<span className="text-text2">.com</span></span>
				</div>
			</Link>
			<nav className="flex items-center gap-1 text-xs tracking-[0.08em] uppercase font-mono">
				{
					sections.map(section => {
						const isActive = section.href === "/" ? path === "/" : path.startsWith(section.href);
						return (
							<button key={`nav-${section.name}`} data-nav-active={isActive} className="font-[inherit] cursor-pointer border-none bg-transparent px-2 py-3.25 rounded-lg transition-[color,background] duration-200 text-text2 hover:text-text hover:bg-surface">
								<Link href={section.href}>{section.name}</Link>
							</button>
						)
					})}
				<ThemeToggle />
			</nav>
		</header>
	);
}
