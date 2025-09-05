"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	const pathname = usePathname();

	const isActive = (href) => {
		if (href === "/") return pathname === "/";
		return pathname === href || pathname.startsWith(href + "/");
	};

		const linkClass = (href) => {
			const base = "block rounded-sm m-1 md:p-0";
			if (!mounted) return `${base} text-gray-500 hover:text-teal`;
			return `${base} ${isActive(href) ? "text-black font-bold underline" : "text-gray-500 hover:text-black md:hover:underline"}`;
		};

	const closeOnNavigate = () => setOpen(false);

	return (
		<nav className="sticky top-0 inset-x-0 z-50 w-full bg-white/60 supports-[backdrop-filter]:bg-white/40 backdrop-blur-lg bg-clip-padding border-b border-white/20 shadow-sm">
			<div className="flex flex-wrap items-center justify-between mx-auto p-4 focus:ring-2 focus:ring-gray-200">
				<a href="/" className="flex flex-1 items-center space-x-3 rtl:space-x-reverse" onClick={closeOnNavigate}>
					<Image
						src="/images/brandmark/logo-no-bg.png"
						alt="Brandmark Logo"
						width={32}
						height={32}
						className="inline-block mr-1"
					/>
					<span className="font-eurostile-extended text-xl font-semibold whitespace-nowrap">Brandmark</span>
				</a>
				<div className="flex flex-1 justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<button
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-sticky"
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
					>
						<span className="sr-only">Toggle main menu</span>
						{open ? (
							// Close (X) icon
							<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						) : (
							// Burger icon
							<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
							</svg>
						)}
					</button>
				</div>
				<div
					id="navbar-sticky"
					className={`items-center justify-between ${mounted && open ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 md:mx-auto`}
				>
					<ul className="font-eurostile-extended uppercase md:ml-10 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
						<li>
							<a href="/" onClick={closeOnNavigate} className={linkClass("/")} aria-current={mounted && isActive("/") ? "page" : undefined}>Home</a>
						</li>
						<li>
							<a href="/about" onClick={closeOnNavigate} className={linkClass("/about")} aria-current={mounted && isActive("/about") ? "page" : undefined}>About</a>
						</li>
						<li>
							<a href="/portfolio" onClick={closeOnNavigate} className={linkClass("/portfolio")} aria-current={mounted && isActive("/portfolio") ? "page" : undefined}>Portfolio</a>
						</li>
						<li>
							<a href="/projects" onClick={closeOnNavigate} className={linkClass("/projects")} aria-current={mounted && isActive("/projects") ? "page" : undefined}>Projects</a>
						</li>
						<li>
							<a href="/contact" onClick={closeOnNavigate} className={linkClass("/contact")} aria-current={mounted && isActive("/contact") ? "page" : undefined}>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
