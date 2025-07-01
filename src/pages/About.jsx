import React from 'react';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,serviceAreas,businessInfo} from '../utils/whatsapp';

const {FiShield,FiAward,FiUsers,FiStar,FiMessageCircle,FiPhone,FiCheckCircle,FiMapPin,FiClock,FiTool}=FiIcons;

const About=()=> {
  const achievements=[
    {icon: FiShield,title: 'Gas Safe Registered',description: `Certified engineer with Gas Safe registration ${businessInfo.gasSafeNumber}`,color: 'bg-green-500'},
    {icon: FiStar,title: '200+ Five-Star Reviews',description: 'Consistently rated 5 stars by satisfied customers across Southampton',color: 'bg-yellow-500'},
    {icon: FiUsers,title: '500+ Happy Customers',description: 'Trusted by hundreds of homeowners and businesses',color: 'bg-blue-500'},
    {icon: FiAward,title: '10+ Years Experience',description: 'Decade of expertise in plumbing and heating services',color: 'bg-purple-500'}
  ];

  const qualifications=[
    'Gas Safe Registered Engineer',
    'City & Guilds Qualified Plumber',
    'Unvented Hot Water Systems Certified',
    'Worcester Bosch Accredited Installer',
    'Vaillant Advance Installer',
    'Power Flushing Specialist'
  ];

  const whyChooseWes=[
    'Honest, upfront pricing with no hidden fees',
    'Always on time and prepared for the job',
    'Clean, tidy work with respect for your home',
    'Available for emergency callouts 24/7',
    'Fully insured and Gas Safe registered',
    'Local Southampton knowledge and experience'
  ];

  const mainAreas=serviceAreas.slice(0,12);
  const additionalAreas=serviceAreas.slice(12);

  return (
    <>
      <Helmet>
        <title>About Wes - Your Local Southampton Plumber | Better Call Wes</title>
        <meta name="description" content="Meet Wes, your trusted Gas Safe registered plumber in Southampton. 10+ years experience, 200+ five-star reviews. Professional, reliable, local service covering 30+ areas." />
        <meta name="keywords" content="about Wes,Southampton plumber,Gas Safe engineer,local plumber,heating engineer Southampton,areas covered" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section with Background */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: 'url(https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751362743715-profile%20pic.png)'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/60"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{opacity: 0,x: -50}} 
                animate={{opacity: 1,x: 0}}
              >
                <div className="bg-white/10 backdrop-blur-lg text-white p-8 rounded-3xl mb-8 border border-white/20 shadow-2xl">
                  <h2 className="font-montserrat font-bold text-3xl mb-4">
                    Hi, I'm Wes! 👋
                  </h2>
                  <p className="font-opensans text-lg leading-relaxed">
                    Your reliable local plumber and heating engineer, proud to serve Southampton and 30+ surrounding areas with professional, honest service for over 10 years.
                  </p>
                </div>

                <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 text-shadow-hero">
                  About Wes - Your Trusted Southampton Plumber
                </h1>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={()=> openWhatsApp(whatsappMessages.general)} 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>Chat with Wes</span>
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
                initial={{opacity: 0,x: 50}} 
                animate={{opacity: 1,x: 0}} 
                transition={{delay: 0.2}}
                className="relative"
              >
                {/* Professional Photo with Floating Elements */}
                <div className="relative">
                  <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                        <span className="text-white font-montserrat font-bold text-6xl">W</span>
                      </div>
                      <h3 className="font-montserrat font-bold text-2xl text-white mb-2">Wesley</h3>
                      <p className="text-brand-cream font-opensans">Gas Safe Registered Engineer</p>
                    </div>
                  </div>

                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-4 -left-4 bg-green-500 rounded-2xl p-4 shadow-xl">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">Gas Safe</div>
                      <div className="text-xs">Registered</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-yellow-500 rounded-2xl p-4 shadow-xl">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">200+</div>
                      <div className="text-xs">5-Star Reviews</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section with Colorful Cards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Why Southampton Trusts Wes
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-20 h-20 ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <SafeIcon icon={achievement.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-3">
                    {achievement.title}
                  </h3>
                  <p className="font-opensans text-brand-charcoal">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* My Story Section with Visual Appeal */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{opacity: 0,x: -30}} 
                whileInView={{opacity: 1,x: 0}} 
                viewport={{once: true}}
              >
                <h2 className="font-montserrat font-bold text-4xl mb-8">My Story</h2>
                <div className="space-y-6">
                  <p className="font-opensans text-lg leading-relaxed">
                    I've been serving the Southampton community for over 10 years, building my reputation one job at a time. What started as a passion for problem-solving has grown into a trusted local business with over 200 five-star reviews.
                  </p>
                  <p className="font-opensans text-lg leading-relaxed">
                    As a Gas Safe registered engineer, I take safety seriously while providing honest, transparent service. I believe in doing the job right the first time and building long-term relationships with my customers.
                  </p>
                  <p className="font-opensans text-lg leading-relaxed">
                    Whether it's an emergency callout or a planned boiler installation, I treat every job with the same level of professionalism and care. Your home is your sanctuary, and I'm here to keep it comfortable and safe.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{opacity: 0,x: 30}} 
                whileInView={{opacity: 1,x: 0}} 
                viewport={{once: true}}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >
                <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">
                  Why Customers Choose Me
                </h3>
                <ul className="space-y-4">
                  {whyChooseWes.map((reason,index)=> (
                    <li key={index} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-brand-orange flex-shrink-0" />
                      <span className="font-opensans text-white">{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Areas I Cover Across Southampton
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Serving 30+ locations with professional plumbing and heating services. No extra charges for travel within our coverage area.
              </p>
            </motion.div>

            {/* Main Service Areas */}
            <div className="mb-12">
              <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-8 text-center">
                Main Service Areas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {mainAreas.map((area,index)=> (
                  <motion.div 
                    key={index}
                    initial={{opacity: 0,scale: 0.9}} 
                    whileInView={{opacity: 1,scale: 1}} 
                    viewport={{once: true}} 
                    transition={{delay: index * 0.05}}
                    className="bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:bg-brand-accentOrange transition-all duration-300 group cursor-pointer border-l-4 border-brand-orange"
                    onClick={()=> openWhatsApp(`Hi Wes! I need plumbing/heating services in ${area}. Can you help?`)}
                  >
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-brand-orange mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-opensans font-semibold text-brand-navy text-sm group-hover:text-brand-orange transition-colors">
                      {area}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Areas */}
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-8 text-center">
                Additional Coverage Areas
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {additionalAreas.map((area,index)=> (
                  <motion.div 
                    key={index}
                    initial={{opacity: 0,y: 20}} 
                    whileInView={{opacity: 1,y: 0}} 
                    viewport={{once: true}} 
                    transition={{delay: index * 0.03}}
                    className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg hover:bg-brand-accentOrange transition-all duration-300 text-center group"
                  >
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 text-brand-orange mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <h3 className="font-opensans font-semibold text-brand-navy text-xs">
                      {area}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coverage Benefits */}
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}}
              className="mt-16 bg-white rounded-3xl p-8 shadow-xl"
            >
              <h3 className="font-montserrat font-bold text-2xl text-brand-navy mb-6 text-center">
                Coverage Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {icon: FiClock, title: 'Same-Day Service', desc: 'Available across all areas'},
                  {icon: FiPhone, title: 'No Travel Charges', desc: 'Free within coverage zone'},
                  {icon: FiTool, title: 'Local Knowledge', desc: 'Know the area well'},
                  {icon: FiCheckCircle, title: 'Emergency Coverage', desc: '24/7 availability'}
                ].map((benefit,index)=> (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                      <SafeIcon icon={benefit.icon} className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-montserrat font-bold text-brand-navy mb-2">{benefit.title}</h4>
                    <p className="font-opensans text-brand-charcoal text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Qualifications Section with Visual Cards */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Qualifications & Certifications
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Fully qualified and certified to provide safe, professional plumbing and heating services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualifications.map((qualification,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 20}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-brand-accentOrange transition-all duration-300 border-l-4 border-brand-orange"
                >
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiAward} className="w-8 h-8 text-brand-orange flex-shrink-0" />
                    <h3 className="font-opensans font-bold text-brand-navy">
                      {qualification}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}}
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">
                Ready to Work Together?
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Get in touch for honest advice, professional service, and competitive prices. I'm here to help with all your plumbing and heating needs across Southampton.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={()=> openWhatsApp(whatsappMessages.general)} 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>WhatsApp Me</span>
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

export default About;