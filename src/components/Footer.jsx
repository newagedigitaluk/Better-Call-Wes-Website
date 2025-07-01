import React from 'react';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo} from '../utils/whatsapp';

const {FiPhone,FiMail,FiMapPin,FiClock,FiMessageCircle,FiFacebook,FiStar}=FiIcons;

const Footer=()=> {
  const currentYear=new Date().getFullYear();

  const priorityServices=[
    {name: 'Boiler Installation Southampton',path: '/services/boiler-installation'},
    {name: 'Boiler Servicing Southampton',path: '/services/boiler-servicing'},
    {name: 'Boiler Repair Southampton',path: '/services/boiler-repair'},
    {name: 'Plumbing Repairs Southampton',path: '/services/plumbing-repairs'},
    {name: 'Power Flushing Southampton',path: '/services/power-flushing'},
    {name: 'Toilet Repairs Southampton',path: '/services/toilet-repairs'}
  ];

  const quickLinks=[
    {name: 'About Wes',path: '/about'},
    {name: 'Reviews',path: '/reviews'},
    {name: 'Pricing',path: '/pricing'},
    {name: 'Contact Us',path: '/contact'}
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Business Info */}
          <div className="space-y-6">
            <div>
              {/* Just Logo */}
              <div className="mb-6">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751229596169-blob" 
                  alt="Better Call Wes Logo" 
                  className="h-16 w-auto" 
                />
              </div>
              <p className="text-brand-cream font-opensans leading-relaxed">
                Gas Safe registered plumber and heating engineer serving Southampton and surrounding areas with over 200 five-star reviews.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <button 
              onClick={()=> openWhatsApp(whatsappMessages.general)} 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
              <span>📱 WhatsApp Quick Quote</span>
            </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-brand-orange font-montserrat font-bold text-lg uppercase tracking-wide mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {priorityServices.map((service)=> (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-white hover:text-brand-orange transition-colors duration-300 font-opensans text-sm leading-relaxed"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-orange font-montserrat font-bold text-lg uppercase tracking-wide mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link)=> (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white hover:text-brand-orange transition-colors duration-300 font-opensans text-sm leading-relaxed"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-brand-orange font-montserrat font-bold text-lg uppercase tracking-wide mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-opensans text-sm">
                    {businessInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a 
                  href={`tel:${businessInfo.phone}`} 
                  className="text-white hover:text-brand-orange transition-colors duration-300 font-opensans text-sm font-semibold"
                >
                  {businessInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMessageCircle} className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <button 
                  onClick={()=> openWhatsApp(whatsappMessages.general)} 
                  className="text-white hover:text-brand-orange transition-colors duration-300 font-opensans text-sm font-semibold"
                >
                  {businessInfo.whatsapp}
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a 
                  href={`mailto:${businessInfo.email}`} 
                  className="text-white hover:text-brand-orange transition-colors duration-300 font-opensans text-sm"
                >
                  {businessInfo.email}
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <div className="text-sm font-opensans">
                  <p className="text-white">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-white">Weekends: Closed</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-brand-orange font-opensans font-semibold mb-3">
                Follow Us & Reviews
              </h4>
              <div className="flex space-x-4">
                <a 
                  href={businessInfo.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-orangeHover transition-colors duration-300"
                >
                  <SafeIcon icon={FiFacebook} className="w-5 h-5 text-white" />
                </a>
                <a 
                  href={businessInfo.social.google} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center hover:bg-brand-orangeHover transition-colors duration-300"
                >
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-white" />
                </a>
                <a 
                  href={businessInfo.social.checkatrade} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-brand-orange rounded-lg text-white text-xs font-bold hover:bg-brand-orangeHover transition-colors duration-300"
                >
                  Checkatrade
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-brand-cream text-sm font-opensans text-center md:text-left">
              <p>
                © {currentYear} Better Call Wes. All rights reserved. | 
                <span className="ml-1">Gas Safe Registered: {businessInfo.gasSafeNumber}</span>
              </p>
              <p className="mt-1">
                Professional plumbing and heating services throughout Southampton and surrounding areas.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-brand-cream hover:text-brand-orange transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-brand-cream hover:text-brand-orange transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;