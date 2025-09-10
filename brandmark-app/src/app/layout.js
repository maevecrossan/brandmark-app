import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Derive site URL for canonical/OG using env when available
// Priority: NEXT_PUBLIC_SITE_URL (manual) -> VERCEL_URL (auto) -> localhost
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";
const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`;

export const metadata = {
	metadataBase: new URL(siteUrl),
	applicationName: "Brandmark Agencies",
	title: {
		default: "Brandmark Agencies — Brand Representation, Dublin",
		template: "%s | Brandmark Agencies",
	},
	description:
		"Brandmark Agencies represents leading brands with dedicated sales, strategy, and support from Dublin, Ireland.",
	keywords: [
		"Brandmark Agencies",
		"brand representation",
		"sales agency",
		"Dublin",
		"Ireland",
		"fashion city",
		"Ballymount",
	],
	authors: [{ name: "Brandmark Agencies" }],
	creator: "Brandmark Agencies",
	publisher: "Brandmark Agencies",
	category: "Business",
	manifest: "/site.webmanifest",
	themeColor: "#0f766e",
	colorScheme: "light",
	formatDetection: { telephone: true, email: true, address: true },
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
	},
	appleWebApp: {
		capable: true,
		title: "Brandmark",
		statusBarStyle: "default",
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			maxVideoPreview: -1,
			maxImagePreview: "large",
			maxSnippet: -1,
		},
	},
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "/",
		title: "Brandmark Agencies — Brand Representation, Dublin",
		description:
			"Brandmark Agencies represents leading brands with dedicated sales, strategy, and support from Dublin, Ireland.",
		siteName: "Brandmark Agencies",
		locale: "en_IE",
		images: [
			{
				url: "/apple-touch-icon.png",
				width: 180,
				height: 180,
				alt: "Brandmark Agencies",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Brandmark Agencies — Brand Representation, Dublin",
		description:
			"Brandmark Agencies represents leading brands with dedicated sales, strategy, and support from Dublin, Ireland.",
		images: ["/apple-touch-icon.png"],
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#0f766e",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{/* Organization JSON-LD for richer SERP */}
				<script
					type="application/ld+json"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'Brandmark Agencies',
							url: siteUrl,
							logo: '/apple-touch-icon.png',
							sameAs: [
								'https://www.linkedin.com/company/brandmark-agencies/',
								'https://www.instagram.com/brandmarkagencies/',
							],
							address: {
								'@type': 'PostalAddress',
								streetAddress: 'Suite 5, Unit 14 Fashion City',
								addressLocality: 'Ballymount',
								addressRegion: 'Dublin',
								addressCountry: 'IE',
								postalCode: 'D24X6CT',
							},
							contactPoint: [
								{
									'@type': 'ContactPoint',
									contactType: 'sales',
									areaServed: 'IE',
									availableLanguage: ['en'],
								},
							],
						}),
					}}
				/>
			</head>
			<body className={`antialiased`}>
				<div>
					<Navbar />
					<main className="row-start-2 pb-[60px] min-h-screen">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
