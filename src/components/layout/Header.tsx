'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'GET A CAB', path: '/get-a-cab' },
  { name: 'CONTACT US', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-[#292A2B] shadow-lg py-4' : 'bg-white py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-dark-950">
               <MapPin className="h-6 w-6" />
            </div>
            <div className="flex flex-col text-left mt-1">
              <span className={cn("text-2xl font-serif font-bold leading-none transition-colors", isScrolled ? "text-white" : "text-dark-950")}>
                Shrinika Travels
              </span>
              <span className="text-[10px] uppercase text-gray-400 tracking-wider mt-0.5">Premier Taxi Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-[13px] font-bold transition-colors tracking-wide',
                    isActive 
                      ? 'bg-primary-500 text-white' 
                      : isScrolled
                        ? 'text-white hover:text-primary-500'
                        : 'text-dark-950 hover:text-primary-500'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:7353837847" className="px-6 py-2.5 bg-primary-500 text-dark-950 font-bold rounded-lg text-sm hover:bg-primary-600 transition-colors">
              +91 7353837847
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("lg:hidden p-2 transition-colors", isScrolled ? "text-white" : "text-dark-950")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark-950 border-t border-gray-800 overflow-hidden"
            >
              <nav className="flex flex-col p-4 space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'px-4 py-3 rounded-lg text-base font-bold transition-colors',
                        isActive 
                          ? 'bg-primary-500 text-white' 
                          : 'text-white hover:bg-dark-800'
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
