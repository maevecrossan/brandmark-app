export default function Navbar() {
  return (
    <nav className="font-sans flex items-center justify-between p-4">
      <div className="text-lg font-bold">Brandmark</div>
      <div className="flex items-center gap-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/portfolio" className="hover:underline">Portfolio</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/projects" className="hover:underline">Projects</a>
      </div>
    </nav>
  );
}
