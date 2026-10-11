"use client";
import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingForm } from "../components/forms/BookingForm";
import { Button } from "../components/ui/Button";
import { VEHICLES } from "../constants";
import { VehicleCategory } from "../types";
import {
  Tag,
  ThumbsUp,
  CreditCard,
  Globe,
  Phone,
  Mail,
  MapPin,
  Home,
  Key,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  CarFront,
} from "lucide-react";
import { fadeUp, staggerContainer } from "../animations/variants";
import SEO from "../components/seo/SEO";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<
    VehicleCategory | "all"
  >("all");
  const router = useRouter();

  const filteredVehicles =
    selectedCategory === "all"
      ? VEHICLES
      : VEHICLES.filter((v) => v.category === selectedCategory);

  const categories: { label: string; value: VehicleCategory | "all" }[] = [
    { label: "ALL", value: "all" },
    { label: "SEDAN / TOWN TAXI", value: "town" },
    { label: "HYBRID / EXECUTIVE", value: "hybrid" },
    { label: "INNOVA / LUXURY MPV", value: "limousine" },
    { label: "ERTIGA / SUV TAXI", value: "suv" },
  ];
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <SEO
        title="Shrinika Travels | Premium Taxi, Homestay & Rented House Service"
        description="Book your taxi ride, homestay, or rented house securely online with Shrinika Travels. Fast, simple, and reliable travel and stay services."
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Taxi"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-dark-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <motion.h4
              variants={fadeUp}
              className="text-primary-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base drop-shadow-md"
            >
              Enjoy Comfortable Trip
            </motion.h4>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-lg"
            >
              Order Taxi Online
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="mt-8 w-full"
          >
            <Suspense
              fallback={
                <div className="h-24 bg-white/10 animate-pulse rounded-2xl" />
              }
            >
              <BookingForm variant="transparent-horizontal" />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Trust & Guarantee Ribbon */}
      <section className="bg-dark-950 border-b border-primary-500/30 py-8 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">100% Sanitized Fleet</h4>
                <p className="text-gray-400 text-xs">Pristine AC cabs for all trips</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Zero Surge Pricing</h4>
                <p className="text-gray-400 text-xs">Upfront & transparent billing</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">24/7 Cab Dispatch</h4>
                <p className="text-gray-400 text-xs">Day & night prompt pickups</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Verified Chauffeurs</h4>
                <p className="text-gray-400 text-xs">Experienced on coastal routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome To Us Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <motion.h4
              variants={fadeUp}
              className="text-primary-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs font-sans"
            >
              What We Offer
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-dark-950 mb-6 font-sans"
            >
              Welcome To Us
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
            >
              We created our taxi to help you to find the most dependable and
              highest quality taxi services, anytime and anywhere. All our
              drivers are uniformed and fully licensed.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x lg:divide-gray-100">
            {[
              {
                title: "Address Pickup",
                icon: "mdi:map-marker-outline",
                desc: "We always pick up our clients on time, 24/7 availability.",
              },
              {
                title: "Airport Transfer",
                icon: "mdi:airplane",
                desc: "Shrinika Travels specialized in 24 hours airport transfer service.",
              },
              {
                title: "Long Distance",
                icon: "mdi:map-search-outline",
                desc: "We offer you a long distance taxi service to anywhere.",
              },
              {
                title: "Homestay & Rented House",
                icon: "mdi:home-city-outline",
                desc: "Comfortable homestays and fully furnished rented houses for families and groups.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-6"
              >
                <div className="w-20 h-20 mb-6 text-primary-500 flex items-center justify-center">
                  <img
                    src={`https://api.iconify.design/${feature.icon.split(":")[0]}/${feature.icon.split(":")[1]}.svg?color=%23fac115`}
                    alt={feature.title}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-2xl font-medium text-dark-950 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h4
              variants={fadeUp}
              className="text-primary-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs font-sans"
            >
              Main Features
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-dark-950 font-sans"
            >
              Our Benefits
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-center">
            {/* Left Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              <div className="flex items-start text-right justify-end">
                <div className="mr-6 max-w-[280px]">
                  <h3 className="text-[22px] font-medium text-dark-950 mb-2">
                    Transparent Quotes
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Get customized quotes tailored to your exact route and
                    travel requirements.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <Tag className="text-white w-5 h-5" />
                </div>
              </div>
              <div className="flex items-start text-right justify-end">
                <div className="mr-6 max-w-[280px]">
                  <h3 className="text-[22px] font-medium text-dark-950 mb-2">
                    No Hidden Charges
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Clear and honest billing with complete peace of mind on
                    every trip.
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <CreditCard className="text-white w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="relative flex justify-center w-full max-w-2xl mx-auto px-4"
            >
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Yellow Taxi"
                className="w-full object-contain mix-blend-multiply flex-shrink-0"
                style={{
                  filter: "drop-shadow(0px 30px 40px rgba(0,0,0,0.15))",
                }}
              />
            </motion.div>

            {/* Right Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <ThumbsUp className="text-white w-5 h-5" />
                </div>
                <div className="ml-6 max-w-[280px]">
                  <h3 className="text-[22px] font-medium text-dark-950 mb-2">
                    100% Pleasure
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We have a lot of standing customers and high ratings.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <Globe className="text-white w-5 h-5" />
                </div>
                <div className="ml-6 max-w-[280px]">
                  <h3 className="text-[22px] font-medium text-dark-950 mb-2">
                    Nationwide
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our application is the easiest way to book a taxi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Choose Your Car */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-5xl font-sans font-black text-dark-950 tracking-tight"
            >
              Choose taxi
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  selectedCategory === cat.value
                    ? "bg-dark-950 text-white shadow-lg"
                    : "bg-gray-100 text-dark-950 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative transition-all hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center"
                >
                  <div className="h-44 mb-6 flex items-center justify-center w-full overflow-hidden rounded-lg bg-white">
                    <img
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="w-16 h-16 bg-dark-950 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
                    <img
                      src={vehicle.logo}
                      alt="brand logo"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8"
                      style={{ filter: "invert(1)" }}
                    />
                  </div>

                  <h3 className="text-xl font-black text-dark-950 mb-6">
                    {vehicle.name}
                  </h3>

                  <div className="w-full space-y-4 mb-8 text-sm">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Passengers:</span>
                      <span className="font-bold text-dark-950">
                        {vehicle.passengerCapacity} Seater
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Luggage:</span>
                      <span className="font-bold text-dark-950">
                        {vehicle.luggageCapacity} Bags
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-500">Climate Control:</span>
                      <span className="font-bold text-dark-950">
                        {vehicle.hasAC ? "Full AC" : "Non-AC"}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/get-a-cab?category=${vehicle.category}`}
                    className="w-full mt-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full bg-gray-50 border-transparent text-dark-950 hover:bg-dark-950 hover:text-white transition-colors py-6 font-bold rounded-xl"
                    >
                      Book Taxi
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <Link href="/get-a-cab">
              <Button
                size="lg"
                className="px-12 rounded-full font-bold uppercase tracking-widest text-dark-950 hover:bg-dark-950 hover:text-primary-500 transition-colors shadow-xl"
              >
                View All Cabs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Popular Outstation & Tourist Routes */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-500 font-bold tracking-widest uppercase text-xs block mb-2">
              POPULAR TRAVEL CORRIDORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-950 mb-4">
              Top Outstation & Taxi Routes
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Reliable point-to-point and round-trip transfers across coastal Karnataka, Western Ghats, Goa, and Bengaluru with transparent fixed pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                from: "Murudeshwar",
                to: "Gokarna",
                distance: "54 km",
                time: "~1 hr 15 mins",
                price: "₹1,800",
                desc: "Direct coastal highway transfer to Om Beach, Kudle Beach & Mahabaleshwar Temple.",
              },
              {
                from: "Murudeshwar",
                to: "Mangaluru Airport (IXE)",
                distance: "155 km",
                time: "~3 hrs 30 mins",
                price: "₹3,800",
                desc: "Punctual airport transfer with flight tracking and early-morning pickup availability.",
              },
              {
                from: "Murudeshwar",
                to: "Udupi / Manipal",
                distance: "102 km",
                time: "~2 hrs",
                price: "₹2,500",
                desc: "Travel comfortably to Sri Krishna Mutt, Malpe Beach, and Manipal University campus.",
              },
              {
                from: "Murudeshwar",
                to: "Jog Falls & Sirsi",
                distance: "88 km",
                time: "~2 hrs 10 mins",
                price: "₹2,800",
                desc: "Scenic Western Ghats road trip to India’s highest untiered waterfall and rainforests.",
              },
              {
                from: "Murudeshwar",
                to: "Goa (South / North / Mopa)",
                distance: "190 km",
                time: "~4 hrs",
                price: "₹4,200",
                desc: "Interstate highway ride to Canacona, Margao, Panaji, and North Goa beaches.",
              },
              {
                from: "Murudeshwar",
                to: "Bengaluru City / Airport",
                distance: "480 km",
                time: "~8 hrs",
                price: "₹8,500",
                desc: "Executive long-distance sedan or Innova Crysta ride with experienced highway driver.",
              },
            ].map((route, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-primary-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary-500" />
                      {route.time}
                    </span>
                    <span>{route.distance}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-dark-950 mb-2">
                    {route.from} ➔ {route.to}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {route.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Starting from</span>
                    <span className="text-lg font-serif font-bold text-primary-600">{route.price}</span>
                  </div>
                  <Link href={`/get-a-cab?pickup=${encodeURIComponent(route.from)}&drop=${encodeURIComponent(route.to)}`}>
                    <Button size="sm" className="font-bold text-xs px-4 py-2">
                      Book Route
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages & Highlights */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-5xl font-sans font-black text-dark-950 tracking-tight"
            >
              Flexible travel options
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-500 rounded-xl p-10 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <img
                  src="https://api.iconify.design/mdi/taxi.svg?color=%231a1a1a"
                  alt="Taxi symbol"
                  className="w-16 h-16 mr-6"
                />
                <div>
                  <h3 className="text-3xl font-black text-dark-950 mb-2">
                    Local & City Rides
                  </h3>
                  <p className="text-dark-900 font-medium">
                    Convenient point-to-point & hourly <br />
                    packages tailored for your schedule.
                  </p>
                </div>
              </div>
              <div className="border-t border-dark-950/10 pt-8 space-y-4 font-bold text-dark-950">
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span>24/7 On-Demand</span>
                </div>
                <div className="flex justify-between">
                  <span>Booking Type:</span>
                  <span>Point-to-Point & Hourly</span>
                </div>
                <div className="flex justify-between">
                  <span>Driver Verification:</span>
                  <span>100% Licensed & Vetted</span>
                </div>
              </div>
              <div className="mt-10 flex justify-center">
                <Link href="/get-a-cab">
                  <Button
                    size="lg"
                    className="px-10 rounded-full bg-dark-950 text-white hover:bg-dark-900 font-bold tracking-widest uppercase"
                  >
                    Order Taxi Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-500 rounded-xl p-10 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <img
                  src="https://api.iconify.design/mdi/taxi.svg?color=%231a1a1a"
                  alt="Taxi symbol"
                  className="w-16 h-16 mr-6"
                />
                <div>
                  <h3 className="text-3xl font-black text-dark-950 mb-2">
                    Outstation & Airport
                  </h3>
                  <p className="text-dark-900 font-medium">
                    Comfortable long-distance trips <br />
                    and punctual airport transfers.
                  </p>
                </div>
              </div>
              <div className="border-t border-dark-950/10 pt-8 space-y-4 font-bold text-dark-950">
                <div className="flex justify-between">
                  <span>Trip Options:</span>
                  <span>One-Way & Round Trip</span>
                </div>
                <div className="flex justify-between">
                  <span>Airport Transfers:</span>
                  <span>Real-Time Flight Tracking</span>
                </div>
                <div className="flex justify-between">
                  <span>Custom Packages:</span>
                  <span>Multi-Day & Group Tours</span>
                </div>
              </div>
              <div className="mt-10 flex justify-center">
                <Link href="/get-a-cab">
                  <Button
                    size="lg"
                    className="px-10 rounded-full bg-dark-950 text-white hover:bg-dark-900 font-bold tracking-widest uppercase"
                  >
                    Order Taxi Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Homestay & Rented House Featured Showcase */}
      <section className="py-28 bg-dark-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h4
              variants={fadeUp}
              className="text-primary-500 font-bold tracking-[0.25em] uppercase mb-3 text-xs font-sans"
            >
              featured accommodations
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight mb-6"
            >
              Homestay & Rented House Options
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed"
            >
              More than just rides—Shrinika Travels offers scenic family
              homestays and fully furnished private rented houses so your travel
              and stay are completely stress-free.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Homestay Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="bg-dark-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-primary-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="/images/homestay_scenic_exterior_1791654079456.jpg"
                    alt="Cozy Scenic Homestay"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary-500 block mb-1">
                        Family & Couple Friendly · 2 & 3 BHK
                      </span>
                      <h3 className="text-3xl font-serif font-bold text-white">
                        Scenic Cozy Homestay
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary-500 text-dark-950 flex items-center justify-center shadow-lg shrink-0">
                      <Home className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Secondary Interior Preview Strip */}
                  <div className="flex items-center gap-4 mb-6 p-3 rounded-xl bg-dark-950/80 border border-gray-800">
                    <img
                      src="/images/homestay_cozy_bedroom_1791654092190.jpg"
                      alt="Homestay Bedroom Interior"
                      referrerPolicy="no-referrer"
                      className="w-20 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="text-xs">
                      <span className="text-primary-500 font-bold block mb-0.5">
                        Warm Boutique Interiors
                      </span>
                      <span className="text-gray-400">
                        Hygienic bedrooms with valley views, balcony seating &
                        homemade meals.
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    Experience authentic local hospitality with peaceful
                    surroundings, spotless rooms, and optional home-cooked
                    food—ideal for weekend getaways, family vacations, and
                    tourists.
                  </p>

                  <div className="space-y-3 border-t border-gray-800 pt-6 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Room Options:</span>
                      <span className="font-bold text-white">
                        Deluxe Rooms / 2 & 3 BHK
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Amenities:</span>
                      <span className="font-bold text-white">
                        Wi-Fi, AC, Hot Water & Parking
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Travel Combo:</span>
                      <span className="font-bold text-primary-500">
                        Cab Pickup + Sightseeing Included
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-cab?category=homestay" className="flex-1">
                  <Button className="w-full py-4 font-bold rounded-xl whitespace-nowrap">
                    Book Homestay
                  </Button>
                </Link>
                <Link href="/services" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full py-4 font-bold rounded-xl border-gray-700 text-white hover:bg-white hover:text-dark-950 whitespace-nowrap"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Rented House Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-dark-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-primary-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="/images/rented_house_villa_exterior_1791654105127.jpg"
                    alt="Independent Private Rented House"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary-500 block mb-1">
                        Short & Long Stays · Full Privacy
                      </span>
                      <h3 className="text-3xl font-serif font-bold text-white">
                        Private Rented House
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary-500 text-dark-950 flex items-center justify-center shadow-lg shrink-0">
                      <Key className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Secondary Interior Preview Strip */}
                  <div className="flex items-center gap-4 mb-6 p-3 rounded-xl bg-dark-950/80 border border-gray-800">
                    <img
                      src="/images/rented_house_living_kitchen_1791654114319.jpg"
                      alt="Rented House Living Room and Kitchen"
                      referrerPolicy="no-referrer"
                      className="w-20 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div className="text-xs">
                      <span className="text-primary-500 font-bold block mb-0.5">
                        Spacious Living & Modular Kitchen
                      </span>
                      <span className="text-gray-400">
                        Fully furnished halls, dining area, private lawn &
                        dedicated car parking.
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    Spacious, fully furnished independent houses for families,
                    corporate guests, and groups who want total privacy, a
                    private kitchen, and a home-away-from-home experience.
                  </p>

                  <div className="space-y-3 border-t border-gray-800 pt-6 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Property Types:</span>
                      <span className="font-bold text-white">
                        1 BHK, 2 BHK & Independent Villa
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Facilities:</span>
                      <span className="font-bold text-white">
                        Full Kitchen, Living Hall & Parking
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Booking Duration:</span>
                      <span className="font-bold text-primary-500">
                        Daily, Weekly & Monthly Stays
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-a-cab?category=rented-house"
                  className="flex-1"
                >
                  <Button className="w-full py-4 font-bold rounded-xl whitespace-nowrap">
                    Book Rented House
                  </Button>
                </Link>
                <Link href="/services" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full py-4 font-bold rounded-xl border-gray-700 text-white hover:bg-white hover:text-dark-950 whitespace-nowrap"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers Speak */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeUp}
              className="w-2 h-2 bg-primary-500 rounded-full mx-auto mb-4"
            />
            <motion.h4
              variants={fadeUp}
              className="text-gray-500 font-bold mb-2 text-sm uppercase tracking-widest"
            >
              Our fun facts
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-5xl font-sans font-black text-dark-950 tracking-tight"
            >
              Numbers speak
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "8700", label: "KM Driven", icon: "mdi:speedometer" },
              {
                num: "4978",
                label: "People Dropped",
                icon: "mdi:account-group",
              },
              { num: "800", label: "Taxis & Drivers", icon: "mdi:taxi" },
              {
                num: "2480",
                label: "Happy People",
                icon: "mdi:emoticon-happy-outline",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl py-12 px-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center text-primary-500 bg-transparent">
                    <img
                      src={`https://api.iconify.design/${stat.icon.split(":")[0]}/${stat.icon.split(":")[1]}.svg?color=%23fac115`}
                      alt={stat.label}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-5xl font-black text-dark-950 mb-4">
                  {stat.num}
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=2000"
            alt="Passengers background"
            className="w-full h-full object-cover object-center parallax-bg"
          />
          <div className="absolute inset-0 bg-dark-950/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            <motion.h4
              variants={fadeUp}
              className="text-primary-500 font-bold tracking-widest uppercase mb-2 text-sm"
            >
              Clients About Us
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-serif font-bold text-white mb-16"
            >
              Testimonials
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="bg-dark-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl relative mt-8 border border-gray-800/50 shadow-2xl"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/40">
                <span className="text-dark-950 text-5xl font-serif leading-none italic block mt-6">
                  "
                </span>
              </div>

              <p className="text-white text-lg md:text-xl leading-relaxed italic mb-8 mt-6">
                "We used your taxi service for the first time after seeing good
                reports online. Very efficient, and smart driver with a very
                clean vehicle. We want to say a big thank you for excellent
                service and we would definitely recommend to friends and family
                and use your service again."
              </p>

              <h4 className="text-primary-500 font-bold tracking-widest uppercase mb-1 text-sm">
                Shelby Blake, New York
              </h4>

              <div className="flex justify-center space-x-3 mt-8">
                <div className="w-3 h-3 rounded-full border-2 border-primary-500 bg-transparent cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-primary-500 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-primary-500 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section (Rewards) */}
      <section className="bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 h-[50vh] md:h-[600px] relative"
          >
            <img
              src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&q=80&w=1000"
              alt="Passenger in car"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-gray-50 text-left"
          >
            <h4 className="text-primary-500 font-bold tracking-widest uppercase mb-2 text-sm">
              Rewards As You Travel
            </h4>
            <h2 className="text-4xl font-serif font-bold text-dark-950 mb-6">
              Get Your Rewards
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Shrinika Travels service helps you to find the highest quality
              taxi services anytime. Our drivers are uniformed, fully licensed
              and the office staff is trained to the highest standards. We can
              help you to save time and money.
            </p>
            <div>
              <Link href="/about">
                <Button
                  size="lg"
                  className="px-10 rounded-full shadow-lg shadow-primary-500/30"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h4
              variants={fadeUp}
              className="text-primary-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs font-sans"
            >
              Find Your Answers
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-dark-950 font-sans"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do I book a taxi in advance?",
                a: "You can easily book a taxi in advance using our online booking form or by calling our customer service. Just specify your pickup time and date.",
              },
              {
                q: "Do you offer airport transportations?",
                a: "Yes, we provide 24/7 airport transfer services. Our drivers monitor flight arrivals to ensure timely pickups.",
              },
              {
                q: "How is the trip fare calculated?",
                a: "Fares vary depending on your route, distance, vehicle category, and trip duration. Contact us or submit a booking request for a personalized quote.",
              },
              {
                q: "Do you also provide Homestay and Rented House bookings?",
                a: "Yes! Along with taxi services, we offer comfortable Homestays and fully furnished Rented Houses for short and long stays. You can book them directly online or call us.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, UPI, mobile wallets, and cash for your convenience.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary-500 transition-colors"
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-bold font-sans cursor-pointer list-none text-dark-950">
                    <span className="text-lg">{faq.q}</span>
                    <span className="transition-transform group-open:rotate-180 bg-primary-50 text-primary-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl">
                      +
                    </span>
                  </summary>
                  <p className="text-gray-500 mt-4 leading-relaxed tracking-wide text-sm">
                    {faq.a}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h4
              variants={fadeUp}
              className="text-primary-500 font-bold tracking-widest uppercase mb-2 text-sm"
            >
              How Can We Help You?
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-serif font-bold text-dark-950"
            >
              Have a Questions?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-500 mt-4 max-w-2xl mx-auto"
            >
              If you have any comments, suggestions or questions, please do not
              hesitate to contact us. Our high-quality office staff will help
              you and answer all your questions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center border-b border-gray-100 pb-16"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors flex items-center justify-center mb-6 shadow-sm">
                <MapPin className="w-8 h-8 transition-colors" />
              </div>
              <h4 className="font-bold text-dark-950 uppercase tracking-widest mb-2 text-sm">
                Our Address
              </h4>
              <p className="text-gray-500">
                Murudeshwar Temple Road,
                <br />
                Karnataka 581350
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors flex items-center justify-center mb-6 shadow-sm">
                <Phone className="w-8 h-8 transition-colors" />
              </div>
              <h4 className="font-bold text-dark-950 uppercase tracking-widest mb-2 text-sm">
                Our Phones
              </h4>
              <p className="text-gray-500">
                <a
                  href="tel:7353837847"
                  className="hover:text-primary-500 transition-colors"
                >
                  +91 7353837847
                </a>
                <br />
                <a
                  href="tel:7204948389"
                  className="hover:text-primary-500 transition-colors"
                >
                  +91 7204948389
                </a>
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors flex items-center justify-center mb-6 shadow-sm">
                <Mail className="w-8 h-8 transition-colors" />
              </div>
              <h4 className="font-bold text-dark-950 uppercase tracking-widest mb-2 text-sm">
                Our Mail
              </h4>
              <p className="text-gray-500">
                <a
                  href="mailto:shrinikatravels8898@gmail.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  shrinikatravels8898@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call Now CTA Section */}
      <section className="py-24 bg-primary-500 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h4
              variants={fadeUp}
              className="text-dark-950 font-bold mb-4 font-sans tracking-wide"
            >
              Call 24 hour service available
            </motion.h4>
            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-sans font-black text-dark-950 mb-12 tracking-tight leading-tight"
            >
              Call now and book <br />
              our taxi for your next ride
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 flex justify-center">
              <Link href="/get-a-cab">
                <Button
                  size="lg"
                  className="px-10 py-8 rounded-full bg-dark-950 text-white hover:bg-dark-900 font-bold tracking-widest uppercase transition-all shadow-xl text-sm border-transparent hover:border-transparent"
                >
                  Choose Your Taxi
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
