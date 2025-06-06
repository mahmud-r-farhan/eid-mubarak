import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function Blessings({ scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={scrollY > 1400 ? 'visible' : 'hidden'}
        >
          <div className="bg-gradient-to-r from-emerald-600 via-yellow-500 to-rose-600 p-1 rounded-3xl mb-8">
            <div className="bg-white rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 text-6xl">🕌</div>
                <div className="absolute top-4 right-4 text-6xl">☪️</div>
                <div className="absolute bottom-4 left-4 text-6xl">⭐</div>
                <div className="absolute bottom-4 right-4 text-6xl">🌙</div>
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                </motion.div>
                <h2 className="text-5xl font-bold text-gray-800 mb-8">Heartfelt Duas & Wishes</h2>

                <div className="space-y-8 text-lg text-gray-700">
                  <motion.div
                    className="bg-gradient-to-r from-emerald-50 to-yellow-50 p-6 rounded-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="italic text-xl mb-2">"تَقَبَّلَ اللهُ مِنَّا وَمِنْكُمْ"</p>
                    <p className="font-semibold text-emerald-700">"May Allah accept from us and from you"</p>
                  </motion.div>

                  <motion.p
                    className="italic text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    "May Allah accept your good deeds, forgive your transgressions, and ease the suffering of all peoples around the globe."
                  </motion.p>

                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-rose-50 p-6 rounded-2xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="font-semibold text-2xl text-blue-700 mb-2">
                      May your sacrifices be rewarded and your prayers answered
                    </p>
                    <p className="text-gray-600">
                      May this blessed Eid bring peace to your heart, joy to your home, and prosperity to your life
                    </p>
                  </motion.div>

                  <motion.p
                    className="italic text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    "May this Eid bring joy, health, happiness, and wealth to you and all your loved ones. Eid Mubarak!"
                  </motion.p>
                </div>

                <motion.div
                  className="flex justify-center gap-4 mt-8 text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {['🤲', '💝', '🌟', '☪️', '🕌'].map((emoji, index) => (
                    <motion.span
                      key={index}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Blessings;