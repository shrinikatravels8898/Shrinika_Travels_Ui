'use client';

import { MapPin, Plane, Map, CarFront, Tag, CreditCard, ThumbsUp, Globe, ShieldCheck, Award, Users, Clock, Sparkles, CheckCircle2, Compass, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/seo/SEO';
import { fadeUp, staggerContainer } from '../../animations/variants';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';

const STATS = [
  { number: '10,000+', label: 'Trips Completed', icon: CarFront },
  { number: '99.8%', label: 'On-Time Arrival', icon: Clock },
  { number: '50+', label: 'Verified Vehicles', icon: ShieldCheck },
  { number: '4.9 / 5', label: 'Customer Rating', icon: ThumbsUp },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Uncompromised Safety',
    desc: 'Every vehicle undergoes strict periodic maintenance checks. Our chauffeurs are police-verified, professionally trained, and experienced on coastal highways and ghat roads.',
  },
  {
    icon: Tag,
    title: '100% Transparent Fares',
    desc: 'No hidden surcharges, surprise night tolls, or inflated holiday rates. You receive a clear, upfront estimate with honest per-kilometer or flat-rate billing.',
  },
  {
    icon: Clock,
    title: 'Punctuality First',
    desc: 'Whether it is a 3:00 AM Mangaluru airport drop or a morning train pickup at Murudeshwar station, our drivers arrive 10 minutes prior to scheduled departure.',
  },
  {
    icon: HeartHandshake,
    title: 'Warm Coastal Hospitality',
    desc: 'From spotless, air-conditioned vehicle cabins to serene, family-friendly homestays, our mission is to make your journey through Karnataka memorable and restful.',
  },
];

const DESTINATIONS = [
  {
    name: 'Murudeshwar Temple & Beach',
    highlight: 'World’s 2nd Tallest Shiva Statue & Arabian Sea Coast',
    img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
    distance: 'Local Hub / Base',
  },
  {
    name: 'Gokarna & Om Beach',
    highlight: 'Sacred Mahabaleshwar Temple & Pristine Beaches',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800',
    distance: '54 km · ~1 hr 15 mins',
  },
  {
    name: 'Udupi & Malpe Beach',
    highlight: 'Krishna Mutt, St. Mary’s Island & Seafood Trails',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800',
    distance: '102 km · ~2 hrs',
  },
  {
    name: 'Jog Falls & Western Ghats',
    highlight: 'India’s Majestic Waterfall & Rainforest Drives',
    img: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800',
    distance: '88 km · ~2 hrs 10 mins',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="About Us | Shrinika Travels" 
        description="Learn more about Shrinika Travels, your premier taxi service, homestay, and rental booking provider in Karnataka and India." 
      />

      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&q=80&w=2000" 
            alt="About Shrinika Travels" 
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
            <span>SINCE 2018 · TRUSTED BY 10,000+ TRAVELERS</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg mb-4"
          >
            About Shrinika Travels
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Your trusted journey partner for dependable taxi rentals, serene homestays, and comfortable house rentals along the vibrant coast of Karnataka and beyond.
          </motion.p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-dark-950 border-b border-primary-500/30 py-10 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl bg-dark-900/50 border border-gray-800">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">{stat.number}</span>
                  <span className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story & Legacy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-3">
                OUR JOURNEY & MISSION
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-950 mb-6 leading-tight">
                Crafting Stress-Free Journeys Across Karnataka
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                Headquartered at the sacred and scenic coastal city of <strong className="text-dark-950">Murudeshwar</strong>, Shrinika Travels started with a singular vision: to eliminate uncertainty, surge pricing, and discomfort from local and outstation taxi travel in Karnataka.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                Over the years, we expanded from local temple shuttles into a premier full-service travel ecosystem. Today, we cater to pilgrims visiting Gokarna and Kollur, families discovering pristine beaches from Karwar to Mangalore, corporate travelers needing prompt airport runs, and vacationers seeking tranquil, fully-equipped homestays and private villas.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm font-semibold text-dark-900">24/7 Dispatch Hotline</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm font-semibold text-dark-900">100% AC & Sanitized Fleet</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm font-semibold text-dark-900">Verified Local Drivers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm font-semibold text-dark-900">WhatsApp Instant Bookings</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Shrinika Travels Fleet Experience" 
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-600 block">Direct Assistance</span>
                      <p className="text-lg font-serif font-bold text-dark-950">Have questions about your itinerary?</p>
                    </div>
                    <a href="tel:7353837847" className="px-5 py-2.5 rounded-xl bg-primary-500 text-dark-950 font-bold text-sm hover:bg-primary-600 transition-colors shrink-0">
                      Call Us Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles & Pillars */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">WHY TRAVELERS TRUST US</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-950 mb-4">Our Core Commitments</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              We hold every booking to the highest standards of safety, honesty, and traveler comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-500 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-dark-950 mb-3">{val.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Tourist Circuits */}
      <section className="py-24 bg-dark-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">DESTINATIONS WE SERVE</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">Popular Circuits & Sightseeing</h2>
            </div>
            <Link href="/get-a-cab" className="mt-4 md:mt-0">
              <Button className="px-6 py-3 font-bold">Book a Cab for Your Circuit</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group bg-dark-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dest.img} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold bg-primary-500 text-dark-950 px-2.5 py-1 rounded-md">
                    {dest.distance}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    {dest.highlight}
                  </p>
                  <Link 
                    href={`/get-a-cab?destination=${encodeURIComponent(dest.name)}`}
                    className="text-xs font-bold text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
                  >
                    <span>Check Taxi Rates</span> &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-primary-500 text-dark-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-serif font-black mb-6">
            Ready to Explore Coastal Karnataka in Comfort?
          </h2>
          <p className="text-dark-900/90 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-medium">
            Book online in under 60 seconds with instant WhatsApp verification, or call our 24/7 booking desk for custom holiday itineraries and group bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-a-cab">
              <Button size="lg" className="bg-dark-950 text-white hover:bg-dark-900 hover:text-white px-8 py-4 font-bold rounded-xl shadow-xl">
                Get Instant Taxi Quote
              </Button>
            </Link>
            <a href="tel:7353837847">
              <Button size="lg" variant="outline" className="border-2 border-dark-950 text-dark-950 hover:bg-dark-950 hover:text-white px-8 py-4 font-bold rounded-xl">
                Call +91 7353837847
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
