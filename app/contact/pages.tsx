export default function Contact() {
  return (
    <main className="min-h-screen bg-white pt-24">

      {/* HERO */}
      <section className="py-16 px-6 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-slate-500">
            Réservez une démonstration gratuite de 20 minutes ou envoyez-nous un message.
          </p>
        </div>
      </section>

      {/* 2 COLONNES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Colonne gauche - Demo */}
          <div className="bg-blue-600 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-4">Réserver une démo</h2>
            <p className="text-blue-100 mb-8">
              On vous présente TREGO en 20 minutes, on répond à toutes vos questions et on vous propose la solution adaptée.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Gratuit et sans engagement",
                "Démonstration produit en direct",
                "Réponse sous 24h",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-100">
                  <span className="text-white font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            
              href="https://calendly.com/trego"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition w-full text-center"
            >
              Choisir un créneau
            </a>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="bg-slate-50 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Nous écrire</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Prénom</label>
                  <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jean" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                  <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Dupont" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email professionnel</label>
                <input type="email" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="jean@entreprise.fr" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Entreprise</label>
                <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Nom de votre entreprise" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Téléphone</label>
                <input type="tel" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="+33 6 00 00 00 00" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" placeholder="Décrivez votre projet..." />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold hover:bg-blue-700 transition">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}
