'use client';
import { Suspense } from 'react';
import { BookingForm } from '../../components/forms/BookingForm';
import SEO from '../../components/seo/SEO';
import { motion } from 'framer-motion';
import { VEHICLES } from '../../constants';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'next/navigation';
import { Home, Key } from 'lucide-react';

export default function BookingPage() {
  const router = useRouter();

  const handleSelectCar = (category: string) => {
    router.push(`/get-a-cab?category=${category}`);
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Book a Cab or Stay | Shrinika Travels" 
        description="Book your taxi ride, homestay, or rented house securely online with Shrinika Travels." 
      />
      
      {/* Short Hero */}
      <section className="relative h-[45vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=2000" 
            alt="City street" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-dark-950/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <motion.h4 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-primary-500 font-bold tracking-widest uppercase mb-4 text-sm font-sans drop-shadow-md">Fast & Secure</motion.h4>
          <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration: 0.6}} className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg">Book a Ride or Stay</motion.h1>
        </div>
      </section>

      {/* Available Cabs */}
      <section className="py-20 bg-gray-50 flex-grow relative -mt-20 z-20 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 block">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-12">
            <h2 className="text-4xl font-sans font-black text-dark-950">Available Cabs</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Select a cab below to pre-fill the booking form</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {VEHICLES.map((vehicle, index) => (
              <motion.div 
                key={vehicle.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm relative transition-all hover:shadow-xl flex flex-col items-center"
              >
                <div className="h-36 mb-4 flex items-center justify-center w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={vehicle.images[0]}
                    alt={vehicle.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-lg font-black text-dark-950 mb-4">{vehicle.name}</h3>
                
                <div className="w-full space-y-3 mb-6 text-xs">
                  <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Passengers:</span>
                    <span className="font-bold text-dark-950">{vehicle.passengerCapacity} Seater</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Luggage:</span>
                    <span className="font-bold text-dark-950">{vehicle.luggageCapacity} Bags</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Climate Control:</span>
                    <span className="font-bold text-dark-950">{vehicle.hasAC ? 'Full AC' : 'Non-AC'}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleSelectCar(vehicle.category)} 
                  variant="outline" 
                  className="w-full mt-auto bg-gray-50 border-transparent text-dark-950 hover:bg-dark-950 hover:text-white transition-colors"
                >
                  Select this Cab
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Available Stays */}
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-sans font-black text-dark-950">Homestay & Rented House</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Select an accommodation option below to pre-fill your stay booking request</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="/images/homestay_scenic_exterior_1791654079456.jpg"
                    alt="Homestay Accommodation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-bold text-white">Homestay Accommodation</h3>
                    <div className="w-10 h-10 rounded-lg bg-primary-500 text-dark-950 flex items-center justify-center shrink-0">
                      <Home className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-6">Peaceful, family-friendly homestays with scenic views, modern amenities, and optional home-cooked meals.</p>
                  <div className="space-y-2 mb-6 text-xs">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-bold text-dark-950">Couples, Families & Groups (2 & 3 BHK)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Includes:</span>
                      <span className="font-bold text-dark-950">Wi-Fi, AC, Parking & Cab Sightseeing</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleSelectCar('homestay')} 
                    className="w-full font-bold"
                  >
                    Select Homestay
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src="/images/rented_house_villa_exterior_1791654105127.jpg"
                    alt="Private Rented House"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-bold text-white">Private Rented House</h3>
                    <div className="w-10 h-10 rounded-lg bg-primary-500 text-dark-950 flex items-center justify-center shrink-0">
                      <Key className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-6">Fully furnished independent houses for short vacations, family events, or extended stays with complete privacy.</p>
                  <div className="space-y-2 mb-6 text-xs">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Options:</span>
                      <span className="font-bold text-dark-950">1 BHK, 2 BHK & Independent Villa</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Includes:</span>
                      <span className="font-bold text-dark-950">Full Kitchen, Living Hall & Private Parking</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleSelectCar('rented-house')} 
                    className="w-full font-bold"
                  >
                    Select Rented House
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          <div id="booking-form" className="scroll-mt-32">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm text-center">
              <div>
                <span className="font-serif font-bold text-lg text-primary-600 block">100% Punctual</span>
                <span className="text-xs text-gray-500">Early Arrival Guaranteed</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-primary-600 block">No Hidden Fees</span>
                <span className="text-xs text-gray-500">Transparent Fares</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-primary-600 block">AC Fleet</span>
                <span className="text-xs text-gray-500">Spotless Clean Cabins</span>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-primary-600 block">24/7 Hotline</span>
                <span className="text-xs text-gray-500">Instant WhatsApp Connect</span>
              </div>
            </div>

            <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}}>
              <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading booking form...</div>}><BookingForm /></Suspense>
            </motion.div>

            {/* Direct Call Assistance Strip */}
            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h4 className="font-serif font-bold text-xl text-dark-950 mb-1">Need an Immediate Pickup within 30 Minutes?</h4>
                <p className="text-gray-500 text-xs sm:text-sm">Standby cabs stationed at Murudeshwar Railway Station and Temple Road 24 hours a day.</p>
              </div>
              <a href="tel:7353837847" className="shrink-0">
                <Button size="lg" className="px-8 py-3.5 font-bold">
                  Call +91 7353837847
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
