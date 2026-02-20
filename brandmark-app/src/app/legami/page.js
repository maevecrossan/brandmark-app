"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function LegamiPage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/legami/legami-hero.webp"
					alt="Legami product showcase"
					aria-describedby="legami-hero-credit"
					fill
					priority
					sizes="100vw"
					className="object-cover object-[center_70%]"
				/>
				<p id="legami-hero-credit" className="sr-only">Images © Legami — used with permission.</p>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							<Image
								src="/images/legami/legami-logo.png"
								alt="Legami logo"
								width={240}
								height={64}
								priority
								sizes="(min-width: 768px) 240px, 180px"
								className="drop-shadow object-contain w-[180px] h-auto md:w-[240px]"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Italian-designed stationery, lifestyle accessories, and gifts made to bring color, creativity, and joy to everyday life.
						</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Bring more joy to the everyday</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					Legami creates practical products with personality, from writing tools and planners to travel, desk,
					and lifestyle essentials. Every collection balances playful design with useful function, turning daily
					routines into small moments of delight.
				</p>
			</section>

			{/* About Legami */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About Legami</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							Legami is an Italian lifestyle brand known for creative stationery, thoughtful accessories, and
							giftable essentials designed to brighten everyday moments. Its collections are recognised for
							distinctive graphics, color, and playful character.
						</p>
						<p>
							From erasable pens, notebooks, and desk tools to travel accessories and seasonal gifts, Legami
							focuses on products people use often and keep close. The brand combines expressive design with
							accessible pricing, making it easy to find pieces that feel both useful and fun.
						</p>
						<p>
							Legami&#39;s point of view is simple: everyday objects should do their job well while adding
							personality to school, work, travel, and home. That balance of utility and style has helped the
							brand build a strong international following across multiple product categories.
						</p>
						<p>
							In our range, Legami represents cheerful, design-led products that stand out at shelf and online,
							offering customers easy gifting options and everyday favorites in one cohesive brand world.
						</p>

						<a href="https://www.legami.com/" className="inline-block mt-4 text-teal hover:underline" target="_blank" rel="noopener noreferrer">
							Visit the Legami website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
							src="/images/legami/legami-1.png"
							alt="Legami product close-up"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 2 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/legami/legami-2.webp"
							alt="Legami collection group"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 3 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/legami/legami-3.webp"
							alt="Legami lifestyle assortment"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 4 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/legami/legami-4.webp"
							alt="Legami everyday essentials"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					{/* Card 5 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/legami/legami-5.webp"
							alt="Legami signature product detail"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					{/* Card 6 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/legami/legami-6.webp"
							alt="Legami collection lineup"
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
