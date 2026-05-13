export type MemberRole = 'The Divine' | 'Founding Member' | 'COO' | 'Impact Player' | 'Shadow Member';

export interface Member {
  id: string;
  name: string;
  role: MemberRole;
  foodPersona: string;
  imageUrl: string;
  bio: string;
  secretNote?: string;
}

export interface FoodSpot {
  id: string;
  name: string;
  location: string;
  speciality: string;
  rating: number;
  strategicNote: string;
  imageUrl: string;
}

export const members: Member[] = [
  {
    id: '1',
    name: 'Aurelius Gold',
    role: 'The Divine',
    foodPersona: 'The Imperial Truffle',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aurelius',
    bio: 'The ultimate arbiter of taste and tradition. His palate is the law.',
    secretNote: 'Known to possess a secret vault of 100-year-old balsamic vinegar.'
  },
  {
    id: '2',
    name: 'Seraphina Stone',
    role: 'Founding Member',
    foodPersona: 'The Eternal Sourdough',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Seraphina',
    bio: 'Architect of the club\'s foundational ethos. She remembers the first feast.',
    secretNote: 'Has a map of every hidden dining room in the city.'
  },
  {
    id: '3',
    name: 'Marcus Vane',
    role: 'COO',
    foodPersona: 'The Precision Plate',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    bio: 'Ensuring the logistical perfection of every gathering. Efficiency is the finest spice.',
    secretNote: 'Can time a soufflé to the millisecond.'
  },
  {
    id: '4',
    name: 'Jax Thorne',
    role: 'Impact Player',
    foodPersona: 'The Chaos Chili',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jax',
    bio: 'Bringing intensity and disruptive flavor profiles to the table.',
    secretNote: 'Once smuggled a forbidden spice from a restricted island.'
  },
  {
    id: '5',
    name: 'Unknown',
    role: 'Shadow Member',
    foodPersona: 'The Ghost Pepper',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shadow',
    bio: 'A presence felt but never seen. Operates in the peripherals of the feast.',
    secretNote: 'Actually a collective of three different people.'
  },
];

export const foodSpots: FoodSpot[] = [
  {
    id: 'fs1',
    name: 'The Charcoal Pit',
    location: 'Sector 7, Old Quarter',
    speciality: 'Mutton Seekh Kababs',
    rating: 4.9,
    strategicNote: 'Tandoori Chicken: High priority target. Recommended side: Garlic Naan. Arrival before 7 PM is critical for prime seating.',
    imageUrl: 'https://images.unsplash.com/photo-1599487410397-c5426378a39a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'fs2',
    name: 'Royal Mughlai Hub',
    location: 'Central District',
    speciality: 'Nalli Nihari',
    rating: 4.7,
    strategicNote: 'Nihari: Consume with Khameeri Roti for maximum effect. Beware of the heavy spice profile; water reserves recommended.',
    imageUrl: 'https://images.unsplash.com/photo-1631519324708-75176463352c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'fs3',
    name: 'Saffron Shadows',
    location: 'The Gated Enclave',
    speciality: 'Butter Chicken (Legacy Recipe)',
    rating: 4.8,
    strategicNote: 'The butter chicken is an institutional treasure. Ensure the gravy is thick. Request the "off-menu" smoked dal.',
    imageUrl: 'https://images.unsplash.com/photo-1588168330746-877147231112?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'fs4',
    name: 'Iron Grill Station',
    location: 'Industrial Belt',
    speciality: 'Grilled Prawns & Boti',
    rating: 4.5,
    strategicNote: 'High-heat searing is their specialty. Boti is tender but aggressive. Best paired with a cold mint lassi to neutralize heat.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
  },
];
