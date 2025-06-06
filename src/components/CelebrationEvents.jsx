import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

function CelebrationEvents({ celebrations, scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-rose-100 via-yellow-100 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Sparkles className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Eid Celebrations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the global Muslim community in celebrating this blessed festival with joy and unity
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={scrollY > 200 ? 'visible' : 'hidden'}
        >
          {celebrations.map((celebration, index) => {
            const Icon = LucideIcons[celebration.icon];
            return (
              <motion.div
                key={celebration.title}
                className="transform hover:scale-105"
                variants={itemVariants}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-rose-200">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-3 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <motion.span
                      className="text-3xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      {celebration.emoji}
                    </motion.span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{celebration.title}</h3>
                  <p className="text-gray-600">{celebration.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default CelebrationEvents;