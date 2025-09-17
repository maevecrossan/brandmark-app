"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function ChipoloPage() {
	const galleryImages = [
		{
			src: "/images/chipolo/Brandmark - 2 - 1600x1200.jpg",
			alt: "Chipolo tracker lifestyle photo 1",
		},
		{
			src: "/images/chipolo/Brandmark - 3 - 1600x1200.jpg",
			alt: "Chipolo tracker lifestyle photo 2",
		},
		{
			src: "/images/chipolo/Brandmark - 4 - 1600x1200.jpg",
			alt: "Chipolo tracker lifestyle photo 3",
		},
		{
			src: "/images/chipolo/Brandmark - 5 - 1600x1200.jpg",
			alt: "Chipolo tracker lifestyle photo 4",
		},
		{
			src: "/images/chipolo/Brandmark - 6 - 1600x1200.jpg",
			alt: "Chipolo tracker lifestyle photo 5",
		},
		{
			src: "/images/chipolo/Brandmark - 7 - 1600x1200.jpg",
			alt: "Chipolo tracker lifestyle photo 6",
		},
	];

	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden rounded-b-lg">
				<Image
					src="/images/chipolo/Brandmark - 1 - 2400x1350.jpg"
					alt="Chipolo hero imagery"
					fill
					priority
					sizes="100vw"
					className="object-cover"
				/>
				<p id="chipolo-hero-credit" className="sr-only">Images © Chipolo — used with permission.</p>
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
				<div className="absolute inset-0 flex items-end md:items-center">
					<div className="max-w-5xl mx-auto px-6 py-6 md:py-0">
						<div className="inline-block">
							<Image
								src="/images/chipolo/chipolo-logo-no-bg.png"
								alt="Chipolo logo"
								width={240}
								height={64}
								priority
								sizes="(min-width: 768px) 240px, 180px"
								className="drop-shadow object-contain w-[180px] h-auto md:w-[240px] invert"
							/>
						</div>
						<p className="mt-3 text-white/90 max-w-xl">
							Smart tracking made simple
						</p>
					</div>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-5xl mx-auto px-6 py-10">
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
							Chipolo is a Slovenian company that makes Bluetooth trackers, which help people
							locate their lost or misplaced belongings like keys, wallets, and bags. Known for their
							minimalist, colorful, and sustainable design, these trackers are made locally in
							Europe from recycled materials and come in paper-only packaging. Chipolo&#39;s newest
							trackers, LOOP and CARD, are built to last and feature a rechargeable battery,
							combining convenience with the company&#39;s commitment to sustainability.
						</p>
						<p>
							LOOP and CARD are universally compatible with Apple Find My or Find Hub on
							Android, allowing users to find their items anywhere in the world with the help of a
							global network.
						</p>
						<p>
							Additional powerful features, such as phone finding, are available in the free Chipolo
							companion app.
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
					{galleryImages.map((image, index) => (
						<div
							key={image.src}
							className={`relative w-full h-64 ${index < 3 ? "md:h-72" : "md:h-80"} rounded-lg overflow-hidden`}
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
