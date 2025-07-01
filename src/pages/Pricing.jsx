import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { openWhatsApp, whatsappMessages, businessInfo } from '../utils/whatsapp';

const { 
  FiCheckCircle, FiMessageCircle, FiPhone, FiDollarSign, 
  FiClock, FiShield, FiStar, FiTool, FiHome
} = FiIcons;

const Pricing = () => {
  const pricingPrinciples = [
    {
      icon: FiDollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. You know the cost upfront.'
    },
    {
      icon: FiClock,
      title: 'No Call-Out Fees',
      description: 'Free quotes and assessments for all standard work.'
    },
    {
      icon: FiShield,
      title: 'Fixed Price Guarantee',
      description: 'Price agreed before work starts - no changes unless you approve.'
    },
    {
      icon: FiStar,
      title: 'Competitive Rates',
      description: 'Fair pricing that reflects quality workmanship and service.'
    }
  ];

  const serviceCategories = [
    {
      title: 'Emergency Callouts',
      description: '24/7 emergency plumbing and heating repairs',
      pricing: 'From £80 + parts',
      features: [
        '24/7 availability',
        'Fast response times',
        'Emergency repairs',
        'Call-out fee included in final price'
      ],
      whatsappMessage: whatsappMessages.emergency
    },
    {
      title: 'Boiler Services',
      description: 'Installation, servicing, and repairs for all boiler types',
      pricing: 'Service from £85 | Installation POA',
      features: [
        'Annual boiler servicing',
        'Boiler installations',
        'Repair all makes/models',
        'Gas Safe certified'
      ],
      whatsappMessage: whatsappMessages.boilerServicing
    },
    {
      title: 'General Plumbing',
      description: 'Taps, toilets, leaks, and general plumbing work',
      pricing: 'From £60 + parts',
      features: [
        'Tap installation/repair',
        'Toilet repairs',
        'Leak repairs',
        'Pipe work'
      ],
      whatsappMessage: whatsappMessages.plumbingRepairs
    },
    {
      title: 'Heating Systems',
      description: 'Central heating, radiators, and heating controls',
      pricing: 'From £75 + parts',
      features: [
        'Radiator installation',
        'Power flushing',
        'Heating controls',
        'System upgrades'
      ],
      whatsappMessage: whatsappMessages.powerFlushing
    }
  ];

  const whyChooseWes = [
    'Over 10 years experience',
    'Gas Safe registered engineer',
    '200+ five-star customer reviews',
    'Fully insured for your peace of mind',
    'Local Southampton knowledge',
    'Same-day service available'
  ];

  return (
    <>
      <Helmet>
        <title>Transparent Pricing - Southampton Plumber | Better Call Wes</title>
        <meta name="description" content="Honest, transparent pricing for plumbing and heating services in Southampton. No hidden fees, competitive rates, free quotes. Get your price today!" />
        <meta name="keywords" content="plumber prices Southampton, heating engineer rates, boiler service cost, plumbing repair prices, transparent pricing" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-navy py-20 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="bg-white text-brand-charcoal p-6 rounded-2xl mb-8 relative shadow-2xl max-w-2xl mx-auto">
                  <h2 className="font-montserrat font-bold text-2xl mb-3 text-brand-navy">
                    Hi, I'm Wes! 👋
                  </h2>
                  <p className="font-opensans text-lg leading-relaxed">
                    I believe in honest, transparent pricing with no hidden fees. 
                    Send me photos via WhatsApp for an instant quote!
                  </p>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-shadow-hero">
                  Transparent Pricing - No Hidden Fees
                </h1>
                
                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed max-w-4xl mx-auto">
                  Fair, competitive pricing for all plumbing and heating services in Southampton. 
                  Get an instant quote by sending photos via WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => openWhatsApp(whatsappMessages.quickQuote)}
                    className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>📱 Get Instant Quote</span>
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
            </div>
          </div>
        </section>

        {/* Pricing Principles */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                My Pricing Principles
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Honest, fair pricing that reflects the quality of work and service you receive.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center"
                >
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={principle.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                    {principle.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Pricing */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Service Categories & Pricing
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Starting prices for our main service categories. Final quotes provided after assessment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift"
                >
                  <div className="text-center mb-6">
                    <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-2">
                      {category.title}
                    </h3>
                    <p className="font-opensans text-brand-charcoal mb-4">
                      {category.description}
                    </p>
                    <div className="bg-brand-accentOrange rounded-lg p-4 mb-6">
                      <p className="font-montserrat font-bold text-2xl text-brand-orange">
                        {category.pricing}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-brand-orange flex-shrink-0" />
                        <span className="font-opensans text-brand-charcoal">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => openWhatsApp(category.whatsappMessage)}
                      className="w-full gradient-orange text-white py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Quote Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                How to Get Your Quote
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Get accurate pricing in minutes by sending photos via WhatsApp.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-montserrat font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-2">
                      Take Photos
                    </h3>
                    <p className="font-opensans text-brand-charcoal">
                      Take clear photos of your plumbing or heating issue and send them via WhatsApp.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-montserrat font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-2">
                      Describe the Job
                    </h3>
                    <p className="font-opensans text-brand-charcoal">
                      Tell me what's wrong and what you need done. I'll ask any follow-up questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-montserrat font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-2">
                      Get Your Quote
                    </h3>
                    <p className="font-opensans text-brand-charcoal">
                      Receive an accurate quote with transparent pricing - no hidden fees or surprises.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-montserrat font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-2">
                      Book Your Service
                    </h3>
                    <p className="font-opensans text-brand-charcoal">
                      Happy with the quote? Book your appointment at a time that suits you.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <SafeIcon icon={FiMessageCircle} className="w-20 h-20 text-brand-orange mx-auto mb-6" />
                <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-4">
                  Ready for Your Quote?
                </h3>
                <p className="font-opensans text-lg text-brand-charcoal mb-6">
                  Send photos of your job and get an instant, accurate quote with no hidden fees.
                </p>
                <button
                  onClick={() => openWhatsApp(whatsappMessages.quickQuote)}
                  className="w-full gradient-orange text-white py-4 px-8 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>📱 Start Your Quote</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Wes */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Why Choose Wes?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseWes.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-brand-accentOrange transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-brand-orange flex-shrink-0" />
                    <p className="font-opensans font-semibold text-brand-charcoal">
                      {reason}
                    </p>
                  </div>
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
                Get Your Transparent Quote Today
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                No hidden fees, no surprises. Just honest, competitive pricing for quality workmanship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openWhatsApp(whatsappMessages.quickQuote)}
                  className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Get Instant Quote</span>
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

export default Pricing;