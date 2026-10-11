'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Briefcase, Map, ShieldCheck, Clock, Users, Car, Fuel, Leaf, Zap, 
  Home, Key, Wifi, Utensils, Shield, Sparkles, Phone, CheckCircle2, ChevronDown, 
  Compass, MapPin, Calendar, HelpCircle 
} from 'lucide-react';
import SEO from '../../components/seo/SEO';
import { fadeUp, staggerContainer } from '../../animations/variants';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';

const VEHICLE_CATEGORIES = [
  {
    id: 'petrol',
    title: 'Petrol Vehicles',
    desc: 'Smooth and reliable petrol-powered vehicles for daily commutes.',
    icon: Car,
    capacity: '3+1 Seater',
    idealFor: 'City & Daily Rides',
    comfort: 'Full AC & Music System'
  },
  {
    id: 'diesel',
    title: 'Diesel Vehicles',
    desc: 'Powerful and efficient, ideal for long-distance and heavy journeys.',
    icon: Fuel,
    capacity: '4+1 Seater',
    idealFor: 'Outstation & Highway',
    comfort: 'Full AC & Spacious Boot'
  },
  {
    id: 'gas',
    title: 'Gas Vehicles',
    desc: 'Economical gas-powered rides offering cost-effective transportation.',
    icon: Zap,
    capacity: '3+1 Seater',
    idealFor: 'Local & Short Trips',
    comfort: 'AC & Clean Interiors'
  },
  {
    id: 'ev',
    title: 'EV Vehicles',
    desc: 'Premium zero-emission electric vehicles for a quiet, eco-friendly ride.',
    icon: Leaf,
    capacity: '4+1 Seater',
    idealFor: 'Executive & Eco Travel',
    comfort: 'Silent Cabin & Fast Climate'
  }
];

const SERVICES = [
  {
    id: 'airport',
    title: 'Airport Transfer',
    desc: 'Reliable, on-time airport drop-offs and pickups. We track your flight to ensure we are always there when you land at Mangaluru, Goa, or Bengaluru.',
    icon: Plane,
    perks: ['Zero Toll Surcharge Surprises', 'Flight Delay Monitoring', 'Luggage Loading Assistance'],
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    desc: 'Professional chauffeur services for executives, business delegates, and corporate retreats along the coastal corridor.',
    icon: Briefcase,
    perks: ['GST Invoicing Available', 'Uniformed Chauffeurs', 'Spotless AC Sedans'],
  },
  {
    id: 'city',
    title: 'Pilgrimage & Temple Tours',
    desc: 'Customized temple and coastal circuits covering Murudeshwar, Gokarna, Kollur Mookambika, Udupi, and Idagunji.',
    icon: Map,
    perks: ['Knowledgeable Local Drivers', 'Flexible Darshan Waiting', 'Door-to-Door Pickup'],
  },
  {
    id: 'security',
    title: 'VIP & Executive Transport',
    desc: 'Discreet, high-end transportation with top-tier Toyota Innova Crysta and executive sedans for high-profile clients.',
    icon: ShieldCheck,
    perks: ['Premium Captain Seats', 'Enhanced Sanitization', 'Priority 24/7 Dispatch'],
  },
  {
    id: 'hourly',
    title: 'Hourly & Daily Rental',
    desc: 'Book a vehicle with chauffeur by the hour or full day. Perfect for wedding functions, shopping trips, or multi-stop meetings.',
    icon: Clock,
    perks: ['Unlimited Stops Allowed', 'Transparent Hourly Rates', 'Driver Allowance Included'],
  },
  {
    id: 'events',
    title: 'Group & Event Shuttles',
    desc: 'Coordinated multi-vehicle transportation for family celebrations, destination weddings, and tourist groups across Karnataka.',
    icon: Users,
    perks: ['Multi-Cab Coordination', 'Luggage Carrier Options', 'Pre-Scheduled Timetable'],
  },
  {
    id: 'homestay',
    title: 'Homestay Accommodations',
    desc: 'Cozy, scenic, and well-maintained homestays for families and couples seeking authentic local hospitality and nature views.',
    icon: Home,
    perks: ['Scenic Hillside Surroundings', 'Home-Cooked Food on Request', '24/7 Power & Hot Water'],
  },
  {
    id: 'rented-house',
    title: 'Private Rented Houses & Villas',
    desc: 'Fully furnished independent rental houses for family vacations or extended workcations with complete privacy and kitchen.',
    icon: Key,
    perks: ['Private Kitchen & Hall', 'Exclusive Gated Parking', 'Short & Long Stays'],
  },
];

const TOUR_CIRCUITS = [
  {
    title: 'Coastal Pilgrimage & Temple Trail',
    route: 'Murudeshwar → Idagunji → Gokarna → Kollur',
    duration: '1 to 2 Days',
    idealCar: 'Dzire / Ertiga / Innova',
    desc: 'Visit the world-famous Murudeshwar Shiva Temple, Lord Ganesha at Idagunji, Mahabaleshwar in Gokarna, and Goddess Mookambika at Kollur with calm, patient drivers.',
    badge: 'Most Popular',
  },
  {
    title: 'Mangaluru International Airport Express',
    route: 'IXE Airport ↔ Udupi / Manipal / Murudeshwar',
    duration: 'Direct Non-Stop (~3.5 hrs)',
    idealCar: 'Sedan / Crysta MPV',
    desc: 'Seamless highway transfers with meet-and-greet service at Mangaluru Airport. Never worry about missed flights or late night arrivals.',
    badge: 'Fixed Fare',
  },
  {
    title: 'Beaches, Islands & Watersports Circuit',
    route: 'Om Beach → Kudle Beach → Malpe & St. Mary’s',
    duration: 'Full Day Sightseeing',
    idealCar: 'Ertiga / XUV700 / Sedan',
    desc: 'Experience Karnataka’s most stunning coastal beaches, water adventures, Netrani Island scuba transfers, and picturesque sunset viewpoints.',
    badge: 'Scenic Route',
  },
  {
    title: 'Western Ghats & Waterfalls Explorer',
    route: 'Murudeshwar → Jog Falls → Yana Rocks → Sirsi',
    duration: 'Full Day (~10–12 hrs)',
    idealCar: 'Mahindra XUV700 / Innova',
    desc: 'Ascend the lush Western Ghats to witness the awe-inspiring Jog Falls, the mysterious monolithic Yana Rocks, and ancient rainforest trails.',
    badge: 'Nature Lover',
  },
];

const STAY_OPTIONS = [
  {
    id: 'scenic-homestay',
    type: 'Homestay',
    title: 'Premium Family Homestay',
    subtitle: 'Nature Views · Warm Hospitality · Home-Cooked Food',
    desc: 'Experience warm hospitality in a serene hillside setting. Ideal for families, couples, and vacationers seeking peaceful surroundings, spotless rooms, and authentic local comfort.',
    exteriorImg: '/images/homestay_scenic_exterior_1791654079456.jpg',
    interiorImg: '/images/homestay_cozy_bedroom_1791654092190.jpg',
    capacity: 'Up to 6–8 Guests',
    rooms: 'Deluxe Rooms, 2 & 3 BHK',
    idealFor: 'Family Vacations & Weekend Getaways',
    amenities: ['Free High-Speed Wi-Fi', 'Home-Cooked Meals Available', '24/7 Power & Hot Water', 'Free Parking & Cab Assistance'],
    categoryParam: 'homestay',
  },
  {
    id: 'private-rented-house',
    type: 'Rented House',
    title: 'Independent Furnished Rented House',
    subtitle: 'Complete Privacy · Modular Kitchen · Short & Long Stays',
    desc: 'Enjoy complete independence with a full private house rental. Equipped with a modern kitchen, spacious living hall, private lawn, and dedicated parking for families or groups.',
    exteriorImg: '/images/rented_house_villa_exterior_1791654105127.jpg',
    interiorImg: '/images/rented_house_living_kitchen_1791654114319.jpg',
    capacity: 'Up to 10+ Guests',
    rooms: '1 BHK, 2 BHK & Full Villa',
    idealFor: 'Group Stays, Long Stays & Workcations',
    amenities: ['Fully Equipped Kitchen', 'Private Lawn & Balcony', 'AC Bedrooms & Living Hall', '24/7 Security & Caretaker'],
    categoryParam: 'rented-house',
  }
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Choose Route or Vehicle',
    desc: 'Select your pickup point, destination, date, and preferred vehicle (Sedan, Ertiga, Innova, or Stay Option).',
  },
  {
    step: '02',
    title: 'Instant Transparent Quote',
    desc: 'Get an immediate, all-inclusive fare quote with zero hidden extras. Confirm via WhatsApp in under 60 seconds.',
  },
  {
    step: '03',
    title: 'Chauffeur Dispatched',
    desc: 'Receive your driver details, phone number, and vehicle registration well ahead of time. Your driver arrives 10 mins early.',
  },
  {
    step: '04',
    title: 'Travel in Luxury & Safety',
    desc: 'Sit back in a clean, air-conditioned cabin. Enjoy smooth highway cruising and safe door-to-door arrival.',
  },
];

