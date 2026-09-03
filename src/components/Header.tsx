import Link from 'next/link'
import ThemeToggle from './ThemeToggle';

export default function Header() {
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
				<button className="font-[inherit] cursor-pointer border-none bg-transparent px-2 py-3.25 rounded-lg transition-[color,background] duration-200 text-text2"><Link href="/">Home</Link></button>
				<button className="font-[inherit] cursor-pointer border-none bg-transparent px-2 py-3.25 rounded-lg transition-[color,background] duration-200 text-text2"><Link href="/articles">Articles</Link></button>
				<button className="font-[inherit] cursor-pointer border-none bg-transparent px-2 py-3.25 rounded-lg transition-[color,background] duration-200 text-text2"><Link href="/projects">Projects</Link></button>
				<button className="font-[inherit] cursor-pointer border-none bg-transparent px-2 py-3.25 rounded-lg transition-[color,background] duration-200 text-text2"><Link href="/about">About</Link></button>
				<ThemeToggle />
			</nav>
		</header>
	);
}
