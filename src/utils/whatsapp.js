// WhatsApp integration utilities
export const whatsappConfig = {
  phoneNumber: '447700155655', // Updated to correct number
  businessName: 'Better Call Wes'
};

export const whatsappMessages = {
  quickQuote: 'Hi Wes! I need a quick quote for plumbing/heating work. Can you help?',
  boilerInstallation: 'Hi Wes! I\'m interested in boiler installation in Southampton. Can you provide a quote?',
  boilerServicing: 'Hi Wes! I need my boiler serviced. Can you help?',
  boilerRepair: 'Hi Wes! My boiler needs repair. Can you provide a quote?',
  plumbingRepairs: 'Hi Wes! I have plumbing issues that need fixing. Can you help?',
  powerFlushing: 'Hi Wes! I think I need power flushing for my heating system. Can you advise?',
  toiletRepairs: 'Hi Wes! I have toilet problems that need fixing. Can you help?',
  emergency: 'Hi Wes! I have a plumbing/heating issue that needs attention. Can you help?',
  general: 'Hi Wes! I need help with plumbing/heating work in Southampton.'
};

export const createWhatsAppLink = (message = whatsappMessages.general) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (message = whatsappMessages.general) => {
  const link = createWhatsAppLink(message);
  window.open(link, '_blank');
};

export const formatPhoneNumber = (number) => {
  // Format phone number for display
  return number.replace(/(\d{2})(\d{4})(\d{6})/, '+$1 $2 $3');
};

// Service area data
export const serviceAreas = [
  'Bassett', 'Bevois Valley', 'Bitterne', 'Bitterne Manor', 'Bitterne Park',
  'Botley', 'Bursledon', 'Chandler\'s Ford', 'Chilworth', 'Coxford',
  'Eastleigh', 'Fair Oak', 'Freemantle', 'Hamble', 'Hedge End',
  'Highfield', 'Hill', 'Hythe', 'Lordshill', 'Marchwood',
  'Maybush', 'Millbrook', 'Netley', 'North Baddesley', 'Nursling',
  'Old Town', 'Portswood', 'Redbridge', 'Shirley', 'Sholing',
  'Swaythling', 'Totton', 'West End', 'Woolston'
];

// Business information
export const businessInfo = {
  name: 'Better Call Wes',
  address: '52 Manor Farm Road, Southampton, SO18 1NQ',
  phone: '07700 155 655', // Updated phone number
  whatsapp: '+44 7700 155655', // Updated WhatsApp number
  email: 'wes@bettercallwes.co.uk',
  gasSafeNumber: '558654', // Updated Gas Safe number
  hours: {
    weekdays: '8:00 AM - 6:00 PM', // Updated hours
    saturday: 'Closed', // Updated to closed
    sunday: 'Closed', // Updated to closed
    emergency: 'Standard Hours Only' // No emergency hours
  },
  social: {
    facebook: 'https://facebook.com/bettercallwes',
    google: 'https://g.page/bettercallwes',
    checkatrade: 'https://checkatrade.com/trades/bettercallwes'
  }
};