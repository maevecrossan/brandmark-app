import Image from "next/image";

export default function Home() {
	return (
		<div className="w-full">
			{/* Intro Section */}
			<section id="intro">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold mb-6 mx-auto flex items-center justify-center">Welcome to Brandmark</h1>
				</div>
				<div className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 py-12">
					{/* Text: 2/3 width on md+ */}
					<div className="md:col-span-2 p-4 lg:p-25">
						<p className="text-base md:text-lg leading-relaxed text-gray-800 mb-4 mr-6">
							At Brandmark, we believe in building strong, long-term partnerships. With a keen eye for trends, a commitment to service, and a shared love of great design, our mission is simple: to connect world-class brands with the Irish market in a way that feels fresh, relevant, and exciting.
						</p>
						<p className="text-base md:text-lg leading-relaxed text-gray-800 mb-4 mr-6">
							<span className="font-semibold">Our goal is simple:</span> to work collaboratively with our retail partners, offering them quality products from global brands that resonate with their customers.
						</p>
						<div className="mt-6">
							<a href="/about" className="font-bold px-6 py-3 bg-teal/80 text-white rounded-lg hover:bg-teal transition">
								Learn More
							</a>
						</div>

					</div>

					{/* Image: 1/3 width on md+ */}
					<div className="md:col-span-1">
						<div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
							<Image
								src="/images/trade-show.jpg"
								alt="Brandmark visual"
								fill
								priority
								sizes="(min-width: 768px) 33vw, 100vw"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/*  Brands Section */}
			<section id="brands" className=" py-12">
				<div className="max-w-7xl mx-auto px-6 bg-gray-50 py-12 rounded-lg">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Brands</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
						{['secrid', 'cluse', 'izipizi', 'chipolo', 'estella-bartlett', 'eat-my-socks', 'doiy'].map((brand) => (
							<div key={brand} className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
								<Image
									src={`/images/brands/${brand}.png`}
									alt={`${brand} logo`}
									width={150}
									height={75}
									className="object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
