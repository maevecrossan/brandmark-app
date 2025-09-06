"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function EatMySocksPage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/eat-my-socks/EMSNOCPOX2_AMB2_300.jpg"
					alt="Eat My Socks lifestyle hero"
					aria-describedby="ems-hero-credit"
					fill
					priority
					quality={90}
					sizes="100vw"
					className="object-cover"
				/>
				<p id="ems-hero-credit" className="sr-only">Images © Eat My Socks — used with permission.</p>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							<Image
								src="/images/eat-my-socks/ems_logo.png"
								alt="Eat My Socks logo"
								width={240}
								height={64}
								priority
								sizes="(min-width: 768px) 240px, 180px"
								className="drop-shadow object-contain w-[180px] h-auto md:w-[240px] invert"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Playful giftable socks and accessories shaped like your favorite things.
						</p>
						<p className="mt-2 text-xs text-white/80">Images © Eat My Socks — used with permission.</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">100% surprise factor</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					EAT MY SOCKS designs unique socks and accessories shaped as unexpected objects - from food to flowers and trendy icons -
					delivering creative, edgy, and playful gifts everyone loves.
				</p>
			</section>

			{/* About */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About Eat My Socks</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							At EAT MY SOCKS we design unique socks shaped as unexpected objects. From our food collection, which includes a wide range of models such as cheeseburger, sushi, and pancake socks, to our trend line including fun forms like animals, flowers, and other trendy icons, EAT MY SOCKS offers a large collection of creative, edgy, and playful socks, all of which guarantee 100% surprise and are a perfect wow-factor gift!
						</p>
						<p>
							EAT MY SOCKS has a mission to be gender-neutral and inclusive within the fashion industry. All our models are unisex and one size fits all!
						</p>
						<p>
							All the plastic we use at EAT MY SOCKS is 100% recycled and recyclable. In addition, the film lamination that protects all our cartons is made of wood pulp, a biodegradable natural substance that helps you fully recycle your packaging.
						</p>

						<a
							href="https://eatmysocks.store/"
							className="inline-block mt-4 text-teal hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Visit the Eat My Socks website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="max-w-6xl mx-auto px-6 pb-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/eat-my-socks/EMSAFFIRCN_AMB6_300.jpg"
							alt="Eat My Socks product shot Ramen"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover object-[center_70%]"
						/>
					</div>
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/eat-my-socks/EMSACCHCCR_AMB_300.jpg"
							alt="Eat My Socks product shot Croissant"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>

					</div>
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/eat-my-socks/EMSNOCPOX2_AMB1_300.jpg"
							alt="Eat My Socks product shot Bento Box"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
				</div>

				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/eat-my-socks/EMSNOCSLACA_AMB_300.jpg"
							alt="Eat My Socks lifestyle Coffee"
							fill
							quality={85}
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/eat-my-socks/EMSNOCHODO_AMB1_300.jpg"
							alt="Eat My Socks lifestyle Hot Dog"
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
