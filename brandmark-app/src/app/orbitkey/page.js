"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function OrbitkeyPage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/orbitkey/orbitkey-hero.jpg"
					alt="Orbitkey product showcase"
					aria-describedby="orbitkey-hero-credit"
					fill
					priority
					sizes="100vw"
					className="object-cover object-[center_55%]"
				/>
				<p id="orbitkey-hero-credit" className="sr-only">Images © Orbitkey — used with permission.</p>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							<Image
								src="/images/orbitkey/orbitkey-logo.jpg"
								alt="Orbitkey logo"
								width={240}
								height={64}
								priority
								sizes="(min-width: 768px) 240px, 180px"
								className="bg-white p-2 rounded drop-shadow object-contain w-[180px] h-auto md:w-[240px]"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Thoughtfully designed carry essentials that organize keys, tools, and everyday items with a clean, minimalist feel.
						</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Designed to simplify everyday carry</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					Orbitkey creates practical tools for modern life, from key organizers and rings to desk accessories and
					tech carry solutions. Each product is built to reduce clutter, improve access, and make daily routines
					feel smoother.
				</p>
			</section>

			{/* About Orbitkey */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About Orbitkey</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							Orbitkey is an Australian brand known for smart, minimalist carry products that bring order to
							everyday essentials. The brand is best known for its key organizer system, which keeps keys
							compact, quiet, and easy to access.
						</p>
						<p>
							Beyond keys, Orbitkey has expanded into wallets, desk mats, pouches, and modular accessories
							designed to work together as a practical ecosystem. Materials are carefully selected for daily
							durability while maintaining a refined, premium finish.
						</p>
						<p>
							Orbitkey&#39;s approach combines function-led design with understated aesthetics, focusing on
							solutions that remove friction from common routines. It is a brand built for people who value
							organization, efficiency, and considered product design.
						</p>
						<p>
							In our range, Orbitkey offers high-utility, design-forward products that appeal to both gifting
							and self-purchase customers looking to upgrade their everyday carry.
						</p>

						<a href="https://www.orbitkey.com/" className="inline-block mt-4 text-teal hover:underline" target="_blank" rel="noopener noreferrer" sr-only="Orbitkey website link">
							Visit the Orbitkey website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="max-w-6xl mx-auto px-6 pb-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Card 1 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/orbitkey/orbitkey-1.jpg"
							alt="Orbitkey product close-up"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 2 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/orbitkey/orbitkey-4.jpg"
							alt="Orbitkey collection group"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 3 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/orbitkey/orbitkey-3.jpeg"
							alt="Orbitkey lifestyle assortment"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 4 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/orbitkey/orbitkey-5.jpg"
							alt="Orbitkey everyday essentials"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					{/* Card 5 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/orbitkey/orbitkey-2.jpg"
							alt="Orbitkey signature product detail"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					{/* Card 6 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/orbitkey/orbitkey-6.jpg"
							alt="Orbitkey collection lineup"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
