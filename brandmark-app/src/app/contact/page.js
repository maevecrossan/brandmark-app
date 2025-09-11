"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

function ObfuscatedEmail({ user, domain, tld, clickToReveal = true, label }) {
	const [addr, setAddr] = useState("");
	const [revealed, setRevealed] = useState(!clickToReveal);

	useEffect(() => {
		if (!clickToReveal) {
			setAddr(`${user}\u0040${domain}.${tld}`);
		}
	}, [user, domain, tld, clickToReveal]);

	if (!revealed) {
		return (
			<button
				type="button"
				onClick={() => {
					setAddr(`${user}\u0040${domain}.${tld}`);
					setRevealed(true);
				}}
				className="underline text-teal hover:text-black focus:outline-none focus:ring-2 focus:ring-teal/50 rounded"
				aria-label={`Reveal email for ${user}`}
			>
				Click to reveal email
			</button>
		);
	}
	if (!addr) return <span className="sr-only">Email hidden until page loads</span>;
	return (
		<a href={`mailto:${addr}`} className="underline hover:text-teal" rel="nofollow noopener">
			{label || addr}
		</a>
	);
}

function ObfuscatedTel({ country = "+353", number }) {
	const [href, setHref] = useState("");
	const [display, setDisplay] = useState("");
	useEffect(() => {
		const digits = `${country}${number}`.replace(/\s+/g, "");
		setHref(`tel:${digits}`);
		setDisplay(`${country} ${number}`);
	}, [country, number]);
	if (!href) return <span className="sr-only">Phone hidden until page loads</span>;
	return (
		<a href={href} className="hover:text-teal" rel="nofollow noopener">
			{display}
		</a>
	);
}

export default function Contact() {
	return (
		<div className="font-sans w-full mx-auto">
			<section className="max-w-6xl mx-auto px-6 py-10">
				<div className="bg-mist/70 rounded-lg p-8 text-center">
					<h1 className="font-eurostile-extended text-3xl md:text-4xl font-bold">Contact Us</h1>
					<p className="mt-3 text-gray-800">Reach out to our team directly or visit us at our showroom.</p>
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
				{/* Opening Hours */}
				<div>
					<div className="block bg-white rounded-lg p-6 md:p-12 shadow-sm border border-gray-200 hover:shadow-md transition w-full h-full text-left">
						<div className="flex items-center gap-2 text-teal">
							<h2 className="font-eurostile-extended text-lg md:text-xl font-bold text-gray-900">
								<FontAwesomeIcon icon={faClock} className="text-teal text-sm mr-2 mb-0.5" />
								Opening Hours
							</h2>
						</div>
						<ul className="mt-2 space-y-1 text-gray-800">
							<li>Monday - Friday: 9:00 AM - 5:00 PM</li>
						</ul>
					</div>
				</div>

				{/* Address */}
				<div>
					<div
						className="block bg-white rounded-lg p-6 md:p-12 shadow-sm border border-gray-200 hover:shadow-md transition w-full h-full text-left"
					>
						<div className="flex items-center gap-2 text-teal">
							<FontAwesomeIcon icon={faLocationDot} />
							<h2 className="font-eurostile-extended text-lg md:text-xl font-bold text-gray-900">Visit us</h2>
						</div>
						<address className="not-italic leading-relaxed text-gray-800 mt-3">
							<div>Brandmark Agencies</div>
							<div>Suite 5, Unit 14 Fashion City</div>
							<div>Ballymount</div>
							<div>Dublin, Ireland</div>
							<div>D24X6CT</div>
							<a
								href="https://www.google.com/maps/search/?api=1&query=Brandmark%20Agencies%2C%20Suite%205%2C%20Unit%2014%20Fashion%20City%2C%20Ballymount%2C%20Dublin%20D24%20X6CT%2C%20Ireland"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Open Brandmark Agencies location in Google Maps"
								className="mt-3 inline-flex items-center gap-2 text-teal underline"
							>
								Open in Google Maps
							</a>
						</address>
					</div>
				</div>

				{/* Team */}
				<div className="w-full flex justify-center md:col-span-2">
					<div className="bg-white rounded-lg p-6 md:p-14 shadow-sm border border-gray-200 w-full max-w-none">
						<h2 className="font-eurostile-extended text-xl md:text-2xl font-bold">Team contacts</h2>
						<ul className="mt-4 text-gray-800 divide-y divide-gray-200">
							<li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
								<Image
									src="/images/brandmark/lee-profile.jpeg"
									alt="Portrait of Lee Graham"
									width={64}
									height={64}
									className="rounded-full object-cover w-16 h-16 shrink-0 ring-2 ring-white shadow"
								/>
								<div>
									<div className="font-semibold">Lee Graham</div>
									<div className="italic text-sm">Director/Agent</div>
									<div className="mt-1 flex items-center gap-2 text-sm">
										<FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
										<ObfuscatedEmail user="lee" domain="brandmark" tld="ie" />
									</div>
									<div className="flex items-center gap-2 text-sm">
										<FontAwesomeIcon icon={faPhone} className="text-gray-500" />
										<ObfuscatedTel country="+353" number="879 428 719" />
									</div>
								</div>
							</li>
							<li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
								<Image
									src="/images/brandmark/lucy-profile.jpeg"
									alt="Portrait of Lucy Dunne"
									width={64}
									height={64}
									className="rounded-full object-cover w-16 h-16 shrink-0 ring-2 ring-white shadow"
								/>
								<div>
									<div className="font-semibold">Lucy Dunne</div>
									<div className="italic text-sm">Associate Director</div>
									<div className="mt-1 flex items-center gap-2 text-sm">
										<FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
										<ObfuscatedEmail user="lucy" domain="brandmark" tld="ie" />
									</div>
									<div className="flex items-center gap-2 text-sm">
										<FontAwesomeIcon icon={faPhone} className="text-gray-500" />
										<ObfuscatedTel country="+353" number="873 978 358" />
									</div>
								</div>
							</li>
							<li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
								<Image
									src="/images/brandmark/gerry-profile.jpg"
									alt="Portrait of Gerry Graham"
									width={64}
									height={64}
									className="rounded-full object-cover object-[center_100%] w-16 h-16 shrink-0 ring-2 ring-white shadow"
								/>
								<div>
									<div className="font-semibold">Gerry Graham</div>
									<div className="italic text-sm">Road Sales</div>
									<div className="mt-1 flex items-center gap-2 text-sm">
										<FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
										<ObfuscatedEmail user="gerry" domain="brandmark" tld="ie" />
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
