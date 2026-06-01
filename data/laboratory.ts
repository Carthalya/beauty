import { LabBase, LabIngredient } from '@/types'

export const labBases: LabBase[] = [
  {
    id: 'dry',
    name: 'Hydrating Base',
    skinType: 'dry',
    description: 'A rich, nourishing base formulated for dry skin. Contains hyaluronic acid microspheres and ceramides for deep, lasting hydration.',
    properties: ['Rich texture', 'Deep hydration', 'Barrier repair', 'Long-lasting moisture']
  },
  {
    id: 'oily',
    name: 'Mattifying Base',
    skinType: 'oily',
    description: 'A lightweight, oil-free base that controls shine while providing essential hydration. Includes niacinamide and zinc for pore refinement.',
    properties: ['Lightweight', 'Oil control', 'Pore minimizing', 'Non-comedogenic']
  },
  {
    id: 'combination',
    name: 'Balancing Base',
    skinType: 'combination',
    description: 'An adaptive base that provides hydration where needed while controlling oil in the T-zone. Perfect balance for combination skin.',
    properties: ['Adaptive hydration', 'Balance restoration', 'Gentle formula', 'All-day comfort']
  },
  {
    id: 'sensitive',
    name: 'Calming Base',
    skinType: 'sensitive',
    description: 'An ultra-gentle base with soothing botanicals for reactive skin. Free from common irritants, enriched with centella and chamomile.',
    properties: ['Ultra-gentle', 'Soothing', 'Fragrance-free', 'Hypoallergenic']
  }
]

