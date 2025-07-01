import React,{useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo} from '../utils/whatsapp';

const {FiMessageCircle,FiPhone,FiMail,FiMapPin,FiClock,FiCheckCircle,FiSend,FiFacebook,FiStar,FiCalendar}=FiIcons;

const Contact=()=> {
  const [formData,setFormData]=useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange=(e)=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit=(e)=> {
    e.preventDefault();
    const whatsappMessage=`Hi Wes! New contact form submission:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message}`;
    openWhatsApp(whatsappMessage);
  };

  const handleBookOnline=()=> {
    window.open('https://u.bettercallwes.co.uk/mbp-w','_blank');
  };

  const contactMethods=[
    {
      icon: FiCalendar,
      title: 'Book Online',
      description: 'Schedule appointment instantly',
      action: '📅 Book Appointment',
      color: 'bg-brand-orange',
      onClick: handleBookOnline
    },
    {
      icon: FiMessageCircle,
      title: 'WhatsApp Quick Quote',
      description: 'Send photos and get instant quotes',
      action: '📱 Message on WhatsApp',
      color: 'bg-green-600',
      onClick: ()=> openWhatsApp(whatsappMessages.quickQuote)
    },
    {
      icon: FiPhone,
      title: 'Call Direct',
      description: 'Speak to Wes directly',
      action: businessInfo.phone,
      color: 'bg-blue-600',
      onClick: ()=> window.open(`tel:${businessInfo.phone}`)
    },
    {
      icon: FiMail,
      title: 'Email',
      description: 'Send detailed enquiries',
      action: businessInfo.email,
      color: 'bg-purple-600',
      onClick: ()=> window.open(`mailto:${businessInfo.email}`)
    }
  ];

  const businessHours=[
    {day: 'Monday - Friday',hours: businessInfo.hours.weekdays},
    {day: 'Weekends',hours: 'Closed'},
    {day: 'Emergency Service',hours: 'Standard Hours Only'}
  ];

  const serviceOptions=[
    'Boiler Installation',
    'Boiler Servicing',
    'Boiler Repair',
    'Plumbing Repairs',
    'Power Flushing',
    'Toilet Repairs',
    'Central Heating',
    'Radiator Services',
    'General Service',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Wes - Southampton Plumber | Better Call Wes</title>
        <meta name="description" content="Contact Wes for plumbing and heating services in Southampton. Book online, WhatsApp quotes, phone consultations. Multiple ways to get in touch!" />
        <meta name="keywords" content="contact Southampton plumber,book online plumber,WhatsApp plumber quote,Southampton plumber,Wes plumber contact" />
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.div initial={{opacity: 0,y: 30}} animate={{opacity: 1,y: 0}}>
              <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-3xl mb-8 border border-white/20 shadow-2xl max-w-3xl mx-auto">
                <h2 className="font-montserrat font-bold text-3xl mb-4 text-white">
                  Hi, I'm Wes! 👋
                </h2>
                <p className="font-opensans text-lg leading-relaxed text-white">
                  Ready to help with your plumbing and heating needs! Book online instantly, get WhatsApp quotes, or call me directly.
                </p>
              </div>

              <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 text-shadow-hero text-white">
                Get In Touch - Book Online or Contact Directly
              </h1>

              <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed max-w-4xl mx-auto">
                Book appointments online instantly, WhatsApp for quotes, phone for urgent issues. Multiple convenient ways to get professional service.
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
                  onClick={()=> openWhatsApp(whatsappMessages.quickQuote)} 
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

        {/* Contact Methods - Now 4 Options */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Choose Your Preferred Contact Method
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Four convenient ways to get in touch - from instant online booking to personal consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
                >
                  <div className={`w-20 h-20 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <SafeIcon icon={method.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-4">
                    {method.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal mb-6">
                    {method.description}
                  </p>
                  <button 
                    onClick={method.onClick} 
                    className={`w-full ${method.color} hover:opacity-90 text-white py-3 px-6 rounded-2xl font-opensans font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    {method.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Business Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{opacity: 0,x: -30}} 
                whileInView={{opacity: 1,x: 0}} 
                viewport={{once: true}}
              >
                <div className="bg-gradient-to-br from-brand-lightGray to-gray-100 rounded-3xl p-8 shadow-xl">
                  <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-6">
                    Send a Message
                  </h3>
                  <p className="font-opensans text-brand-charcoal mb-6">
                    Fill out this form and I'll respond via WhatsApp with your quote or answers.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-opensans font-semibold text-brand-navy mb-2">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-opensans focus:border-brand-orange focus:outline-none transition-colors duration-300 bg-white"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-opensans font-semibold text-brand-navy mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-opensans focus:border-brand-orange focus:outline-none transition-colors duration-300 bg-white"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-opensans font-semibold text-brand-navy mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-opensans focus:border-brand-orange focus:outline-none transition-colors duration-300 bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block font-opensans font-semibold text-brand-navy mb-2">
                        Service Required *
                      </label>
                      <select 
                        id="service" 
                        name="service" 
                        value={formData.service} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-opensans focus:border-brand-orange focus:outline-none transition-colors duration-300 bg-white"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service,index)=> (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-opensans font-semibold text-brand-navy mb-2">
                        Message *
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        required 
                        rows={5} 
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl font-opensans focus:border-brand-orange focus:outline-none transition-colors duration-300 resize-vertical bg-white"
                        placeholder="Describe your plumbing/heating issue or requirements"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-2xl font-opensans font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                    >
                      <SafeIcon icon={FiSend} className="w-5 h-5" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Business Information */}
              <motion.div 
                initial={{opacity: 0,x: 30}} 
                whileInView={{opacity: 1,x: 0}} 
                viewport={{once: true}}
                className="space-y-8"
              >
                {/* Quick Booking CTA */}
                <div className="bg-gradient-to-br from-brand-orange to-brand-orangeHover text-white rounded-3xl p-8 shadow-xl">
                  <div className="text-center">
                    <SafeIcon icon={FiCalendar} className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                      Book Instantly Online
                    </h3>
                    <p className="font-opensans text-white/90 mb-6">
                      Skip the wait - book your appointment right now with our online booking system. Available times shown in real-time.
                    </p>
                    <button 
                      onClick={handleBookOnline}
                      className="w-full bg-white text-brand-orange py-4 px-8 rounded-2xl font-opensans font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                    >
                      <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                      <span>Book Appointment Now</span>
                    </button>
                  </div>
                </div>

                {/* Business Details */}
                <div className="bg-gradient-to-br from-brand-navy to-blue-900 text-white rounded-3xl p-8 shadow-xl">
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
                    Business Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-opensans font-semibold text-white mb-1">Address</h4>
                        <p className="font-opensans text-brand-cream">{businessInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <SafeIcon icon={FiPhone} className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-opensans font-semibold text-white mb-1">Phone</h4>
                        <a 
                          href={`tel:${businessInfo.phone}`} 
                          className="font-opensans text-brand-cream hover:text-brand-orange transition-colors duration-300"
                        >
                          {businessInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-opensans font-semibold text-white mb-1">WhatsApp</h4>
                        <button 
                          onClick={()=> openWhatsApp(whatsappMessages.general)} 
                          className="font-opensans text-brand-cream hover:text-brand-orange transition-colors duration-300"
                        >
                          {businessInfo.whatsapp}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <SafeIcon icon={FiMail} className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-opensans font-semibold text-white mb-1">Email</h4>
                        <a 
                          href={`mailto:${businessInfo.email}`} 
                          className="font-opensans text-brand-cream hover:text-brand-orange transition-colors duration-300"
                        >
                          {businessInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-brand-orange">
                  <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    {businessHours.map((schedule,index)=> (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-opensans font-semibold text-brand-navy">
                          {schedule.day}
                        </span>
                        <span className="font-opensans text-brand-charcoal">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl">
                  <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-6">
                    Follow & Review
                  </h3>
                  <p className="font-opensans text-brand-charcoal mb-6">
                    Connect with us and see what customers are saying about our services.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={businessInfo.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                    >
                      <SafeIcon icon={FiFacebook} className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href={businessInfo.social.google} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 shadow-lg"
                    >
                      <SafeIcon icon={FiStar} className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href={businessInfo.social.checkatrade} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-green-600 rounded-2xl text-white text-sm font-bold hover:bg-green-700 transition-colors duration-300 shadow-lg"
                    >
                      Checkatrade
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Hours CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}}
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiClock} className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4 text-white">
                📞 Standard Business Hours Service
              </h2>
              
              <p className="font-opensans text-xl mb-8 max-w-2xl mx-auto text-blue-100">
                Professional plumbing and heating services during standard business hours: Monday-Friday, 8AM-6PM.
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
                  onClick={()=> openWhatsApp(whatsappMessages.general)} 
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

export default Contact;