export interface Product {
  slug: string;
  title: string;
  description: string;
  asin: string;
  imageUrl: string;
  price: string;
  rating: number;
  features: string[];
  category: string;
}

export const AMAZON_TAG = 'amperagehq-20';

export function getAffiliateUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;
}

export function getGoUrl(slug: string): string {
  return `/go/${slug}`;
}

export const products: Product[] = [
  {
    slug: 'klein-tools-electrician-kit',
    title: 'Klein Tools 92906 6-Piece Electrician Tool Kit',
    description: 'Professional electrician toolkit with screwdrivers, pliers, and wire stripper. Built for daily job-site use with comfort-grip handles and heavy-duty construction.',
    asin: 'B07BXRKBTH',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=400&h=400&fit=crop',
    price: '$$',
    rating: 4.8,
    features: ['6-piece professional set', 'Comfort-grip handles', 'Insulated screwdrivers', 'Lineman\'s pliers included'],
    category: 'Hand Tools',
  },
  {
    slug: 'fluke-115-multimeter',
    title: 'Fluke 115 Compact True-RMS Digital Multimeter',
    description: 'Industry-standard multimeter for electricians. True-RMS for accurate readings on non-linear loads, with auto-ranging and a large backlit display.',
    asin: 'B01HHZGIYG',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
    price: '$$$',
    rating: 4.7,
    features: ['True-RMS measurement', 'Auto-ranging', 'CAT III 600V rated', 'Backlit display'],
    category: 'Test & Measurement',
  },
  {
    slug: 'southwire-wire-stripper',
    title: 'Southwire S1078SWRN Self-Adjusting Wire Stripper',
    description: 'Self-adjusting automatic wire stripper handles 10–24 AWG wire. Saves time on large wiring jobs with a one-squeeze action that strips cleanly every time.',
    asin: 'B0009XBMF6',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    price: '$',
    rating: 4.5,
    features: ['Self-adjusting 10–24 AWG', 'One-squeeze stripping', 'Built-in wire cutter', 'Ergonomic grip'],
    category: 'Hand Tools',
  },
  {
    slug: 'ideal-circuit-breaker-finder',
    title: 'Ideal Industries 61-534 Circuit Breaker Finder',
    description: 'Quickly locate the correct circuit breaker without guessing. The transmitter plugs into any outlet and the receiver scans the panel — no helper required.',
    asin: 'B00004THZY',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop',
    price: '$$',
    rating: 4.3,
    features: ['Works without a helper', 'Audible and visual alert', 'Works on GFI circuits', 'Includes transmitter & receiver'],
    category: 'Test & Measurement',
  },
  {
    slug: '3m-electrical-tape',
    title: '3M Scotch Super 33+ Vinyl Electrical Tape (10-Pack)',
    description: 'The gold standard in electrical tape. Super 33+ offers superior conformability, moisture resistance, and a UL-listed rating for splicing up to 600V.',
    asin: 'B00004WCCL',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    price: '$',
    rating: 4.8,
    features: ['UL listed to 600V', 'All-weather performance', 'Superior moisture resistance', 'Flame-retardant'],
    category: 'Consumables',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
