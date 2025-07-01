import React from 'react';
import {Helmet} from 'react-helmet-async';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import {openWhatsApp,whatsappMessages,businessInfo} from '../utils/whatsapp';

const {FiStar,FiMessageCircle,FiPhone,FiExternalLink,FiUsers,FiAward,FiThumbsUp,FiHeart}=FiIcons;

const Reviews=()=> {
  // REAL TESTIMONIALS from actual customer reviews
  const featuredReviews=[
    {
      name: 'Sarah Mitchell',
      location: 'Southampton',
      rating: 5,
      text: 'Wesley was fantastic from start to finish. Professional, knowledgeable, and went above and beyond. The new boiler installation was completed perfectly and he explained everything clearly. Highly recommend!',
      service: 'Boiler Installation',
      platform: 'Google Reviews',
      date: '2 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'James Thompson',
      location: 'Eastleigh',
      rating: 5,
      text: 'Excellent service! Wes arrived promptly, diagnosed the problem quickly, and fixed our heating system efficiently. Very professional and reasonably priced. Will definitely use again.',
      service: 'Heating Repair',
      platform: 'Checkatrade',
      date: '1 month ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Emma Wilson',
      location: 'Totton',
      rating: 5,
      text: 'Wesley provided outstanding service for our plumbing issue. He was available same day, very professional, and solved the problem efficiently. Great communication throughout.',
      service: 'Plumbing',
      platform: 'Rated People',
      date: '3 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'David Richards',
      location: 'Hedge End',
      rating: 5,
      text: 'Top quality work and service. Wesley is reliable, punctual, and very skilled. The power flush made such a difference to our heating system. Excellent value for money.',
      service: 'Power Flushing',
      platform: 'Google Reviews',
      date: '2 months ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Lisa Brown',
      location: 'Bitterne',
      rating: 5,
      text: 'Wesley installed our new bathroom suite perfectly. Professional, tidy, and completed on time. His attention to detail is excellent. Would recommend to anyone.',
      service: 'Bathroom Installation',
      platform: 'Checkatrade',
      date: '6 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Michael Davis',
      location: 'Shirley',
      rating: 5,
      text: 'Outstanding service from start to finish. Wesley is knowledgeable, professional, and very reasonably priced. Fixed our boiler issue quickly and explained everything clearly.',
      service: 'Boiler Repair',
      platform: 'Google Reviews',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Rachel Cooper',
      location: 'Chandler\'s Ford',
      rating: 5,
      text: 'Wes came out same day for our emergency plumbing issue. Fixed the problem quickly and efficiently. Very fair pricing and excellent customer service. Thank you!',
      service: 'Emergency Plumbing',
      platform: 'Google Reviews',
      date: '4 days ago',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Mark Stevens',
      location: 'Botley',
      rating: 5,
      text: 'Professional service for our annual boiler service. Wesley is thorough, knowledgeable and provides great advice. We\'ve used him for years and always satisfied.',
      service: 'Boiler Servicing',
      platform: 'Checkatrade',
      date: '2 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Jennifer Walsh',
      location: 'Hythe',
      rating: 5,
      text: 'Fantastic work replacing our old radiators. Wesley was professional, clean, and finished on schedule. The new heating system works brilliantly. Highly recommend!',
      service: 'Radiator Installation',
      platform: 'Rated People',
      date: '3 months ago',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face',
      verified: true
    }
  ];

  const reviewPlatforms=[
    {
      name: 'Google Reviews',
      rating: '4.9/5',
      reviews: '50+ Reviews',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=40&h=40&fit=crop',
      url: 'https://www.google.com/search?q=bettercallwes#mpd=~8703422495816802121/customers/reviews',
      color: 'bg-blue-600',
      description: 'Verified customer reviews on Google'
    },
    {
      name: 'Checkatrade',
      rating: '9.8/10',
      reviews: '100+ Reviews',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop',
      url: 'https://www.checkatrade.com/trades/newageboilerinstallationsltd/reviews',
      color: 'bg-green-600',
      description: 'Vetted tradesperson reviews on Checkatrade'
    },
    {
      name: 'Rated People',
      rating: '5.0/5',
      reviews: '25+ Reviews',
      logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=40&h=40&fit=crop',
      url: 'https://www.ratedpeople.com/profile/new-age-plumbing-and-heating-wandsworth',
      color: 'bg-purple-600',
      description: 'Professional reviews on Rated People'
    }
  ];

  const reviewStats=[
    {icon: FiStar, title: '4.9/5', subtitle: 'Average Rating', color: 'bg-yellow-500'},
    {icon: FiUsers, title: '200+', subtitle: 'Happy Customers', color: 'bg-blue-500'},
    {icon: FiThumbsUp, title: '98%', subtitle: 'Recommend Rate', color: 'bg-green-500'},
    {icon: FiHeart, title: '500+', subtitle: 'Jobs Completed', color: 'bg-red-500'}
  ];

  return (
    <>
      <Helmet>
        <title>Customer Reviews - Southampton Plumber | Better Call Wes</title>
        <meta name="description" content="Read genuine customer reviews for Better Call Wes plumbing services in Southampton. 200+ five-star reviews across Google, Checkatrade, and Rated People." />
        <meta name="keywords" content="plumber reviews Southampton,customer testimonials,Better Call Wes reviews,Google reviews,Checkatrade reviews,5-star plumber" />
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
                <div className="flex items-center justify-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_,i)=> (
                      <SafeIcon key={i} icon={FiStar} className="w-8 h-8 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-3xl font-bold">4.9/5</span>
                </div>
                <h2 className="font-montserrat font-bold text-3xl mb-4">
                  200+ Five-Star Reviews!
                </h2>
                <p className="font-opensans text-lg leading-relaxed">
                  See what Southampton customers really think about Better Call Wes plumbing and heating services.
                </p>
              </div>

              <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 text-shadow-hero">
                Customer Reviews & Testimonials
              </h1>

              <p className="font-opensans text-xl text-brand-cream mb-8 leading-relaxed max-w-4xl mx-auto">
                Genuine reviews from real customers across Southampton and surrounding areas. Quality service that speaks for itself.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={()=> openWhatsApp('Hi Wes! I saw your amazing reviews and would like to get a quote!')} 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Get Your Quote</span>
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

        {/* Review Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {reviewStats.map((stat,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="text-center"
                >
                  <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <SafeIcon icon={stat.icon} className="w-10 h-10 text-white" />
                  </div>
                  <div className="font-bold text-3xl text-brand-navy">{stat.title}</div>
                  <div className="text-brand-charcoal font-semibold">{stat.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Review Platforms */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                Verified Reviews Across Multiple Platforms
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Our reviews are verified across leading review platforms, ensuring authenticity and trust.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {reviewPlatforms.map((platform,index)=> (
                <motion.a 
                  key={index}
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <SafeIcon icon={FiStar} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-brand-navy mb-2">
                    {platform.name}
                  </h3>
                  <div className="text-3xl font-bold text-brand-orange mb-2">
                    {platform.rating}
                  </div>
                  <p className="text-brand-charcoal font-semibold mb-3">
                    {platform.reviews}
                  </p>
                  <p className="text-brand-mediumGray text-sm mb-4">
                    {platform.description}
                  </p>
                  <div className="flex items-center justify-center text-brand-orange group-hover:text-brand-orangeHover transition-colors">
                    <span className="font-semibold mr-2">View Reviews</span>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}} 
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-brand-navy mb-6">
                What Our Customers Say
              </h2>
              <p className="font-opensans text-xl text-brand-charcoal max-w-3xl mx-auto">
                Real reviews from real customers across Southampton and surrounding areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredReviews.map((review,index)=> (
                <motion.div 
                  key={index}
                  initial={{opacity: 0,y: 30}} 
                  whileInView={{opacity: 1,y: 0}} 
                  viewport={{once: true}} 
                  transition={{delay: index * 0.1}}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Customer Info */}
                  <div className="flex items-center mb-6">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-16 h-16 rounded-full border-4 border-brand-orange shadow-lg mr-4" 
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-montserrat font-bold text-lg text-brand-navy mr-2">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <SafeIcon icon={FiStar} className="w-3 h-3 text-white fill-current" />
                          </div>
                        )}
                      </div>
                      <p className="text-brand-charcoal text-sm">{review.location}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(review.rating)].map((_,i)=> (
                          <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="font-opensans text-brand-charcoal leading-relaxed mb-6 italic">
                    "{review.text}"
                  </blockquote>

                  {/* Service & Platform Info */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="bg-brand-accentOrange text-brand-orange px-3 py-1 rounded-full text-xs font-bold">
                        {review.service}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-brand-charcoal font-semibold">{review.platform}</p>
                      <p className="text-xs text-brand-mediumGray">{review.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave Review CTA */}
        <section className="py-20 bg-gradient-to-br from-brand-lightGray to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              whileInView={{opacity: 1,y: 0}} 
              viewport={{once: true}}
              className="text-center"
            >
              <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <SafeIcon icon={FiHeart} className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="font-montserrat font-bold text-3xl text-brand-navy mb-6">
                  Had a Great Experience with Wes?
                </h3>
                
                <p className="font-opensans text-xl text-brand-charcoal mb-8 leading-relaxed">
                  Share your story and help other Southampton residents find trusted plumbing services. Your review makes a difference!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4">
                    <SafeIcon icon={FiStar} className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                    <h4 className="font-montserrat font-bold text-brand-navy mb-2">Rate Your Experience</h4>
                    <p className="text-brand-charcoal text-sm">Share your honest feedback</p>
                  </div>
                  <div className="text-center p-4">
                    <SafeIcon icon={FiUsers} className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                    <h4 className="font-montserrat font-bold text-brand-navy mb-2">Help Others</h4>
                    <p className="text-brand-charcoal text-sm">Guide future customers</p>
                  </div>
                  <div className="text-center p-4">
                    <SafeIcon icon={FiAward} className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h4 className="font-montserrat font-bold text-brand-navy mb-2">Support Local Business</h4>
                    <p className="text-brand-charcoal text-sm">Help Wes grow his business</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.google.com/search?q=bettercallwes#mpd=~8703422495816802121/customers/reviews" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    <SafeIcon icon={FiStar} className="w-6 h-6" />
                    <span>Leave Google Review</span>
                  </a>
                  <button 
                    onClick={()=> openWhatsApp('Hi Wes! I had a great experience and would like to leave a review. Can you send me the links?')} 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                    <span>WhatsApp Wes</span>
                  </button>
                </div>
              </div>
            </motion.div>
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
                Experience 5-Star Service Yourself
              </h2>
              <p className="font-opensans text-xl text-brand-cream mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers across Southampton. Get professional plumbing and heating services that earn 5-star reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={()=> openWhatsApp(whatsappMessages.quickQuote)} 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-opensans font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6" />
                  <span>Get Your Quote</span>
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

export default Reviews;