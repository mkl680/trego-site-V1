"use client"
import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"

function CountUp({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true
        const startTime = Date.now()
        const timer = setInterval(() => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress >= 1) {
            setCount(end)
            clearInterval(timer)
          }
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <div ref={ref} style={{fontSize:"40px",fontWeight:"bold",color:"#2563EB",marginBottom:"8px"}}>{count}{suffix}</div>
}

function Carousel() {
  const [current, setCurrent] = useState(0)
  const slides = [
    {
      bg: "linear-gradient(135deg,#1e3a5f,#2563EB)",
      title: "Carte NFC Métal",
      text: "Remplacez définitivement vos cartes papier par une carte métal qui ne finit jamais à la poubelle",
      visual: (
        <div style={{width:"220px",height:"135px",background:"rgba(255,255,255,0.15)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"16px",marginBottom:"32px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{color:"white",fontWeight:"bold",fontSize:"16px",letterSpacing:"2px"}}>TREGO</span>
            <div style={{width:"24px",height:"24px",border:"1.5px solid rgba(255,255,255,0.6)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"7px",color:"white"}}>NFC</div>
          </div>
          <div style={{color:"rgba(255,255,255,0.8)",fontSize:"11px"}}>Jean Dupont — CEO</div>
        </div>
      )
    },
    {
      bg: "linear-gradient(135deg,#0891b2,#06b6d4)",
      title: "Flyers NFC",
      text: "Distribuez en salon et modifiez votre contenu après impression",
      visual: (
        <div style={{width:"140px",height:"200px",background:"rgba(255,255,255,0.15)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.3)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"32px",gap:"12px",padding:"16px"}}>
          <span style={{color:"white",fontWeight:"bold",fontSize:"14px",letterSpacing:"2px"}}>TREGO</span>
          <div style={{width:"40px",height:"1px",background:"rgba(255,255,255,0.4)"}}></div>
          <div style={{width:"24px",height:"24px",border:"1.5px solid rgba(255,255,255,0.6)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"7px",color:"white"}}>NFC</div>
          <span style={{color:"rgba(255,255,255,0.7)",fontSize:"10px",textAlign:"center"}}>Scannez-moi</span>
        </div>
      )
    },
    {
      bg: "linear-gradient(135deg,#7c3aed,#a855f7)",
      title: "Bracelets NFC",
      text: "Réinventez l'expérience de vos participants",
      visual: (
        <div style={{width:"200px",height:"64px",background:"rgba(255,255,255,0.15)",borderRadius:"32px",border:"1px solid rgba(255,255,255,0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"32px",gap:"12px",padding:"0 24px"}}>
          <span style={{color:"white",fontWeight:"bold",fontSize:"12px",letterSpacing:"2px"}}>TREGO</span>
          <div style={{width:"20px",height:"20px",border:"1.5px solid rgba(255,255,255,0.6)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"6px",color:"white"}}>NFC</div>
        </div>
      )
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{maxWidth:"700px",margin:"0 auto"}}>
      <div style={{overflow:"hidden",borderRadius:"24px",position:"relative"}}>
        <div style={{display:"flex",transition:"transform 0.6s ease",transform:`translateX(-${current * 100}%)`}}>
          {slides.map((slide, i) => (
            <div key={i} style={{minWidth:"100%",background:slide.bg,borderRadius:"24px",padding:"48px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"320px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:"-40px",right:"-40px",width:"200px",height:"200px",background:"rgba(255,255,255,0.05)",borderRadius:"50%"}}></div>
              {slide.visual}
              <p style={{color:"white",textAlign:"center",fontSize:"18px",fontWeight:500,maxWidth:"400px",lineHeight:1.6}}>
                {slide.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:"8px",marginTop:"20px"}}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{width: i === current ? "32px" : "8px",height:"4px",background: i === current ? "#2563EB" : "#CBD5E1",borderRadius:"2px",border:"none",cursor:"pointer",transition:"all 0.3s",padding:0}}></button>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div style={{minHeight:"100vh",background:"white"}}>

      <div style={{paddingTop:"120px",paddingBottom:"80px",maxWidth:"1152px",margin:"0 auto",padding:"120px 24px 80px",display:"flex",flexWrap:"wrap",alignItems:"center",gap:"48px"}}>
        <div style={{flex:1,minWidth:"300px"}}>
          <span style={{display:"inline-block",background:"#DBEAFE",color:"#2563EB",fontSize:"14px",fontWeight:500,padding:"4px 16px",borderRadius:"999px",marginBottom:"24px"}}>
            La carte de visite du futur
          </span>
          <h1 style={{fontSize:"48px",fontWeight:"bold",color:"#0F172A",lineHeight:1.2,marginBottom:"24px"}}>
            Transformez vos objets en expériences connectées
          </h1>
          <p style={{fontSize:"18px",color:"#64748B",marginBottom:"32px",maxWidth:"560px"}}>
            TREGO connecte vos cartes, flyers et bracelets à internet via NFC. Modifiez votre contenu à distance, en temps réel.
          </p>
          <div style={{display:"flex",gap:"16px",flexWrap:"wrap",marginBottom:"40px"}}>
            <Link href="/contact" style={{background:"#2563EB",color:"white",padding:"16px 32px",borderRadius:"999px",fontWeight:600,textDecoration:"none",display:"inline-block",boxShadow:"0 4px 14px rgba(37,99,235,0.4)"}}>
              Réserver une démo gratuite
            </Link>
            <Link href="/products" style={{border:"2px solid #2563EB",color:"#2563EB",padding:"16px 32px",borderRadius:"999px",fontWeight:600,textDecoration:"none",display:"inline-block"}}>
              Voir nos produits
            </Link>
          </div>
          <div style={{display:"flex",gap:"32px",alignItems:"center"}}>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"24px",fontWeight:"bold",color:"#0F172A"}}>20€</div>
              <div style={{fontSize:"12px",color:"#64748B"}}>par carte</div>
            </div>
            <div style={{width:"1px",height:"40px",background:"#E2E8F0"}}></div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"24px",fontWeight:"bold",color:"#0F172A"}}>15€</div>
              <div style={{fontSize:"12px",color:"#64748B"}}>par mois</div>
            </div>
            <div style={{width:"1px",height:"40px",background:"#E2E8F0"}}></div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:"24px",fontWeight:"bold",color:"#0F172A"}}>0</div>
              <div style={{fontSize:"12px",color:"#64748B"}}>réimpression</div>
            </div>
          </div>
        </div>
        <div style={{flex:1,minWidth:"280px",display:"flex",justifyContent:"center"}}>
          <div style={{width:"288px",height:"176px",background:"linear-gradient(135deg,#1e3a5f,#2563EB)",borderRadius:"16px",boxShadow:"0 25px 50px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"20px",color:"white",position:"relative",overflow:"hidden"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:"20px",fontWeight:"bold",letterSpacing:"3px"}}>TREGO</span>
              <div style={{width:"32px",height:"32px",border:"2px solid rgba(255,255,255,0.5)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px"}}>NFC</div>
            </div>
            <div style={{position:"absolute",right:"-20px",top:"-20px",width:"120px",height:"120px",background:"rgba(255,255,255,0.05)",borderRadius:"50%"}}></div>
            <div>
              <div style={{fontSize:"11px",opacity:0.6,marginBottom:"4px"}}>Carte de visite métal</div>
              <div style={{fontSize:"13px",opacity:0.9}}>Jean Dupont — CEO</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{padding:"80px 24px",background:"white"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"16px"}}>
            Le problème avec les cartes classiques
          </h2>
          <p style={{textAlign:"center",color:"#64748B",marginBottom:"64px",maxWidth:"672px",margin:"0 auto 64px"}}>
            Chaque année les entreprises dépensent des fortunes en cartes papier qui finissent à la poubelle.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"32px"}}>
            <div style={{textAlign:"center",padding:"32px",borderRadius:"16px",border:"1px solid #F1F5F9",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}>
              <CountUp end={88} suffix="%" duration={1500} />
              <h3 style={{fontSize:"20px",fontWeight:"bold",color:"#0F172A",marginBottom:"12px"}}>Gaspillage</h3>
              <p style={{color:"#64748B"}}>Des cartes papier finissent à la poubelle dans la semaine qui suit leur distribution.</p>
            </div>
            <div style={{textAlign:"center",padding:"32px",borderRadius:"16px",border:"1px solid #F1F5F9",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}>
              <CountUp end={500} suffix="€+" duration={1500} />
              <h3 style={{fontSize:"20px",fontWeight:"bold",color:"#0F172A",marginBottom:"12px"}}>Coût inutile</h3>
              <p style={{color:"#64748B"}}>Des centaines d'euros renouvelés chaque année pour un résultat de moins en moins efficace.</p>
            </div>
            <div style={{textAlign:"center",padding:"32px",borderRadius:"16px",border:"1px solid #F1F5F9",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}>
              <CountUp end={0} suffix=" stats" duration={500} />
              <h3 style={{fontSize:"20px",fontWeight:"bold",color:"#0F172A",marginBottom:"12px"}}>Zéro données</h3>
              <p style={{color:"#64748B"}}>Impossible de savoir qui a lu votre carte ou cliqué sur vos informations.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{padding:"80px 24px",background:"#F8FAFC"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <span style={{display:"block",textAlign:"center",color:"#2563EB",fontWeight:600,marginBottom:"16px"}}>Nos solutions</span>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"16px"}}>
            Un objet. Un scan. Une connexion.
          </h2>
          <p style={{textAlign:"center",color:"#64748B",marginBottom:"48px",maxWidth:"672px",margin:"0 auto 48px"}}>
            Trois produits, un seul objectif : transformer vos objets physiques en portails numériques.
          </p>
          <Carousel />
        </div>
      </div>

      <div style={{padding:"80px 24px",background:"white"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"16px"}}>
            Simple comme un geste
          </h2>
          <p style={{textAlign:"center",color:"#64748B",marginBottom:"64px",maxWidth:"672px",margin:"0 auto 64px"}}>
            Pas d'application à télécharger. Pas de configuration complexe. Juste un scan.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"32px"}}>
            {[
              {num:"01",title:"Vous recevez votre objet TREGO",text:"Configuré et prêt à l'emploi. Votre contenu est déjà en ligne à la livraison."},
              {num:"02",title:"Votre contact scanne avec son téléphone",text:"Pas d'application à télécharger. Un simple scan NFC ou QR code suffit."},
              {num:"03",title:"Il accède à votre contenu instantanément",text:"Page personnalisée, coordonnées, réseaux, catalogue. Tout en un geste."},
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
            Vous modifiez votre contenu à tout moment depuis votre dashboard, sans toucher à l'objet.
          </p>
        </div>
      </div>

      <div style={{padding:"80px 24px",background:"#2563EB"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto",textAlign:"center",color:"white"}}>
          <h2 style={{fontSize:"48px",fontWeight:"bold",marginBottom:"16px"}}>20€ par commercial. Par an.</h2>
          <p style={{color:"#BFDBFE",fontSize:"18px",marginBottom:"48px",maxWidth:"560px",margin:"0 auto 48px"}}>
            Contre plusieurs centaines d'euros en cartes papier à renouveler. Une carte TREGO ne finit jamais à la poubelle.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"32px",maxWidth:"768px",margin:"0 auto 48px"}}>
            {[
              {value:"20€",label:"par carte par an"},
              {value:"15€",label:"par mois gestion et stats"},
              {value:"0",label:"réimpression nécessaire"},
            ].map((stat) => (
              <div key={stat.label} style={{background:"rgba(255,255,255,0.1)",borderRadius:"16px",padding:"24px"}}>
                <div style={{fontSize:"48px",fontWeight:"bold",marginBottom:"4px"}}>{stat.value}</div>
                <div style={{color:"#BFDBFE",fontSize:"14px"}}>{stat.label}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{display:"inline-block",background:"white",color:"#2563EB",padding:"16px 40px",borderRadius:"999px",fontWeight:"bold",textDecoration:"none"}}>
            Calculer mon ROI gratuitement
          </Link>
        </div>
      </div>

      <div style={{padding:"80px 24px",background:"white"}}>
        <div style={{maxWidth:"1152px",margin:"0 auto"}}>
          <span style={{display:"block",textAlign:"center",color:"#2563EB",fontWeight:600,marginBottom:"16px"}}>Témoignages</span>
          <h2 style={{fontSize:"36px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"64px"}}>
            Ils ont adopté TREGO
          </h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"32px"}}>
            {[
              {name:"Thomas D.",role:"Directeur Commercial",company:"Agence Immobilière Paris 8",text:"Depuis que j'ai adopté la carte TREGO, mes prospects retiennent mon contact. Le ROI est immédiat."},
              {name:"Sarah M.",role:"Fondatrice",company:"Studio de Communication",text:"On a équipé toute notre équipe. L'image premium que ça renvoie en rendez-vous client est incomparable."},
              {name:"Kevin L.",role:"CEO",company:"Startup Fintech",text:"Le fait de pouvoir modifier les liens à distance c'est un game changer. On a changé notre pitch deck 3 fois sans retoucher les cartes."},
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

      <div style={{padding:"80px 24px",background:"#F8FAFC"}}>
        <div style={{maxWidth:"768px",margin:"0 auto"}}>
          <h2 style={{fontSize:"32px",fontWeight:"bold",textAlign:"center",color:"#0F172A",marginBottom:"64px"}}>
            Questions fréquentes
          </h2>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {[
              {q:"Est-ce que ça marche sur tous les smartphones ?",a:"Oui, compatible avec tous les smartphones récents. iPhone 7+ et Android 4.4+. Un QR code de secours est toujours disponible."},
              {q:"Que se passe-t-il si je veux changer mes informations ?",a:"Vous modifiez votre contenu en temps réel depuis votre dashboard TREGO. La carte physique n'a pas besoin d'être remplacée."},
              {q:"Quel est le délai de livraison ?",a:"Les cartes sont livrées sous 5 à 7 jours ouvrés après validation de votre commande."},
              {q:"Y a-t-il un engagement de durée ?",a:"Non, l'abonnement mensuel de 15€ est sans engagement. Vous pouvez résilier à tout moment."},
            ].map((faq) => (
              <div key={faq.q} style={{background:"white",borderRadius:"16px",padding:"24px",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}>
                <h3 style={{fontWeight:"bold",color:"#0F172A",marginBottom:"8px"}}>{faq.q}</h3>
                <p style={{color:"#64748B",fontSize:"14px"}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:"80px 24px",background:"#0F172A"}}>
        <div style={{maxWidth:"768px",margin:"0 auto",textAlign:"center",color:"white"}}>
          <h2 style={{fontSize:"36px",fontWeight:"bold",marginBottom:"16px"}}>
            Prêt à transformer vos objets ?
          </h2>
          <p style={{color:"#94A3B8",fontSize:"18px",marginBottom:"32px"}}>
            Rejoignez les entreprises qui ont déjà adopté TREGO. Démo gratuite, sans engagement.
          </p>
          <Link href="/contact" style={{display:"inline-block",background:"#2563EB",color:"white",padding:"20px 40px",borderRadius:"999px",fontSize:"18px",fontWeight:"bold",textDecoration:"none"}}>
            Réserver une démo gratuite
          </Link>
          <p style={{color:"#475569",fontSize:"14px",marginTop:"16px"}}>Gratuit - Sans engagement - Réponse sous 24h</p>
        </div>
      </div>

      <a href="https://wa.me/33782174651" target="_blank" rel="noopener noreferrer" style={{position:"fixed",bottom:"24px",right:"24px",width:"56px",height:"56px",background:"#22C55E",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(0,0,0,0.2)",zIndex:50,fontSize:"28px",textDecoration:"none"}}>
        💬
      </a>

    </div>
  )
}
