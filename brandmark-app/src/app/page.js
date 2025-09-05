import Image from "next/image";

export default function Home() {
	const brands = [
		{ key: 'secrid', label: 'Secrid', src: '/images/secrid/secrid_logo.png' },
		{ key: 'cluse', label: 'Cluse', src: '/images/cluse/cluse-logo.png' },
		{ key: 'izipizi', label: 'Izipizi', src: '/images/izipizi/izipizi-logo.png' },
		{ key: 'chipolo', label: 'Chipolo', src: '/images/chipolo/chipolo_logo.png' },
		{ key: 'estella-bartlett', label: 'Estella Bartlett', src: '/images/estella-bartlett/eb_logo.png' },
		{ key: 'eat-my-socks', label: 'Eat My Socks', src: '/images/eat-my-socks/ems_logo.png' },
		{ key: 'doiy', label: 'DOIY', src: '/images/doiy/doiy_logo.png' },
	];

	return (
		<div className="w-full">
			{/* Hero Section */}
			<section id="hero">
				<div className="w-full mx-auto text-center px-6 bg-mist/70 py-12 rounded-b-lg">
					<Image
						src="/images/brandmark/logo-no-bg.png"
						alt="Brandmark Logo"
						width={200}
						height={100}
						className="mx-auto mb-6"
					/>
					<h1 className="font-eurostile-extended text-4xl md:text-5xl font-bold mb-6 mx-auto flex items-center justify-center">We Are Brandmark</h1>
					<p className="font-eurostile-condensed text-center text-xl md:text-xl leading-relaxed text-gray-800">
						Connecting world-class brands with the Irish market
					</p>
				</div>
			</section>
			
			{/* Welcome Section */}
			<section id="welcome" className="mt-12">
				<div className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-6 py-12">
					{/* Text: 2/3 width on md+ */}
					<div className="md:col-span-2 p-4 lg:p-25">
						<h2 className="font-eurostile-extended text-3xl md:text-4xl font-bold mb-4">Welcome</h2>
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
								src="/images/brandmark/trade-show.jpg"
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
			<section id="brands" className="mt-12 mb-24">
				<div className="max-w-7xl mx-auto px-6 bg-mist/70 py-12 rounded-lg">
					<h2 className="font-eurostile-extended text-3xl md:text-4xl font-bold mb-8 text-center">Our Brands</h2>
					<p className="text-base md:text-lg font-medium mb-10 text-center px-10 md:px-35">Our portfolio includes some of the most exciting names in contemporary design. Each brand is carefully chosen for its innovation, style, and ability to connect with today’s consumer.</p>
					{(() => {
						const firstRow = brands.slice(0, 4);
						const secondRow = brands.slice(4, 7);
						return (
							<div className="space-y-6">
								{/* Row 1: 2 per line on md, 4 on lg */}
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
									{firstRow.map(({ key, label, src }) => (
										<div key={key} className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
											<Image
												src={src}
												alt={`${label} logo`}
												width={150}
												height={75}
												className="object-contain"
												sizes="(min-width:1024px) 16vw, (min-width:768px) 25vw, 50vw"
											/>
										</div>
									))}
								</div>

								{/* Row 2: 2 per line on md, 3 on lg (DOIY will be solo on md) */}
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{secondRow.map(({ key, label, src }) => (
										<div key={key} className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
											<Image
												src={src}
												alt={`${label} logo`}
												width={150}
												height={75}
												className="object-contain"
												sizes="(min-width:1024px) 16vw, (min-width:768px) 25vw, 50vw"
											/>
										</div>
									))}
								</div>
							</div>
						);
					})()}

					<div className="mt-10 mx-auto w-fit">
						<a href="/portfolio" className="font-bold px-6 py-3 bg-teal/80 text-white rounded-lg hover:bg-teal transition">
							View Portfolio
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
