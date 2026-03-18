import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-6">
            ✨ La carte de visite du futur
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Transformez vos objets en expériences connectées
          </h1>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0">
            TREGO connecte vos cartes, flyers et bracelets à internet via NFC.
            Modifiez votre contenu à distance, en temps réel, sans toucher à
            l'objet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition text-center"
            >
              Réserver une démo gratuite
            </Link>
            <Link
              href="/products"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition text-center"
            >
              Voir nos produits
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-44 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white relative overflow-hidden">
            <div className="absolute top-4 left-4 text-2xl font-bold tracking-widest">
              TREGO
            </div>
            <div className="text-5xl opacity-30">📶</div>
            <div className="text-sm opacity-70 mt-2">
              Scannez pour connecter
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/40 rounded-full flex items-center justify-center text-xs">
              NFC
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈME */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16">
            Le problème avec les cartes classiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🗑️',
                title: 'Gaspillage',
                text: '88% des cartes papier finissent à la poubelle dans la semaine qui suit leur distribution.',
              },
              {
                icon: '💸',
                title: 'Coût inutile',
                text: "Des centaines d'euros renouvelés chaque année pour un résultat de moins en moins efficace.",
              },
              {
                icon: '📊',
                title: 'Zéro données',
                text: 'Impossible de savoir qui a lu votre carte ou cliqué sur vos informations.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-blue-600 font-semibold mb-4">
            Nos solutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16">
            Un objet. Un scan. Une connexion.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💳',
                title: 'Carte NFC Métal',
                text: 'Inaltérable et modifiable à distance. Un scan suffit pour partager vos coordonnées, réseaux et catalogue.',
                tag: 'À partir de 20€ / carte',
              },
              {
                icon: '📄',
                title: 'Flyers NFC',
                text: "Au même prix qu'un flyer classique mais connecté. Distribuez en salon et modifiez le contenu après impression.",
                tag: 'Événements & Salons',
              },
              {
                icon: '🎫',
                title: 'Bracelets NFC',
                text: "Accès événements, paiement cashless, camping et festivals. L'expérience réinventée.",
                tag: 'Événementiel',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 mb-4">{item.text}</p>
                <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16">
            Simple comme un geste
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Vous recevez votre objet TREGO',
                text: "Configuré et prêt à l'emploi. Votre contenu est déjà en ligne à la livraison.",
              },
              {
                num: '02',
                title: 'Votre contact scanne avec son téléphone',
                text: "Pas d'application à télécharger. Un simple scan NFC ou QR code suffit.",
              },
              {
                num: '03',
                title: 'Il accède à votre contenu instantanément',
                text: 'Page personnalisée, coordonnées, réseaux, catalogue. Tout en un geste.',
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 italic mt-10">
            Vous modifiez votre contenu à tout moment depuis votre dashboard,
            sans toucher à l'objet.
          </p>
        </div>
      </section>

      {/* PRIX */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            20€ par commercial. Par an.
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
            Contre plusieurs centaines d'euros en cartes papier à renouveler.
            Une carte TREGO ne finit jamais à la poubelle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '20€', label: 'par carte / an' },
              { value: '15€', label: 'par mois (gestion & stats)' },
              { value: '0', label: 'réimpression nécessaire' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉMO */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Voyez TREGO en action
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Réservez une démonstration gratuite de 20 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            📅 Réserver une démo gratuite
          </Link>
          <p className="text-slate-400 text-sm mt-4">
            Gratuit · Sans engagement · Réponse sous 24h
          </p>
        </div>
      </section>
    </main>
  );
}
