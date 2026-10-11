import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/layout/ScrollToTop';

export const viewport: Viewport = {
  themeColor: '#f5a800',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Shrinika Travels | Premium Taxi, Homestay & Rented House Service',
    template: '%s | Shrinika Travels',
  },
  description: 'Book your taxi ride, homestay, or rented house securely online with Shrinika Travels. Fast, dependable travel across Karnataka and India.',
  keywords: ['taxi service', 'cab booking', 'homestay', 'Karnataka travels', 'Murudeshwar taxi', 'Gokarna taxi', 'outstation cab'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white font-sans antialiased text-dark-800">
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
