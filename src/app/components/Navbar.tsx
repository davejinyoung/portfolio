"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-10 bg-gradient-to-b from-gray-900 to-transparent">
      <nav className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="space-x-8 text-sm font-extrabold">
          <Link
            href="/"
            className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/#work"
            className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="/#projects"
            className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
