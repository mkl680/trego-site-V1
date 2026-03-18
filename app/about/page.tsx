export default function About() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* HERO */}
      <section className="py-16 px-6 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Notre histoire
          </h1>
          <p className="text-lg text-slate-500">
            TREGO est née d'une conviction simple : les objets du quotidien
            peuvent faire bien plus que ce qu'on leur demande.
          </p>
        </div>
      </section>

      {/* TIMELINE NFC */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            La technologie qui change tout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '2004',
                title: 'Invention du NFC',
                text: 'Nokia et Philips inventent le NFC, ouvrant la voie à une révolution des échanges sans contact.',
              },
              {
                year: '2011',
                title: 'Premiers paiements NFC',
                text: 'Les premiers paiements sans contact NFC font leur apparition dans le monde entier.',
              },
              {
                year: '2020',
                title: 'Démocratisation mondiale',
                text: "Le NFC devient grand public avec l'adoption massive des smartphones compatibles.",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="text-center p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="text-4xl font-bold text-blue-600 mb-3">
                  {item.year}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE TREGO */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            Notre parcours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '2025',
                title: 'Création de TREGO',
                text: 'Lancement des premières cartes NFC métal et des premiers clients B2B.',
              },
              {
                year: '2026',
                title: 'Déploiement CRM',
                text: 'Lancement du dashboard TREGO : gestion des liens, statistiques et suivi en temps réel.',
              },
              {
                year: '2027',
                title: 'Application Mobile',
                text: "Lancement de l'application mobile TREGO pour une gestion encore plus simple.",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="text-center p-8 rounded-2xl bg-white shadow-sm"
              >
                <div className="text-4xl font-bold text-blue-600 mb-3">
                  {item.year}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Passer d'un monde d'objets muets à un monde d'objets connectés.
            Rendre la technologie NFC accessible à toutes les entreprises,
            quelle que soit leur taille.
          </p>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Innovation',
                text: 'On cherche toujours la solution la plus simple pour un problème complexe.',
              },
              {
                icon: '🤝',
                title: 'Proximité',
                text: 'Chaque client est accompagné personnellement de A à Z.',
              },
              {
                icon: '🎯',
                title: 'Résultat',
                text: 'On ne vend pas de la technologie. On vend des résultats mesurables.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
