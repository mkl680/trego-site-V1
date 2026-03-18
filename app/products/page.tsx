import Link from 'next/link';

export default function Products() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* HERO */}
      <section className="py-16 px-6 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-6">
            Nos solutions
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Des objets intelligents pour chaque besoin
          </h1>
          <p className="text-lg text-slate-500">
            Un scan suffit pour connecter votre monde physique au digital.
          </p>
        </div>
      </section>

      {/* PRODUIT 1 — CARTE NFC */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl h-64 flex items-center justify-center text-white text-6xl shadow-xl">
            💳
          </div>
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium mb-4">
              B2B — À partir de 20€ HT / carte
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Carte de visite NFC Métal
            </h2>
            <p className="text-slate-500 mb-6">
              Inaltérable, premium et modifiable à distance. Remplacez
              définitivement vos cartes papier par une carte métal qui ne finit
              jamais à la poubelle.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Transfert de contacts en un scan',
                'Réseaux sociaux et catalogue intégrés',
                'Contenu modifiable à distance',
                'Compatible tous smartphones',
                'Aucune application requise',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUIT 2 — FLYERS NFC */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl h-64 flex items-center justify-center text-white text-6xl shadow-xl">
            📄
          </div>
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium mb-4">
              Événements & Salons
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Flyers NFC Connectés
            </h2>
            <p className="text-slate-500 mb-6">
              Le même prix qu'un flyer classique, mais avec toute la puissance
              du NFC. Distribuez en salon et modifiez votre contenu après
              impression.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Redirection vers vidéo, site ou bon de réduction',
                'Contenu modifiable après impression',
                'Idéal pour les salons et événements pros',
                'Statistiques de scans en temps réel',
                'Format personnalisable',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUIT 3 — BRACELETS NFC */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl h-64 flex items-center justify-center text-white text-6xl shadow-xl">
            🎫
          </div>
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium mb-4">
              Événementiel — Sur devis
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Bracelets NFC Événementiels
            </h2>
            <p className="text-slate-500 mb-6">
              Accès événements, paiement cashless, identification en camping et
              festivals. Réinventez l'expérience de vos participants.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Contrôle d'accès instantané",
                'Paiement cashless intégré',
                'Idéal festivals, campings, soirées',
                "Personnalisable aux couleurs de l'événement",
                'Gestion via dashboard TREGO',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Vous ne savez pas quel produit choisir ?
          </h2>
          <p className="text-blue-100 mb-8">
            On vous aide à trouver la solution adaptée en 20 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Réserver une démo gratuite
          </Link>
        </div>
      </section>
    </main>
  );
}
