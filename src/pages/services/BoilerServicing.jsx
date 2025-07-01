import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { openWhatsApp, whatsappMessages, businessInfo } from '../../utils/whatsapp';

const { 
  FiTool, FiCheckCircle, FiClock, FiShield, FiStar, 
  FiMessageCircle, FiPhone, FiAward, FiSettings
} = FiIcons;

const BoilerServicing = () => {
  const servicingIncludes = [
    'Visual inspection of boiler and controls',
    'Flue and combustion analysis',
    'Gas pressure and flow rate testing',
    'Safety device operation checks',
    'Internal component cleaning',
    'Efficiency performance testing',
    'Gas Safe certificate issued',
    'Service record documentation'
  ];

  const whyServiceRegularly = [
    {
      title: 'Safety First',
      description: 'Annual safety checks ensure your boiler operates safely and detects potential issues early.'
    },
    {
      title: 'Maintain Warranty',
      description: 'Most boiler warranties require annual servicing to remain valid.'
    },
    {
      title: 'Improve Efficiency',
      description: 'Regular servicing keeps your boiler running efficiently, reducing energy bills.'
    },
    {
      title: 'Prevent Breakdowns',
      description: 'Early detection of issues prevents costly emergency repairs and breakdowns.'
    },
    {
      title: 'Extend Lifespan',
      description: 'Well-maintained boilers last longer and perform better throughout their life.'
    },
    {
      title: 'Peace of Mind',
      description: 'Know your heating system is safe, efficient, and ready for winter.'
    }
  ];

  const servicingProcess = [
    { step: 1, title: 'Book Your Service', description: 'Schedule at a time convenient for you' },
    { step: 2, title: 'Comprehensive Check', description: 'Full inspection and testing of all components' },
    { step: 3, title: 'Report & Certificate', description: 'Detailed report with Gas Safe certificate' },
    { step: 4, title: 'Advice & Recommendations', description: 'Professional advice on maintenance and efficiency' }
  ];

  const faqs = [
    {
      question: 'How often should I service my boiler?',
      answer: 'Boilers should be serviced annually to maintain safety, efficiency, and warranty validity. We recommend booking your service around the same time each year.'
    },
    {
      question: 'How long does a boiler service take?',
      answer: 'A comprehensive boiler service typically takes 45-60 minutes, depending on the boiler type and any issues found.'
    },
    {
      question: 'Will you service all boiler makes and models?',
      answer: 'Yes, I service all major boiler brands including Worcester Bosch, Vaillant, Baxi, Ideal, Viessmann, and many others.'
    },
    {
      question: 'What happens if you find a fault during servicing?',
      answer: 'I\'ll explain any issues found, provide repair options with transparent pricing, and ensure your safety before leaving.'
    },
    {
      question: 'Do you provide a Gas Safe certificate?',
      answer: 'Yes, every service includes a Gas Safe certificate confirming your boiler meets safety standards.'
    },
    {
      question: 'Can you service my boiler if it\'s still under warranty?',
      answer: 'Absolutely. Regular servicing by a Gas Safe engineer actually helps maintain your manufacturer warranty.'
    }
  ];

  const relatedServices = [
    { title: 'Boiler Installation', path: '/services/boiler-installation' },
    { title: 'Boiler Repair', path: '/services/boiler-repair' },
    { title: 'Power Flushing', path: '/services/power-flushing' },
    { title: 'Central Heating Installation', path: '/services/central-heating' }
  ];

  return (
    <>
      <Helmet>
        <title>Annual Boiler Servicing Southampton | Gas Safe Certified | Better Call Wes</title>
        <meta name="description" content="Professional annual boiler servicing in Southampton. Gas Safe certified, all makes and models, maintains warranty, improves efficiency. Book your service today!" />
        <meta name="keywords" content="boiler service Southampton, annual boiler service, Gas Safe boiler service, boiler maintenance Southampton, Worcester Bosch service" />
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
                    Annual boiler servicing keeps your heating safe, efficient, and under warranty. 
                    I provide comprehensive Gas Safe certified services for all boiler makes.
                  </p>
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-shadow-hero">
                  Annual Boiler Servicing Southampton
                </h1>
                
                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed">
                  Professional Gas Safe certified boiler servicing for all makes and models. 
                  Maintain safety, efficiency, and warranty with comprehensive annual services.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openWhatsApp(whatsappMessages.boilerServicing)}
                    className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>Book Service</span>
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
                  <SafeIcon icon={FiTool} className="w-40 h-40 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                What's Included in Your Boiler Service
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Comprehensive inspection and testing to ensure your boiler operates safely and efficiently.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicingIncludes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-lg hover-lift"
                >
                  <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-brand-orange flex-shrink-0" />
                  <p className="font-opensans font-semibold text-brand-charcoal">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Service Regularly */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Why Service Your Boiler Annually?
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Regular servicing provides multiple benefits for safety, efficiency, and peace of mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyServiceRegularly.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center"
                >
                  <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                    {reason.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Our Service Process
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Simple, professional process from booking to completion with full documentation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-montserrat font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                  Competitive Service Pricing
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-montserrat font-bold text-xl text-brand-navy">
                        Annual Boiler Service
                      </h3>
                      <span className="font-montserrat font-bold text-2xl text-brand-orange">
                        From £85
                      </span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-brand-orange" />
                        <span className="font-opensans text-sm text-brand-charcoal">Comprehensive safety inspection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-brand-orange" />
                        <span className="font-opensans text-sm text-brand-charcoal">Gas Safe certificate included</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-brand-orange" />
                        <span className="font-opensans text-sm text-brand-charcoal">Detailed service report</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-brand-orange" />
                        <span className="font-opensans text-sm text-brand-charcoal">Professional recommendations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-brand-accentOrange rounded-lg p-6">
                    <h4 className="font-montserrat font-bold text-lg text-brand-navy mb-3">
                      💡 Money-Saving Tip
                    </h4>
                    <p className="font-opensans text-brand-charcoal">
                      Regular servicing can reduce your energy bills by up to 10% and prevent costly emergency repairs. 
                      The service pays for itself!
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
                  Book Your Annual Service
                </h3>
                <p className="font-opensans text-lg text-brand-charcoal mb-6">
                  Quick WhatsApp booking with flexible appointment times to suit your schedule.
                </p>
                <button
                  onClick={() => openWhatsApp(whatsappMessages.boilerServicing)}
                  className="w-full gradient-orange text-white py-4 px-8 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Book Service Now</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Boiler Servicing FAQs
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
        <section className="py-20 bg-brand-lightGray">
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
                Ready to Book Your Annual Boiler Service?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Keep your boiler safe, efficient, and under warranty with professional Gas Safe certified servicing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openWhatsApp(whatsappMessages.boilerServicing)}
                  className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Book Service</span>
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

export default BoilerServicing;