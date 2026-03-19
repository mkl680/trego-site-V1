export default function Contact() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-16 px-6 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Parlons de votre projet</h1>
          <p className="text-lg text-slate-500">Reservez une demonstration gratuite de 20 minutes.</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-600 rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-4">Reserver une demo</h2>
            <p className="text-blue-100 mb-8">On vous presente TREGO en 20 minutes.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-blue-100"><span className="font-bold">OK</span> Gratuit et sans engagement</li>
              <li className="flex items-center gap-3 text-blue-100"><span className="font-bold">OK</span> Demonstration produit en direct</li>
              <li className="flex items-center gap-3 text-blue-100"><span className="font-bold">OK</span> Reponse sous 24h</li>
            </ul>
            <a href="https://calendly.com/trego" target="_blank" rel="noopener noreferrer" className="block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-center">Choisir un creneau</a>
          </div>
          <div className="bg-slate-50 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Nous ecrire</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Prenom</label>
                  <input type="text" placeholder="Jean" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                  <input type="text" placeholder="Dupont" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" placeholder="jean@entreprise.fr" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Entreprise</label>
                <input type="text" placeholder="Nom de votre entreprise" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Telephone</label>
                <input type="tel" placeholder="+33 6 00 00 00 00" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} placeholder="Decrivez votre projet" className="w-full border border-slate-200 rounded-xl px-4 py-3 resize-none" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold">Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
