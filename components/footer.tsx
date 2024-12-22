import Link from "next/link";

export function Footer() {
  return (
    <footer className="font-mono bg-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-gray-400">© 2024 zündkollektiv</p>
          <nav className="space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white"
            >
              privacy
            </Link>
            <Link
              href="/imprint"
              className="text-sm text-gray-400 hover:text-white"
            >
              imprint
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
