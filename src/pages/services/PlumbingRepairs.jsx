import React from 'react';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo} from '../../utils/whatsapp';

const {FiDroplet,FiCheckCircle,FiClock,FiShield,FiStar,FiMessageCircle,FiPhone,FiTool,FiHome,FiSettings}=FiIcons;

const PlumbingRepairs=()=> {
  const commonRepairs=[
    {
      title: 'Leaking Pipes',
      description: 'Leak repairs and pipe replacements',
      icon: FiDroplet
    },
    {
      title: 'Blocked Drains',
      description: 'Professional drain unblocking and cleaning',
      icon: FiSettings
    },
    {
      title: 'Tap Repairs',
      description: 'Dripping taps, loose handles, and replacements',
      icon: FiTool
    },
    {
      title: 'Toilet Issues',
      description: 'Running toilets, blockages, and cistern repairs',
      icon: FiHome
    },
    {
      title: 'Shower Problems',
      description: 'Low pressure, temperature issues, and repairs',
      icon: FiDroplet
    },
    {
      title: 'Pipe Issues',
      description: 'Pipe repairs and replacements',
      icon: FiShield
    }
  ];

  const standardServices=[
    'Leak detection & repair',
    'Drain unblocking',
    'Pipe replacement',
    'Standard plumbing',
    'Insurance work',
    'Preventive maintenance'
  ];

  const faqs=[
    {
      question: 'How quickly can you respond to plumbing issues?',
      answer: 'I aim to respond to plumbing requests during business hours (Mon-Fri, 8AM-6PM). Same-day service is often available for urgent issues.'
    },
    {
      question: 'What should I do if I have a burst pipe?',
      answer: 'Turn off your main water supply immediately, turn off electricity to affected areas, and contact me during business hours. Take photos for insurance if safe to do so.'
    },
    {
      question: 'Do you handle insurance work?',
      answer: 'Yes, I regularly work with insurance companies and can provide detailed reports and documentation needed for claims.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'I cover Southampton and all surrounding areas including Eastleigh, Totton, Hedge End, and all SO postcodes during business hours.'
    }
  ];

  const relatedServices=[
    {title: 'Boiler Repair',path: '/services/boiler-repair'},
    {title: 'Toilet Repairs',path: '/services/toilet-repairs'},
    {title: 'Tap Services',path: '/services/tap-services'},
    {title: 'Shower Services',path: '/services/shower-services'}
  ];

  return (
    <>
      <Helmet>
        <title>Plumbing Repairs Southampton | Same Day Service | Better Call Wes</title>
        <meta name="description" content="Fast plumbing repairs in Southampton. Burst pipes, leaks, blockages, tap repairs. Same-day service available during business hours. Professional, reliable service." />
        <meta name="keywords" content="plumber Southampton,plumbing repairs,burst pipe repair,leak repair,blocked drain,tap repair" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-navy py-20 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{opacity: 0,x: -50}} animate={{opacity: 1,x: 0}}>
                <div className="bg-white text-brand-charcoal p-6 rounded-2xl mb-8 relative shadow-2xl">
                  <h2 className="font-montserrat font-bold text-2xl mb-3 text-brand-navy">
                    Hi, I'm Wes! 👋
                  </h2>
                  <p className="font-opensans text-lg leading-relaxed">
                    Plumbing problems? I'm here to help! Fast, reliable repairs for leaks, blockages, and all plumbing issues during business hours across Southampton.
                  </p>
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-shadow-hero">
                  Plumbing Repairs Southampton
                </h1>
                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed">
                  Professional plumbing repair service for all plumbing issues. Fast response, quality repairs, transparent pricing during business hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={()=> openWhatsApp(whatsappMessages.plumbingRepairs)} 
                    className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>WhatsApp Help</span>
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
                initial={{opacity: 0,x: 50}} 
                animate={{opacity: 1,x: 0}} 
                transition={{delay: 0.2}} 
                className="text-center"
              >
                <div className="w-80 h-80 mx-auto bg-brand-orange/20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiDroplet} className="w-40 h-40 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Repairs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Common Plumbing Repairs
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                From leaks to routine maintenance, I handle all types of plumbing repairs quickly and professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonRepairs.map((repair,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center"
                >
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <SafeIcon icon={repair.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                    {repair.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal mb-6">
                    {repair.description}
                  </p>
                  <button 
                    onClick={()=> openWhatsApp(`Hi Wes! I need help with ${repair.title.toLowerCase()}. Can you help?`)} 
                    className="w-full gradient-orange text-white py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get Help Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Services */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Standard Business Hours Plumbing Services
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Professional plumbing services during business hours: Monday-Friday, 8AM-6PM.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{opacity: 0,x: -30}} 
                whileInView={{opacity: 1,x: 0}} 
                viewport={{once: true}}
              >
                <div className="space-y-6">
                  {standardServices.map((service,index)=> (
                    <div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-md">
                      <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-brand-orange flex-shrink-0" />
                      <p className="font-opensans font-semibold text-brand-charcoal">{service}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{opacity: 0,x: 30}} 
                whileInView={{opacity: 1,x: 0}} 
                viewport={{once: true}} 
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-4">
                  📞 Business Hours Service
                </h3>
                <p className="font-opensans text-lg text-brand-charcoal mb-6">
                  Professional plumbing repairs during standard business hours with same-day service often available.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={()=> openWhatsApp(whatsappMessages.plumbingRepairs)} 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>WhatsApp Request</span>
                  </button>
                  <a 
                    href={`tel:${businessInfo.phone}`} 
                    className="w-full bg-brand-orange text-white py-4 px-6 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:bg-brand-orangeHover transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                    <span>Call {businessInfo.phone}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Plumbing Repair FAQs
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 20}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
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
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Related Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 20}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
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
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}}
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">
                Need Plumbing Repairs?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                From leaks to routine repairs, I provide fast, professional plumbing services across Southampton during business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={()=> openWhatsApp(whatsappMessages.plumbingRepairs)} 
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

export default PlumbingRepairs;