export default function Footer() {
	return (
		<footer className="font-sans flex items-center justify-center py-6 border-t border-gray-200 bg-white text-gray-500">
			<div className="text-sm">© {new Date().getFullYear()} Brandmark. All rights reserved.</div>
		</footer>
	);
}
