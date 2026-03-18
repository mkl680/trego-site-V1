import Link from 'next/link';

const articles = [
  {
    tag: 'NFC & Tech',
    title: 'Pourquoi la carte de visite papier est en train de disparaître',
    excerpt:
      "En 2025, distribuer une carte papier c'est comme envoyer un fax. On vous explique pourquoi et ce qui la remplace.",
    date: 'Mars 2025',
    featured: true,
  },
  {
    tag: 'Conseils B2B',
    title: "5 façons d'utiliser le NFC pour votre entreprise",
    excerpt:
      'Du networking aux événements, découvrez comment le NFC transforme votre quotidien professionnel.',
    date: 'Mars 2025',
    featured: false,
  },
  {
    tag: 'Produit',
    title: 'Comment fonctionne la redirection dynamique NFC ?',
    excerpt: 'La technologie derrière TREGO expliquée simplement en 3 minutes.',
    date: 'Mars 2025',
    featured: false,
  },
  {
    tag: 'Événementiel',
    title: 'Bracelets NFC : la révolution des festivals et campings',
    excerpt:
      'Paiement cashless, accès événements, identification... Le bracelet NFC change tout.',
    date: 'Mars 2025',
    featured: false,
  },
];

export default function Blog() {
  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* HERO */}
      <section className="py-16 px-6 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Le Blog TREGO
          </h1>
          <p className="text-lg text-slate-500">
            Actualités NFC, conseils business et nouveautés produits.
          </p>
        </div>
      </section>

      {/* ARTICLE VEDETTE */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-white">
            <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full font-medium mb-6">
              {featured.tag}
            </span>
            <h2 className="text-3xl font-bold mb-4 max-w-2xl">
              {featured.title}
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-blue-200 text-sm">{featured.date}</span>
              <Link
                href="#"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Lire l'article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GRILLE ARTICLES */}
      <section className="py-8 px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((article) => (
            <div
              key={article.title}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-md transition"
            >
              <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium mb-4">
                {article.tag}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {article.title}
              </h3>
              <p className="text-slate-500 text-sm mb-6">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">{article.date}</span>
                <Link
                  href="#"
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Lire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Restez informé des nouveautés TREGO
          </h2>
          <p className="text-slate-500 mb-8">
            Pas de spam. Une newsletter par mois maximum.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="votre@email.fr"
              className="flex-1 border border-slate-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
