'use client'
import Header from '../components/Header'
import OurMisson from '@/components/OurMisson'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import Values from '../components/Values'
import OurStory from '../components/OurStory'
import Team from '../components/Team'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {

  
  useEffect(() => {
    window.scrollTo("_",0);
  }, [window.location.pathname])

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <OurMisson/>
      <Services />
      <Solutions />
      <Values />
      <OurStory />
      <Team />
      <Clients />
      <Testimonials />
      <Footer />
    </main>
  )
}
