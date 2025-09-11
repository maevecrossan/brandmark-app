"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ClusePage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/cluse/fw25_cw11823cb13377cw25701.jpg"
					alt="CLUSE watches hero collage"
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
								src="/images/cluse/cluse-logo.png"
								alt="CLUSE logo"
								width={240}
								height={64}
								priority
								sizes="(min-width: 768px) 240px, 180px"
								className="drop-shadow object-contain w-[180px] h-auto md:w-[240px] invert"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Minimalist watches and jewellery inspired by modern elegance and timeless design.
						</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Timeless minimalist design</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					CLUSE empowers personal style through thoughtfully crafted watches, jewellery and bags. Rooted in Amsterdam with a Parisian sensibility, the brand balances simplicity, sophistication and individuality across everyday essentials.
				</p>
			</section>

			{/* About CLUSE */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About CLUSE</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							Cluse is a watch brand founded in Amsterdam in 2013, celebrated for its minimalist and elegant designs. The brand’s mission is to empower individuals to express their unique style through thoughtfully crafted watches, jewellery, and bags. Drawing inspiration from the Parisian lifestyle, Cluse emphasizes simplicity, sophistication, and individuality in its creations.
						</p>
						<p>
							Cluse’s product range includes a variety of watch collections that cater to diverse tastes. Notable collections like La Tétragone, Minuit, and Féroce feature designs ranging from square to round cases, available in materials such as stainless steel and genuine leather. These timepieces are powered by precise Japanese Miyota quartz movements, ensuring both style and functionality.
						</p>
						<p>
							Sustainability is a core value for Cluse. The brand has transitioned to using eco-friendly packaging materials, including FSC-certified paper and soy-based inks. Additionally, Cluse has shifted from brass to stainless steel in its watch cases to enhance durability and recyclability.
						</p>
						<p>
							With a commitment to quality, design, and sustainability, Cluse continues to offer accessories that resonate with modern consumers seeking timeless elegance and responsible craftsmanship.
						</p>

						<a href="https://cluse.com" className="inline-block mt-2 text-teal hover:underline" target="_blank" rel="noopener noreferrer">
							Visit the CLUSE website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
							src="/images/cluse/flat-lay-aravis-cw25602,-cw25603.jpg"
							alt="CLUSE Aravis flat lay"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 2 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/cluse/flat-lay-belisenna-cw15006.jpg"
							alt="CLUSE Belisenna flat lay"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 3 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/cluse/flat-lay-gracieuse-cw11911,-cw11910.jpg"
							alt="CLUSE Gracieuse flat lay"
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 4 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/cluse/fw25_cw11821cb13377cb13367.jpg"
							alt="CLUSE FW25 detail"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover object-center"
						/>
					</div>
					{/* Card 5 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/cluse/fw25_cx04204cw15501-cb13370.jpg"
							alt="CLUSE FW25 collection"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover object-center"
						/>
					</div>
					{/* Card 6 */}
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/cluse/fw25_cw11910cb13376ce13343ce13336.jpg"
							alt="CLUSE FW25 detail group"
							fill
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover object-center"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