const FAQS = [
  {
    q: 'Are tolls, driver allowances, and fuel included in the quoted fare?',
    a: 'Yes! We provide upfront transparent rates. For outstation packages, we clearly specify whether tolls and parking are included or payable as actuals, so there are never any surprise charges.',
  },
  {
    q: 'Can we book a cab for a customized multi-day tour covering multiple destinations?',
    a: 'Absolutely. We specialize in custom multi-day pilgrim and tourist packages across Karnataka, Goa, and Maharashtra. Call our team at +91 7353837847 to tailor your customized route and schedule.',
  },
  {
    q: 'How early should I book for Mangaluru or Goa airport transfers?',
    a: 'We recommend booking at least 12 to 24 hours in advance to guarantee vehicle allocation, though our 24/7 dispatch desk can accommodate emergency bookings on short notice based on availability.',
  },
  {
    q: 'Can we inspect or book homestays and rented houses for longer stays?',
    a: 'Yes! Our homestays and private villas support both weekend stays and extended weekly/monthly workcations. They include full kitchens, power backup, and high-speed Wi-Fi.',
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'We offer flexible cancellations. If your travel plans change, notify us at least 6 hours prior to your scheduled pickup time for a seamless reschedule or cancellation.',
  },
];

export default function ServicesPage() {
  const [activePhotoView, setActivePhotoView] = useState<Record<string, 'exterior' | 'interior'>>({
    'scenic-homestay': 'exterior',
    'private-rented-house': 'exterior',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Our Services | Shrinika Travels" 
        description="Explore our range of premium taxi services, homestays, and rented house accommodations with Shrinika Travels." 
      />

      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000" 
            alt="Shrinika Travels Services" 
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
            <span>PREMIER TAXI, TOUR CIRCUITS & STAYS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg mb-4"
          >
            Our Services & Offerings
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg"
          >
            From airport pickups and coastal pilgrimage routes to scenic homestays and furnished villas, explore all the ways we make your journey memorable.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">WHAT WE OFFER</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-950 mb-4">Comprehensive Travel Solutions</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Tailored transportation and stay packages designed to meet the highest expectations of punctuality, hygiene, and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-500 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 bg-primary-50 text-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-dark-950 transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-dark-950 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    {service.perks && (
                      <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                        {service.perks.map((perk, i) => (
                          <li key={i} className="flex items-center text-xs font-semibold text-dark-800">
                            <span className="text-primary-500 mr-2">✓</span>
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Link href={`/get-a-cab?service=${service.id}`} className="mt-auto">
                    <Button variant="outline" className="w-full text-xs font-bold py-2.5 bg-gray-50 border-transparent hover:bg-dark-950 hover:text-white transition-colors">
                      Book Service
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Tourist Circuits */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">CURATED ITINERARIES</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-950 mb-4">Popular Outstation & Pilgrimage Packages</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Explore the most requested sightseeing circuits with experienced local drivers who know the best routes and darshan timings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOUR_CIRCUITS.map((circuit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200/80 hover:border-primary-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-700 text-xs font-bold rounded-full">
                      {circuit.badge}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary-500" />
                      {circuit.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-dark-950 mb-2">
                    {circuit.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-primary-600 mb-4 bg-primary-50/50 p-2.5 rounded-lg border border-primary-100">
                    <MapPin className="w-4 h-4 shrink-0 text-primary-500" />
                    <span>{circuit.route}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {circuit.desc}
                  </p>

                  <div className="flex items-center justify-between text-xs font-medium text-gray-500 pb-6 border-b border-gray-200">
                    <span>Recommended Fleet:</span>
                    <span className="font-bold text-dark-950">{circuit.idealCar}</span>
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between gap-4">
                  <Link href={`/get-a-cab?circuit=${encodeURIComponent(circuit.title)}`} className="flex-1">
                    <Button className="w-full font-bold text-xs py-3">Book This Circuit</Button>
                  </Link>
                  <a href="tel:7353837847" className="flex-1">
                    <Button variant="outline" className="w-full font-bold text-xs py-3 border-gray-300 hover:bg-dark-950 hover:text-white">
                      Inquire on Phone
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Homestay & Rented House Section */}
      <section className="py-24 bg-dark-950 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">ACCOMMODATION & RETREATS</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Homestays & Furnished Rented Houses</h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Enjoy peaceful coastal stays with warm hospitality, authentic home cooking, and private villa rentals in Murudeshwar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {STAY_OPTIONS.map((stay, idx) => {
              const currentView = activePhotoView[stay.id] || 'exterior';
              const activeImg = currentView === 'exterior' ? stay.exteriorImg : stay.interiorImg;

              return (
                <motion.div
                  key={stay.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="bg-dark-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary-500 transition-all duration-300 shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-dark-800">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeImg}
                          src={activeImg}
                          alt={`${stay.title} - ${currentView}`}
                          referrerPolicy="no-referrer"
                          initial={{ opacity: 0, scale: 1.06 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-950/30 to-transparent" />

                      <div className="absolute top-4 right-4 flex items-center bg-dark-950/85 backdrop-blur-md p-1 rounded-lg border border-white/10">
                        <button
                          type="button"
                          onClick={() => setActivePhotoView(prev => ({ ...prev, [stay.id]: 'exterior' }))}
                          className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                            currentView === 'exterior'
                              ? 'bg-primary-500 text-dark-950'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          Exterior View
                        </button>
                        <button
                          type="button"
                          onClick={() => setActivePhotoView(prev => ({ ...prev, [stay.id]: 'interior' }))}
                          className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                            currentView === 'interior'
                              ? 'bg-primary-500 text-dark-950'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          Interior View
                        </button>
                      </div>

                      <div className="absolute bottom-4 left-6 right-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary-500 block mb-1">
                          {stay.type} · {stay.rooms}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">
                          {stay.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-xs font-semibold text-primary-500 tracking-wide mb-3">
                        {stay.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                        {stay.desc}
                      </p>

                      <div className="space-y-3 mb-6 bg-dark-950/70 p-6 rounded-xl border border-gray-800">
                        <div className="flex justify-between items-center border-b border-gray-800 pb-3 text-sm">
                          <span className="text-gray-400 font-medium">Guest Capacity</span>
                          <span className="font-bold text-white">{stay.capacity}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-800 pb-3 text-sm">
                          <span className="text-gray-400 font-medium">Configuration</span>
                          <span className="font-bold text-white">{stay.rooms}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm pt-1">
                          <span className="text-gray-400 font-medium">Ideal For</span>
                          <span className="font-bold text-primary-500">{stay.idealFor}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {stay.amenities.map((amenity) => (
                          <div key={amenity} className="flex items-center text-xs text-gray-200 font-medium">
                            <span className="text-primary-500 mr-2 font-bold">✓</span>
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-4 border-t border-gray-800/80 flex flex-col sm:flex-row gap-4">
                    <Link href={`/get-a-cab?category=${stay.categoryParam}`} className="flex-1">
                      <Button className="w-full py-3.5 font-bold whitespace-nowrap">Book {stay.type}</Button>
                    </Link>
                    <a href="tel:7353837847" className="flex-1">
                      <Button variant="outline" className="w-full py-3.5 font-bold border-gray-700 text-white hover:bg-primary-500 hover:text-dark-950 hover:border-primary-500 whitespace-nowrap">
                        Call Desk
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Booking Works (4 Steps) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">SIMPLE & FAST</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-950 mb-4">How Your Booking Works</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              From inquiry to door-to-door arrival in 4 transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-serif font-black text-primary-500/40 block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-dark-950 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs sm:text-sm block mb-2">CLEAR ANSWERS</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-950 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-base">Everything you need to know about taxi billing, tour routes, and stays.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-dark-950 text-lg hover:text-primary-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-950 text-white relative text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6">Ready to Book Your Next Journey?</h2>
          <p className="text-gray-300 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Reserve your verified taxi or scenic homestay in Murudeshwar today. We ensure prompt pickup and transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-a-cab">
              <Button size="lg" className="w-full sm:w-auto px-10 py-4 font-bold text-base">Book a Ride Online</Button>
            </Link>
            <a href="tel:7353837847">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 py-4 font-bold text-base border-gray-600 text-white hover:bg-primary-500 hover:text-dark-950">
                Call +91 7353837847
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
