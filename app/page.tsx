import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div style={{minHeight:"100vh",background:"white"}}>
      <div style={{paddingTop:"120px",paddingBottom:"80px",padding:"120px 24px 80px",maxWidth:"1152px",margin:"0 auto",textAlign:"center"}}>
        <span style={{display:"inline-block",background:"#DBEAFE",color:"#2563EB",fontSize:"14px",fontWeight:500,padding:"4px 16px",borderRadius:"999px",marginBottom:"24px"}}>
          La carte de visite du futur
        </span>
        <h1 style={{fontSize:"48px",fontWeight:"bold",color:"#0F172A",lineHeight:1.2,marginBottom:"24px"}}>
          Transformez vos objets en experiences connectees
        </h1>
        <p style={{fontSize:"18px",color:"#64748B",marginBottom:"32px",maxWidth:"600px",margin:"0 auto 32px"}}>
          TREGO connecte vos cartes, flyers et bracelets a internet via NFC.
        </p>
        <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
          <Link href="/contact" style={{background:"#2563EB",color:"white",padding:"16px 32px",borderRadius:"999px",fontWeight:600,textDecoration:"none",display:"inline-block"}}>
            Reserver une demo gratuite
          </Link>
          <Link href="/products" style={{border:"2px solid #2563EB",color:"#2563EB",padding:"16px 32px",borderRadius:"999px",fontWeight:600,textDecoration:"none",display:"inline-block"}}>
            Voir nos produits
          </Link>
        </div>
      </div>
    </div>
  )
}
