'use client'
import Image from "next/image";
import {useEffect} from 'react';
import initPlanet3D from "@/components/3D/planet"

export default function Home() {
  
  useEffect( () => { initPlanet3D() }, [])
  
  return (
    <div className="page">
      <section className="hero_main">
        <div className="content">
          <h1> Welcome! </h1>
          <p>
            unimaginable experience
          </p>
          <button className="cta_btn"> Explore </button>
        </div>
        <canvas className="planet-3D"/>
      </section>
    </div> 
  )
}
