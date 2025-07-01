import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { openWhatsApp, whatsappMessages, businessInfo } from '../../utils/whatsapp';

const { 
  FiHome, FiCheckCircle, FiClock, FiShield, FiStar, 
  FiMessageCircle, FiPhone, FiTool, FiSettings, FiDroplet
} = FiIcons;

const ToiletRepairs = () => {
  const commonToiletIssues = [
    { title: 'Running Toilet', description: 'Continuous water running, wasting water and money', icon: FiDroplet },
    { title: 'Blocked Toilet', description: 'Emergency unblocking service available 24/7', icon: FiSettings },
    { title: 'Weak Flush', description: 'Poor flushing performance or incomplete flush', icon: FiTool },
    { title: 'Toilet Not Filling', description: 'Cistern not filling with water after flushing', icon: FiHome },
    { title: 'Leaking Toilet', description: 'Water leaking around base or from cistern', icon: FiDroplet },
    { title: 'Broken Handle/Button', description: 'Flush mechanism not working properly', icon: FiSettings }
  ];

  const toiletServices = [
    'Complete toilet installations',
    'Cistern repairs and replacements',
    'Flush mechanism repairs',
    'Toilet seat replacements',
    'Emergency toilet unblocking',
    'Toilet leak repairs',
    'Modern toilet upgrades',
    'Dual flush conversions'
  ];

  const toiletTypes = [
    {
      title: 'Modern Close-Coupled Toilets',
      description: 'Space-saving design with integrated cistern'
    },
    {
      title: 'Back-to-Wall Toilets',
      description: 'Contemporary design with hidden cistern'
    },
    {
      title: 'Traditional Toilets',
      description: 'Classic style with separate cistern'
    },
    {
      title: 'Dual Flush Toilets',
      description: 'Water-saving technology with two flush options'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you fix a blocked toilet?',
      answer: 'I provide emergency toilet unblocking services and aim to respond within 2-4 hours. Most blockages can be cleared quickly using professional equipment.'
    },
    {
      question: 'Why does my toilet keep running?',
      answer: 'Common causes include faulty flush valve, incorrect float level, or worn components. I can diagnose and fix the issue, often on the same visit.'
    },
    {
      question: 'How much does toilet repair cost?',
      answer: 'Repair costs vary depending on the issue. Simple repairs like adjusting flush mechanisms start from £60, while major repairs or replacements cost more.'
    },
    {
      question: 'Can you install new toilets?',
      answer: 'Yes, I provide complete toilet installation services including removal of old toilets, plumbing connections, and installation of modern, efficient models.'
    },
    {
      question: 'Do you provide emergency toilet repairs?',
      answer: 'Yes, I understand toilet problems can\'t wait. I provide 24/7 emergency toilet repair services across Southampton for urgent issues.'
    }
  ];

  const relatedServices = [
    { title: 'Plumbing Repairs', path: '/services/plumbing-repairs' },
    { title: 'Tap Services', path: '/services/tap-services' },
    { title: 'Shower Services', path: '/services/shower-services' },
    { title: 'Boiler Repair', path: '/services/boiler-repair' }
  ];

  return (
    <>
      <Helmet>
        <title>Toilet Repairs Southampton | Emergency Unblocking | Better Call Wes</title>
        <meta name="description" content="Professional toilet repairs in Southampton. Emergency unblocking, running toilets, installations, leak repairs. Fast response, quality service." />
        <meta name="keywords" content="toilet repair Southampton, blocked toilet, emergency toilet unblocking, toilet installation, running toilet repair" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-navy py-20 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="bg-white text-brand-charcoal p-6 rounded-2xl mb-8 relative shadow-2xl">
                  <h2 className="font-montserrat font-bold text-2xl mb-3 text-brand-navy">
                    Hi, I'm Wes! 👋
                  </h2>
                  <p className="font-opensans text-lg leading-relaxed">
                    Toilet problems can't wait! I provide fast toilet repairs, emergency unblocking, 
                    and complete toilet installations across Southampton.
                  </p>
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-shadow-hero">
                  Toilet Repairs Southampton
                </h1>
                
                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed">
                  Professional toilet repair service for all toilet problems. Emergency unblocking, 
                  repairs, and complete installations. Fast response across Southampton.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openWhatsApp(whatsappMessages.toiletRepairs)}
                    className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>Emergency Help</span>
                  </button>
                  
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-brand-navy transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                    <span>{businessInfo.phone}</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-80 h-80 mx-auto bg-brand-orange/20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiHome} className="w-40 h-40 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Toilet Issues */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Common Toilet Problems I Fix
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                From emergency blockages to running toilets, I provide fast, professional solutions for all toilet issues.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonToiletIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center"
                >
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={issue.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                    {issue.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal mb-6">
                    {issue.description}
                  </p>
                  <button
                    onClick={() => openWhatsApp(`Hi Wes! I have a toilet problem: ${issue.title}. Can you help?`)}
                    className="w-full gradient-orange text-white py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Help Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Toilet Service */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4">
                🚨 Toilet Emergency?
              </h2>
              <p className="font-opensans text-xl mb-8 max-w-2xl mx-auto">
                Blocked toilet? Overflowing? Don't panic! I provide emergency toilet services 24/7 across Southampton.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openWhatsApp(whatsappMessages.emergency)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 animate-pulse-emergency"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Emergency WhatsApp</span>
                </button>
                
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiPhone} className="w-6 h-6" />
                  <span>Call {businessInfo.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Toilet Services */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Complete Toilet Services
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                From emergency repairs to complete installations, I provide comprehensive toilet services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toiletServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-lg hover-lift"
                >
                  <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-brand-orange flex-shrink-0" />
                  <p className="font-opensans font-semibold text-brand-charcoal">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Toilet Types */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Toilet Installation Options
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Upgrade your bathroom with modern, efficient toilet installations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {toiletTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover-lift"
                >
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                    {type.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal mb-6">
                    {type.description}
                  </p>
                  <button
                    onClick={() => openWhatsApp(`Hi Wes! I'm interested in ${type.title}. Can you provide a quote?`)}
                    className="text-brand-orange font-opensans font-semibold hover:text-brand-orangeHover transition-colors duration-300"
                  >
                    Get installation quote →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Toilet Repair FAQs
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h3 className="font-montserrat font-bold text-lg text-brand-navy mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-opensans text-brand-charcoal leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Related Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="block bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:bg-brand-accentOrange transition-all duration-300 border-l-4 border-brand-orange"
                  >
                    <h3 className="font-opensans font-bold text-brand-navy hover:text-brand-orange transition-colors duration-300">
                      {service.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-navy text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">
                Need Toilet Repairs or Installation?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                From emergency blockages to complete toilet installations, I provide fast, professional service across Southampton.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openWhatsApp(whatsappMessages.toiletRepairs)}
                  className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Get Help Now</span>
                </button>
                
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-brand-navy transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiPhone} className="w-6 h-6" />
                  <span>Call {businessInfo.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToiletRepairs;