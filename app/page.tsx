import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Transformez vos objets en experiences connectees
        </h1>
        <p className="text-xl text-slate-500 mb-8">
          TREGO connecte vos cartes, flyers et bracelets a internet via NFC.
        </p>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition">
          Reserver une demo gratuite
        </Link>
      </div>
    </div>
  );
}
