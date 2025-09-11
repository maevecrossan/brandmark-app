"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function IzipiziPage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/izipizi/kid-2.webp"
					alt="IZIPIZI lifestyle hero"
					fill
					priority
					sizes="100vw"
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							<Image
								src="/images/izipizi/izipizi-logo.png"
								alt="IZIPIZI logo"
								width={220}
								height={60}
								priority
								sizes="(min-width: 768px) 220px, 160px"
								className="drop-shadow object-contain w-[160px] h-auto md:w-[220px] invert"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Playful eyewear with ergonomic comfort and bold color for every age and every day.
						</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Everyday eyewear, for everyone</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					We want to make as many people smile as possible, by creating glasses that are both affordable and kind to the planet, and that protect your eyes at every time in your life.
				</p>
			</section>

			{/* About IZIPIZI */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About IZIPIZI</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							More than ten years ago we set ourselves the ambitious goal of protecting the eyes of the 2.5 billion longsighted people in the world. And so our READING glasses were born. Our ranges have since grown and now offer protection from the sun, the blue light emitted by electronic screens and the elements faced when practising a sport.
						</p>
						<p>
							We design glasses that put a smile on your face and can be used every day, for every part of life and every activity. However you use them, they all have a common goal: protecting your eyes. Discover our different ranges, all designed to ensure every moment is a happy experience. That means offering models that are accessible when it comes to their price, timeless style and availability. It’s one of the founding pillars of the brand, and one that’s here to stay.
						</p>
						<p>
							For the past five years, reducing our carbon footprint has been a priority, and we are proud to have cut it in half. This result reflects our collective efforts to transform our practices, from product design to logistics, by placing sustainability at the heart of every decision.
						</p>
						<p>
							We work daily to improve our impact by renewing our materials, putting our human project at the core of our business strategy, and supporting charitable organizations. Certified B Corp in 2023, our commitment is recognized by this label of excellence, which drives us towards continuous improvement.
						</p>

						<a href="https://www.izipizi.com/" className="inline-block mt-2 text-teal hover:underline" target="_blank" rel="noopener noreferrer">
							Visit the IZIPIZI website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
							src="/images/izipizi/baby-1.jpg"
							alt="IZIPIZI baby eyewear"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 2 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/izipizi/man-1.jpg"
							alt="IZIPIZI optical eyewear"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 3 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/izipizi/sun0526701x00-izi_e_sun_crystal_polarized_02.jpg"
							alt="IZIPIZI polarized sunglasses"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 4 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/izipizi/REA1600201X-IZI_OFFICE_READING_Tortoise_01_2_1_.jpg"
							alt="IZIPIZI office reading tortoise"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					{/* Card 5 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/izipizi/slmsdpac69-izi_d_sun_light_tortoise_polarized_01_1_.jpg"
							alt="IZIPIZI sun light tortoise polarized"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					{/* Card 6 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/izipizi/couple-1.jpg"
							alt="IZIPIZI lifestyle couple"
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
