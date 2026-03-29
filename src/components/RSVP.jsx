import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Phone, Mail, CalendarPlus } from 'lucide-react';
import { GaneshaMotif } from './Motifs';

export default function RSVP() {
  return (
    <section className="w-full py-24 px-6 bg-temple-bg flex flex-col items-center justify-center border-t border-temple-secondary/20 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        <h2 className="font-heading text-4xl text-temple-primary font-bold">With Best Compliments</h2>
        
        <p className="font-body text-lg text-temple-primary/80 italic">
          Near and Dear relatives from [Gothram] Gothram & Friends.
        </p>

        <div className="py-8 border-y border-temple-secondary/30 my-8">
          <h3 className="font-heading text-2xl text-temple-primary mb-6">RSVP</h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/[Placeholder_Number]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-body px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <Phone size={20} />
              Confirm via WhatsApp
            </a>
            
            <a 
              href="mailto:[Placeholder_Email]?subject=RSVP%20for%20Sashtiapthapoorthi"
              className="flex items-center gap-2 bg-temple-primary hover:bg-temple-primary/90 text-white font-body px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <Mail size={20} />
              Send Email
            </a>
          </div>
        </div>

        <a 
           href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=[Father_Name]+and+[Mother_Name]+Sashtiapthapoorthi&dates=20240419T043000Z/20240419T060000Z&details=Join+us+for+the+60th+birthday+celebration+and+lunch.&location=[Venue_Name]"
           target="_blank" 
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 text-temple-primary border-2 border-temple-primary font-body px-6 py-2 rounded-full hover:bg-temple-primary hover:text-white transition-all"
        >
          <CalendarPlus size={18} />
          Add to Calendar
        </a>

        <div className="pt-12 opacity-50">
           <GaneshaMotif className="w-12 h-12 mx-auto text-temple-primary" />
        </div>
      </motion.div>
    </section>
  );
}
