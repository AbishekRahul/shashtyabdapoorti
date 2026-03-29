import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { KalashMotif } from './Motifs';

export default function EventDetails() {
  return (
    <section className="w-full py-20 px-6 bg-yellow-50/30 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm border-2 border-temple-secondary/50 rounded-3xl p-8 md:p-12 shadow-2xl relative"
      >
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-temple-bg rounded-full p-2 border border-temple-secondary/30">
          <KalashMotif className="w-12 h-12 text-temple-secondary drop-shadow-md" />
        </div>

        <h2 className="font-heading text-4xl text-center text-temple-primary mb-12 mt-4 font-bold">Auspicious Occasion Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-temple-primary/10 p-3 rounded-full text-temple-primary">
                <Calendar size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-temple-primary">Date</h3>
                <p className="font-body text-lg text-gray-700 mt-1">April 18th & 19th, [Year]</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-temple-primary/10 p-3 rounded-full text-temple-primary">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-temple-primary">Muhurtham</h3>
                <p className="font-body text-lg text-gray-700 mt-1">April 19th - 10:00 AM to 11:30 AM</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-temple-primary/10 p-3 rounded-full text-temple-primary">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-temple-primary">Venue</h3>
                <p className="font-body text-lg text-gray-700 mt-1">[Venue Name],</p>
                <p className="font-body text-gray-600">[Street Address], [City], [State] - [Zip]</p>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=[Venue+Location]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-temple-primary text-white font-body px-6 py-3 rounded-xl hover:bg-temple-primary/90 transition-all shadow-md hover:shadow-lg ml-16"
            >
              <MapPin size={18} />
              View on Google Maps
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
