export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  images: string[];
  specifications: { [key: string]: string };
  reviews: {
    id: number;
    author: string;
    rating: number;
    text: string;
  }[];
};

export type Category = {
  id: string;
  name: string;
  imageId: string;
};

export const categories: Category[] = [
  { id: 'cat-1', name: 'LED Lights', imageId: 'category-led' },
  { id: 'cat-2', name: 'Chandeliers', imageId: 'category-chandelier' },
  { id: 'cat-3', name: 'Decorative Lights', imageId: 'category-decorative' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Havells 12W LED Bulb',
    description: 'Energy-efficient 12W LED bulb from Havells. Provides bright, cool day light. Perfect for homes and offices.',
    price: 150,
    brand: 'Havells',
    category: 'LED Lights',
    images: ['prod-havells-led-1', 'prod-havells-led-2'],
    specifications: {
      'Wattage': '12W',
      'Color': 'Cool Day Light',
      'Base': 'B22',
      'Lifespan': '15,000 hours',
    },
    reviews: [
      { id: 1, author: 'Ramesh K.', rating: 5, text: 'Very bright and good quality.' },
      { id: 2, author: 'Sunita P.', rating: 4, text: 'Value for money.' },
    ],
  },
  {
    id: '2',
    name: 'Wipro 15W LED Panel Light',
    description: 'Slim and elegant LED panel light for false ceilings. Even light distribution with no glare.',
    price: 850,
    brand: 'Wipro',
    category: 'Ceiling Lights',
    images: ['prod-wipro-panel-1'],
    specifications: {
      'Wattage': '15W',
      'Shape': 'Round',
      'Color Temperature': '6500K',
      'Material': 'Polycarbonate',
    },
    reviews: [
      { id: 1, author: 'Amit S.', rating: 5, text: 'Looks very premium in my office.' },
    ],
  },
  {
    id: '3',
    name: 'Syska 5m Smart LED Strip',
    description: 'Smart Wi-Fi enabled LED strip light. Control with your voice or smartphone. 16 million colors.',
    price: 1200,
    brand: 'Syska',
    category: 'Decorative Lights',
    images: ['prod-syska-strip-1'],
    specifications: {
      'Length': '5 meters',
      'Connectivity': 'Wi-Fi',
      'Features': 'App Control, Voice Assistant compatible',
      'Colors': '16 Million (RGB)',
    },
    reviews: [
      { id: 1, author: 'Priya M.', rating: 5, text: 'Amazing product! My kids love it.' },
      { id: 2, author: 'Vikram R.', rating: 4, text: 'A bit tricky to set up but works great.' },
    ],
  },
  {
    id: '4',
    name: 'Crompton 9W LED Downlight',
    description: 'Compact and powerful downlight for focused lighting. Ideal for kitchens and hallways.',
    price: 450,
    brand: 'Crompton Greaves',
    category: 'LED Lights',
    images: ['prod-crompton-downlight-1'],
    specifications: {
      'Wattage': '9W',
      'Type': 'Downlight',
      'Cutout Size': '3 inches',
      'Warranty': '2 years',
    },
    reviews: [],
  },
  {
    id: '5',
    name: 'Tisva Elara 5-Light Chandelier',
    description: 'A stunning contemporary chandelier from Tisva. Features five beautiful glass shades for a luxurious feel.',
    price: 15500,
    brand: 'Tisva',
    category: 'Chandeliers',
    images: ['prod-tisva-chandelier-1', 'prod-tisva-chandelier-2'],
    specifications: {
      'Material': 'Glass & Metal',
      'No. of Lights': '5',
      'Holder Type': 'E14',
      'Finish': 'Chrome',
    },
    reviews: [
      { id: 1, author: 'Anjali D.', rating: 5, text: 'The centerpiece of my living room. Absolutely gorgeous.' },
    ],
  },
  {
    id: '6',
    name: 'Modern Geometric Table Lamp',
    description: 'A stylish and modern table lamp with a geometric base. Adds a touch of elegance to any room.',
    price: 2500,
    brand: 'Unbranded',
    category: 'Decorative Lights',
    images: ['prod-decorative-lamp-1'],
    specifications: {
      'Material': 'Metal and Fabric',
      'Height': '18 inches',
      'Color': 'Gold & White',
    },
    reviews: [],
  },
  {
    id: '7',
    name: 'Vintage Edison Filament Bulb',
    description: 'Create a warm, nostalgic ambiance with this vintage-style Edison bulb. Perfect for cafes and decorative fixtures.',
    price: 350,
    brand: 'Unbranded',
    category: 'Decorative Lights',
    images: ['prod-vintage-bulb-1'],
    specifications: {
      'Wattage': '4W LED',
      'Color Temperature': '2200K (Warm White)',
      'Base': 'E27',
    },
    reviews: [
      { id: 1, author: 'Cafe Owner', rating: 5, text: 'Gives my cafe the perfect vibe.' },
    ],
  },
  {
    id: '8',
    name: 'Weatherproof Outdoor Lantern',
    description: 'Durable and weatherproof wall lantern for your porch or garden. Classic design with modern reliability.',
    price: 1800,
    brand: 'Unbranded',
    category: 'Outdoor Lights',
    images: ['prod-outdoor-light-1'],
    specifications: {
      'IP Rating': 'IP44',
      'Material': 'Aluminum and Glass',
      'Color': 'Black',
    },
    reviews: [],
  },
  {
    id: '9',
    name: 'Adjustable Study Lamp',
    description: 'Flexible and adjustable gooseneck study lamp. Provides focused light for reading and working.',
    price: 950,
    brand: 'Unbranded',
    category: 'Decorative Lights',
    images: ['prod-study-lamp-1'],
    specifications: {
        'Material': 'ABS Plastic',
        'Wattage': '5W LED',
        'Features': '3 Brightness Levels, USB Powered'
    },
    reviews: []
  },
  {
    id: '10',
    name: 'Grand Crystal Chandelier',
    description: 'An opulent crystal chandelier designed for large halls and entryways. Makes a bold statement.',
    price: 45000,
    brand: 'Tisva',
    category: 'Chandeliers',
    images: ['prod-crystal-chandelier-1'],
    specifications: {
        'Material': 'K9 Crystal, Stainless Steel',
        'No. of Lights': '12',
        'Diameter': '3 feet'
    },
    reviews: []
  },
  {
    id: '11',
    name: 'Motion Sensor LED Light',
    description: 'Battery-operated motion sensor light. Ideal for wardrobes, staircases, and hallways.',
    price: 600,
    brand: 'Unbranded',
    category: 'LED Lights',
    images: ['prod-motion-sensor-light-1'],
    specifications: {
        'Sensor Range': '3 meters',
        'Power': 'AAA Batteries',
        'Feature': 'Auto on/off'
    },
    reviews: []
  },
  {
    id: '12',
    name: 'Fancy Hanging Pendant Light',
    description: 'A single, elegant pendant light that is perfect for kitchen islands or dining areas.',
    price: 3200,
    brand: 'Unbranded',
    category: 'Decorative Lights',
    images: ['prod-fancy-light-1'],
    specifications: {
        'Material': 'Metal',
        'Color': 'Matte Black',
        'Cord Length': 'Adjustable up to 1m'
    },
    reviews: []
  }
];
