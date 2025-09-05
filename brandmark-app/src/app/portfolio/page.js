"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
	const brands = [
		{
			key: "secrid",
			name: "Secrid",
			logo: "/images/secrid/secrid_logo.png",
			short: "Award-winning wallets from the Netherlands, combining smart design, security, and sustainability.",
			categories: ["Accessories"],
		},
		{
			key: "cluse",
			name: "Cluse",
			logo: "/images/cluse/cluse-logo.png",
			short: "Minimalist watches and jewellery inspired by modern elegance and timeless design.",
			categories: ["Watches", "Jewellery"],
		},
		{
			key: "izipizi",
			name: "Izipizi",
			logo: "/images/izipizi/izipizi-logo.png",
			short: "Parisian eyewear that makes everyday glasses stylish, playful, and accessible for all ages.",
			categories: ["Eyewear"],
		},
		{
			key: "chipolo",
			name: "Chipolo",
			logo: "/images/chipolo/chipolo_logo.png",
			short: "Innovative Bluetooth trackers helping people find their essentials with ease and peace of mind.",
			categories: ["Smart Accessories"],
		},
		{
			key: "estella-bartlett",
			name: "Estella Bartlett",
			logo: "/images/estella-bartlett/eb_logo.png",
			short: "Contemporary jewellery and accessories blending femininity, charm, and everyday wearability.",
			categories: ["Jewellery", "Gifts"],
		},
		{
			key: "eat-my-socks",
			name: "Eat My Socks",
			logo: "/images/eat-my-socks/ems_logo.png",
			short: "A fun, creative gift brand turning socks into quirky, food-inspired surprises.",
			categories: ["Socks", "Gifts"],
		},
		{
			key: "doiy",
			name: "DOIY",
			logo: "/images/doiy/doiy_logo.png",
			short: "Design-led lifestyle products that are clever, playful, and made to spark joy.",
			categories: ["Gifts", "Home"],
		},
	];

	// Build unique categories and filter state
	const allCategories = Array.from(
		new Set(brands.flatMap((b) => b.categories))
	).sort((a, b) => a.localeCompare(b));

	// Multi-select OR filtering
	const [selected, setSelected] = useState(new Set());

	const toggleCategory = (cat) => {
		setSelected((prev) => {
			const next = new Set(prev);
			if (next.has(cat)) next.delete(cat);
			else next.add(cat);
			return next;
		});
	};

	const clearFilters = () => setSelected(new Set());

	const filteredBrands = selected.size
		? brands.filter((b) => b.categories.some((c) => selected.has(c)))
		: brands;

	return (
		<div className="w-full">
			<section className="w-full bg-mist/70 py-12">
				<div className="max-w-5xl mx-auto px-6">
					<h1 className="font-eurostile-extended text-4xl md:text-5xl font-bold text-center">
						Brands Portfolio
					</h1>
					<p className="mt-4 md:px-20 text-center text-gray-800">
						At Brandmark, we proudly represent a carefully curated portfolio of global lifestyle brands that balance design, fashion and function. Each one brings something unique to the Irish market.
					</p>
				</div>
			</section>

			<section className="max-w-5xl mx-auto px-6 py-10 space-y-6">
				{/* Filters */}
				<div className="w-full bg-white/70 rounded-lg p-4 flex flex-wrap items-center gap-2">
					<button
						type="button"
						onClick={clearFilters}
						className={`px-3 py-1 rounded-md border text-sm font-semibold transition ${selected.size === 0
								? "bg-teal/80 text-white border-teal"
								: "bg-white text-gray-800 border-gray-300 hover:bg-mist/70"
							}`}
					>
						All
					</button>
					{allCategories.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => toggleCategory(cat)}
							aria-pressed={selected.has(cat)}
							className={`px-3 py-1 rounded-md border text-sm font-semibold transition flex items-center gap-2 ${selected.has(cat)
									? "bg-teal/80 text-white border-teal"
									: "bg-white text-gray-800 border-gray-300 hover:bg-mist/70"
								}`}
						>
							<span>{cat}</span>
							{selected.has(cat) && (
								<i className="fa-solid fa-square-xmark" aria-hidden="true"></i>
							)}
							<span className="sr-only">
								{selected.has(cat) ? "Selected. Click to deselect." : "Click to select."}
							</span>
						</button>
					))}
					{selected.size > 0 && (
						<button
							type="button"
							onClick={clearFilters}
							className="ml-auto px-3 py-1 rounded-md text-sm font-semibold text-teal hover:underline"
						>
							Clear filters
						</button>
					)}
				</div>

				{filteredBrands.map(({ key, name, logo, short, categories }) => {
					return (
						<article
							key={key}
							className="w-full bg-white rounded-lg shadow hover:shadow-lg transition p-5 md:p-6"
						>
							<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
								<div className="w-full md:w-48 flex items-center justify-center">
									<Image
										src={logo}
										alt={`${name} logo`}
										width={200}
										height={100}
										className="object-contain max-h-16"
									/>
								</div>

								<div className="flex-1">
									<div className="flex items-start justify-between gap-4">
										<div>
											<h2 className="font-eurostile-extended text-2xl md:text-3xl font-bold">
												{name}
											</h2>
											<div className="mt-2 flex flex-wrap gap-2">
												{categories.map((cat) => (
													<span
														key={cat}
														className={`text-xs font-semibold px-2 py-1 rounded border ${selected.has(cat)
																? "bg-teal/80 text-white border-teal"
																: "bg-mist/70 text-gray-700 border-gray-300"
															}`}
													>
														{cat}
													</span>
												))}
											</div>
										</div>
									</div>

									<p className="mt-3 text-gray-800">{short}</p>

									<div className="mt-4">
										<Link
											href={`/${key}`}
											className="inline-block px-4 py-2 rounded-md bg-teal/80 text-white font-bold hover:bg-teal transition"
										>
											View brand
										</Link>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</section>
		</div>
	);
}
