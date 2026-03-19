import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-6">
            La carte de visite du futur
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Transformez vos objets en experiences connectees
          </h1>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0">
            TREGO connecte vos cartes, flyers et bracelets a internet via NFC. Modifiez votre contenu a distance, en temps reel, sans toucher a l objet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition text-center shadow-lg">
              Reserver une demo gratuite
            </Link>
            <Link href="/products" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition text-center">
              Voir nos produits
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">20</div>
              <div className="text-xs text-slate-500">euros par carte</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">15</div>
              <div className="text-xs text-slate-500">euros par mois</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">0</div>
              <div className="text-xs text-slate-500">reimpression</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-44 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white">
              <div className="absolute top-4 left-4 text-xl font-bold tracking-widest">TREGO</div>
              <div className="text-5xl opacity-20">NFC</div>
              <div className="text-sm opacity-70 mt-2">Scannez pour connecter</div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/40 rounded-full flex items-center justify-center text-xs">NFC</div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl shadow-md">
              📶
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS PARTENAIRES */}
      <section className="py-8 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm mb-6">Technologie utilisee par des professionnels partout en Ile-de-France</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-40">
            {["PME", "Startups", "Agences", "Commerciaux", "Evenements"].map((item) => (
              <span key={item} className="text-slate-600 font-bold text-lg tracking-wide">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEME */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-4">
            Le probleme avec les cartes classiques
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Chaque annee les entreprises depensent des fortunes en cartes papier qui finissent a la poubelle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🗑️", title: "Gaspillage", text: "88% des cartes papier finissent a la poubelle dans la semaine qui suit leur distribution.", stat: "88%" },
              { icon: "💸", title: "Cout inutile", text: "Des centaines d euros renouvelés chaque année pour un résultat de moins en moins efficace.", stat: "500€+" },
              { icon: "📊", title: "Zero donnees", text: "Impossible de savoir qui a lu votre carte ou clique sur vos informations.", stat: "0 stats" },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-blue-600 font-semibold mb-4">Nos solutions</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-4">
            Un objet. Un scan. Une connexion.
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Trois produits, un seul objectif : transformer vos objets physiques en portails numeriques.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "💳", title: "Carte NFC Metal", text: "Inalterable et modifiable a distance. Un scan suffit pour partager vos coordonnees, reseaux et catalogue.", tag: "A partir de 20 euros", href: "/products" },
              { icon: "📄", title: "Flyers NFC", text: "Au meme prix qu un flyer classique mais connecte. Distribuez en salon et modifiez le contenu apres impression.", tag: "Evenements et Salons", href: "/products" },
              { icon: "🎫", title: "Bracelets NFC", text: "Acces evenements, paiement cashless, camping et festivals. L experience reinventee.", tag: "Evenementiel", href: "/products" },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group cursor-pointer block">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">{item.title}</h3>
                <p className="text-slate-500 mb-4">{item.text}</p>
                <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium">{item.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-4">
            Simple comme un geste
          </h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
            Pas d application a telecharger. Pas de configuration complexe. Juste un scan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { num: "01", title: "Vous recevez votre objet TREGO", text: "Configure et pret a l emploi. Votre contenu est deja en ligne a la livraison." },
              { num: "02", title: "Votre contact scanne avec son telephone", text: "Pas d application a telecharger. Un simple scan NFC ou QR code suffit." },
              { num: "03", title: "Il accede a votre contenu instantanement", text: "Page personnalisee, coordonnees, reseaux, catalogue. Tout en un geste." },
            ].map((step, i) => (
              <div key={step.num} className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 italic mt-12 text-sm">
            Vous modifiez votre contenu a tout moment depuis votre dashboard, sans toucher a l objet.
          </p>
        </div>
      </section>

      {/* PRIX */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">20 euros par commercial. Par an.</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
            Contre plusieurs centaines d euros en cartes papier a renouveler. Une carte TREGO ne finit jamais a la poubelle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            {[
              { value: "20", unit: "euros", label: "par carte par an" },
              { value: "15", unit: "euros", label: "par mois gestion et stats" },
              { value: "0", unit: "", label: "reimpression necessaire" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="text-5xl font-bold mb-1">{stat.value}<span className="text-2xl">{stat.unit}</span></div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg">
            Calculer mon ROI gratuitement
          </Link>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <span className="block text-center text-blue-600 font-semibold mb-4">Temoignages</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-16">
            Ils ont adopte TREGO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Thomas D.", role: "Directeur Commercial", company: "Agence Immobiliere Paris 8", text: "Depuis que j ai adopte la carte TREGO, mes prospects retiennent mon contact. Plus jamais une carte a la poubelle. Le ROI est immediat.", stars: 5 },
              { name: "Sarah M.", role: "Fondatrice", company: "Studio de Communication", text: "On a equipe toute notre equipe de 12 personnes. L image premium que ca renvoie en rdv client est incomparable. Je recommande a 100%.", stars: 5 },
              { name: "Kevin L.", role: "CEO", company: "Startup Fintech", text: "Le fait de pouvoir modifier les liens a distance c est un game changer. On a change notre pitch deck 3 fois en 1 mois sans retoucher les cartes.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role} - {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Questions frequentes
          </h2>
          <div className="space-y-4">
            {[
              { q: "Est-ce que ca marche sur tous les smartphones ?", a: "Oui, la technologie NFC est compatible avec tous les smartphones recents (iPhone 7+ et Android 4.4+). Un QR code de secours est toujours disponible." },
              { q: "Que se passe-t-il si je veux changer mes informations ?", a: "Vous modifiez votre contenu en temps reel depuis votre dashboard TREGO. La carte physique n a pas besoin d etre remplacee." },
              { q: "Quel est le delai de livraison ?", a: "Les cartes sont livrees sous 5 a 7 jours ouvrés apres validation de votre commande et de votre design." },
              { q: "Y a-t-il un engagement de duree ?", a: "Non, l abonnement mensuel de 15 euros est sans engagement. Vous pouvez resilier a tout moment." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pret a transformer vos objets ?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Rejoignez les entreprises qui ont deja adopte TREGO. Demo gratuite, sans engagement.
          </p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-lg">
            Reserver une demo gratuite
          </Link>
          <p className="text-slate-500 text-sm mt-4">Gratuit - Sans engagement - Reponse sous 24h</p>
        </div>
      </section>

      {/* WHATSAPP BUTTON */}
      
        href="https://wa.me/33782174651"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.926l6.223-1.479A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.498-5.107-1.367l-.367-.217-3.793.902.957-3.694-.239-.381A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

    </main>
  );
}
