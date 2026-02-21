export interface CompanyProfile {
  legalName: string;
  displayName: string;
  foundingYear: number;
  founder: string;
  description: string;
  certifications: string[];
  milestones: {
    travelers: string;
    experience: string;
  };
  services: string[];
  values: string[];
  locations: {
    headquarters: string;
    branch: string;
  };
}

export const companyProfile: CompanyProfile = {
  legalName: 'LEISUREFLIES TRAVELS PRIVATE LIMITED',
  displayName: 'Leisureflies Travels Pvt Ltd',
  foundingYear: 2010,
  founder: 'Mr. Kamal Rana',
  description:
    'LEISUREFLIES TRAVELS PRIVATE LIMITED provides a full service travel management company. We offer Travel and Destination Management Related Services. We take special care of our clients, providing all kinds of assistance which a modern traveler looks for and offer clients with carefully prepared comprehensive travel program focused on their unique objectives. Whether our clients are looking for effective cost management strategies, travel policy implementation and management or superior customer service delivery, we have a solution at LEISUREFLIES TRAVELS PRIVATE LIMITED.',
  certifications: ['IATA-accredited', 'TAAI-certified'],
  milestones: {
    travelers: '53,000+',
    experience: '15+ years',
  },
  services: [
    'Luxury Holidays',
    'Air Tickets',
    'Hotels Service',
    'Bus Service',
    'Visa Consultation',
    'Integrated Travel Portal',
    'Advanced Purchase Discounted Tickets',
    'Discounted Return Tickets',
  ],
  values: [
    'Client-focused approach',
    'Trust-based business partnerships',
    'Comprehensive travel solutions',
    'Superior customer service delivery',
    'Cost management strategies',
  ],
  locations: {
    headquarters: 'Chandigarh',
    branch: 'Panchkula',
  },
};
