import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { GaneshaMotif, KanchiBorder } from './Motifs';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute top-0 w-full left-0 opacity-70">
        <KanchiBorder className="w-full h-8 text-temple-secondary" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-8 mt-12"
      >
        <GaneshaMotif className="w-24 h-24 mx-auto text-temple-primary" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-10 text-temple-primary space-y-4"
      >
        <h2 className="font-heading font-semibold text-xl md:text-2xl tracking-widest text-shadow">
          ॥ ॐ श्री गणेशाय नमः ॥
        </h2>
        <p className="font-body text-sm md:text-base italic max-w-xl mx-auto opacity-90 leading-relaxed px-4 text-temple-primary">
          Vakratunda Mahakaya Suryakoti Samaprabha |<br />
          Nirvighnam Kuru Me Deva Sarva Karyeshu Sarvada ||
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <p className="font-body text-lg md:text-xl text-temple-primary/80">
          With the divine grace of our ancestors and gurus, we cordially invite you to the
        </p>
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-temple-primary drop-shadow-md py-4">
          Sashtiapthapoorthi
        </h1>
        <p className="font-heading text-lg md:text-2xl text-temple-secondary bg-temple-primary inline-block px-6 py-2 rounded-full shadow-lg">
          ( 60th Birthday Celebration )
        </p>
        
        <p className="font-body text-lg md:text-xl mt-8 text-temple-primary/80">
          of our beloved parents
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-6">
          <div className="text-center">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-temple-primary">Shri. [Father Name]</h3>
            <p className="font-body text-sm mt-2 text-temple-primary/70">[Gothram] Gothram</p>
          </div>
          <span className="text-temple-secondary text-4xl font-heading">&</span>
          <div className="text-center">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-temple-primary">Smt. [Mother Name]</h3>
            <p className="font-body text-sm mt-2 text-temple-primary/70">[Gothram] Gothram</p>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 w-full left-0 opacity-70">
        <KanchiBorder className="w-full h-8 text-temple-secondary transform rotate-180" />
      </div>
    </section>
  );
}
