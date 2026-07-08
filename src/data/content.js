// Centralised content for Pinewood Hostel
// Images are sourced from Unsplash (free to use) via direct URLs.

export const stays = [
  {
    id: 'geodesic-dome',
    name: 'Geodesic Stargazer Dome',
    type: 'Dome',
    tagline: 'Sleep under the Himalayan sky',
    price: 3200,
    unit: 'night',
    capacity: '2 guests',
    size: '24 sqm',
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518602164578-cd0074062767?auto=format&fit=crop&w=1000&q=80',
    ],
    features: ['Transparent ceiling', 'Private deck', 'Wood heater', 'En-suite bath'],
    description:
      'A transparent-topped geodesic dome perched on the ridge. Drift to sleep watching constellations and wake to deodar-framed sunrises.',
    badge: 'Most loved',
  },
  {
    id: 'forest-dome',
    name: 'Forest Canopy Dome',
    type: 'Dome',
    tagline: 'Tucked into the deodars',
    price: 2700,
    unit: 'night',
    capacity: '2 guests',
    size: '22 sqm',
    image:
      'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=1000&q=80',
    ],
    features: ['Forest view', 'Hammock deck', 'Reading nook', 'Heated floors'],
    description:
      'A cozy dome wrapped by pine canopy. The softest place to read, nap and listen to the river below.',
  },
  {
    id: 'private-deluxe',
    name: 'Deluxe Valley Room',
    type: 'Private Room',
    tagline: 'A room with the whole valley',
    price: 4200,
    unit: 'night',
    capacity: '2–3 guests',
    size: '32 sqm',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80',
    ],
    features: ['Valley balcony', 'King bed', 'Work desk', 'Rain shower'],
    description:
      'Our flagship private room with a floor-to-ceiling window and a balcony that hangs over the valley. Warm wood, soft linens, slow mornings.',
    badge: 'Premium',
  },
  {
    id: 'private-cabin',
    name: 'Pine Cabin Studio',
    type: 'Private Room',
    tagline: 'Your own little timber home',
    price: 3600,
    unit: 'night',
    capacity: '2 guests',
    size: '28 sqm',
    image:
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1000&q=80',
    ],
    features: ['Private entrance', 'Kitchenette', 'Fireplace', 'Mountain deck'],
    description:
      'A standalone timber studio with its own fireplace and deck — for travellers who want quiet and a door of their own.',
  },
  {
    id: 'social-dorm',
    name: 'The Bunk Loft',
    type: 'Dorm',
    tagline: 'Where the stories start',
    price: 900,
    unit: 'bed / night',
    capacity: '6 beds',
    size: '40 sqm',
    image:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
    ],
    features: ['Pod curtains', 'Personal locker', 'Reading light', 'Shared lounge'],
    description:
      'Hand-built wooden bunk pods with privacy curtains, a personal locker and a reading light. The friendliest corner of Pinewood.',
    badge: 'Best value',
  },
  {
    id: 'family-suite',
    name: 'Family Loft Suite',
    type: 'Private Room',
    tagline: 'Room for the whole crew',
    price: 5400,
    unit: 'night',
    capacity: '4 guests',
    size: '46 sqm',
    image:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1000&q=80',
    ],
    features: ['Two bedrooms', 'Lounge', 'Twin balconies', 'Family bath'],
    description:
      'A two-room loft with a shared lounge and twin balconies — built for families and groups who travel together.',
  },
]

export const services = [
  {
    icon: 'fire',
    title: 'Mountain Kitchen',
    text: 'Farm-to-table Himachali thalis, wood-fired pizzas and bottomless chai, served around a communal fire.',
  },
  {
    icon: 'compass',
    title: 'Guided Treks',
    text: 'Sunrise summits, hidden waterfalls and village walks led by local guides who know every trail.',
  },
  {
    icon: 'leaf',
    title: 'Café & Bakery',
    text: 'Single-origin coffee, fresh bakes and a sun-deck to journal, work or do absolutely nothing.',
  },
  {
    icon: 'wifi',
    title: 'Nomad Workspace',
    text: 'Fast fibre Wi-Fi, quiet desks and power at every seat — built for the remote-working traveller.',
  },
  {
    icon: 'bonfire',
    title: 'Bonfire Nights',
    text: 'Live acoustic sessions, open mics and stargazing circles under a sky full of constellations.',
  },
  {
    icon: 'spa',
    title: 'Wellness & Yoga',
    text: 'Morning yoga on the deck, sound baths and a wood-fired sauna to thaw after a long trek.',
  },
]

export const experiences = [
  {
    title: 'Triund Ridge Sunrise Trek',
    duration: 'Half day · Easy',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=80',
    text: 'A gentle pre-dawn climb to a ridge that opens onto the entire Dhauladhar range glowing pink.',
  },
  {
    title: 'Riverside Bonfire & Jam',
    duration: 'Evening · Social',
    image:
      'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1000&q=80',
    text: 'Guitars, marshmallows and travellers from a dozen countries around a crackling fire.',
  },
  {
    title: 'Old Village Cooking Circle',
    duration: '3 hours · Cultural',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
    text: 'Cook a traditional Himachali Dham with a local family, then share it together at one long table.',
  },
  {
    title: 'Waterfall Rappelling',
    duration: 'Half day · Adventure',
    image:
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1000&q=80',
    text: 'Clip in and descend a forest waterfall with certified guides and full safety gear.',
  },
]

export const gallery = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=900&q=80',
]

export const testimonials = [
  {
    quote:
      'The stargazer dome ruined every other stay for me. I have never slept so well — or woken up so happy.',
    name: 'Ananya R.',
    from: 'Bengaluru, India',
    rating: 5,
  },
  {
    quote:
      'Came for two nights, stayed for nine. The people, the food, the fire — Pinewood is a feeling, not a hostel.',
    name: 'Lukas M.',
    from: 'Berlin, Germany',
    rating: 5,
  },
  {
    quote:
      'Fast Wi-Fi, a desk with a mountain view and a community of nomads. I got more work done than I do in cities.',
    name: 'Sofia T.',
    from: 'Lisbon, Portugal',
    rating: 5,
  },
]

export const stats = [
  { value: '4.9', label: 'Guest rating', sub: 'across 1,200+ stays' },
  { value: '38', label: 'Countries', sub: 'of travellers hosted' },
  { value: '2,200', label: 'Metres', sub: 'above sea level' },
  { value: '12', label: 'Curated', sub: 'experiences & treks' },
]

export const faqs = [
  {
    q: 'Where exactly is Pinewood located?',
    a: 'We sit on a quiet pine ridge above Dharamkot in the Kangra valley of Himachal Pradesh — a 25-minute drive from Dharamshala and walkable to Triund trail-heads.',
  },
  {
    q: 'How do I get there?',
    a: 'Fly into Gaggal (Kangra) airport, or take an overnight Volvo from Delhi to Dharamshala. We arrange shared taxis from the bus stand — just send us your arrival time.',
  },
  {
    q: 'Do the domes have private bathrooms?',
    a: 'Yes. Every dome and private room has its own en-suite bathroom with hot water. Only the Bunk Loft dorm uses shared (but spotless) facilities.',
  },
  {
    q: 'Is it suitable for solo travellers and remote workers?',
    a: 'Absolutely — that is our heart and soul. Expect fibre Wi-Fi, dedicated desks, a social kitchen and a calendar full of community events.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Free cancellation up to 7 days before check-in for a full refund. Within 7 days, we offer a credit valid for 12 months.',
  },
]
