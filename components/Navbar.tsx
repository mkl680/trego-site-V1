'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 tracking-wider"
        >
          TREGO
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/products"
            className="text-slate-600 hover:text-blue-600 transition font-medium"
          >
            Produits
          </Link>
          <Link
            href="/about"
            className="text-slate-600 hover:text-blue-600 transition font-medium"
          >
            À propos
          </Link>
          <Link
            href="/blog"
            className="text-slate-600 hover:text-blue-600 transition font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 hover:text-blue-600 transition font-medium"
          >
            Contact
          </Link>
        </div>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm"
        >
          Réserver une démo
        </Link>
        <button
          className="md:hidden text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/products"
            className="text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Produits
          </Link>
          <Link
            href="/about"
            className="text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/blog"
            className="text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold text-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Réserver une démo
          </Link>
        </div>
      )}
    </nav>
  );
}
