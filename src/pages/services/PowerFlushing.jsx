import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { openWhatsApp, whatsappMessages, businessInfo } from '../../utils/whatsapp';

const { 
  FiZap, FiCheckCircle, FiClock, FiShield, FiStar, 
  FiMessageCircle, FiPhone, FiTool, FiHome, FiSettings, FiTrendingUp
} = FiIcons;

const PowerFlushing = () => {
  const signsNeedPowerFlush = [
    'Cold spots on radiators',
    'Radiators taking long time to heat up',
    'Some radiators not working at all',
    'Boiler making strange noises',
    'High energy bills',
    'Dirty water when bleeding radiators'
  ];

  const powerFlushBenefits = [
    {
      icon: FiTrendingUp,
      title: 'Improved Efficiency',
      description: 'Remove sludge and improve heat circulation for better efficiency'
    },
    {
      icon: FiZap,
      title: 'Lower Energy Bills',
      description: 'Clean systems work more efficiently, reducing your heating costs'
    },
    {
      icon: FiShield,
      title: 'Extended System Life',
      description: 'Protect your boiler and radiators from corrosion damage'
    },
    {
      icon: FiHome,
      title: 'Even Heating',
      description: 'Ensure all radiators heat up properly throughout your home'
    }
  ];

  const powerFlushProcess = [
    { step: 1, title: 'System Assessment', description: 'Evaluate your heating system and water quality' },
    { step: 2, title: 'Connect Equipment', description: 'Attach professional power flushing machine' },
    { step: 3, title: 'Chemical Treatment', description: 'Circulate cleaning chemicals to break down sludge' },
    { step: 4, title: 'High Velocity Flush', description: 'Powerful water flow removes all debris and contaminants' },
    { step: 5, title: 'System Protection', description: 'Add inhibitor to prevent future corrosion' },
    { step: 6, title: 'Testing & Report', description: 'Test system performance and provide completion certificate' }
  ];

  const faqs = [
    {
      question: 'How do I know if I need a power flush?',
      answer: 'Signs include cold spots on radiators, slow heating, strange boiler noises, or dirty water when bleeding radiators. I can assess your system and advise if power flushing is needed.'
    },
    {
      question: 'How long does a power flush take?',
      answer: 'A typical power flush takes 6-8 hours depending on system size and contamination level. Most can be completed in one day.'
    },
    {
      question: 'Will power flushing damage my system?',
      answer: 'No, power flushing uses controlled pressure and is safe for all modern heating systems. It actually protects your system from future damage.'
    },
    {
      question: 'How much does power flushing cost?',
      answer: 'Costs depend on system size and complexity. I provide transparent quotes after assessing your system. Most customers find it pays for itself through energy savings.'
    },
    {
      question: 'How often should I power flush my system?',
      answer: 'Typically every 5-6 years, or when signs of contamination appear. New systems may need it sooner if not properly commissioned.'
    }
  ];

  const relatedServices = [
    { title: 'Boiler Servicing', path: '/services/boiler-servicing' },
    { title: 'Central Heating', path: '/services/central-heating' },
    { title: 'Radiator Services', path: '/services/radiator-services' },
    { title: 'Boiler Repair', path: '/services/boiler-repair' }
  ];

  return (
    <>
      <Helmet>
        <title>Power Flushing Southampton | Central Heating Cleaning | Better Call Wes</title>
        <meta name="description" content="Professional power flushing service in Southampton. Improve heating efficiency, reduce energy bills, remove sludge from radiators. Expert central heating cleaning." />
        <meta name="keywords" content="power flushing Southampton, central heating cleaning, radiator power flush, heating system cleaning, improve heating efficiency" />
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
                    Is your heating system not working efficiently? Power flushing removes sludge and debris, 
                    improving performance and reducing your energy bills!
                  </p>
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-shadow-hero">
                  Power Flushing Southampton
                </h1>
                
                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed">
                  Professional central heating power flushing service to improve efficiency, reduce energy bills, 
                  and extend your heating system's life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openWhatsApp(whatsappMessages.powerFlushing)}
                    className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>Get Quote</span>
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
                  <SafeIcon icon={FiZap} className="w-40 h-40 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Signs You Need Power Flushing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Signs You Need Power Flushing
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Is your heating system showing these warning signs? Power flushing could be the solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signsNeedPowerFlush.map((sign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover-lift border-l-4 border-brand-orange"
                >
                  <div className="flex items-start space-x-4">
                    <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-brand-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-montserrat font-bold text-lg text-brand-navy mb-2">
                        {sign}
                      </h3>
                      <button
                        onClick={() => openWhatsApp(`Hi Wes! I'm experiencing: ${sign}. Do I need power flushing?`)}
                        className="text-brand-orange font-opensans font-semibold hover:text-brand-orangeHover transition-colors duration-300"
                      >
                        Get advice on this issue →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Power Flush Benefits */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Benefits of Power Flushing
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Professional power flushing delivers immediate and long-term benefits for your heating system.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {powerFlushBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center"
                >
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={benefit.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                    {benefit.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Power Flush Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Our Power Flushing Process
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Professional, thorough process using specialist equipment to completely clean your heating system.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {powerFlushProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-montserrat font-bold text-xl">{step.step}</span>
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

        {/* Before/After Comparison */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Before vs After Power Flushing
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-50 rounded-2xl p-8"
              >
                <h3 className="font-montserrat font-bold text-2xl text-red-600 mb-6 text-center">
                  Before Power Flushing
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-opensans text-brand-charcoal">Cold spots on radiators</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-opensans text-brand-charcoal">High energy bills</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-opensans text-brand-charcoal">Slow heating response</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-opensans text-brand-charcoal">Boiler working harder</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-opensans text-brand-charcoal">Dirty, contaminated water</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-2xl p-8"
              >
                <h3 className="font-montserrat font-bold text-2xl text-green-600 mb-6 text-center">
                  After Power Flushing
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500" />
                    <span className="font-opensans text-brand-charcoal">Even heat distribution</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500" />
                    <span className="font-opensans text-brand-charcoal">Reduced energy costs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500" />
                    <span className="font-opensans text-brand-charcoal">Faster heating response</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500" />
                    <span className="font-opensans text-brand-charcoal">Improved boiler efficiency</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500" />
                    <span className="font-opensans text-brand-charcoal">Clean, protected system</span>
                  </li>
                </ul>
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
                Power Flushing FAQs
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
                Ready to Improve Your Heating Efficiency?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Professional power flushing service to clean your heating system, reduce energy bills, and improve performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openWhatsApp(whatsappMessages.powerFlushing)}
                  className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Get Quote</span>
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

export default PowerFlushing;