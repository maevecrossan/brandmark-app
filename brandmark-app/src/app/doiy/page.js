"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function DOIYPage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/doiy/OLIVIA_AMB1_300.jpg"
					alt="DOIY lifestyle hero OLIVIA"
					aria-describedby="doiy-hero-credit"
					fill
					priority
					quality={90}
					sizes="100vw"
					className="object-cover"
				/>
				<p id="doiy-hero-credit" className="sr-only">Images © DOIY — used with permission.</p>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							<Image
								src="/images/doiy/doiy_logo.png"
								alt="DOIY logo"
								width={220}
								height={64}
								priority
								sizes="(min-width: 768px) 220px, 180px"
								className="drop-shadow object-contain w-[180px] h-auto md:w-[220px] invert"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Playful, design-led home objects that tell stories.
						</p>
						<p className="mt-2 text-xs text-white/80">Images © DOIY — used with permission.</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Design with personality</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					DOIY Design crafts playful, emotionally resonant home accessories blending functionality with artistic flair - 					transforming everyday objects into unique, story-driven pieces.
				</p>
			</section>

			{/* About */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About DOIY</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							DOIY Design is a Barcelona-based brand established in 2008 by Jaime and Elodie, renowned for crafting playful and emotionally resonant home accessories that blend functionality with artistic flair. Their mission centers on transforming everyday objects into unique, story-driven pieces that infuse spaces with joy and creativity. Drawing inspiration from youth culture, nostalgia, and fashion, DOIY&#39;s designs often challenge conventional norms, offering a fresh perspective on home decor.
						</p>
						<p>
							Each product is meticulously designed to evoke positive emotions—be it surprise, amusement, or delight—ensuring that every item not only serves a purpose but also tells a story. This philosophy is evident in their diverse range of products, from quirky kitchen tools to avant-garde home accents, all characterized by their distinctive aesthetic and thoughtful design.
						</p>
						<p>
							DOIY Design places as much emphasis on packaging as it does on the products themselves, viewing the box as an integral part of the overall brand experience. Their packaging is carefully crafted to reflect the same creativity and playfulness found in their product designs.
						</p>
						<p>
							In essence, DOIY Design seamlessly integrates creativity, emotion, and practicality, offering consumers products that are not just items, but experiences that enrich everyday life.
						</p>

						<a
							href="https://doiydesign.com/"
							className="inline-block mt-4 text-teal hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit the DOIY website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="max-w-6xl mx-auto px-6 pb-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/doiy/RODEO_AMB2_300.jpg"
							alt="DOIY product shot RODEO"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/doiy/DYSPEFFFB_AMB1_300.jpg"
							alt="DOIY product shot FAST FOOD"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover object-[center_50%]"
						/>
					</div>
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/doiy/DYVASROCBL_AMB14_300.jpg"
							alt="DOIY product shot RODEO"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/doiy/DYVASBUXS_AMB6_300.jpg"
							alt="DOIY lifestyle BUTTER"
							fill
							quality={85}
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover object-[center_55%]"
						/>
					</div>
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/doiy/FUNFAIR_AMB1_300.jpg"
							alt="DOIY lifestyle FUNFAIR"
							fill
							quality={85}
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover object-[center_70%]"
						/>
					</div>
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/doiy/FASTFOOD_COLLECTION6_300.jpg"
							alt="DOIY collection — Fast Food"
							fill
							quality={85}
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
