import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { openWhatsApp, whatsappMessages, businessInfo } from '../../utils/whatsapp';

const { 
  FiLayers, FiCheckCircle, FiClock, FiShield, FiStar, 
  FiMessageCircle, FiPhone, FiTool, FiHome, FiSettings
} = FiIcons;

const RadiatorServices = () => {
  const radiatorServices = [
    'New radiator installation',
    'Radiator replacement',
    'Radiator repairs and maintenance',
    'Thermostatic valve installation',
    'Radiator balancing',
    'Designer radiator installation'
  ];

  const commonIssues = [
    'Cold radiators',
    'Radiator leaks',
    'Uneven heating',
    'Noisy radiators',
    'Radiator not working',
    'Poor heat output'
  ];

  const relatedServices = [
    { title: 'Central Heating', path: '/services/central-heating' },
    { title: 'Power Flushing', path: '/services/power-flushing' },
    { title: 'Boiler Installation', path: '/services/boiler-installation' },
    { title: 'Heating Controls', path: '/services/heating-controls' }
  ];

  return (
    <>
      <Helmet>
        <title>Radiator Installation & Repair Southampton | Better Call Wes</title>
        <meta name="description" content="Professional radiator installation and repair in Southampton. New radiators, replacements, repairs, designer radiators. Expert heating engineer." />
        <meta name="keywords" content="radiator installation Southampton, radiator repair, new radiators, designer radiators, heating engineer" />
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
                    Need new radiators or repairs? I provide professional radiator services including 
                    installation, repairs, and designer radiators.
                  </p>
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-shadow-hero">
                  Radiator Installation & Repair Southampton
                </h1>
                
                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed">
                  Professional radiator services including new installations, replacements, repairs, 
                  and designer radiators across Southampton.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openWhatsApp('Hi Wes! I need help with radiators. Can you provide a quote?')}
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
                  <SafeIcon icon={FiLayers} className="w-40 h-40 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Radiator Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {radiatorServices.map((service, index) => (
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

        {/* Common Issues */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Common Radiator Issues
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-brand-accentOrange transition-all duration-300 border-l-4 border-brand-orange"
                >
                  <h3 className="font-opensans font-bold text-brand-navy">
                    {issue}
                  </h3>
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
                Need Radiator Installation or Repair?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Professional radiator services across Southampton. Get your quote today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openWhatsApp('Hi Wes! I need radiator services. Can you help?')}
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

export default RadiatorServices;