import { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    name: 'Elixir de Jeunesse',
    slug: 'elixir-de-jeunesse',
    price: 185,
    originalPrice: 220,
    description: 'Our signature anti-aging serum combines the power of botanical extracts with cutting-edge peptide technology. This luxurious elixir penetrates deep into the skin to stimulate collagen production, reduce fine lines, and restore youthful radiance. Formulated with organic rose hip oil, hyaluronic acid, and rare alpine flower extracts.',
    shortDescription: 'Advanced anti-aging serum with botanical extracts',
    category: 'serums',
    skinTypes: ['dry', 'normal', 'combination'],
    ingredients: [
      { name: 'Hyaluronic Acid', description: 'Deeply hydrating molecule', benefits: ['Intense hydration', 'Plumping effect'] },
      { name: 'Rose Hip Oil', description: 'Organic cold-pressed oil', benefits: ['Anti-aging', 'Brightening'], origin: 'Chile' },
      { name: 'Alpine Rose Stem Cells', description: 'Rare botanical extract', benefits: ['Cell regeneration', 'Protection'] },
      { name: 'Vitamin C', description: 'Stabilized L-ascorbic acid', benefits: ['Brightening', 'Antioxidant'] }
    ],
    benefits: ['Reduces fine lines', 'Boosts radiance', 'Deep hydration', 'Firms skin'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 248,
    inStock: true,
    isBestSeller: true,
    routineSuggestions: ['Apply after cleansing', 'Use morning and evening', 'Follow with moisturizer']
  },
  {
    id: '2',
    name: 'Crème Royale',
    slug: 'creme-royale',
    price: 245,
    description: 'The ultimate in luxury skincare, Crème Royale is a rich, velvety moisturizer infused with 24k gold particles and royal jelly. This opulent cream provides intense nourishment while creating a luminous, healthy glow. Perfect for mature skin seeking ultimate hydration and radiance.',
    shortDescription: 'Luxurious 24k gold-infused moisturizer',
    category: 'skincare',
    skinTypes: ['dry', 'normal'],
    ingredients: [
      { name: '24K Gold', description: 'Pure gold particles', benefits: ['Luminosity', 'Anti-inflammatory'] },
      { name: 'Royal Jelly', description: 'Premium bee-derived ingredient', benefits: ['Nourishment', 'Regeneration'] },
      { name: 'Squalane', description: 'Plant-derived emollient', benefits: ['Deep moisture', 'Softness'] },
      { name: 'Ceramides', description: 'Skin-identical lipids', benefits: ['Barrier repair', 'Protection'] }
    ],
    benefits: ['Intense nourishment', 'Luminous glow', 'Anti-aging', 'Barrier repair'],
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80'
    ],
    rating: 4.8,
    reviewCount: 186,
    inStock: true,
    isNew: true,
    routineSuggestions: ['Apply as final step', 'Use on damp skin', 'Massage in upward motions']
  },
  {
    id: '3',
    name: 'Huile Précieuse',
    slug: 'huile-precieuse',
    price: 165,
    description: 'A precious blend of 12 botanical oils designed to nourish, repair, and illuminate the skin. This fast-absorbing dry oil features argan, marula, and jojoba oils enhanced with vitamin E and essential fatty acids. Suitable for face, body, and hair.',
    shortDescription: 'Multi-use precious oil blend',
    category: 'oils',
    skinTypes: ['dry', 'normal', 'combination'],
    hairTypes: ['straight', 'wavy', 'curly'],
    ingredients: [
      { name: 'Argan Oil', description: 'Moroccan liquid gold', benefits: ['Nourishment', 'Shine'], origin: 'Morocco' },
      { name: 'Marula Oil', description: 'African beauty oil', benefits: ['Hydration', 'Protection'], origin: 'South Africa' },
      { name: 'Jojoba Oil', description: 'Skin-compatible oil', benefits: ['Balance', 'Softness'] },
      { name: 'Vitamin E', description: 'Powerful antioxidant', benefits: ['Protection', 'Healing'] }
    ],
    benefits: ['Multi-purpose', 'Fast absorbing', 'Intense nourishment', 'Natural glow'],
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
      'https://images.unsplash.com/photo-1600428853876-b7c5796d0c6b?w=800&q=80'
    ],
    rating: 4.7,
    reviewCount: 312,
    inStock: true,
    isBestSeller: true,
    routineSuggestions: ['Warm between palms', 'Press gently into skin', 'Can mix with moisturizer']
  },
  {
    id: '4',
    name: 'Mousse Purifiante',
    slug: 'mousse-purifiante',
    price: 68,
    description: 'A gentle yet effective cleansing mousse that transforms into a silky foam. Infused with green tea and bamboo charcoal to deeply cleanse while maintaining skin balance. Removes makeup, impurities, and excess oil without stripping the skin.',
    shortDescription: 'Gentle purifying cleansing mousse',
    category: 'cleansers',
    skinTypes: ['oily', 'combination', 'normal'],
    ingredients: [
      { name: 'Green Tea Extract', description: 'Antioxidant powerhouse', benefits: ['Purifying', 'Soothing'], origin: 'Japan' },
      { name: 'Bamboo Charcoal', description: 'Natural detoxifier', benefits: ['Deep cleansing', 'Pore refining'] },
      { name: 'Aloe Vera', description: 'Soothing botanical', benefits: ['Calming', 'Hydrating'] },
      { name: 'Glycerin', description: 'Humectant', benefits: ['Moisture retention', 'Softness'] }
    ],
    benefits: ['Deep cleansing', 'Pore refinement', 'Gentle formula', 'Maintains balance'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80'
    ],
    rating: 4.6,
    reviewCount: 428,
    inStock: true,
    routineSuggestions: ['Use morning and evening', 'Massage in circular motions', 'Rinse with lukewarm water']
  },
  {
    id: '5',
    name: 'Masque Lumière',
    slug: 'masque-lumiere',
    price: 95,
    description: 'An illuminating face mask that delivers instant radiance and deep hydration. Formulated with pearl powder, vitamin C, and niacinamide to brighten, even skin tone, and reduce the appearance of dark spots. Perfect for weekly pampering.',
    shortDescription: 'Illuminating pearl-infused face mask',
    category: 'masks',
    skinTypes: ['dry', 'normal', 'combination', 'sensitive'],
    ingredients: [
      { name: 'Pearl Powder', description: 'Luminous mineral', benefits: ['Brightening', 'Smoothing'], origin: 'Tahiti' },
      { name: 'Niacinamide', description: 'Vitamin B3', benefits: ['Even tone', 'Pore minimizing'] },
      { name: 'Vitamin C', description: 'Brightening vitamin', benefits: ['Radiance', 'Antioxidant'] },
      { name: 'Licorice Root', description: 'Natural brightener', benefits: ['Spot reduction', 'Soothing'] }
    ],
    benefits: ['Instant radiance', 'Brightening', 'Deep hydration', 'Even skin tone'],
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80'
    ],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    isNew: true,
    routineSuggestions: ['Apply thick layer', 'Leave for 15-20 minutes', 'Use 2-3 times weekly']
  },
  {
    id: '6',
    name: 'Sérum Capillaire',
    slug: 'serum-capillaire',
    price: 78,
    description: 'A lightweight yet powerful hair serum that repairs damage, adds shine, and tames frizz. Infused with keratin, argan oil, and silk proteins to transform dry, damaged hair into silky, lustrous locks. Heat protection up to 230°C.',
    shortDescription: 'Repairing keratin hair serum',
    category: 'haircare',
    hairTypes: ['straight', 'wavy', 'curly', 'coily'],
    ingredients: [
      { name: 'Keratin', description: 'Hair protein', benefits: ['Repair', 'Strengthening'] },
      { name: 'Argan Oil', description: 'Liquid gold', benefits: ['Shine', 'Nourishment'], origin: 'Morocco' },
      { name: 'Silk Proteins', description: 'Luxurious proteins', benefits: ['Smoothing', 'Softness'] },
      { name: 'Vitamin E', description: 'Protective vitamin', benefits: ['Heat protection', 'Antioxidant'] }
    ],
    benefits: ['Repairs damage', 'Adds shine', 'Frizz control', 'Heat protection'],
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80'
    ],
    rating: 4.7,
    reviewCount: 289,
    inStock: true,
    isBestSeller: true,
    routineSuggestions: ['Apply to damp hair', 'Focus on mid-lengths and ends', 'Can use on dry hair for finishing']
  },
  {
    id: '7',
    name: 'Lait Corps Soyeux',
    slug: 'lait-corps-soyeux',
    price: 85,
    description: 'A silky body milk that melts into the skin, providing 24-hour hydration. Enriched with shea butter, sweet almond oil, and a delicate floral scent. Leaves skin soft, supple, and beautifully scented all day.',
    shortDescription: 'Silky 24-hour hydrating body milk',
    category: 'bodycare',
    skinTypes: ['dry', 'normal', 'sensitive'],
    ingredients: [
      { name: 'Shea Butter', description: 'Rich African butter', benefits: ['Deep moisture', 'Softness'], origin: 'Ghana' },
      { name: 'Sweet Almond Oil', description: 'Gentle nourisher', benefits: ['Smoothing', 'Soothing'] },
      { name: 'Glycerin', description: 'Humectant', benefits: ['Hydration', 'Softness'] },
      { name: 'Rose Water', description: 'Floral essence', benefits: ['Toning', 'Fragrance'], origin: 'Bulgaria' }
    ],
    benefits: ['24-hour hydration', 'Silky texture', 'Beautiful scent', 'Non-greasy'],
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-608248543803-ba4f8c70ae0b?w=800&q=80',
      'https://images.unsplash.com/photo-1600428853876-b7c5796d0c6b?w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 367,
    inStock: true,
    routineSuggestions: ['Apply after showering', 'Massage into skin', 'Pay attention to dry areas']
  },
  {
    id: '8',
    name: 'Concentré Réparateur',
    slug: 'concentre-reparateur',
    price: 155,
    description: 'An intensive repair concentrate designed for stressed, damaged skin. Featuring a potent blend of centella asiatica, madecassoside, and bakuchiol, this serum accelerates skin recovery and strengthens the skin barrier.',
    shortDescription: 'Intensive skin repair concentrate',
    category: 'serums',
    skinTypes: ['sensitive', 'dry', 'normal'],
    ingredients: [
      { name: 'Centella Asiatica', description: 'Healing herb', benefits: ['Repair', 'Soothing'], origin: 'Asia' },
      { name: 'Madecassoside', description: 'Centella derivative', benefits: ['Barrier repair', 'Calming'] },
      { name: 'Bakuchiol', description: 'Natural retinol alternative', benefits: ['Anti-aging', 'Gentle'] },
      { name: 'Panthenol', description: 'Vitamin B5', benefits: ['Healing', 'Hydration'] }
    ],
    benefits: ['Intensive repair', 'Barrier strengthening', 'Calming', 'Anti-aging'],
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80'
    ],
    rating: 4.8,
    reviewCount: 198,
    inStock: true,
    isNew: true,
    routineSuggestions: ['Apply to affected areas', 'Use morning and night', 'Layer under moisturizer']
  }
]

export const categories = [
  { id: 'skincare', name: 'Skincare', description: 'Luxurious face care' },
  { id: 'haircare', name: 'Haircare', description: 'Premium hair treatments' },
  { id: 'bodycare', name: 'Bodycare', description: 'Indulgent body care' },
  { id: 'oils', name: 'Oils', description: 'Precious oil blends' },
  { id: 'serums', name: 'Serums', description: 'Concentrated treatments' },
  { id: 'cleansers', name: 'Cleansers', description: 'Gentle purification' },
  { id: 'masks', name: 'Masks', description: 'Intensive treatments' }
]

export const skinTypes = [
  { id: 'dry', name: 'Dry' },
  { id: 'oily', name: 'Oily' },
  { id: 'combination', name: 'Combination' },
  { id: 'sensitive', name: 'Sensitive' },
  { id: 'normal', name: 'Normal' }
]

export const hairTypes = [
  { id: 'straight', name: 'Straight' },
  { id: 'wavy', name: 'Wavy' },
  { id: 'curly', name: 'Curly' },
  { id: 'coily', name: 'Coily' },
  { id: 'fine', name: 'Fine' },
  { id: 'thick', name: 'Thick' }
]
