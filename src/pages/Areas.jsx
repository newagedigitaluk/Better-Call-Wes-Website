import React from 'react';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,serviceAreas,businessInfo} from '../utils/whatsapp';

const {FiMapPin,FiMessageCircle,FiPhone,FiCheckCircle,FiCalendar} = FiIcons;

const Areas = () => {
  const handleBookOnline = () => {
    window.open('https://u.bettercallwes.co.uk/mbp-w', '_blank');
  };

  const mainAreas = serviceAreas.slice(0, 12);
  const additionalAreas = serviceAreas.slice(12);

  const serviceHighlights = [
    'Same-day service available',
    'No extra charges for travel',
    'Local Southampton knowledge',
    'Covering all SO postcodes',
    'Business hours service'
  ];

  return (
    <>
      <Helmet>
        <title>Areas We Cover - Southampton Plumber | Better Call Wes</title>
        <meta name="description" content="Professional plumbing and heating services across Southampton and surrounding areas. Covering 30+ locations including Eastleigh, Totton, Hedge End." />
        <meta name="keywords" content="plumber Southampton areas,Southampton plumbing service,Eastleigh plumber,Totton plumber,Hedge End plumber" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-blue-800 to-indigo-900"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white/15"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center">
              <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}}>
                <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-3xl mb-8 border border-white/20 shadow-2xl max-w-3xl mx-auto">
                  <h2 className="font-montserrat font-bold text-3xl mb-4 text-white">
                    Hi, I'm Wes! 👋
                  </h2>
                  <p className="font-opensans text-lg leading-relaxed text-white">
                    I serve 30+ areas across Southampton and surrounding regions. No matter where you are, I'm here to help with all your plumbing and heating needs!
                  </p>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 text-shadow-hero text-white">
                  Areas We Cover - Southampton & Surrounding Areas
                </h1>

                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed max-w-4xl mx-auto">
                  Professional plumbing and heating services across Southampton and surrounding areas. Same-day service available during business hours to all locations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleBookOnline}
                    className="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                    <span>📅 Book Online</span>
                  </button>
                  <button 
                    onClick={() => openWhatsApp(whatsappMessages.general)} 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>📱 WhatsApp Quote</span>
                  </button>
                  <a 
                    href={`tel:${businessInfo.phone}`}
                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg hover:bg-white hover:text-brand-navy transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                    <span>{businessInfo.phone}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Service Coverage Benefits
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {serviceHighlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 30}} 
                  whileInView={{opacity: 1, y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-brand-accentOrange transition-all duration-300 text-center"
                >
                  <SafeIcon icon={FiCheckCircle} className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                  <p className="font-opensans font-semibold text-brand-charcoal">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Areas */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Main Service Areas
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Our primary coverage areas with regular service and fastest response times.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mainAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, scale: 0.9}} 
                  whileInView={{opacity: 1, scale: 1}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.05}}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-brand-accentOrange transition-all duration-300 group"
                >
                  <div className="text-center">
                    <SafeIcon icon={FiMapPin} className="w-12 h-12 text-brand-orange mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-montserrat font-bold text-lg text-brand-navy mb-2">
                      {area}
                    </h3>
                    <p className="font-opensans text-sm text-brand-charcoal">
                      Full plumbing & heating services
                    </p>
                    <button 
                      onClick={() => openWhatsApp(`Hi Wes! I need plumbing/heating services in ${area}. Can you help?`)}
                      className="mt-4 w-full bg-brand-orange text-white py-2 px-4 rounded-full font-opensans font-semibold text-sm hover:bg-brand-orangeHover transition-colors duration-300"
                    >
                      Get Quote for {area}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Additional Coverage Areas
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Extended service areas where we provide the same professional service.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {additionalAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 20}} 
                  whileInView={{opacity: 1, y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.03}}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-brand-accentOrange transition-all duration-300 text-center group"
                >
                  <SafeIcon icon={FiMapPin} className="w-8 h-8 text-brand-orange mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-opensans font-semibold text-brand-navy text-sm">
                    {area}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Map Info */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{opacity: 0, x: -30}} 
                whileInView={{opacity: 1, x: 0}} 
                viewport={{once: true}}
              >
                <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                  Comprehensive Southampton Coverage
                </h2>
                <div className="space-y-6">
                  <p className="font-opensans text-lg text-brand-charcoal leading-relaxed">
                    Based in Southampton, I provide comprehensive plumbing and heating services across the city and surrounding areas. With local knowledge and experience, I understand the unique challenges of properties in different areas.
                  </p>
                  <p className="font-opensans text-lg text-brand-charcoal leading-relaxed">
                    Whether you're in a Victorian terrace in Portswood, a modern development in Hedge End, or anywhere in between, I'm equipped to handle your plumbing and heating needs professionally and efficiently.
                  </p>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                      Business Hours Coverage
                    </h3>
                    <p className="font-opensans text-brand-charcoal mb-4">
                      Professional plumbing and heating services during standard business hours: Monday-Friday, 8AM-6PM. No extra charges for travel within our coverage zone.
                    </p>
                    <button 
                      onClick={() => openWhatsApp(whatsappMessages.general)} 
                      className="bg-green-600 text-white py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                      <span>WhatsApp Enquiry</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{opacity: 0, x: 30}} 
                whileInView={{opacity: 1, x: 0}} 
                viewport={{once: true}}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-6 text-center">
                  Don't See Your Area?
                </h3>
                <div className="text-center space-y-4">
                  <SafeIcon icon={FiMapPin} className="w-20 h-20 text-brand-orange mx-auto" />
                  <p className="font-opensans text-lg text-brand-charcoal">
                    If your location isn't listed, don't worry! I regularly travel throughout Hampshire and may still be able to help.
                  </p>
                  <p className="font-opensans font-semibold text-brand-navy">
                    Get in touch and I'll let you know if I can reach you.
                  </p>
                  <div className="space-y-3">
                    <button 
                      onClick={() => openWhatsApp('Hi Wes! My area isn\'t listed on your website. Can you cover my location?')}
                      className="w-full gradient-orange text-white py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                      <span>Check My Area</span>
                    </button>
                    <a 
                      href={`tel:${businessInfo.phone}`}
                      className="w-full border-2 border-brand-navy text-brand-navy py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide hover:bg-brand-navy hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <SafeIcon icon={FiPhone} className="w-4 h-4" />
                      <span>Call {businessInfo.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">
                Ready to Book Your Service?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Serving Southampton and surrounding areas with professional plumbing and heating services. Get your quote today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleBookOnline}
                  className="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                  <span>📅 Book Online</span>
                </button>
                <button 
                  onClick={() => openWhatsApp(whatsappMessages.quickQuote)} 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>📱 Get Quick Quote</span>
                </button>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg hover:bg-white hover:text-brand-navy transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
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

export default Areas;