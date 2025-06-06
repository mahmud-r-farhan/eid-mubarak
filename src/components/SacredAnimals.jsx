import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

function SacredAnimals({ animals, scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Crown className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Sacred Animals of Sacrifice</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honoring the blessed creatures that remind us of Prophet Ibrahim's ultimate test of faith and submission to Allah
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={scrollY > 400 ? 'visible' : 'hidden'}
        >
          {animals.map((animal, index) => (
            <motion.div
              key={animal.name}
              className="group"
              variants={itemVariants}
              custom={index}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-emerald-200 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${animal.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <motion.div
                    className="text-7xl mb-4 text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    {animal.emoji}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{animal.name}</h3>
                  <p className="text-gray-600 mb-4 text-center">{animal.description}</p>
                  <div className={`bg-gradient-to-r ${animal.color} text-white px-3 py-1 rounded-full text-sm font-medium text-center mb-4`}>
                    {animal.virtue}
                  </div>
                  <div className="bg-gradient-to-r from-emerald-100 to-yellow-100 p-4 rounded-2xl">
                    <p className="text-sm font-medium text-gray-700 text-center italic">"{animal.blessing}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SacredAnimals;