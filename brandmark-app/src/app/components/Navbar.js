import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="font-sans flex items-center justify-between p-6 w-full bg-white shadow-md z-10">
			<div className="text-lg font-bold">
				<a href="/" className="flex items-center text-2xl">
					<Image
						src="/assets/logo-no-bg.png"
						alt="Brandmark Logo"
						width={32}
						height={32}
						className="inline-block mr-2"
					/>
					Brandmark
				</a>
			</div>
			<div className="flex items-center justify-center gap-6 mx-auto">
				<a href="/" className="hover:underline">Home</a>
				<a href="/about" className="hover:underline">About</a>
				<a href="/portfolio" className="hover:underline">Portfolio</a>
				<a href="/projects" className="hover:underline">Projects</a>
				<a href="/contact" className="hover:underline">Contact</a>
			</div>
		</nav>
	);
}
