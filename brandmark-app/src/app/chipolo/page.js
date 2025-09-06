"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ChipoloPage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				{/* Placeholder: Hero Image — Recommended 2400x1350 (16:9) */}
				<div
					className="absolute inset-0 flex items-center justify-center text-center"
					aria-label="Chipolo hero image placeholder"
				>
					<div className="w-full h-full bg-[repeating-linear-gradient(45deg,theme(colors.gray.200),theme(colors.gray.200)_12px,theme(colors.gray.300)_12px,theme(colors.gray.300)_24px)]" />
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="bg-black/50 text-white px-4 py-2 rounded">
							<p className="font-semibold">Hero Image Placeholder</p>
							<p className="text-sm">Target: 2400 x 1350 px (16:9)</p>
							<p className="text-xs opacity-80">Center-safe area: middle 60%</p>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					{/**
					 * Responsive text area (hero)
					 * - Container: `max-w-5xl` ≈ 1024px max width, `px-6` = 24px side padding
					 * - Text block: paragraph uses `max-w-xl` ≈ 576px max width across breakpoints
					 * - Position: bottom-left on mobile, vertically centered on `md+`
					 * - Safe guidance for artwork: keep a ~600px clear area left-of-center to avoid overlap
					 */}
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							{/* <Image
								src="/images/chipolo/chipolo_logo.png"
								alt="Chipolo logo"
								width={240}
								height={64}
								priority
								sizes="(min-width: 768px) 240px, 180px"
								className="drop-shadow object-contain w-[180px] h-auto md:w-[240px] invert"
							/> */}
						</div>
						<h1 className="mt-3 text-3xl md:text-4xl font-eurostile-extended font-bold text-white">
							Logo
						</h1>
						<p className="mt-3 text-white/90 max-w-xl">
							Find your things faster with loud, smart Bluetooth trackers.
						</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				{/**
				 * Responsive text area (intro)
				 * - Section container: `max-w-5xl` ≈ 1024px, `px-6` = 24px side padding
				 * - Heading scales (`text-2xl` → `md:text-3xl`)
				 * - Body text flows full container width; aim for ~65ch for ideal readability
				 */}
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Smart tracking made simple</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					Chipolo creates sleek, reliable trackers that help you locate your essentials in seconds — keys, wallets, bags, and more.
					Integrations with Apple Find My and Google’s Find My Device make global finding effortless.
				</p>
			</section>

			{/* About Chipolo */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					{/**
					 * Responsive text area (about card)
					 * - Card container inherits `max-w-5xl` (≈1024px)
					 * - Padding: `p-6` = 24px mobile, `md:p-8` = 32px on `md+`
					 * - Body text width is the card's inner width; prefer 65–75ch line length
					 */}
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About Chipolo</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							Chipolo is a Slovenian technology company specializing in Bluetooth-enabled item trackers designed to help users locate personal belongings such as keys, wallets, and bags. Founded in 2013 by a group of friends aiming to solve the common problem of misplacing items, Chipolo has grown into a global brand with a mission to provide peace of mind through innovative and user-friendly products.
						</p>
						<p>
							With a focus on continuous improvement and user feedback, Chipolo remains dedicated to helping people keep track of their belongings, combining technology, design, and social consciousness in their approach.
						</p>
						<p>
							Our newest product, Chipolo POP, works with the Apple Find My or Google’s Find My Device network, so you can find your things almost anywhere in the world. Chipolo’s not shy! Our trackers have a seriously loud ring, so you can find your things faster, even if they’re hiding in the next room.
						</p>

						<a
							href="https://chipolo.net/"
							className="inline-block mt-4 text-teal hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit the Chipolo website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="max-w-6xl mx-auto px-6 pb-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Card 1 placeholder — 1600x1200 (4:3) */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.gray.200),theme(colors.gray.200)_12px,theme(colors.gray.300)_12px,theme(colors.gray.300)_24px)]" />
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-black/55 text-white px-3 py-2 rounded text-center">
								<p className="font-semibold">Gallery Image 1</p>
								<p className="text-xs">Target: 1600 x 1200 px (4:3)</p>
							</div>
						</div>
					</div>

					{/* Card 2 placeholder — 1600x1200 (4:3) */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.gray.200),theme(colors.gray.200)_12px,theme(colors.gray.300)_12px,theme(colors.gray.300)_24px)]" />
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-black/55 text-white px-3 py-2 rounded text-center">
								<p className="font-semibold">Gallery Image 2</p>
								<p className="text-xs">Target: 1600 x 1200 px (4:3)</p>
							</div>
						</div>
					</div>

					{/* Card 3 placeholder — 1600x1200 (4:3) */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.gray.200),theme(colors.gray.200)_12px,theme(colors.gray.300)_12px,theme(colors.gray.300)_24px)]" />
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-black/55 text-white px-3 py-2 rounded text-center">
								<p className="font-semibold">Gallery Image 3</p>
								<p className="text-xs">Target: 1600 x 1200 px (4:3)</p>
							</div>
						</div>
					</div>
				</div>

				{/* Secondary row */}
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
					{/* Wide Card 4 placeholder — 2000x1400 (10:7 ~ 1.43) */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.gray.200),theme(colors.gray.200)_12px,theme(colors.gray.300)_12px,theme(colors.gray.300)_24px)]" />
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-black/55 text-white px-3 py-2 rounded text-center">
								<p className="font-semibold">Gallery Image 4</p>
								<p className="text-xs">Target: 2000 x 1400 px (~4:3)</p>
							</div>
						</div>
					</div>

					{/* Wide Card 5 placeholder — 2000x1400 (10:7 ~ 1.43) */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,theme(colors.gray.200),theme(colors.gray.200)_12px,theme(colors.gray.300)_12px,theme(colors.gray.300)_24px)]" />
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-black/55 text-white px-3 py-2 rounded text-center">
								<p className="font-semibold">Gallery Image 5</p>
								<p className="text-xs">Target: 2000 x 1400 px (~4:3)</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