export const labIngredients: LabIngredient[] = [
  // Essential Oils
  {
    id: 'lavender',
    name: 'Lavender Essential Oil',
    category: 'essential-oil',
    description: 'Calming and balancing oil from French lavender fields',
    benefits: ['Calming', 'Balancing', 'Soothing', 'Aromatic'],
    compatibility: ['dry', 'oily', 'combination', 'sensitive'],
    concentration: '0.5%'
  },
  {
    id: 'rosemary',
    name: 'Rosemary Essential Oil',
    category: 'essential-oil',
    description: 'Stimulating oil that promotes circulation and clarity',
    benefits: ['Stimulating', 'Clarifying', 'Antioxidant', 'Energizing'],
    compatibility: ['oily', 'combination', 'dry'],
    concentration: '0.3%'
  },
  {
    id: 'tea-tree',
    name: 'Tea Tree Essential Oil',
    category: 'essential-oil',
    description: 'Purifying Australian tea tree for blemish-prone skin',
    benefits: ['Purifying', 'Antibacterial', 'Clarifying', 'Balancing'],
    compatibility: ['oily', 'combination'],
    concentration: '0.5%'
  },
  {
    id: 'rose',
    name: 'Rose Essential Oil',
    category: 'essential-oil',
    description: 'Luxurious Bulgarian rose for ultimate skin pampering',
    benefits: ['Luxurious', 'Hydrating', 'Anti-aging', 'Aromatic'],
    compatibility: ['dry', 'sensitive', 'combination', 'oily'],
    concentration: '0.2%'
  },
  
  // Botanical Extracts
  {
    id: 'green-tea',
    name: 'Green Tea Extract',
    category: 'botanical',
    description: 'Powerful antioxidant from Japanese matcha leaves',
    benefits: ['Antioxidant', 'Protective', 'Brightening', 'Anti-aging'],
    compatibility: ['dry', 'oily', 'combination', 'sensitive'],
    concentration: '2%'
  },
  {
    id: 'chamomile',
    name: 'Chamomile Extract',
    category: 'botanical',
    description: 'Soothing extract for sensitive and irritated skin',
    benefits: ['Soothing', 'Calming', 'Anti-inflammatory', 'Gentle'],
    compatibility: ['sensitive', 'dry', 'combination'],
    concentration: '1.5%'
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera Extract',
    category: 'botanical',
    description: 'Cooling and hydrating desert plant extract',
    benefits: ['Hydrating', 'Cooling', 'Soothing', 'Healing'],
    compatibility: ['dry', 'oily', 'combination', 'sensitive'],
    concentration: '3%'
  },
  {
    id: 'ginseng',
    name: 'Ginseng Root Extract',
    category: 'botanical',
    description: 'Energizing Korean ginseng for skin vitality',
    benefits: ['Energizing', 'Anti-aging', 'Firming', 'Revitalizing'],
    compatibility: ['dry', 'combination', 'oily'],
    concentration: '1%'
  },
  
  // Active Ingredients
  {
    id: 'retinol',
    name: 'Encapsulated Retinol',
    category: 'active',
    description: 'Time-released vitamin A derivative for anti-aging',
    benefits: ['Anti-aging', 'Cell renewal', 'Collagen boost', 'Smoothing'],
    compatibility: ['dry', 'combination', 'oily'],
    concentration: '0.3%'
  },
  {
    id: 'niacinamide',
    name: 'Niacinamide',
    category: 'active',
    description: 'Versatile vitamin B3 for pore refinement and brightness',
    benefits: ['Pore minimizing', 'Brightening', 'Barrier support', 'Oil control'],
    compatibility: ['dry', 'oily', 'combination', 'sensitive'],
    concentration: '5%'
  },
  {
    id: 'hyaluronic-acid',
    name: 'Multi-weight Hyaluronic Acid',
    category: 'active',
    description: 'Three molecular weights for multi-level hydration',
    benefits: ['Deep hydration', 'Plumping', 'Smoothing', 'Moisture lock'],
    compatibility: ['dry', 'oily', 'combination', 'sensitive'],
    concentration: '2%'
  },
  {
    id: 'salicylic-acid',
    name: 'Salicylic Acid',
    category: 'active',
    description: 'Beta hydroxy acid for pore cleansing and clarity',
    benefits: ['Exfoliating', 'Pore cleansing', 'Clarifying', 'Anti-blemish'],
    compatibility: ['oily', 'combination'],
    concentration: '2%'
  },
  
  // Vitamins
  {
    id: 'vitamin-c',
    name: 'Stabilized Vitamin C',
    category: 'vitamin',
    description: 'Powerful antioxidant for brightness and protection',
    benefits: ['Brightening', 'Antioxidant', 'Collagen support', 'Even tone'],
    compatibility: ['dry', 'oily', 'combination', 'sensitive'],
    concentration: '15%'
  },
  {
    id: 'vitamin-e',
    name: 'Natural Vitamin E',
    category: 'vitamin',
    description: 'Protective antioxidant for skin nourishment',
    benefits: ['Nourishing', 'Protective', 'Healing', 'Moisturizing'],
    compatibility: ['dry', 'oily', 'combination', 'sensitive'],
    concentration: '1%'
  },
  {
    id: 'vitamin-b5',
    name: 'Panthenol (Vitamin B5)',
    category: 'vitamin',
    description: 'Healing vitamin for damaged and sensitive skin',
    benefits: ['Healing', 'Soothing', 'Moisturizing', 'Barrier repair'],
    compatibility: ['dry', 'sensitive', 'combination'],
    concentration: '2%'
  },
  {
    id: 'vitamin-f',
    name: 'Vitamin F (Essential Fatty Acids)',
    category: 'vitamin',
    description: 'Omega-rich complex for barrier strengthening',
    benefits: ['Barrier repair', 'Nourishing', 'Softening', 'Protective'],
    compatibility: ['dry', 'sensitive', 'combination'],
    concentration: '3%'
  }
]

export const ingredientCategories = [
  { id: 'essential-oil', name: 'Essential Oils', icon: '🌿' },
  { id: 'botanical', name: 'Botanical Extracts', icon: '🌸' },
  { id: 'active', name: 'Active Ingredients', icon: '⚗️' },
  { id: 'vitamin', name: 'Vitamins', icon: '💊' }
]
