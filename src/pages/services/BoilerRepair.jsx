import React from 'react';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo} from '../../utils/whatsapp';

const {FiWrench,FiCheckCircle,FiClock,FiShield,FiStar,FiMessageCircle,FiPhone,FiTool,FiZap,FiSettings}=FiIcons;

const BoilerRepair=()=> {
  const commonIssues=[
    {
      issue: 'No heating or hot water',
      description: 'Complete system failure requiring urgent attention'
    },
    {
      issue: 'Boiler not firing up',
      description: 'Ignition problems or component failures'
    },
    {
      issue: 'Strange noises (banging, whistling)',
      description: 'Air in system, pump issues, or component wear'
    },
    {
      issue: 'Boiler keeps switching off',
      description: 'Safety lockouts or thermostat problems'
    },
    {
      issue: 'Low pressure warnings',
      description: 'Pressure loss requiring investigation and repair'
    },
    {
      issue: 'Boiler leaking water',
      description: 'Pipe connections or internal component failures'
    },
    {
      issue: 'Error codes displayed',
      description: 'Diagnostic codes indicating specific faults'
    },
    {
      issue: 'Radiators not heating properly',
      description: 'Circulation or balance issues'
    }
  ];

  const repairBenefits=[
    {
      icon: FiClock,
      title: 'Fast Response',
      description: 'Same-day repairs available during business hours'
    },
    {
      icon: FiTool,
      title: 'Expert Diagnosis',
      description: 'Accurate fault finding with professional repair solutions'
    },
    {
      icon: FiShield,
      title: 'Quality Parts',
      description: 'Genuine manufacturer parts with warranty protection'
    },
    {
      icon: FiZap,
      title: 'Fixed Price',
      description: 'Transparent pricing agreed before work starts'
    }
  ];

  const repairSteps=[
    'Turn off the boiler at the main switch',
    'Check if your boiler has an error code displayed',
    'Take a photo of any error codes or issues',
    'Contact me during business hours via WhatsApp or phone',
    'Do not attempt repairs yourself'
  ];

  const faqs=[
    {
      question: 'How quickly can you respond to boiler repairs?',
      answer: 'I aim to respond to repair requests within the same day during business hours (Mon-Fri, 8AM-6PM). I prioritize urgent heating issues.'
    },
    {
      question: 'Do you repair all boiler makes and models?',
      answer: 'Yes, I repair all major brands including Worcester Bosch, Vaillant, Baxi, Ideal, Viessmann, Glow-worm, and many others.'
    },
    {
      question: 'What if you can\'t fix my boiler on the first visit?',
      answer: 'Most repairs are completed on the first visit. If parts are needed, I\'ll explain options and can usually return within 24-48 hours.'
    },
    {
      question: 'Do you provide warranties on boiler repairs?',
      answer: 'Yes, all repairs come with warranty on both parts and labour. Warranty length depends on the type of repair performed.'
    },
    {
      question: 'How much do boiler repairs cost?',
      answer: 'Repair costs vary depending on the fault. I provide transparent, fixed-price quotes before starting work, so no surprises.'
    }
  ];

  const relatedServices=[
    {title: 'Boiler Installation',path: '/services/boiler-installation'},
    {title: 'Boiler Servicing',path: '/services/boiler-servicing'},
    {title: 'Power Flushing',path: '/services/power-flushing'},
    {title: 'Central Heating',path: '/services/central-heating'}
  ];

  return (
    <>
      <Helmet>
        <title>Boiler Repair Southampton | Same Day Service | Better Call Wes</title>
        <meta name="description" content="Fast boiler repair in Southampton. Same-day service available, all makes and models, Gas Safe registered engineer. Call during business hours!" />
        <meta name="keywords" content="boiler repair Southampton,boiler breakdown,boiler not working,Gas Safe boiler repair,Worcester Bosch repair,Vaillant repair" />
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
                    Boiler broken? I provide fast, reliable repairs during business hours across Southampton. Most repairs completed on the first visit.
                  </p>
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 text-shadow-hero">
                  Boiler Repair Southampton
                </h1>
                <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed">
                  Fast, professional boiler repair service across Southampton. Same-day service available during business hours. All makes and models repaired by Gas Safe registered engineer.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={()=> openWhatsApp(whatsappMessages.boilerRepair)} 
                    className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>WhatsApp Repair</span>
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
                  <SafeIcon icon={FiWrench} className="w-40 h-40 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Repair Steps */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-12"
            >
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4 text-brand-navy">
                🔧 Boiler Problem? Do This First:
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {repairSteps.map((step,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 20}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-lg p-4 text-center shadow-md"
                >
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-montserrat font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="font-opensans text-sm text-brand-charcoal">{step}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mt-8"
            >
              <button 
                onClick={()=> openWhatsApp(whatsappMessages.boilerRepair)} 
                className="bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
              >
                <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                <span>WhatsApp Repair Request</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Common Boiler Issues I Fix
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                From complete breakdowns to minor faults, I diagnose and repair all boiler problems quickly and professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonIssues.map((item,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-lg p-6 shadow-lg hover-lift border-l-4 border-brand-orange"
                >
                  <h3 className="font-montserrat font-bold text-lg text-brand-navy mb-3">
                    {item.issue}
                  </h3>
                  <p className="font-opensans text-brand-charcoal mb-4">
                    {item.description}
                  </p>
                  <button 
                    onClick={()=> openWhatsApp(`Hi Wes! I have a boiler problem: ${item.issue}. Can you help?`)} 
                    className="text-brand-orange font-opensans font-semibold hover:text-brand-orangeHover transition-colors duration-300"
                  >
                    Get help with this issue →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Benefits */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Why Choose Wes for Boiler Repairs?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repairBenefits.map((benefit,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
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
                Boiler Repair FAQs
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
                Need Boiler Repair?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Don't let a broken boiler leave you cold. Fast, professional repairs available during business hours across Southampton.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={()=> openWhatsApp(whatsappMessages.boilerRepair)} 
                  className="gradient-orange text-white px-8 py-4 rounded-full font-opensans font-bold text-lg uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Repair Request</span>
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

export default BoilerRepair;