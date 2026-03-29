import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MangoLeafToran } from './Motifs';

export default function ProgramSchedule() {
  const schedule = [
    {
      date: "April 18, [Year]",
      time: "Evening - Around 5:00 PM",
      event: "Rudra Ekadasi Homam",
      description: "Seeking the blessings of Lord Shiva with the chanting of Sri Rudram to ensure peace and prosperity."
    },
    {
      date: "April 19, [Year]",
      time: "Morning - 10:00 AM to 11:30 AM",
      event: "Sashtiapthapoorthi & Shanti Kalyanam",
      description: "The core 60th birthday rituals including Ayush Homam, Maalai Maatral, and Maangalyadharanam."
    },
    {
      date: "April 19, [Year]",
      time: "Afternoon - 12:00 PM Onwards",
      event: "Maha Prasadam (Grand Feast)",
      description: "Join us for a traditional South Indian banana leaf meal following the rituals."
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 w-full left-0 opacity-80">
        <MangoLeafToran />
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl text-center text-temple-primary mb-16 font-bold"
        >
          Program Schedule
        </motion.h2>

        <div className="relative border-l-4 border-temple-secondary/50 ml-6 md:ml-12 space-y-12">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-1 w-6 h-6 bg-temple-bg border-4 border-temple-primary rounded-full" />
              
              <div className="bg-orange-50/50 p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                <span className="font-heading text-temple-secondary text-sm md:text-md uppercase font-bold tracking-wider bg-temple-primary px-3 py-1 rounded inline-block mb-3">
                  {item.date} • {item.time}
                </span>
                <h3 className="font-heading text-2xl text-temple-primary font-bold mb-2">{item.event}</h3>
                <p className="font-body text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full left-0 rotate-180 opacity-80">
        <MangoLeafToran />
      </div>
    </section>
  );
}
