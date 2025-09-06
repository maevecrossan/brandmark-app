"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroCarousel({
	slides = [],
	intervalMs = 5000,
	className = "",
	imageClassName = "object-cover",
}) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (!slides.length) return;
		const id = setInterval(() => {
			setIndex((i) => (i + 1) % slides.length);
		}, intervalMs);
		return () => clearInterval(id);
	}, [slides.length, intervalMs]);

	return (
		<div className={`absolute inset-0 ${className}`} aria-hidden>
			{slides.map((s, i) => {
				const isActive = i === index;
				return (
					<div
						key={i}
						className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-0"
							}`}
					>
						{s.src ? (
							<Image
								src={s.src}
								alt={s.alt || ""}
								fill
								priority={i === 0}
								quality={90}
								sizes="100vw"
								className={imageClassName}
							/>
						) : (
							<div className="absolute inset-0">
								<div className="w-full h-full bg-[repeating-linear-gradient(45deg,theme(colors.gray.200),theme(colors.gray.200)_12px,theme(colors.gray.300)_12px,theme(colors.gray.300)_24px)]" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="bg-black/50 text-white px-4 py-2 rounded text-center">
										<p className="font-semibold">{s.placeholderLabel || "Image Placeholder"}</p>
										{s.placeholderNote ? (
											<p className="text-xs opacity-80">{s.placeholderNote}</p>
										) : null}
									</div>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

