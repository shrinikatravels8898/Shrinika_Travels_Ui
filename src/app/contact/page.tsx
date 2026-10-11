'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, 
  HelpCircle, Car, Home, Navigation, ShieldCheck, Sparkles 
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import SEO from '../../components/seo/SEO';
import { fadeUp, staggerContainer } from '../../animations/variants';

const CONTACT_HIGHLIGHTS = [
  {
    title: '24/7 Cab Dispatch Hotline',
    number: '+91 7353837847',
    link: 'tel:7353837847',
    desc: 'For immediate airport drops, station pickups, and outstation bookings.',
    icon: Car,
    badge: 'Immediate Response',
  },
  {
    title: 'Homestay & Villa Caretaker Desk',
    number: '+91 7204948389',
    link: 'tel:7204948389',
    desc: 'For family homestay availability, room rates, and advance reservations.',
    icon: Home,
    badge: 'Direct Desk',
  },
  {
    title: 'Instant WhatsApp Booking',
    number: '+91 7353837847',
    link: 'https://wa.me/917353837847',
    desc: 'Send your route plan or requirements directly for instant quotations.',
    icon: MessageSquare,
    badge: 'Chat on WhatsApp',
  },
];

const CONTACT_FAQS = [
  {
    q: 'How fast will someone respond after I submit the inquiry?',
    a: 'When you submit the form, it directly routes your message to our WhatsApp dispatch desk (+91 7353837847). A manager typically responds within 2 to 5 minutes with vehicle options and exact pricing.',
  },
  {
    q: 'Can I request an immediate taxi pickup at Murudeshwar Railway Station?',
    a: 'Yes! We maintain standby cabs around Murudeshwar Railway Station and Temple Road. Call +91 7353837847 as soon as your train arrives or 30 minutes in advance for zero waiting time.',
  },
  {
    q: 'Do you provide early morning pickups for Mangaluru or Goa flights?',
    a: 'Yes, our 24/7 night dispatch guarantees punctual early-morning pickups (including 1:00 AM – 5:00 AM slots) with verified drivers.',
  },
];

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `*New Inquiry / Booking Message - Shrinika Travels*`,
      `----------------------------------`,
      `*Name:* ${firstName} ${lastName}`,
      `*Phone:* ${phone}`,
      `*Email:* ${email}`,
      `*Subject:* ${subject}`,
      `*Message:* ${messageText}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/917353837847?text=${encodeURIComponent(text)}`;
    setSubmitted(true);

    const anchor = document.createElement('a');
    anchor.href = whatsappUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO 
        title="Contact Us | Shrinika Travels" 
        description="Get in touch with Shrinika Travels for your taxi, outstation cab, homestay, and rental booking needs." 
      />

      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Customer Support" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary-500" />
            <span>24/7 TRAVEL & DISPATCH HOTLINE</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg mb-4"
          >
            Get In Touch With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg"
          >
            We are here 24 hours a day to answer your questions, customize holiday travel packages, and book clean, comfortable rides.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Hotlines */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary-50 text-primary-700">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-dark-950 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs mb-4">{item.desc}</p>
                </div>
                <a
                  href={item.link}
                  className="font-serif font-bold text-lg text-primary-600 hover:text-primary-700 flex items-center gap-2 pt-2 border-t border-gray-100"
                >
                  <span>{item.number}</span> &rarr;
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Main Contact Section: Info + Form */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Info Panel */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-1/3 space-y-8"
            >
              <div>
                <span className="text-primary-500 font-bold tracking-widest uppercase text-xs block mb-2">REACH OUT DIRECTLY</span>
                <h3 className="text-3xl font-serif font-bold text-dark-950 mb-4">Head Office & Dispatch</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Whether you have questions about cab availability, need a customized multi-day itinerary, or want to reserve a peaceful homestay, our local team is available around the clock.
                </p>
              </div>
              
              <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-950 mb-1 text-sm">Temple Road Office</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Near Murudeshwar Temple & Beach,<br/>
                      Murudeshwar, Uttara Kannada,<br/>
                      Karnataka 581350, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-950 mb-1 text-sm">Phone Hotlines</h4>
                    <p className="text-gray-500 text-xs space-y-1">
                      <a href="tel:7353837847" className="block hover:text-primary-500 font-semibold text-dark-800 transition-colors">+91 7353837847 (Cab Hotline)</a>
                      <a href="tel:7204948389" className="block hover:text-primary-500 font-semibold text-dark-800 transition-colors">+91 7204948389 (Stays & Caretaker)</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-950 mb-1 text-sm">Email Address</h4>
                    <p className="text-gray-500 text-xs">
                      <a href="mailto:shrinikatravels8898@gmail.com" className="hover:text-primary-500 transition-colors font-medium break-all">
                        shrinikatravels8898@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-950 mb-1 text-sm">Operating Timings</h4>
                    <p className="text-gray-500 text-xs">
                      <span className="font-semibold text-dark-900">Cab Dispatch:</span> 24/7 All Days<br/>
                      <span className="font-semibold text-dark-900">Office Desk:</span> 8:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Landmark Callout */}
              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-200">
                <div className="flex items-center gap-3 mb-2">
                  <Navigation className="w-5 h-5 text-primary-600 shrink-0" />
                  <h4 className="font-serif font-bold text-dark-950">How to Reach Us</h4>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Located within 2 minutes from Murudeshwar Rajagopuram and Beach. Standby taxis stationed for immediate boarding right outside Murudeshwar Railway Station.
                </p>
              </div>
            </motion.div>
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="mb-8">
                  <span className="text-primary-500 font-bold tracking-widest uppercase text-xs block mb-1">ONLINE INQUIRY</span>
                  <h3 className="text-3xl font-serif font-bold text-dark-950 mb-2">Send Us A Message</h3>
                  <p className="text-gray-500 text-sm">
                    Fill out the details below. We will immediately review your request and connect with you on WhatsApp.
                  </p>
                </div>
                
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">First Name</label>
                      <input required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" placeholder="e.g. Ramesh" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">Last Name</label>
                      <input required type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" placeholder="e.g. Hegde" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">Email Address</label>
                      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" placeholder="name@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-2">Phone Number</label>
                      <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" placeholder="+91 9876543210" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">Service Required</label>
                    <select required value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors text-dark-900">
                      <option value="">Select an option...</option>
                      <option value="Outstation Cab Booking">Outstation Cab Booking (Gokarna, Udupi, Goa, etc.)</option>
                      <option value="Airport Transfer">Airport Transfer (Mangaluru / Goa / Bengaluru)</option>
                      <option value="Local Temple Sightseeing">Local Temple Sightseeing & Tour Package</option>
                      <option value="Homestay / Rented House Booking">Homestay / Rented House Booking</option>
                      <option value="Corporate / Wedding Transport">Corporate / Wedding Transport</option>
                      <option value="General Inquiry">General Inquiry / Custom Route</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 mb-2">Your Message & Route Details</label>
                    <textarea required rows={4} value={messageText} onChange={(e) => setMessageText(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors resize-none" placeholder="Provide pickup location, destination, travel dates, and any special requests..."></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full flex items-center justify-center font-bold py-4">
                    <span>Send Inquiry via WhatsApp</span>
                    <Send className="w-5 h-5 ml-2" />
                  </Button>

                  {submitted && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-center space-x-2 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Opening WhatsApp (+91 7353837847) with your trip inquiry details!</span>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact FAQs Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs block mb-2">QUICK HELP</span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-dark-950">Common Inquiries</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-xs mb-3">
                    ?
                  </div>
                  <h4 className="font-serif font-bold text-dark-950 text-base mb-2">{faq.q}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
