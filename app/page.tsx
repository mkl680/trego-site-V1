import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div style={{minHeight:"100vh",background:"white"}}>

      {/* HERO */}
      <div style={{paddingTop:"120px",paddingBottom:"80px",maxWidth:"1152px",margin:"0 auto",padding:"120px 24px 80px",display:"flex",flexWrap:"wrap",alignItems:"center",gap:"48px"}}>
        <div style={{flex:1,minWidth:"300px"}}>
          <span style={{display:"inline-block",background:"#DBEAFE",color:"#2563EB",fontSize:"14px",fontWeight:500,padding:"4px 16px",borderRadius:"999px",marginBottom:"24px"}}>
            La carte de visite du futur
          </span>
          <h1 style={{fontSize:"48px",fontWeight:"bold",color:"#0F172A",lineHeight:1.2,marginBottom:"24px"}}>
            Transformez vos objets en experiences connectees
          </h1>
          <p style={{fontSize:"18px",color:"#64748B",marginBottom:"32px",maxWidth:"560px"}}>
            TREGO connecte vos cartes, flyers et bracelets a internet via NFC. Modifiez votre contenu a distance, en temps reel.
          </p>
          <div style={{display:"flex",gap:"16px",flexWrap:"wrap",marginBottom:"40px"}}>
            <Link href="/contact" style={{background:"#2563EB",color:"white",padding:"16px 32px",borderRadius:"999px",fontWeight:600,textDecoration:"none",display:"inline-block",boxShadow:"0 4px 14px rgba(37,99,235,0.4)"}}>
              Reserver une demo gratuite
            </Link>
            <Link href="/products" style={{border:"2px solid #2563EB",color:"#2563EB",padding:"16px 32px",borderRadius:"999px",fontWeight:600,textDecoration:"none",display:"inline-block"}}>
              Voir nos produits
            </Link>
          </div>
          <div style={{display:"flex",gap:"32px",alignItems:"center"}}>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"24px",fontWeight:"bold",color:"#0F172A"}}>20</div>
              <div style={{fontSize:"12px",color:"#64748B"}}>euros par carte</div>
            </div>
            <div style={{width:"1px",height:"40px",background:"#E2E8F0"}}></div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"24px",fontWeight:"bold",color:"#0F172A"}}>15</div>
              <div style={{fontSize:"12px",color:"#64748B"}}>euros par mois</div>
            </div>
            <div style={{width:"1px",height:"40px",background:"#E2E8F0"}}></div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"24px",fontWeight:"bold",color:"#0F172A"}}>0</div>
              <div style={{fontSize:"12px",color:"#64748B"}}>reimpression</div>
            </div>
          </div>
        </div>
        <div style={{flex:1,minWidth:"280px",display:"flex",justifyContent:"center"}}>
          <div style={{position:"relative"}}>
            <div style={{width:"288px",height:"176px",background:"linear-gradient(135deg,#2563EB,#1d4ed8)",borderRadius:"16px",boxShadow:"0 25px 50px rgba(0,0,0,0.25)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"white",position:"relative"}}>
              <div style={{position:"absolute",top:"16px",left:"16px",fontSize:"18px",fontWeight:"bold",letterSpacing:"4px"}}>TREGO</div>
              <div style={{fontSize:"48px",opacity:0.2}}>NFC</div>
              <div style={{fontSize:"14px",opacity:0.7,marginTop:"8px"}}>Scannez pour connecter</div>
              <div style={{position:"absolute",bottom:"16px",right:"16px",width:"32px",height:"32px",border:"2px solid rgba(255,255,255,0.4)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px"}}>NFC</div>
            </div>
            <div style={{position:"absolute",bottom:"-16px",right:"-16px",width:"80px",height:"80px",background:"#DBEAFE",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",boxShadow:"0 4px 14px rgba(0,0,0,0.1)"}}>
              📶
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEME */}
      <div style={{padding:"80px 24px",background:"white"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"16px"}}>
            Le probleme avec les cartes classiques
          </h2>
          <p style={{textAlign:"center",color:"#64748B",marginBottom:"64px",maxWidth:"672px",margin:"0 auto 64px"}}>
            Chaque annee les entreprises depensent des fortunes en cartes papier qui finissent a la poubelle.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"32px"}}>
            {[
              {icon:"🗑️",title:"Gaspillage",text:"88% des cartes papier finissent a la poubelle dans la semaine.",stat:"88%"},
              {icon:"💸",title:"Cout inutile",text:"Des centaines d euros renouveles chaque annee pour un resultat de moins en moins efficace.",stat:"500+"},
              {icon:"📊",title:"Zero donnees",text:"Impossible de savoir qui a lu votre carte ou clique sur vos informations.",stat:"0 stats"},
            ].map((item) => (
              <div key={item.title} style={{textAlign:"center",padding:"32px",borderRadius:"16px",border:"1px solid #F1F5F9",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}>
                <div style={{fontSize:"40px",marginBottom:"16px"}}>{item.icon}</div>
                <div style={{fontSize:"32px",fontWeight:"bold",color:"#2563EB",marginBottom:"8px"}}>{item.stat}</div>
                <h3 style={{fontSize:"20px",fontWeight:"bold",color:"#0F172A",marginBottom:"12px"}}>{item.title}</h3>
                <p style={{color:"#64748B"}}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUITS */}
      <div style={{padding:"80px 24px",background:"#F8FAFC"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <span style={{display:"block",textAlign:"center",color:"#2563EB",fontWeight:600,marginBottom:"16px"}}>Nos solutions</span>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"16px"}}>
            Un objet. Un scan. Une connexion.
          </h2>
          <p style={{textAlign:"center",color:"#64748B",marginBottom:"64px",maxWidth:"672px",margin:"0 auto 64px"}}>
            Trois produits, un seul objectif : transformer vos objets physiques en portails numeriques.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"32px"}}>
            {[
              {icon:"💳",title:"Carte NFC Metal",text:"Inalterable et modifiable a distance. Un scan suffit pour tout partager.",tag:"A partir de 20 euros",href:"/products"},
              {icon:"📄",title:"Flyers NFC",text:"Au meme prix qu un flyer classique mais connecte. Modifiez apres impression.",tag:"Evenements et Salons",href:"/products"},
              {icon:"🎫",title:"Bracelets NFC",text:"Acces evenements, paiement cashless, camping et festivals.",tag:"Evenementiel",href:"/products"},
            ].map((item) => (
              <Link key={item.title} href={item.href} style={{background:"white",padding:"32px",borderRadius:"16px",boxShadow:"0 4px 6px rgba(0,0,0,0.07)",textDecoration:"none",display:"block"}}>
                <div style={{fontSize:"40px",marginBottom:"16px"}}>{item.icon}</div>
                <h3 style={{fontSize:"20px",fontWeight:"bold",color:"#0F172A",marginBottom:"12px"}}>{item.title}</h3>
                <p style={{color:"#64748B",marginBottom:"16px"}}>{item.text}</p>
                <span style={{display:"inline-block",background:"#DBEAFE",color:"#2563EB",fontSize:"14px",padding:"4px 12px",borderRadius:"999px",fontWeight:500}}>{item.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* COMMENT CA MARCHE */}
      <div style={{padding:"80px 24px",background:"white"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"16px"}}>
            Simple comme un geste
          </h2>
          <p style={{textAlign:"center",color:"#64748B",marginBottom:"64px",maxWidth:"672px",margin:"0 auto 64px"}}>
            Pas d application a telecharger. Pas de configuration complexe. Juste un scan.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"32px"}}>
            {[
              {num:"01",title:"Vous recevez votre objet TREGO",text:"Configure et pret a l emploi. Votre contenu est deja en ligne a la livraison."},
              {num:"02",title:"Votre contact scanne avec son telephone",text:"Pas d application a telecharger. Un simple scan NFC ou QR code suffit."},
              {num:"03",title:"Il accede a votre contenu instantanement",text:"Page personnalisee, coordonnees, reseaux, catalogue. Tout en un geste."},
            ].map((step) => (
              <div key={step.num} style={{textAlign:"center"}}>
                <div style={{width:"64px",height:"64px",background:"#2563EB",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold",margin:"0 auto 24px",boxShadow:"0 4px 14px rgba(37,99,235,0.4)"}}>
                  {step.num}
                </div>
                <h3 style={{fontSize:"20px",fontWeight:"bold",color:"#0F172A",marginBottom:"12px"}}>{step.title}</h3>
                <p style={{color:"#64748B"}}>{step.text}</p>
              </div>
            ))}
          </div>
          <p style={{textAlign:"center",color:"#94A3B8",fontStyle:"italic",marginTop:"48px",fontSize:"14px"}}>
            Vous modifiez votre contenu a tout moment depuis votre dashboard, sans toucher a l objet.
          </p>
        </div>
      </div>

      {/* PRIX */}
      <div style={{padding:"80px 24px",background:"#2563EB"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto",textAlign:"center",color:"white"}}>
          <h2 style={{fontSize:"48px",fontWeight:"bold",marginBottom:"16px"}}>20 euros par commercial. Par an.</h2>
          <p style={{color:"#BFDBFE",fontSize:"18px",marginBottom:"48px",maxWidth:"560px",margin:"0 auto 48px"}}>
            Contre plusieurs centaines d euros en cartes papier a renouveler. Une carte TREGO ne finit jamais a la poubelle.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"32px",maxWidth:"768px",margin:"0 auto 48px"}}>
            {[
              {value:"20",label:"euros par carte par an"},
              {value:"15",label:"euros par mois gestion et stats"},
              {value:"0",label:"reimpression necessaire"},
            ].map((stat) => (
              <div key={stat.label} style={{background:"rgba(255,255,255,0.1)",borderRadius:"16px",padding:"24px"}}>
                <div style={{fontSize:"48px",fontWeight:"bold",marginBottom:"4px"}}>{stat.value}</div>
                <div style={{color:"#BFDBFE",fontSize:"14px"}}>{stat.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{display:"inline-block",background:"white",color:"#2563EB",padding:"16px 40px",borderRadius:"999px",fontWeight:"bold",textDecoration:"none",boxShadow:"0 4px 14px rgba(0,0,0,0.15)"}}>
            Calculer mon ROI gratuitement
          </Link>
        </div>
      </div>

      {/* TEMOIGNAGES */}
      <div style={{padding:"80px 24px",background:"white"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <span style={{display:"block",textAlign:"center",color:"#2563EB",fontWeight:600,marginBottom:"16px"}}>Temoignages</span>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"64px"}}>
            Ils ont adopte TREGO
          </h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"32px"}}>
            {[
              {name:"Thomas D.",role:"Directeur Commercial",company:"Agence Immobiliere Paris 8",text:"Depuis que j ai adopte la carte TREGO, mes prospects retiennent mon contact. Plus jamais une carte a la poubelle. Le ROI est immediat."},
              {name:"Sarah M.",role:"Fondatrice",company:"Studio de Communication",text:"On a equipe toute notre equipe de 12 personnes. L image premium que ca renvoie en rdv client est incomparable. Je recommande a 100%."},
              {name:"Kevin L.",role:"CEO",company:"Startup Fintech",text:"Le fait de pouvoir modifier les liens a distance c est un game changer. On a change notre pitch deck 3 fois en 1 mois sans retoucher les cartes."},
            ].map((t) => (
              <div key={t.name} style={{background:"#F8FAFC",padding:"32px",borderRadius:"16px",border:"1px solid #F1F5F9"}}>
                <div style={{color:"#FBBF24",fontSize:"20px",marginBottom:"16px"}}>★★★★★</div>
                <p style={{color:"#475569",marginBottom:"24px",fontStyle:"italic"}}>{t.text}</p>
                <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                  <div style={{width:"40px",height:"40px",background:"#2563EB",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"14px"}}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{fontWeight:"bold",color:"#0F172A",fontSize:"14px"}}>{t.name}</div>
                    <div style={{color:"#64748B",fontSize:"12px"}}>{t.role} - {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{padding:"80px 24px",background:"#F8FAFC"}}>
        <div style={{maxWidth:"768px",margin:"0 auto"}}>
          <h2 style={{fontSize:"32px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"64px"}}>
            Questions frequentes
          </h2>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {[
              {q:"Est-ce que ca marche sur tous les smartphones ?",a:"Oui, compatible avec tous les smartphones recents. iPhone 7+ et Android 4.4+. Un QR code de secours est toujours disponible."},
              {q:"Que se passe-t-il si je veux changer mes informations ?",a:"Vous modifiez votre contenu en temps reel depuis votre dashboard TREGO. La carte physique n a pas besoin d etre remplacee."},
              {q:"Quel est le delai de livraison ?",a:"Les cartes sont livrees sous 5 a 7 jours ouvres apres validation de votre commande."},
              {q:"Y a-t-il un engagement de duree ?",a:"Non, l abonnement mensuel de 15 euros est sans engagement. Vous pouvez resilier a tout moment."},
            ].map((faq) => (
              <div key={faq.q} style={{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 1px 3px rgba(0,0,0,0.1)",border:"1px solid #F1F5F9"}}>
                <h3 style={{fontWeight:"bold",color:"#0F172A",marginBottom:"8px"}}>{faq.q}</h3>
                <p style={{color:"#64748B",fontSize:"14px"}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div style={{padding:"80px 24px",background:"#0F172A"}}>
        <div style={{maxWidth:"768px",margin:"0 auto",textAlign:"center",color:"white"}}>
          <h2 style={{fontSize:"36px",fontWeight:"bold",marginBottom:"16px"}}>
            Pret a transformer vos objets ?
          </h2>
          <p style={{color:"#94A3B8",fontSize:"18px",marginBottom:"32px"}}>
            Rejoignez les entreprises qui ont deja adopte TREGO. Demo gratuite, sans engagement.
          </p>
          <Link href="/contact" style={{display:"inline-block",background:"#2563EB",color:"white",padding:"20px 40px",borderRadius:"999px",fontSize:"18px",fontWeight:"bold",textDecoration:"none",boxShadow:"0 4px 14px rgba(37,99,235,0.4)"}}>
            Reserver une demo gratuite
          </Link>
          <p style={{color:"#475569",fontSize:"14px",marginTop:"16px"}}>Gratuit - Sans engagement - Reponse sous 24h</p>
        </div>
      </div>

      {/* WHATSAPP */}
      
        href="https://wa.me/33782174651"
        target="_blank"
        rel="noopener noreferrer"
        style={{position:"fixed",bottom:"24px",right:"24px",width:"56px",height:"56px",background:"#22C55E",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(0,0,0,0.2)",zIndex:50,fontSize:"28px",textDecoration:"none"}}
      >
        💬
      </a>

    </div>
  )
}
