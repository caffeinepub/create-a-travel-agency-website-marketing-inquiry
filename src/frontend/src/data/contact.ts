export interface ContactInfo {
  corporateOffice: {
    address: string;
    phones: string[];
  };
  branchOffice: {
    address: string;
    phones: string[];
  };
  departments: {
    name: string;
    phones: string[];
  }[];
  email: string;
  website: string;
}

export const contactInfo: ContactInfo = {
  corporateOffice: {
    address: 'SCO 70, Second Floor, Sector 38-C, Chandigarh',
    phones: [
      '+91 172 4620087',
      '+91 172 4630087',
      '+91 7837230087',
      '+91 7837240087',
      '+91 7837250087',
      '+91 7837260087',
      '+91 7837270087',
      '+91 7837280087',
    ],
  },
  branchOffice: {
    address: 'SCO 15, Second Floor, Sector 10, Panchkula 134109',
    phones: ['+91 6280310087', '+91 6280370087', '+91 7508787587'],
  },
  departments: [
    {
      name: 'Air Ticketing',
      phones: ['+91 7837230087', '+91 7837240087', '+91 7837250087'],
    },
    {
      name: 'Holiday Packages',
      phones: ['+91 7837270087', '+91 7837280087', '+91 7508787587'],
    },
    {
      name: 'Visa Consultation',
      phones: ['+91 7743006974'],
    },
    {
      name: 'Panchkula Branch Manager',
      phones: ['+91 6280310087'],
    },
    {
      name: 'Domestic Hotels',
      phones: ['+91 6280370087', '+91 6283167897'],
    },
    {
      name: 'Accounts Department',
      phones: ['+91 7837260087'],
    },
  ],
  email: 'info@leisureflies.com',
  website: 'www.leisureflies.com',
};
