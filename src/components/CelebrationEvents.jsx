import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

function CelebrationEvents({ celebrations = [], scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-r from-rose-100 via-yellow-100 to-emerald-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          </motion.div>
          <motion.h2
            className="text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Eid Celebrations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Join the global Muslim community in celebrating this blessed festival with joy and unity
          </motion.p>
        </motion.div>

        {/* Celebration Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={scrollY > 200 ? 'visible' : 'hidden'}
        >
          {celebrations.map((celebration, index) => {
            const Icon = LucideIcons[celebration.icon] || Sparkles;

            return (
              <motion.div
                key={celebration.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-rose-200"
                  whileHover={{ rotate: [-1, 1, -1, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-3 rounded-full"
                      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <motion.span
                      className="text-3xl"
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {celebration.emoji}
                    </motion.span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{celebration.title}</h3>
                  <p className="text-gray-600">{celebration.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CelebrationEvents;
