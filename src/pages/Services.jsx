import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo} from '../utils/whatsapp';

const {FiThermometer,FiTool,FiWrench,FiDroplet,FiZap,FiHome,FiSettings,FiLayers,FiToggleLeft,FiMessageCircle,FiPhone,FiCalendar} = FiIcons;

const Services = () => {
  const handleBookOnline = () => {
    window.open('https://u.bettercallwes.co.uk/mbp-w', '_blank');
  };

  const priorityServices = [
    {
      title: 'Boiler Installation Southampton',
      subtitle: 'Gas Safe Certified',
      description: 'Professional boiler installation service with Gas Safe certification. We install all major brands including Worcester Bosch, Vaillant, Baxi, and Ideal. Complete installation includes system design, removal of old boiler, installation of new boiler, system commissioning, and full warranty registration.',
      icon: FiThermometer,
      path: '/services/boiler-installation',
      price: 'From £2,500',
      bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      features: [
        'Gas Safe registered installation',
        'All major boiler brands',
        'Full system commissioning',
        'Manufacturer warranty',
        'Free quotations',
        'Professional advice'
      ]
    },
    {
      title: 'Boiler Servicing Southampton',
      subtitle: 'Keep Warranty Valid',
      description: 'Annual boiler servicing to keep your heating system running efficiently and safely. Our comprehensive service includes safety checks, efficiency testing, component cleaning, and Gas Safe certification. Regular servicing extends boiler life and maintains warranty.',
      icon: FiTool,
      path: '/services/boiler-servicing',
      price: 'From £85',
      bgImage: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop',
      features: [
        'Annual safety inspection',
        'Efficiency optimization',
        'Component cleaning',
        'Gas Safe certificate',
        'Warranty maintenance',
        'Emergency breakdown prevention'
      ]
    },
    {
      title: 'Boiler Repair Southampton',
      subtitle: 'Same Day Service',
      description: 'Fast and reliable boiler repair service for all makes and models. We diagnose and fix boiler faults quickly, with most repairs completed on the first visit. Same-day service available during business hours.',
      icon: FiWrench,
      path: '/services/boiler-repair',
      price: 'From £80',
      bgImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      features: [
        'Same-day repairs',
        'All boiler makes/models',
        'Genuine spare parts',
        'Business hours service',
        'Fixed-price repairs',
        'Professional diagnosis'
      ]
    },
    {
      title: 'Plumbing Repairs Southampton',
      subtitle: 'Fast Response',
      description: 'Professional plumbing repair service for all types of plumbing issues. From leaking pipes and blocked drains to tap repairs and toilet problems, we handle all plumbing repairs with fast, reliable service during business hours.',
      icon: FiDroplet,
      path: '/services/plumbing-repairs',
      price: 'From £60',
      bgImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      features: [
        'Leak detection & repair',
        'Drain unblocking',
        'Pipe replacement',
        'Standard plumbing',
        'Insurance work',
        'Preventive maintenance'
      ]
    },
    {
      title: 'Power Flushing Southampton',
      subtitle: 'Improve Efficiency',
      description: 'Central heating power flushing service to improve system efficiency and extend radiator life. Our power flushing removes sludge, rust, and debris from your heating system, improving heat distribution and reducing energy bills.',
      icon: FiZap,
      path: '/services/power-flushing',
      price: 'From £400',
      bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      features: [
        'System cleaning',
        'Improved efficiency',
        'Reduced energy bills',
        'Extended system life',
        'Chemical treatment',
        'Before/after testing'
      ]
    },
    {
      title: 'Toilet Repairs Southampton',
      subtitle: 'Quick Solutions',
      description: 'Complete toilet repair and replacement service. We fix all toilet problems including running toilets, blocked toilets, faulty cisterns, and broken seats. Full toilet installations also available with modern, efficient models.',
      icon: FiHome,
      path: '/services/toilet-repairs',
      price: 'From £75',
      bgImage: 'https://images.unsplash.com/photo-1584622781564-1d987ba4dbad?w=800&h=600&fit=crop',
      features: [
        'Toilet repairs',
        'Complete replacements',
        'Modern efficient models',
        'Cistern repairs',
        'Seat replacements',
        'Emergency unblocking'
      ]
    }
  ];

  const secondaryServices = [
    {
      title: 'Central Heating Installation',
      description: 'Complete central heating system installation including boiler, radiators, pipework, and controls.',
      icon: FiSettings,
      path: '/services/central-heating',
      bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      title: 'Radiator Installation & Repair',
      description: 'Professional radiator installation, repair, and replacement service for all radiator types.',
      icon: FiLayers,
      path: '/services/radiator-services',
      bgImage: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop'
    },
    {
      title: 'Smart Heating Controls',
      description: 'Smart heating controls installation including thermostats, programmers, and zone controls.',
      icon: FiToggleLeft,
      path: '/services/heating-controls',
      bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
    },
    {
      title: 'Tap Replacement & Repairs',
      description: 'Professional tap installation and repair service for kitchen and bathroom taps.',
      icon: FiDroplet,
      path: '/services/tap-services',
      bgImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop'
    },
    {
      title: 'Shower Replacement & Repairs',
      description: 'Complete shower installation and repair service including electric and mixer showers.',
      icon: FiHome,
      path: '/services/shower-services',
      bgImage: 'https://images.unsplash.com/photo-1584622781564-1d987ba4dbad?w=400&h=300&fit=crop'
    },
    {
      title: 'Outdoor Taps',
      description: 'External tap installation and repair service for gardens and outdoor areas.',
      icon: FiTool,
      path: '/services/outdoor-taps',
      bgImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plumbing & Heating Services Southampton | Better Call Wes</title>
        <meta name="description" content="Professional plumbing and heating services in Southampton. Boiler installation, repairs, servicing, plumbing repairs, power flushing. Gas Safe registered. Call today!" />
        <meta name="keywords" content="plumber Southampton,heating engineer Southampton,boiler installation,boiler repair,plumbing repairs,Gas Safe registered" />
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
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              animate={{opacity: 1, y: 0}} 
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-3xl mb-8 border border-white/20 shadow-2xl max-w-3xl mx-auto">
                <h2 className="font-montserrat font-bold text-3xl mb-4 text-white">
                  Hi, I'm Wes! 👋
                </h2>
                <p className="font-opensans text-lg leading-relaxed text-white">
                  Your trusted Gas Safe registered plumber serving Southampton with comprehensive plumbing and heating services. From boiler installations to emergency repairs!
                </p>
              </div>

              <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 text-shadow-hero text-white">
                Professional Plumbing & Heating Services Southampton
              </h1>
              
              <p className="font-opensans text-xl text-brand-cream max-w-4xl mx-auto mb-8 leading-relaxed">
                Comprehensive plumbing and heating services across Southampton. Gas Safe registered, 200+ five-star reviews, same-day service available.
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
                  onClick={() => openWhatsApp(whatsappMessages.quickQuote)} 
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
        </section>

        {/* Priority Services - Visual Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-5xl text-brand-navy mb-4">
                Our Priority Services
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Our most popular and comprehensive plumbing and heating services in Southampton.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {priorityServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 30}} 
                  whileInView={{opacity: 1, y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px]"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                    style={{backgroundImage: `url(${service.bgImage})`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="w-16 h-16 bg-brand-orange/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-brand-orange/30">
                        <SafeIcon icon={service.icon} className="w-8 h-8 text-brand-orange" />
                      </div>
                      <h3 className="font-montserrat font-bold text-2xl mb-2 text-white">
                        {service.title}
                      </h3>
                      <p className="text-brand-orange font-opensans font-semibold mb-2">
                        {service.subtitle}
                      </p>
                      <p className="font-opensans text-white/90 mb-4 text-sm leading-relaxed">
                        {service.description.substring(0, 120)}...
                      </p>
                      <div className="text-2xl font-bold text-brand-orange mb-4">
                        {service.price}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Link 
                        to={service.path}
                        className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-brand-navy py-3 px-6 rounded-xl font-opensans font-bold text-sm transition-all duration-300 text-center block"
                      >
                        Learn More
                      </Link>
                      <button 
                        onClick={() => openWhatsApp(`Hi Wes! I need ${service.title}. Can you help?`)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-opensans font-bold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                        <span>Get Quote</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary Services */}
        <section className="py-20 bg-gradient-to-br from-brand-lightGray to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Additional Services
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Complete range of plumbing and heating services to meet all your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {secondaryServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 30}} 
                  whileInView={{opacity: 1, y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-80"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" 
                    style={{backgroundImage: `url(${service.bgImage})`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="w-12 h-12 bg-brand-orange/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                        <SafeIcon icon={service.icon} className="w-6 h-6 text-brand-orange" />
                      </div>
                      <h3 className="font-montserrat font-bold text-xl text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="font-opensans text-white/90 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <Link 
                        to={service.path}
                        className="inline-block bg-brand-orange hover:bg-brand-orangeHover text-white px-6 py-2 rounded-full font-opensans font-bold text-sm transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours Service CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
            >
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4 text-white">
                📞 Standard Business Hours Service
              </h2>
              <p className="font-opensans text-xl mb-8 max-w-2xl mx-auto text-blue-100">
                Professional plumbing and heating services during business hours: Monday-Friday, 8AM-6PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleBookOnline}
                  className="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                  <span>Book Online Now</span>
                </button>
                <button 
                  onClick={() => openWhatsApp(whatsappMessages.general)} 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>WhatsApp Enquiry</span>
                </button>
                <a 
                  href={`tel:${businessInfo.phone}`} 
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
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

export default Services;