export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  startingPrice: number;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Experience luxury and adventure in this modern desert metropolis with stunning architecture and world-class attractions.',
    image: '/assets/generated/dubai-skyline.dim_800x600.png',
    startingPrice: 124170,
    highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping', 'Beach Resorts'],
  },
  {
    id: 'greece',
    name: 'Greece',
    country: 'Greece',
    description: 'Explore ancient history, stunning islands, and Mediterranean beauty in the cradle of Western civilization.',
    image: '/assets/generated/greece-santorini.dim_800x600.png',
    startingPrice: 157470,
    highlights: ['Santorini Sunsets', 'Ancient Ruins', 'Island Hopping', 'Greek Cuisine'],
  },
  {
    id: 'france',
    name: 'France',
    country: 'France',
    description: 'Discover romance, art, and culture in the City of Light and beyond, from Paris to the French Riviera.',
    image: '/assets/generated/france-eiffel.dim_800x600.png',
    startingPrice: 165750,
    highlights: ['Eiffel Tower', 'Louvre Museum', 'French Cuisine', 'Wine Regions'],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    description: 'Experience breathtaking Alpine scenery, pristine lakes, and charming mountain villages in the heart of Europe.',
    image: '/assets/generated/switzerland-alps.dim_800x600.png',
    startingPrice: 190770,
    highlights: ['Swiss Alps', 'Scenic Train Rides', 'Chocolate Tours', 'Lake Geneva'],
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    description: 'Relax in paradise with crystal-clear waters, overwater bungalows, and pristine white-sand beaches.',
    image: '/assets/generated/maldives-resort.dim_800x600.png',
    startingPrice: 132670,
    highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Private Islands'],
  },
  {
    id: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    description: 'Immerse yourself in vibrant culture, stunning temples, tropical beaches, and world-renowned cuisine.',
    image: '/assets/generated/thailand-temple.dim_800x600.png',
    startingPrice: 99500,
    highlights: ['Bangkok Temples', 'Island Beaches', 'Thai Cuisine', 'Night Markets'],
  },
];
