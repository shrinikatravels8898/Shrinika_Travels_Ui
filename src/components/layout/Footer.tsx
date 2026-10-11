import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-950 pt-20 pb-10 text-white border-t-4 border-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-dark-950">
                 <MapPin className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white leading-none">Shrinika Travels</span>
                <span className="text-[10px] uppercase text-gray-400 tracking-wider">Taxi, Homestay & Rentals</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm pl-0">
              Your trusted partner for dependable taxi services, cozy homestays, and fully furnished rented houses—anytime and anywhere.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {[
                { n: 'Home', p: '/' },
                { n: 'About Us', p: '/about' },
                { n: 'Services', p: '/services' },
                { n: 'Get a cab', p: '/get-a-cab' },
                { n: 'Contacts', p: '/contact' }
              ].map(link => (
                <li key={link.n} className="flex items-center text-gray-400 hover:text-primary-500 transition-colors">
                  <span className="text-primary-500 mr-2 text-xs">▶</span>
                  <Link href={link.p}>{link.n}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="text-xl font-serif font-semibold mb-6">Contact Info</h4>
             <ul className="space-y-4">
               <li className="flex items-start text-gray-400">
                 <Mail className="h-5 w-5 text-primary-500 mr-3 mt-0.5 shrink-0" />
                 <a href="mailto:shrinikatravels8898@gmail.com" className="hover:text-primary-500 transition-colors break-all">
                   shrinikatravels8898@gmail.com
                 </a>
               </li>
               <li className="flex items-start text-gray-400">
                 <Phone className="h-5 w-5 text-primary-500 mr-3 mt-0.5 shrink-0" />
                 <div className="flex flex-col space-y-1">
                   <a href="tel:7353837847" className="hover:text-primary-500 transition-colors">+91 7353837847</a>
                   <a href="tel:7204948389" className="hover:text-primary-500 transition-colors">+91 7204948389</a>
                 </div>
               </li>
               <li className="flex items-start text-gray-400">
                 <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-0.5 shrink-0" />
                 <span>Temple Road, Near Murudeshwar Temple, Murudeshwar, Karnataka 581350</span>
               </li>
             </ul>
          </div>

          {/* Legal Policies */}
          <div>
             <h4 className="text-xl font-serif font-semibold mb-6">Legal</h4>
             <ul className="space-y-3">
               {[
                 { n: 'Privacy Policy', p: '/privacy-policy' },
                 { n: 'Refund Policy', p: '/refund-policy' },
                 { n: 'Terms of Service', p: '/terms-of-service' }
               ].map(link => (
                 <li key={link.n} className="flex items-center text-gray-400 hover:text-primary-500 transition-colors">
                   <span className="text-primary-500 mr-2 text-xs">▶</span>
                   <Link href={link.p}>{link.n}</Link>
                 </li>
               ))}
             </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Shrinika Travels &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
