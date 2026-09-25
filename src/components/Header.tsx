'use client';

import Link from 'next/link'
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
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
		<header className="w-full max-w-270 my-0 mx-auto flex items-center justify-between gap-6 pt-6.5 px-0 pb-10 flex-wrap max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-4 max-[640px]:pb-7">
			<Link href="/">
				<div className="flex items-center gap-3 cursor-pointer">
					<Logo />
					<span className="text-[13px] tracking-tight font-mono">JoshuahBoardman<span className="text-text2">.com</span></span>
				</div>
			</Link>
			<nav className="flex items-center gap-4 text-xs tracking-[0.08em] uppercase font-mono max-[640px]:w-full max-[640px]:grid max-[640px]:grid-cols-4 max-[640px]:gap-3">
				{
					sections.map(section => {
						const isActive = section.href === "/" ? path === "/" : path.startsWith(section.href);
						return (

							<Link key={`nav-${section.name}`} href={section.href} data-nav-active={isActive} className="font-[inherit] cursor-pointer px-2 py-3.25 min-h-6 rounded-lg transition-[color,background] duration-200 text-text2 hover:text-text hover:bg-surface max-[640px]:w-full max-[640px]:px-1.5 max-[640px]:py-2.25 max-[640px]:text-[11px] max-[640px]:text-center">
								{section.name}
							</Link>
						)
					})}
				<ThemeToggle />
			</nav>
		</header >
	);
}
