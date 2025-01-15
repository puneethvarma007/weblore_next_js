import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Weblore - We Develop Software to Power Your Dreams',
  description: 'Weblore accelerates the digital transformation journey of customers across the entire digital value chain to maximize their potential.',
  keywords: 'software development, digital transformation, DevOps, SEO, IT solutions',
  author: 'Weblore',
  openGraph: {
    title: 'Weblore - We Develop Software to Power Your Dreams',
    description: 'Weblore accelerates the digital transformation journey of customers across the entire digital value chain to maximize their potential.',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Weblore Logo',
      },
    ],
    url: 'https://www.weblore.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblore - We Develop Software to Power Your Dreams',
    description: 'Weblore accelerates the digital transformation journey of customers across the entire digital value chain to maximize their potential.',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}