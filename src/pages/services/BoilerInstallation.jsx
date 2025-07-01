import React from 'react';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo,serviceAreas} from '../../utils/whatsapp';

const {FiThermometer,FiCheckCircle,FiClock,FiShield,FiStar,FiMessageCircle,FiPhone,FiTool,FiAward,FiHome,FiZap,FiCamera,FiSettings,FiDroplet} = FiIcons;

const BoilerInstallation = () => {
  const whyChooseWes = [
    'Gas Safe registered boiler installer',
    '10+ years experience with all boiler brands',
    'Free home surveys and quotations',
    'Competitive fixed-price installations',
    'Full manufacturer warranties registered',
    'Professional installation team'
  ];

  const boilerBrands = [
    {name: 'Worcester Bosch', logo: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=200&h=150&fit=crop'},
    {name: 'Vaillant', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop'},
    {name: 'Baxi', logo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&h=150&fit=crop'},
    {name: 'Ideal', logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=150&fit=crop'},
    {name: 'Viessmann', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=150&fit=crop'},
    {name: 'Glow-worm', logo: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=200&h=150&fit=crop'}
  ];

  const installationProcess = [
    {
      step: 1,
      title: 'Free Consultation and Assessment',
      description: 'Our expert engineers conduct a thorough assessment of your current heating system and discuss your heating needs, preferences, and budget.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      icon: FiHome
    },
    {
      step: 2,
      title: 'Personalized Boiler Recommendations',
      description: 'Based on the assessment, we\'ll recommend the best boiler models that are energy-efficient and suitable for your home.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      icon: FiMessageCircle
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Our Gas Safe registered engineers carry out the boiler installation efficiently and safely, adhering to all safety standards.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop',
      icon: FiTool
    },
    {
      step: 4,
      title: 'System Testing and Demonstration',
      description: 'We thoroughly test the new boiler and provide a demonstration of how to use your new boiler effectively.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      icon: FiCheckCircle
    },
    {
      step: 5,
      title: 'Aftercare and Support',
      description: 'We offer maintenance packages to keep your boiler in top condition and are available for any questions post-installation.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop',
      icon: FiShield
    }
  ];

  const boilerTypes = [
    {
      title: 'Combi Boilers',
      subtitle: 'Ideal for smaller homes with limited space',
      benefits: [
        'Provides hot water on demand',
        'No need for separate water tanks',
        'Space-saving design',
        'Cost-effective installation'
      ],
      icon: FiDroplet,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      title: 'System Boilers',
      subtitle: 'Ideal for homes with more than one bathroom',
      benefits: [
        'Constant supply of hot water to multiple taps',
        'Requires a hot water storage cylinder but no loft tank',
        'Great for multiple bathrooms',
        'Reliable hot water supply'
      ],
      icon: FiHome,
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop'
    },
    {
      title: 'Regular Boilers (Conventional)',
      subtitle: 'Ideal for homes with traditional heating systems',
      benefits: [
        'Suitable for properties with older radiator systems',
        'Can handle high hot water demand',
        'Compatible with existing systems',
        'Reliable for larger properties'
      ],
      icon: FiSettings,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
    }
  ];

  const upgradeReasons = [
    {
      title: 'Improved Energy Efficiency',
      description: 'Modern boilers are more energy-efficient, helping you save money on your gas heating bills.',
      icon: FiZap,
      color: 'bg-green-500'
    },
    {
      title: 'Enhanced Reliability',
      description: 'Reduce the risk of breakdowns and costly repairs with a new, reliable boiler.',
      icon: FiShield,
      color: 'bg-blue-500'
    },
    {
      title: 'Quieter Operation',
      description: 'Latest boiler models operate more quietly, enhancing your home\'s comfort.',
      icon: FiSettings,
      color: 'bg-purple-500'
    },
    {
      title: 'Increased Property Value',
      description: 'An efficient heating system can add value to your property.',
      icon: FiHome,
      color: 'bg-orange-500'
    },
    {
      title: 'Environmental Impact',
      description: 'Lower your carbon footprint with an eco-friendly boiler.',
      icon: FiCheckCircle,
      color: 'bg-green-600'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if I need a new boiler?',
      answer: 'If your boiler is over 10 years old, requires frequent repairs, produces high energy bills, or isn\'t as efficient as newer models, it might be time to consider a new boiler installation. I can assess your current system and provide professional advice.'
    },
    {
      question: 'How long does a boiler installation take?',
      answer: 'Typically, a standard boiler installation can be completed within one day. More complex installations or system upgrades may take longer. I\'ll provide a detailed timeline during the consultation.'
    },
    {
      question: 'Are you qualified?',
      answer: 'Yes, I am fully qualified and Gas Safe registered, ensuring all work is carried out safely and to the highest standards.'
    },
    {
      question: 'Do you offer warranties on new boilers?',
      answer: 'Yes, I register manufacturer warranties ranging from 2 to 10 years on all new boiler installations, providing you with peace of mind.'
    },
    {
      question: 'Can you help me choose the right boiler for my home?',
      answer: 'Absolutely! I will assess your home\'s heating needs and recommend the most suitable and energy-efficient boiler options.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'I currently don\'t offer finance packages, but I provide competitive pricing and free quotations to help you budget for your new boiler.'
    }
  ];

  const relatedServices = [
    {title: 'Boiler Servicing', path: '/services/boiler-servicing'},
    {title: 'Boiler Repair', path: '/services/boiler-repair'},
    {title: 'Power Flushing', path: '/services/power-flushing'},
    {title: 'Central Heating', path: '/services/central-heating'}
  ];

  return (
    <>
      <Helmet>
        <title>Expert Boiler Installation Southampton | Better Call Wes</title>
        <meta name="description" content="Professional gas boiler installation services in Southampton. Gas Safe registered engineer specializing in energy-efficient boiler installations to save you money. Contact us for a free quote." />
        <meta name="keywords" content="boiler installation Southampton,gas boiler installation,energy-efficient boilers,Gas Safe registered,heating engineers Southampton,boiler replacement,professional boiler installation" />
      </Helmet>

      <div className="min-h-screen">
        {/* KEEP EXISTING HERO SECTION UNCHANGED */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&h=1000&fit=crop)'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/50"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{opacity: 0, x: -50}} 
                animate={{opacity: 1, x: 0}} 
                className="text-white"
              >
                <div className="bg-white text-brand-charcoal p-6 rounded-2xl mb-8 relative shadow-2xl">
                  <h2 className="font-montserrat font-bold text-2xl mb-3 text-brand-navy">
                    Professional Boiler Installation
                  </h2>
                  <p className="font-opensans text-lg leading-relaxed">
                    Gas Safe registered installation with full warranty
                  </p>
                </div>

                <h1 className="font-montserrat font-bold text-5xl mb-6 text-shadow-hero">
                  Boiler Installation Southampton
                </h1>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openWhatsApp(whatsappMessages.boilerInstallation)}
                    className="gradient-orange text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>Get Quote</span>
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

              <motion.div 
                initial={{opacity: 0, x: 50}} 
                animate={{opacity: 1, x: 0}} 
                transition={{delay: 0.2}}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >
                <h3 className="font-montserrat font-bold text-2xl text-white mb-6 text-center">
                  Installation Includes:
                </h3>
                {whyChooseWes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-4">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-brand-orange flex-shrink-0" />
                    <span className="text-white font-opensans">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Expert Boiler Installation Services in Southampton
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal leading-relaxed mb-8">
                At Better Call Wes, I specialise in professional gas boiler installations in Southampton and the surrounding areas. As a Gas Safe registered engineer, I'm an expert in installing energy-efficient boilers that can help you save money on your gas heating bills. With over 10 years of experience, I provide reliable and high-quality boiler installation services tailored to your home's specific needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Wes Section */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Why Choose Better Call Wes?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                initial={{opacity: 0, y: 30}} 
                whileInView={{opacity: 1, y: 0}} 
                viewport={{once: true}}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                  Experienced Heating Engineer
                </h3>
                <ul className="text-left space-y-2">
                  <li className="font-opensans text-brand-charcoal">• 10+ years experience in gas boiler installations</li>
                  <li className="font-opensans text-brand-charcoal">• Gas Safe registered engineer</li>
                  <li className="font-opensans text-brand-charcoal">• Local Southampton expertise</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{opacity: 0, y: 30}} 
                whileInView={{opacity: 1, y: 0}} 
                viewport={{once: true}}
                transition={{delay: 0.1}}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiZap} className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                  Energy-Efficient Solutions
                </h3>
                <ul className="text-left space-y-2">
                  <li className="font-opensans text-brand-charcoal">• Install latest energy-efficient boilers</li>
                  <li className="font-opensans text-brand-charcoal">• Eco-friendly options available</li>
                  <li className="font-opensans text-brand-charcoal">• Top brands: Worcester Bosch, Vaillant, Ideal</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{opacity: 0, y: 30}} 
                whileInView={{opacity: 1, y: 0}} 
                viewport={{once: true}}
                transition={{delay: 0.2}}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiSettings} className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                  Customized Installation
                </h3>
                <ul className="text-left space-y-2">
                  <li className="font-opensans text-brand-charcoal">• Tailored solutions for your home</li>
                  <li className="font-opensans text-brand-charcoal">• Free consultation and assessment</li>
                  <li className="font-opensans text-brand-charcoal">• Transparent competitive pricing</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{opacity: 0, y: 30}} 
                whileInView={{opacity: 1, y: 0}} 
                viewport={{once: true}}
                transition={{delay: 0.3}}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiStar} className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                  Excellent Customer Service
                </h3>
                <ul className="text-left space-y-2">
                  <li className="font-opensans text-brand-charcoal">• Ongoing support and maintenance</li>
                  <li className="font-opensans text-brand-charcoal">• Full manufacturer warranties</li>
                  <li className="font-opensans text-brand-charcoal">• 200+ five-star reviews</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Our Boiler Installation Process
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Professional process from consultation to completion with full documentation.
              </p>
            </motion.div>

            <div className="space-y-16">
              {installationProcess.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}} 
                  whileInView={{opacity: 1, x: 0}} 
                  viewport={{once: true}}
                  transition={{delay: index * 0.2}}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mr-6">
                        <span className="text-white font-montserrat font-bold text-2xl">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-2">
                          {step.title}
                        </h3>
                        <SafeIcon icon={step.icon} className="w-8 h-8 text-brand-orange" />
                      </div>
                    </div>
                    <p className="font-opensans text-lg text-brand-charcoal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div 
                      className="w-full h-80 bg-cover bg-center rounded-2xl shadow-lg"
                      style={{backgroundImage: `url(${step.image})`}}
                    >
                      <div className="w-full h-full bg-gradient-to-t from-brand-navy/60 to-transparent rounded-2xl flex items-end justify-center p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                            <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Boilers */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Types of Boilers We Install
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Choose the perfect boiler type for your home's specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boilerTypes.map((type, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 30}} 
                  whileInView={{opacity: 1, y: 0}} 
                  viewport={{once: true}}
                  transition={{delay: index * 0.1}}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-96"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{backgroundImage: `url(${type.image})`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/60 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <div className="w-12 h-12 bg-brand-orange/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                        <SafeIcon icon={type.icon} className="w-6 h-6 text-brand-orange" />
                      </div>
                      <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="font-opensans text-brand-orange font-semibold text-sm mb-4">
                        {type.subtitle}
                      </p>
                    </div>
                    
                    <div>
                      <ul className="space-y-1 mb-4">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-brand-orange flex-shrink-0" />
                            <span className="text-white text-sm font-opensans">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => openWhatsApp(`Hi Wes! I'm interested in ${type.title}. Can you provide a quote?`)}
                        className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white py-2 px-4 rounded-lg font-opensans font-bold text-sm transition-all duration-300"
                      >
                        Get Quote for {type.title}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Upgrading */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Benefits of Upgrading Your Boiler
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Modern boilers offer significant advantages over older models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upgradeReasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 30}} 
                  whileInView={{opacity: 1, y: 0}} 
                  viewport={{once: true}}
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <SafeIcon icon={reason.icon} className="w-8 h-8 text-white" />
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

        {/* Areas We Serve */}
        <section className="py-20 bg-brand-lightGray">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Areas We Serve
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                We provide boiler installation services in Southampton and surrounding areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, scale: 0.9}} 
                  whileInView={{opacity: 1, scale: 1}} 
                  viewport={{once: true}}
                  transition={{delay: index * 0.02}}
                  className="bg-white rounded-lg p-3 text-center shadow-md hover:shadow-lg hover:bg-brand-accentOrange transition-all duration-300"
                >
                  <p className="font-opensans text-sm font-semibold text-brand-navy">
                    {area}
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
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 20}} 
                  whileInView={{opacity: 1, y: 0}} 
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
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
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
                  initial={{opacity: 0, y: 20}} 
                  whileInView={{opacity: 1, y: 0}} 
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

        {/* Final CTA Section */}
        <section className="py-20 gradient-navy text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div 
              initial={{opacity: 0, y: 30}} 
              whileInView={{opacity: 1, y: 0}} 
              viewport={{once: true}}
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">
                Ready to Upgrade Your Heating System?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Contact Better Call Wes today for a free, no-obligation quote on your new energy-efficient boiler installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => openWhatsApp(whatsappMessages.boilerInstallation)}
                  className="gradient-orange text-white px-10 py-6 rounded-2xl font-opensans font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-4"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-8 h-8" />
                  <span>Get Your Free Boiler Installation Quote</span>
                </button>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="border-2 border-white text-white px-10 py-6 rounded-2xl font-opensans font-bold text-xl hover:bg-white hover:text-brand-navy transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-4"
                >
                  <SafeIcon icon={FiPhone} className="w-8 h-8" />
                  <span>{businessInfo.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BoilerInstallation;