'use client';

import { motion } from 'framer-motion';

interface LegalPageContentProps {
  title: string;
}

export function LegalPageContent({ title }: LegalPageContentProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 bg-gray-50 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 md:p-14 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-950 mb-8 pb-8 border-b border-gray-100">
              {title}
            </h1>
            <div className="prose prose-lg text-gray-500 space-y-4">
              <p>This is the official {title} for Shrinika Travels. We are dedicated to providing transparent, trustworthy taxi, homestay, and rental booking services across India.</p>
              <p>For any specific questions or assistance regarding this policy, please reach out to our team at <a href="mailto:shrinikatravels8898@gmail.com" className="text-primary-600 font-semibold underline">shrinikatravels8898@gmail.com</a> or call us at <a href="tel:7353837847" className="text-primary-600 font-semibold underline">+91 7353837847</a>.</p>
              <p className="text-sm text-gray-400">Last updated: October 2026.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
