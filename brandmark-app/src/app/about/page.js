import Image from "next/image";

export default function About() {
	return (
		<div className="w-full">
			{/* Hero */}
			<section className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden rounded-b-lg">
				<Image
					src="/images/brandmark/showroom-1.jpg"
					alt="Brandmark showroom"
					fill
					priority
					sizes="100vw"
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/30" />
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="font-eurostile-extended text-white text-3xl md:text-5xl font-bold drop-shadow">About Us</h1>
				</div>
			</section>

			{/* Intro */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
					<div>
						<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
						<p className="text-base md:text-lg leading-relaxed text-gray-800 mb-4">
							Brandmark is an agency with a passion for design, fashion, and function. We bring a curated mix of international lifestyle and accessory brands to the Irish market, focusing on products that combine creativity with everyday usability.
						</p>
						<p className="text-base md:text-lg leading-relaxed text-gray-800 mb-4">
							Our portfolio includes Secrid, Izipizi, Cluse, Chipolo, Eat My Socks, DOIY, and Estella Bartlett. Each brand is chosen for its innovation, style, and ability to connect with today’s consumer.
						</p>
						<p className="text-base md:text-lg leading-relaxed text-gray-800">
							Based in Dublin, our showroom has welcomed buyers for over 15 years. With neighbours like Mos Mosh and Carhartt, we’re positioned at the heart of Ireland’s fashion and lifestyle hub.
						</p>
					</div>
					<div>
						<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
							<Image
								src="/images/brandmark/showroom-2.jpg"
								alt="Showroom interior"
								fill
								sizes="(min-width: 768px) 50vw, 100vw"
								className="object-cover object-bottom"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="bg-mist/70">
				<div className="max-w-6xl mx-auto px-6 py-12">
					<h3 className="font-eurostile-extended text-2xl md:text-3xl font-bold text-center mb-8">What Drives Us</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="rounded-lg bg-white p-6 shadow">
							<h4 className="font-semibold mb-2">Partnership</h4>
							<p className="text-gray-700">We build long‑term relationships with retailers, grounded in trust and shared goals.</p>
						</div>
						<div className="rounded-lg bg-white p-6 shadow">
							<h4 className="font-semibold mb-2">Curation</h4>
							<p className="text-gray-700">We hand‑select collections that blend design, quality, and everyday function.</p>
						</div>
						<div className="rounded-lg bg-white p-6 shadow">
							<h4 className="font-semibold mb-2">Service</h4>
							<p className="text-gray-700">We provide attentive support from first look to sell‑through and beyond.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Tradeshows */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<h3 className="font-eurostile-extended text-2xl md:text-3xl font-bold text-center mb-4">Our Tradeshows</h3>
				<div className="max-w-3xl mx-auto text-center text-gray-800 mb-8 space-y-4">
					<p>
						Twice a year we exhibit at the RDS in Dublin, taking part in both Showcase (January) and the Autumn Gift & Home Fair (August). These key events give us the opportunity to present new collections, connect with retailers, and strengthen partnerships.
					</p>
					<p>
						We regularly invite members from our brands to join us, as we believe their presence is essential, helping them to better understand the Irish market, meet buyers face-to-face, and communicate their brand values directly.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
						<Image
							src="/images/brandmark/trade-show-1.jpg"
							alt="Tradeshows"
							fill
							sizes="(min-width: 768px) 50vw, 100vw"
							className="object-cover object-[center_85%]"
						/>
					</div>
					<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow">
						<Image
							src="/images/brandmark/trade-show-3.jpg"
							alt="Tradeshows"
							fill
							sizes="(min-width: 768px) 50vw, 100vw"
							className="object-cover object-[center_70%]"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
