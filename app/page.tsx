import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">TREGO</h1>
        <p className="text-xl text-slate-500 mb-8">Transformez vos objets en experiences connectees</p>
        <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold">
          Reserver une demo
        </Link>
      </section>
    </main>
  );
}
