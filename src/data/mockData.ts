import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Anime',
    slug: 'anime',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    productCount: 25
  },
  {
    id: '2',
    name: 'Movies',
    slug: 'movies',
    image: 'https://images.unsplash.com/photo-1489599142979-65f94fde02a5?w=400&h=300&fit=crop',
    productCount: 18
  },
  {
    id: '3',
    name: 'TV Series',
    slug: 'tv-series',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop',
    productCount: 22
  },
  {
    id: '4',
    name: 'Others', // ✅ Changed from Gaming
    slug: 'others', // ✅ Changed from gaming
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    productCount: 15
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Naruto Uzumaki Classic Tee',
    description: 'Premium cotton t-shirt featuring the iconic Naruto Uzumaki design. Perfect for anime fans and casual wear.',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'Anime',
    character: 'Naruto Uzumaki',
    franchise: 'Naruto',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Orange', 'Black', 'Navy'],
    rating: 4.8,
    reviewCount: 124,
    tags: ['anime', 'naruto', 'shounen'],
    isNew: false,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Dragon Ball Z Goku Power Shirt',
    description: 'High-quality graphic tee showcasing Goku in his iconic fighting stance. Made with soft, breathable fabric.',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'Anime',
    character: 'Son Goku',
    franchise: 'Dragon Ball Z',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Orange', 'Blue', 'Black'],
    rating: 4.9,
    reviewCount: 89,
    tags: ['anime', 'dragonball', 'goku'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Attack on Titan Survey Corps',
    description: 'Official Survey Corps emblem t-shirt from Attack on Titan. Premium quality cotton blend for ultimate comfort.',
    price: 28.99,
    originalPrice: 35.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'Anime',
    character: 'Eren Yeager',
    franchise: 'Attack on Titan',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Green', 'Black', 'White'],
    rating: 4.7,
    reviewCount: 156,
    tags: ['anime', 'attackontitan', 'surveycorps'],
    isNew: false,
    isFeatured: false
  },
  {
    id: '4',
    name: 'Batman Dark Knight Tee',
    description: 'Classic Batman logo design on premium cotton. Perfect for DC fans and superhero enthusiasts.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'Movies',
    character: 'Batman',
    franchise: 'DC Comics',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy'],
    rating: 4.6,
    reviewCount: 203,
    tags: ['dc', 'batman', 'superhero'],
    isNew: false,
    isFeatured: true
  },
  {
    id: '5',
    name: 'Spider-Man Web Slinger',
    description: 'Amazing Spider-Man design featuring web patterns and iconic logo. Made with eco-friendly materials.',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'Movies',
    character: 'Spider-Man',
    franchise: 'Marvel',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Black'],
    rating: 4.8,
    reviewCount: 167,
    tags: ['marvel', 'spiderman', 'superhero'],
    isNew: true,
    isFeatured: false
  },
  {
    id: '6',
    name: 'Game of Thrones House Stark',
    description: 'Winter is Coming - Official House Stark sigil t-shirt. Premium quality with distressed vintage look.',
    price: 27.99,
    originalPrice: 32.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'TV Series',
    character: 'Jon Snow',
    franchise: 'Game of Thrones',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'White'],
    rating: 4.5,
    reviewCount: 98,
    tags: ['got', 'stark', 'hbo'],
    isNew: false,
    isFeatured: true
  },
  {
    id: '7',
    name: 'The Witcher Wolf Medallion',
    description: 'Geralt of Rivia inspired design featuring the iconic wolf medallion. Perfect for Witcher fans.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'TV Series',
    character: 'Geralt of Rivia',
    franchise: 'The Witcher',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Burgundy'],
    rating: 4.7,
    reviewCount: 145,
    tags: ['witcher', 'geralt', 'netflix'],
    isNew: true,
    isFeatured: false
  },
  {
    id: '8',
    name: 'Pokemon Pikachu Classic',
    description: 'Adorable Pikachu design on soft cotton tee. Perfect for Pokemon trainers of all ages.',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    category: 'Others', // ✅ Changed from Gaming
    character: 'Pikachu',
    franchise: 'Pokemon',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Yellow', 'Blue', 'Red'],
    rating: 4.9,
    reviewCount: 267,
    tags: ['pokemon', 'pikachu', 'nintendo'],
    isNew: false,
    isFeatured: true
  }
];

export const getFeaturedProducts = () => products.filter(p => p.isFeatured);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getProductsByCategory = (category: string) =>
  products.filter(p => p.category.toLowerCase() === category.toLowerCase());
export const getProductById = (id: string) => products.find(p => p.id === id);