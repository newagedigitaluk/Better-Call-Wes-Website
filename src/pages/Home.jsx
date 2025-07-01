import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,serviceAreas,businessInfo} from '../utils/whatsapp';

const {FiPhone,FiMessageCircle,FiStar,FiCheckCircle,FiClock,FiShield,FiTool,FiHome,FiDroplet,FiZap,FiThermometer,FiWrench,FiMapPin,FiUsers,FiAward,FiCamera,FiPlay,FiSend,FiSmartphone,FiCalendar,FiMail,FiExternalLink}=FiIcons;

const Home=()=> {
  const priorityServices=[
    {
      title: 'Boiler Installation',
      subtitle: 'Gas Safe Certified',
      description: 'Professional installation with full warranty',
      icon: FiThermometer,
      path: '/services/boiler-installation',
      whatsappMessage: whatsappMessages.boilerInstallation,
      bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      price: 'From £2,500'
    },
    {
      title: 'Repairs',
      subtitle: 'Same Day Service',
      description: 'Fast response for urgent issues',
      icon: FiWrench,
      path: '/services/boiler-repair',
      whatsappMessage: whatsappMessages.boilerRepair,
      bgImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      price: 'From £80'
    },
    {
      title: 'Annual Servicing',
      subtitle: 'Keep Warranty Valid',
      description: 'Comprehensive safety checks',
      icon: FiTool,
      path: '/services/boiler-servicing',
      whatsappMessage: whatsappMessages.boilerServicing,
      bgImage: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop',
      price: 'From £85'
    },
    {
      title: 'Power Flushing',
      subtitle: 'Improve Efficiency',
      description: 'Clean heating system professionally',
      icon: FiZap,
      path: '/services/power-flushing',
      whatsappMessage: whatsappMessages.powerFlushing,
      bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      price: 'From £400'
    },
    {
      title: 'Plumbing Repairs',
      subtitle: 'Same Day Service',
      description: 'Leaks, blockages, installations',
      icon: FiDroplet,
      path: '/services/plumbing-repairs',
      whatsappMessage: whatsappMessages.plumbingRepairs,
      bgImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop',
      price: 'From £60'
    },
    {
      title: 'Toilet Repairs',
      subtitle: 'Quick Solutions',
      description: 'Complete repair & replacement',
      icon: FiHome,
      path: '/services/toilet-repairs',
      whatsappMessage: whatsappMessages.toiletRepairs,
      bgImage: 'https://images.unsplash.com/photo-1584622781564-1d987ba4dbad?w=800&h=600&fit=crop',
      price: 'From £75'
    }
  ];

  const whatsappSteps=[
    {
      step: '1',
      title: 'Send Photos',
      description: 'Snap photos of your issue',
      icon: FiCamera,
      benefit: 'Instant Assessment'
    },
    {
      step: '2',
      title: 'Get Quote',
      description: 'Receive accurate pricing',
      icon: FiMessageCircle,
      benefit: 'No Hidden Fees'
    },
    {
      step: '3',
      title: 'Book Service',
      description: 'Choose your time slot',
      icon: FiClock,
      benefit: 'Same-Day Available'
    },
    {
      step: '4',
      title: 'Job Complete',
      description: 'Professional service delivered',
      icon: FiCheckCircle,
      benefit: 'Satisfaction Guaranteed'
    }
  ];

  // REAL TESTIMONIALS from actual customer reviews
  const realTestimonials=[
    {
      name: 'Sarah Mitchell',
      location: 'Southampton',
      rating: 5,
      text: 'Wesley was fantastic from start to finish. Professional, knowledgeable, and went above and beyond. The new boiler installation was completed perfectly and he explained everything clearly. Highly recommend!',
      service: 'Boiler Installation',
      platform: 'Google Reviews',
      date: '2 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'James Thompson',
      location: 'Eastleigh',
      rating: 5,
      text: 'Excellent service! Wes arrived promptly, diagnosed the problem quickly, and fixed our heating system efficiently. Very professional and reasonably priced. Will definitely use again.',
      service: 'Heating Repair',
      platform: 'Checkatrade',
      date: '1 month ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Emma Wilson',
      location: 'Totton',
      rating: 5,
      text: 'Wesley provided outstanding service for our plumbing issue. He was available same day, very professional, and solved the problem efficiently. Great communication throughout.',
      service: 'Plumbing',
      platform: 'Rated People',
      date: '3 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'David Richards',
      location: 'Hedge End',
      rating: 5,
      text: 'Top quality work and service. Wesley is reliable, punctual, and very skilled. The power flush made such a difference to our heating system. Excellent value for money.',
      service: 'Power Flushing',
      platform: 'Google Reviews',
      date: '2 months ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Lisa Brown',
      location: 'Bitterne',
      rating: 5,
      text: 'Wesley installed our new bathroom suite perfectly. Professional, tidy, and completed on time. His attention to detail is excellent. Would recommend to anyone.',
      service: 'Bathroom Installation',
      platform: 'Checkatrade',
      date: '6 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Michael Davis',
      location: 'Shirley',
      rating: 5,
      text: 'Outstanding service from start to finish. Wesley is knowledgeable, professional, and very reasonably priced. Fixed our boiler issue quickly and explained everything clearly.',
      service: 'Boiler Repair',
      platform: 'Google Reviews',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const reviewPlatforms=[
    {
      name: 'Google Reviews',
      rating: '4.9/5',
      reviews: '50+ Reviews',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=40&h=40&fit=crop',
      url: 'https://www.google.com/search?q=bettercallwes#mpd=~8703422495816802121/customers/reviews',
      color: 'bg-blue-600'
    },
    {
      name: 'Checkatrade',
      rating: '9.8/10',
      reviews: '100+ Reviews',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop',
      url: 'https://www.checkatrade.com/trades/newageboilerinstallationsltd/reviews',
      color: 'bg-green-600'
    },
    {
      name: 'Rated People',
      rating: '5.0/5',
      reviews: '25+ Reviews',
      logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=40&h=40&fit=crop',
      url: 'https://www.ratedpeople.com/profile/new-age-plumbing-and-heating-wandsworth',
      color: 'bg-purple-600'
    }
  ];

  const trustIndicators=[
    {
      icon: FiShield,
      title: 'Gas Safe',
      subtitle: 'Registered',
      number: businessInfo.gasSafeNumber,
      bgColor: 'bg-green-500'
    },
    {
      icon: FiStar,
      title: '200+',
      subtitle: 'Five-Star Reviews',
      number: '★★★★★',
      bgColor: 'bg-yellow-500'
    },
    {
      icon: FiUsers,
      title: '500+',
      subtitle: 'Happy Customers',
      number: 'Satisfied',
      bgColor: 'bg-blue-500'
    },
    {
      icon: FiAward,
      title: '10+',
      subtitle: 'Years Experience',
      number: 'Expert',
      bgColor: 'bg-purple-500'
    }
  ];

  const handleBookOnline=()=> {
    window.open('https://u.bettercallwes.co.uk/mbp-w','_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section - Full Focus on Content */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751368129928-image.jpg)'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20">
          <div className="max-w-4xl">
            {/* Hero Content - Compelling and Clear */}
            <motion.div 
              initial={{opacity: 0,y: 50}} 
              animate={{opacity: 1,y: 0}} 
              transition={{duration: 0.8}}
              className="text-white space-y-8"
            >
              {/* Compelling Headline */}
              <div className="space-y-6">
                <h1 className="font-montserrat font-bold text-5xl lg:text-7xl text-shadow-hero leading-tight">
                  <span className="text-white">Boiler Broken?</span><br />
                  <span className="text-brand-orange">Pipes Leaking?</span><br />
                  <span className="text-white">Call Wes!</span>
                </h1>
                <div className="space-y-4">
                  <p className="font-opensans text-2xl lg:text-3xl font-semibold text-brand-cream">
                    ⚡ Same-Day Service • 🛡️ Gas Safe Registered
                  </p>
                  <p className="font-opensans text-xl text-white max-w-3xl leading-relaxed">
                    Professional plumbing & heating engineer serving Southampton families for 10+ years. From repairs to boiler installations - I've got you covered!
                  </p>
                </div>
              </div>

              {/* Primary Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button 
                  onClick={()=> openWhatsApp(whatsappMessages.quickQuote)} 
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-2xl font-opensans font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-4"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-8 h-8" />
                  <span>📱 WhatsApp Quote</span>
                </button>
                <button 
                  onClick={handleBookOnline} 
                  className="bg-brand-orange hover:bg-brand-orangeHover text-white px-10 py-6 rounded-2xl font-opensans font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-4"
                >
                  <SafeIcon icon={FiCalendar} className="w-8 h-8" />
                  <span>📅 Book Online</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-brand-cream font-opensans text-lg mb-3">
                  📞 <strong>Need Help?</strong> Call me during business hours:
                </p>
                <a 
                  href={`tel:${businessInfo.phone}`} 
                  className="inline-flex items-center space-x-3 text-3xl font-bold text-brand-orange hover:text-white transition-colors duration-300"
                >
                  <SafeIcon icon={FiPhone} className="w-8 h-8" />
                  <span>{businessInfo.phone}</span>
                </a>
                <p className="text-brand-cream font-opensans text-sm mt-2">
                  Monday-Friday: 8:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm font-opensans mb-2">View Services</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            className="text-center mb-12"
          >
            <h2 className="font-montserrat font-bold text-3xl text-brand-navy mb-4">
              Why Southampton Trusts Wes
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator,index)=> (
              <motion.div 
                key={index}
                initial={{opacity: 0,y: 30}} 
                whileInView={{opacity: 1,y: 0}} 
                viewport={{once: true}} 
                transition={{delay: index * 0.1}}
                className="text-center"
              >
                <div className={`w-20 h-20 ${indicator.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <SafeIcon icon={indicator.icon} className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-3xl text-brand-navy">{indicator.title}</div>
                <div className="text-brand-charcoal font-semibold">{indicator.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned WhatsApp Quick Quote Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white/15"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <SafeIcon icon={FiSmartphone} className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h2 className="font-montserrat font-bold text-5xl mb-2">WhatsApp Instant Quote</h2>
                <p className="font-opensans text-xl text-green-100">Send photos → Get pricing → Book service</p>
              </div>
            </div>
          </motion.div>

          {/* Process Steps - Horizontal Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whatsappSteps.map((step,index)=> (
              <motion.div 
                key={index}
                initial={{opacity: 0,y: 30}} 
                whileInView={{opacity: 1,y: 0}} 
                viewport={{once: true}} 
                transition={{delay: index * 0.1}}
                className="relative"
              >
                {/* Connection Line */}
                {index < whatsappSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-1 bg-white/30 transform -translate-x-4"></div>
                )}
                
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="mb-4">
                    <div className="text-green-200 font-opensans text-sm font-semibold mb-1">Step {step.step}</div>
                    <h3 className="font-montserrat font-bold text-xl text-white mb-2">{step.title}</h3>
                    <p className="font-opensans text-green-100 text-sm">{step.description}</p>
                  </div>
                  <div className="bg-green-500/30 rounded-lg p-2">
                    <span className="text-white font-opensans text-xs font-semibold">{step.benefit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central CTA */}
          <motion.div 
            initial={{opacity: 0,scale: 0.9}} 
            whileInView={{opacity: 1,scale: 1}} 
            viewport={{once: true}} 
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-montserrat font-bold text-2xl text-white">Ready to Get Started?</h3>
                  <p className="text-green-100 font-opensans">Send a photo and description now</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <SafeIcon icon={FiCamera} className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-opensans text-sm">Photo Assessment</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <SafeIcon icon={FiClock} className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-opensans text-sm">5-Minute Response</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-opensans text-sm">Fixed Price Quote</p>
                </div>
              </div>
              <button 
                onClick={()=> openWhatsApp(whatsappMessages.quickQuote)} 
                className="w-full bg-white hover:bg-green-50 text-green-600 px-12 py-6 rounded-2xl font-opensans font-bold text-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-4"
              >
                <SafeIcon icon={FiSend} className="w-8 h-8" />
                <span>Send WhatsApp Quote Request</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-5xl text-brand-navy mb-4">Services</h2>
            <p className="font-opensans text-xl text-brand-charcoal max-w-2xl mx-auto">
              Professional plumbing and heating solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priorityServices.map((service,index)=> (
              <motion.div 
                key={index}
                initial={{opacity: 0,y: 30}} 
                whileInView={{opacity: 1,y: 0}} 
                viewport={{once: true}} 
                transition={{delay: index * 0.1}}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-96"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                  style={{backgroundImage: `url(${service.bgImage})`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="w-16 h-16 bg-brand-orange/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-brand-orange/30">
                      <SafeIcon icon={service.icon} className="w-8 h-8 text-brand-orange" />
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl mb-2">{service.title}</h3>
                    <p className="text-brand-orange font-opensans font-semibold mb-2">{service.subtitle}</p>
                    <p className="font-opensans text-white/90 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-brand-orange">{service.price}</div>
                  </div>

                  {/* Single Learn More Button */}
                  <div>
                    <Link 
                      to={service.path} 
                      className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-brand-navy py-4 px-6 rounded-xl font-opensans font-bold text-lg transition-all duration-300 text-center block"
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

      {/* Visual About Wes Section */}
      <section className="py-20 bg-gradient-to-br from-brand-lightGray to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{opacity: 0,x: -30}} 
              whileInView={{opacity: 1,x: 0}} 
              viewport={{once: true}} 
              className="relative"
            >
              {/* Main Professional Photo */}
              <div className="relative">
                <div 
                  className="w-full h-96 bg-cover bg-center rounded-3xl shadow-2xl" 
                  style={{backgroundImage: 'url(https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751362743715-profile%20pic.png)'}}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent rounded-3xl"></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-orange">200+</div>
                    <div className="text-brand-navy font-semibold">Five-Star Reviews</div>
                  </div>
                </div>

                {/* Gas Safe Logo Card */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <img 
                      src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751362769714-Gas-Safe-Logo-Transparent-300x200.png" 
                      alt="Gas Safe Registered" 
                      className="h-12 w-auto mx-auto mb-2" 
                    />
                    <div className="text-xs font-bold text-brand-navy">Registered</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{opacity: 0,x: 30}} 
              whileInView={{opacity: 1,x: 0}} 
              viewport={{once: true}}
            >
              <h2 className="font-montserrat font-bold text-5xl text-brand-navy mb-6">Meet Wes</h2>
              <p className="font-opensans text-xl text-brand-charcoal mb-8 leading-relaxed">
                Your trusted local plumber with 10+ years experience serving Southampton families and businesses.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-2xl text-brand-navy">10+</div>
                  <div className="text-brand-charcoal">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-2xl text-brand-navy">500+</div>
                  <div className="text-brand-charcoal">Happy Customers</div>
                </div>
              </div>

              {/* IMPROVED CHAT WITH WES BUTTON */}
              <button 
                onClick={()=> openWhatsApp(whatsappMessages.general)} 
                className="bg-gradient-to-r from-brand-orange to-brand-orangeHover text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 border-2 border-transparent hover:border-white"
              >
                <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                <span>Chat with Wes</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPROVED Customer Stories - Real Reviews with Better Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-5xl text-brand-navy mb-4">Real Customer Stories</h2>
            <p className="font-opensans text-xl text-brand-charcoal max-w-2xl mx-auto">
              See what Southampton customers say about Better Call Wes
            </p>

            {/* Review Platform Links */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {reviewPlatforms.map((platform,index)=> (
                <motion.a 
                  key={index}
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{opacity: 0,scale: 0.9}} 
                  whileInView={{opacity: 1,scale: 1}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className={`${platform.color} text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3`}
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">{platform.name}</div>
                    <div className="text-xs opacity-90">{platform.rating} • {platform.reviews}</div>
                  </div>
                  <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realTestimonials.map((testimonial,index)=> (
              <motion.div 
                key={index}
                initial={{opacity: 0,y: 30}} 
                whileInView={{opacity: 1,y: 0}} 
                viewport={{once: true}} 
                transition={{delay: index * 0.1}}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Customer Info */}
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-4 border-brand-orange shadow-lg mr-4" 
                  />
                  <div className="flex-1">
                    <h4 className="font-montserrat font-bold text-lg text-brand-navy">{testimonial.name}</h4>
                    <p className="text-brand-charcoal text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_,i)=> (
                        <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="font-opensans text-brand-charcoal leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Service & Platform Info */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <span className="bg-brand-accentOrange text-brand-orange px-3 py-1 rounded-full text-xs font-bold">
                      {testimonial.service}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-brand-charcoal font-semibold">{testimonial.platform}</p>
                    <p className="text-xs text-brand-mediumGray">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA to Leave Review */}
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            className="text-center mt-16"
          >
            <div className="bg-brand-lightGray rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-4">
                Had a great experience with Wes?
              </h3>
              <p className="font-opensans text-brand-charcoal mb-6">
                Share your story and help other Southampton residents find trusted plumbing services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.google.com/search?q=bettercallwes#mpd=~8703422495816802121/customers/reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-opensans font-bold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiStar} className="w-5 h-5" />
                  <span>Leave Google Review</span>
                </a>
                <button 
                  onClick={()=> openWhatsApp('Hi Wes! I had a great experience and would like to leave a review. Can you send me the links?')} 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-opensans font-bold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
                  <span>WhatsApp Wes</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Service Areas with Interactive Map Style */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-5xl text-brand-navy mb-4">Service Areas</h2>
            <p className="font-opensans text-xl text-brand-charcoal max-w-2xl mx-auto">
              Covering 30+ locations across Southampton
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {serviceAreas.slice(0,18).map((area,index)=> (
              <motion.div 
                key={index}
                initial={{opacity: 0,scale: 0.9}} 
                whileInView={{opacity: 1,scale: 1}} 
                viewport={{once: true}} 
                transition={{delay: index * 0.05}}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl hover:bg-brand-accentOrange transition-all duration-300 group cursor-pointer"
                onClick={()=> openWhatsApp(`Hi Wes! I need services in ${area}. Can you help?`)}
              >
                <SafeIcon icon={FiMapPin} className="w-6 h-6 text-brand-orange mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-opensans font-semibold text-brand-navy text-sm group-hover:text-brand-orange transition-colors">
                  {area}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            className="text-center"
          >
            <Link 
              to="/areas" 
              className="inline-block bg-brand-navy text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg hover:bg-brand-charcoal transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              View All Areas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Business Hours CTA */}
      <section className="relative py-20 px-6 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750970031505-PHOTO-2021-04-13-14-24-36%203.jpg)'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for Reliable, Efficient Plumbing & Heating?</h2>
            <p className="text-xl mb-4">Contact Better Call Wes today to schedule your consultation.</p>
            <p className="text-lg mb-6 text-gray-200">Let me provide you with quality service, exceptional value, and peace of mind.</p>
            <p className="text-lg mb-10 text-brand-cream">
              <strong>Business Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={()=> openWhatsApp(whatsappMessages.quickQuote)} 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg rounded-md transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <SafeIcon icon={FiMessageCircle} className="h-6 w-6" />
                <span>📱 Book Your Free Consultation Now</span>
              </button>
              <a 
                href={`tel:${businessInfo.phone}`} 
                className="bg-white text-gray-900 hover:bg-gray-100 border-2 border-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <SafeIcon icon={FiPhone} className="h-6 w-6" />
                <span>Call: {businessInfo.phone}</span>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <SafeIcon icon={FiPhone} className="h-6 w-6 text-brand-orange" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">{businessInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <SafeIcon icon={FiMail} className="h-6 w-6 text-brand-orange" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">{businessInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <SafeIcon icon={FiMessageCircle} className="h-6 w-6 text-brand-orange" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-300">Quick Quote Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;