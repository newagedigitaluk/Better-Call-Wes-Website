import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { openWhatsApp, whatsappMessages } from '../utils/whatsapp';

const { FiMessageCircle, FiX } = FiIcons;

const WhatsAppButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 border border-gray-100"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <SafeIcon icon={FiX} className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <h3 className="font-montserrat font-bold text-brand-navy text-sm mb-2">
                Need a Quick Quote?
              </h3>
              <p className="text-brand-charcoal text-xs mb-3 font-opensans">
                Send us photos and describe your job - get an instant quote via WhatsApp!
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    openWhatsApp(whatsappMessages.quickQuote);
                    setIsTooltipVisible(false);
                  }}
                  className="w-full text-left px-3 py-2 bg-brand-accentOrange text-brand-orange rounded-lg text-xs font-opensans hover:bg-brand-orange hover:text-white transition-colors duration-200"
                >
                  📸 Send Photos for Quote
                </button>
                <button
                  onClick={() => {
                    openWhatsApp(whatsappMessages.emergency);
                    setIsTooltipVisible(false);
                  }}
                  className="w-full text-left px-3 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-opensans hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  🚨 Emergency Help
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-colors duration-300 animate-pulse"
        style={{ animationDuration: '2s' }}
      >
        <SafeIcon icon={FiMessageCircle} className="w-8 h-8" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;