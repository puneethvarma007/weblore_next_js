'use client';
import Head from 'next/head';
import Header from '../components/Header';
import OurMisson from '@/components/OurMisson';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import Values from '../components/Values';
import OurStory from '../components/OurStory';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weblore - We Develop Software to Power Your Dreams</title>
        <meta
          name="description"
          content="Weblore accelerates the digital transformation journey of customers across the entire digital value chain to maximize their potential."
        />
        <meta name="keywords" content="software development, digital transformation, DevOps, SEO, IT solutions" />
        <meta name="author" content="Weblore" />
        <meta property="og:title" content="Weblore - We Develop Software to Power Your Dreams" />
        <meta
          property="og:description"
          content="Weblore accelerates the digital transformation journey of customers across the entire digital value chain to maximize their potential."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://www.weblore.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.weblore.com" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <Header />
        <OurMisson />
        <Services />
        <Solutions />
        <Values />
        <OurStory />
        <Team />
        <Clients />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}