"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function SecridPage() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/secrid/secrid-basco-mw-brown.jpg"
					alt="Secrid basco brown cardprotector"
					fill
					priority
					quality={90}
					sizes="100vw"
					className="object-cover object-[center_70%]"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							<Image
								src="/images/secrid/secrid_logo.png"
								alt="Secrid logo"
								width={240}
								height={64}
								priority
								sizes="(min-width: 768px) 240px, 180px"
								className="drop-shadow object-contain w-[180px] h-auto md:w-[240px] invert"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Award-winning wallets, engineered in the Netherlands. Compact, secure, and designed to last.
						</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
				<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">Innovation in your pocket</h2>
				<p className="mt-3 text-gray-800 leading-relaxed">
					Secrid reimagines the everyday wallet with a patented mechanism that slides cards out in a smooth step.
					Thoughtful materials, responsible European production, and precision engineering combine to create a
					compact companion built for modern life.
				</p>
			</section>

			{/* About Secrid */}
			<section className="max-w-5xl mx-auto px-6 -mt-4 pb-10">
				<div className="bg-mist/70 rounded-lg p-6 md:p-8">
					<h3 className="font-eurostile-extended text-xl md:text-2xl font-bold">About Secrid</h3>
					<div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
						<p>
							Secrid is a Dutch brand renowned for its innovative, secure, and sustainable wallets that seamlessly blend fashion with industrial design. Founded in 2009, Secrid emerged from a desire to address the evolving needs of modern society, where digital and physical worlds intersect.
						</p>
						<p>
							At the heart of Secrid's product line is the patented Cardprotector, a slim aluminum case that shields cards from bending, breaking, and unauthorized RFID scanning. This core innovation is complemented by various wallet models, including the Miniwallet, Slimwallet, and Twinwallet, each designed to cater to different storage needs while maintaining a compact form.
						</p>
						<p>
							Secrid's mission extends beyond functionality; the brand is deeply committed to social and environmental responsibility. All products are manufactured in the Netherlands, with assembly taking place in social enterprises that provide employment opportunities for individuals with disabilities. Secrid sources high-quality materials from European producers and has been carbon-neutral since 2022, actively offsetting its emissions through reforestation projects.
						</p>
						<p>
							As a Certified B Corporation, Secrid upholds rigorous standards of social and environmental performance, transparency, and accountability. The brand's philosophy, termed “Industrial Evolution,” emphasizes the creation of products that are better, more sustainable, and more valuable than their predecessors, encouraging consumers to make conscious choices that positively impact the world.
						</p>

						<a href="https://secrid.com/en-global/" className="inline-block mt-4 text-teal hover:underline" target="_blank" rel="noopener noreferrer">
							Visit the Secrid website <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
							src="/images/secrid/secrid-cardprotector-fluted-orange-4.jpg"
							alt="Secrid Fluted Orange Cardprotector"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 2 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/secrid/secrid-hammerstone-group-2.jpg"
							alt="Secrid Hammerstone collection group"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>

					{/* Card 3 */}
					<div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden">
						<Image
							src="/images/secrid/secrid-premium-emboss-diamond-mw-bordeaux-naplak-mw-red.jpg"
							alt="Premium Emboss Diamond Bordeaux and Naplak Red Cardprotectors"
							fill
							quality={85}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
				</div>

				{/* Secondary row */}
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/secrid/secrid-emboss-lines-mw-black-1-logo.jpg"
							alt="Emboss Lines MW Black Cardprotector"
							fill
							quality={85}
							sizes="(min-width: 640px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/images/secrid/secrid-stitch-floral-mw-olive.jpg"
							alt="Stitch Floral MW Olive Cardprotector"
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
