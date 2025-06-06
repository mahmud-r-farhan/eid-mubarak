import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

function Traditions({ traditions, scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-emerald-100 via-yellow-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Sacred Traditions & Rituals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the beautiful customs that unite our hearts in faith, devotion, and remembrance of Allah's mercy
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={scrollY > 1000 ? 'visible' : 'hidden'}
        >
          {traditions.map((tradition, index) => {
            const Icon = LucideIcons[tradition.icon];
            return (
              <motion.div
                key={tradition.title}
                className="transform"
                variants={itemVariants}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 border-2 border-transparent hover:border-emerald-200">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`bg-gradient-to-r ${tradition.color} text-white p-4 rounded-full mr-6`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800">{tradition.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{tradition.description}</p>
                  <div className="bg-gradient-to-r from-gray-50 to-emerald-50 p-4 rounded-2xl">
                    <p className="text-sm text-gray-700 italic">{tradition.details}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Traditions;