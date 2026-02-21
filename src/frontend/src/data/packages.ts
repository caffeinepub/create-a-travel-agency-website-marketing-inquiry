export interface Package {
  id: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  priceMin: number;
  priceMax: number;
  featured?: boolean;
  destination: string;
}

export const packages: Package[] = [
  {
    id: 'dubai-luxury',
    title: 'Dubai Luxury Experience',
    duration: '7 Days',
    description: 'Experience the ultimate luxury in Dubai with 5-star hotels, desert safaris, and exclusive city tours.',
    highlights: [
      'Burj Khalifa visit',
      '5-star hotel accommodation',
      'Desert safari with BBQ dinner',
      'Dubai Mall shopping tour',
    ],
    priceMin: 124170,
    priceMax: 207000,
    featured: true,
    destination: 'dubai',
  },
  {
    id: 'greece-island-hopping',
    title: 'Greece Island Hopping',
    duration: '10 Days',
    description: 'Explore the beautiful Greek islands including Santorini, Mykonos, and Athens with guided tours.',
    highlights: [
      'Santorini sunset cruise',
      'Mykonos beach resorts',
      'Athens historical tours',
      'Island ferry passes',
    ],
    priceMin: 157470,
    priceMax: 290170,
    featured: true,
    destination: 'greece',
  },
  {
    id: 'france-romantic',
    title: 'Romantic France',
    duration: '12 Days',
    description: 'Visit Paris, the French Riviera, and wine regions in this comprehensive French adventure.',
    highlights: [
      'Eiffel Tower dinner',
      'Louvre Museum tours',
      'Wine tasting in Bordeaux',
      'French Riviera beaches',
    ],
    priceMin: 165750,
    priceMax: 331500,
    destination: 'france',
  },
  {
    id: 'switzerland-alpine',
    title: 'Swiss Alpine Adventure',
    duration: '9 Days',
    description: 'Experience the majestic Swiss Alps with scenic train rides, mountain excursions, and charming villages.',
    highlights: [
      'Jungfraujoch excursion',
      'Glacier Express train',
      'Interlaken adventure sports',
      'Swiss chocolate factory tour',
    ],
    priceMin: 190770,
    priceMax: 373170,
    destination: 'switzerland',
  },
  {
    id: 'maldives-honeymoon',
    title: 'Maldives Honeymoon Paradise',
    duration: '8 Days',
    description: 'Relax in luxury overwater villas with spa treatments, snorkeling, and romantic beach dinners.',
    highlights: [
      'Overwater villa accommodation',
      'Couples spa treatments',
      'Private beach dinners',
      'Snorkeling excursions',
    ],
    priceMin: 207000,
    priceMax: 414170,
    featured: true,
    destination: 'maldives',
  },
  {
    id: 'thailand-cultural',
    title: 'Thailand Cultural Journey',
    duration: '11 Days',
    description: 'Explore Bangkok, Chiang Mai, and Phuket with temple tours, cooking classes, and beach relaxation.',
    highlights: [
      'Bangkok temple tours',
      'Thai cooking classes',
      'Elephant sanctuary visit',
      'Phuket beach resort',
    ],
    priceMin: 99500,
    priceMax: 182470,
    destination: 'thailand',
  },
];
