import React,{useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo} from '../utils/whatsapp';

const {FiPhone,FiMenu,FiX,FiChevronDown,FiMessageCircle}=FiIcons;

const Header=()=> {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isServicesOpen,setIsServicesOpen]=useState(false);
  const [isScrolled,setIsScrolled]=useState(false);
  const location=useLocation();

  useEffect(()=> {
    const handleScroll=()=> {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[]);

  const priorityServices=[
    {name: 'Boiler Installation',path: '/services/boiler-installation'},
    {name: 'Boiler Servicing',path: '/services/boiler-servicing'},
    {name: 'Boiler Repair',path: '/services/boiler-repair'},
    {name: 'Plumbing Repairs',path: '/services/plumbing-repairs'},
    {name: 'Power Flushing',path: '/services/power-flushing'},
    {name: 'Toilet Repairs',path: '/services/toilet-repairs'}
  ];

  const secondaryServices=[
    {name: 'Central Heating Installation',path: '/services/central-heating'},
    {name: 'Radiator Installation & Repair',path: '/services/radiator-services'},
    {name: 'Heating Controls',path: '/services/heating-controls'},
    {name: 'Tap Replacement & Repairs',path: '/services/tap-services'},
    {name: 'Shower Replacement & Repairs',path: '/services/shower-services'},
    {name: 'Outdoor Taps',path: '/services/outdoor-taps'}
  ];

  const navigation=[
    {name: 'Home',path: '/'},
    {name: 'Services',path: '/services',hasDropdown: true},
    {name: 'About Wes',path: '/about'},
    {name: 'Pricing',path: '/pricing'},
    {name: 'Reviews',path: '/reviews'},
    {name: 'Contact',path: '/contact'}
  ];

  return (
    <>
      {/* Main Header - Dark Blue Background */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-brand-navy transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751229596169-blob" 
                alt="Better Call Wes Logo" 
                className="h-16 w-auto" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item)=> (
                <div key={item.name} className="relative group">
                  <Link 
                    to={item.path} 
                    className={`font-opensans font-semibold text-base transition-colors duration-300 flex items-center space-x-1 ${
                      location.pathname===item.path || (item.name==='Services' && location.pathname.startsWith('/services')) 
                        ? 'text-brand-orange' 
                        : 'text-white hover:text-brand-orange'
                    }`}
                    onMouseEnter={()=> item.hasDropdown && setIsServicesOpen(true)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{opacity: 0,y: 10}}
                          animate={{opacity: 1,y: 0}}
                          exit={{opacity: 0,y: 10}}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4"
                          onMouseEnter={()=> setIsServicesOpen(true)}
                          onMouseLeave={()=> setIsServicesOpen(false)}
                        >
                          <div className="px-4 pb-2">
                            <h3 className="font-montserrat font-bold text-brand-navy text-sm uppercase tracking-wide">
                              Priority Services
                            </h3>
                          </div>
                          {priorityServices.map((service)=> (
                            <Link 
                              key={service.path}
                              to={service.path} 
                              className="block px-4 py-2 text-sm font-opensans text-brand-charcoal hover:text-brand-orange hover:bg-brand-accentOrange transition-colors duration-200"
                            >
                              {service.name}
                            </Link>
                          ))}
                          
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <div className="px-4 pb-2">
                              <h3 className="font-montserrat font-bold text-brand-navy text-sm uppercase tracking-wide">
                                Other Services
                              </h3>
                            </div>
                            {secondaryServices.slice(0,3).map((service)=> (
                              <Link 
                                key={service.path}
                                to={service.path} 
                                className="block px-4 py-2 text-sm font-opensans text-brand-mediumGray hover:text-brand-orange hover:bg-brand-accentOrange transition-colors duration-200"
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link 
                              to="/services" 
                              className="block px-4 py-2 text-sm font-opensans font-semibold text-brand-orange hover:bg-brand-accentOrange transition-colors duration-200"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* WhatsApp Button - Green Color */}
              <button 
                onClick={()=> openWhatsApp(whatsappMessages.quickQuote)} 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-opensans font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
              >
                <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                <span>📱 WhatsApp Quote</span>
              </button>

              {/* Phone Button */}
              <a 
                href={`tel:${businessInfo.phone}`} 
                className="border-2 border-brand-orange text-brand-orange px-6 py-3 rounded-full font-opensans font-bold text-sm uppercase tracking-wide hover:bg-brand-orange hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span>{businessInfo.phone}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={()=> setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/20 transition-colors duration-200"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{opacity: 0,height: 0}}
              animate={{opacity: 1,height: 'auto'}}
              exit={{opacity: 0,height: 0}}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navigation.map((item)=> (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    className={`block py-3 px-4 rounded-lg font-opensans font-semibold transition-colors duration-200 ${
                      location.pathname===item.path 
                        ? 'text-brand-orange bg-brand-accentOrange' 
                        : 'text-brand-charcoal hover:text-brand-orange hover:bg-brand-lightGray'
                    }`}
                    onClick={()=> setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTAs */}
                <div className="pt-4 space-y-3">
                  <button 
                    onClick={()=> {openWhatsApp(whatsappMessages.quickQuote);setIsMenuOpen(false);}} 
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                    <span>📱 WhatsApp Quote</span>
                  </button>
                  <a 
                    href={`tel:${businessInfo.phone}`} 
                    className="w-full border-2 border-brand-navy text-brand-navy py-3 px-6 rounded-full font-opensans font-bold text-sm uppercase tracking-wide flex items-center justify-center space-x-2"
                    onClick={()=> setIsMenuOpen(false)}
                  >
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    <span>{businessInfo.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;