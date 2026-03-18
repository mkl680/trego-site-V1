import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold text-blue-400 tracking-wider">
            TREGO
          </span>
          <p className="text-slate-400 text-sm mt-1">
            Objets connectés NFC premium
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          <Link href="/products" className="hover:text-white transition">
            Produits
          </Link>
          <Link href="/about" className="hover:text-white transition">
            À propos
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
        <div className="text-sm text-slate-400 text-center md:text-right">
          <p>contact@trego.fr</p>
          <p className="mt-1">© 2025 TREGO — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
