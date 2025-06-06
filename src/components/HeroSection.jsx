import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Clock, ChevronDown } from 'lucide-react';

function HeroSection({ isVisible, currentTime, islamicPatterns }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, staggerChildren: 0.3 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Islamic Pattern Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-96 h-96 border-4 border-emerald-200/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="w-80 h-80 border-4 border-yellow-200/30 rounded-full m-8"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div
                className="w-64 h-64 border-4 border-rose-200/30 rounded-full m-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="w-48 h-48 border-2 border-blue-200/30 rounded-full m-8"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-yellow-400/20 rounded-full m-8"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10">
          <motion.div className="mb-8" variants={childVariants}>
            <motion.div
              className="flex justify-center items-center gap-4 mb-4"
              variants={childVariants}
            >
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <Moon className="w-12 h-12 text-emerald-600" />
              </motion.div>
              <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Star className="w-8 h-8 text-yellow-500" />
              </motion.div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 1 }}>
                <Moon className="w-12 h-12 text-emerald-600" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4 mb-8" variants={childVariants}>
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-600 via-yellow-500 to-rose-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              عيد الأضحى مبارك
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-gray-800"
              variants={childVariants}
            >
              Eid ul Adha Mubarak
            </motion.h2>
            <motion.h3
              className="text-2xl md:text-3xl font-semibold text-emerald-700"
              variants={childVariants}
              transition={{ delay: 0.5 }}
            >
              Blessed Festival of Sacrifice
            </motion.h3>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={childVariants}
          >
            Celebrating the spirit of sacrifice, devotion, and unity. May Allah's blessings be upon you and your family on this sacred occasion.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-5xl mb-8"
            variants={containerVariants}
          >
            {['🌙', '⭐', '🎉',].map((emoji, index) => (
              <motion.span
                key={index}
                className="hover:scale-125 transition-transform cursor-pointer"
                variants={childVariants}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 inline-block shadow-lg border border-emerald-200"
            variants={childVariants}
          >
            <div className="flex items-center gap-2 text-emerald-700">
              <Clock className="w-5 h-5" />
              <span className="font-bold">
                {currentTime.toLocaleTimeString('en-US', {
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </span>
              <span className="text-sm">
                |{' '}
                {currentTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
          <ChevronDown className="w-6 h-6 text-emerald-600" />
        </div>
      </motion.div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {islamicPatterns.map((pattern, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 180, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: index * 0.5 }}
          >
            {pattern}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;