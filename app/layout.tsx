import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopBar } from '@/components/layout/TopBar';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechFix - Expert Device Repair Services',
  description: 'Professional device repair services with lifetime warranty. Fast, reliable, and trusted by thousands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}