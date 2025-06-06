import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, HandHeart, Gift, Heart } from 'lucide-react';

function Footer({ islamicPatterns }) {
  return (
    <footer className="bg-gradient-to-r from-emerald-800 via-blue-800 to-purple-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-6 mb-6">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Moon className="w-10 h-10 text-yellow-300" />
            </motion.div>
            <h3 className="text-4xl font-bold">عيد مبارك</h3>
            <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Star className="w-10 h-10 text-yellow-300" />
            </motion.div>
          </div>
          <p className="text-2xl font-semibold text-emerald-100 mb-4">Eid ul Adha Mubarak</p>
          <p className="text-lg text-emerald-200 mb-6 max-w-3xl mx-auto">
            May the divine blessings of Allah bring you hope, faith, and joy on Eid ul Adha and forever. May this sacred festival strengthen the bonds of brotherhood and sisterhood among all Muslims worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            className="text-center hover:border-2 p-6 hover:bg-green-700/60 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <HandHeart className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-2">Unity & Brotherhood</h4>
            <p className="text-sm text-emerald-200">Celebrating together as one Ummah</p>
          </motion.div>
          <motion.div
            className="text-center hover:border-2 p-6 hover:bg-green-700/60 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Gift className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-2">Sacrifice & Devotion</h4>
            <p className="text-sm text-emerald-200">Following Ibrahim's example of faith</p>
          </motion.div>
          <motion.div
            className="text-center hover:border-2 p-6 hover:bg-green-700/60 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Heart className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
            <h4 className="text-lg font-semibold mb-2">Love & Compassion</h4>
            <p className="text-sm text-emerald-200">Sharing blessings with those in need</p>
          </motion.div>
        </div>

        <motion.div
          className="text-center border-t border-emerald-700 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-emerald-200">
            Wishing you and your family a blessed celebration filled with love, peace, happiness, and Allah's infinite mercy
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;