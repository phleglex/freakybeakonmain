export type MenuCategory = 'buckets' | 'sandwiches' | 'tenders' | 'plates' | 'sides' | 'drinks'

export type MenuItem = {
  id: string
  name: string
  description: string
  /** Price in pesewas (1/100 of a Ghana cedi). */
  priceCents: number
  category: MenuCategory
  image?: string
  tags?: Array<'popular' | 'spicy' | 'new'>
}

export const categories: Array<{ id: MenuCategory; label: string }> = [
  { id: 'buckets', label: 'Buckets' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'tenders', label: 'Tenders & Wings' },
  { id: 'plates', label: 'Plates' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Drinks' },
]

export const menu: MenuItem[] = [
  {
    id: 'bucket-8',
    name: 'Classic 8-Piece Bucket',
    description: 'Mixed white & dark, buttermilk-brined for 12 hours and hand-breaded. Feeds 3–4.',
    priceCents: 28000,
    category: 'buckets',
    image: 'bucket.png',
    tags: ['popular'],
  },
  {
    id: 'bucket-12',
    name: 'Family Feast 12-Piece',
    description: '12 pieces, 3 large sides and 6 honey-butter biscuits. Feeds 5–6.',
    priceCents: 48000,
    category: 'buckets',
    image: 'bucket.png',
  },
  {
    id: 'bucket-hot-8',
    name: 'Nashville Hot 8-Piece',
    description: 'Our classic bucket dunked in cayenne-chili oil. Pickles on the side to cool off.',
    priceCents: 30000,
    category: 'buckets',
    image: 'hot.png',
    tags: ['spicy'],
  },
  {
    id: 'sando-classic',
    name: 'The Beakon Sandwich',
    description: 'Crispy thigh, brioche bun, dill pickles, slaw and house comeback sauce.',
    priceCents: 9500,
    category: 'sandwiches',
    image: 'sandwich.png',
    tags: ['popular'],
  },
  {
    id: 'sando-hot',
    name: 'Hot Chick Sandwich',
    description: 'Nashville hot thigh, pickles, slaw and cooling ranch on toasted brioche.',
    priceCents: 10500,
    category: 'sandwiches',
    image: 'hot.png',
    tags: ['spicy'],
  },
  {
    id: 'sando-honey',
    name: 'Hot Honey Biscuit',
    description: 'Fried tender on a fresh buttermilk biscuit with chili-infused honey.',
    priceCents: 7500,
    category: 'sandwiches',
    image: 'sides.png',
    tags: ['new'],
  },
  {
    id: 'tenders-5',
    name: '5 Buttermilk Tenders',
    description: 'Hand-cut breast tenders with your choice of honey mustard or comeback sauce.',
    priceCents: 10000,
    category: 'tenders',
    image: 'tenders.png',
    tags: ['popular'],
  },
  {
    id: 'wings-10',
    name: '10 Honey Garlic Wings',
    description: 'Crackly fried wings tossed in honey garlic glaze and toasted sesame.',
    priceCents: 12000,
    category: 'tenders',
    image: 'wings.png',
  },
  {
    id: 'wings-hot-10',
    name: '10 Nashville Hot Wings',
    description: 'Same crunch, a lot more heat. Served with ranch.',
    priceCents: 12000,
    category: 'tenders',
    image: 'hot.png',
    tags: ['spicy'],
  },
  {
    id: 'plate-2pc',
    name: '2-Piece Plate',
    description: 'A breast and a thigh with two regular sides and a biscuit.',
    priceCents: 11000,
    category: 'plates',
    image: 'bucket.png',
  },
  {
    id: 'plate-tender',
    name: 'Tender Plate',
    description: '3 tenders, two regular sides, a biscuit and a dipping sauce.',
    priceCents: 11500,
    category: 'plates',
    image: 'tenders.png',
  },
  {
    id: 'side-mac',
    name: 'Skillet Mac & Cheese',
    description: 'Three-cheese, baked until the edges go golden.',
    priceCents: 4500,
    category: 'sides',
    image: 'sides.png',
    tags: ['popular'],
  },
  {
    id: 'side-biscuits',
    name: 'Honey-Butter Biscuits (3)',
    description: 'Flaky buttermilk biscuits brushed with whipped honey butter.',
    priceCents: 4000,
    category: 'sides',
    image: 'sides.png',
  },
  {
    id: 'side-slaw',
    name: 'Creamy Coleslaw',
    description: 'Crisp cabbage, carrot and a tangy buttermilk dressing.',
    priceCents: 3000,
    category: 'sides',
  },
  {
    id: 'side-fries',
    name: 'Seasoned Fries',
    description: 'Skin-on fries dusted with our secret Beakon seasoning.',
    priceCents: 3500,
    category: 'sides',
  },
  {
    id: 'drink-tea',
    name: 'Sweet Tea',
    description: 'Fresh-brewed every morning. Large, over ice.',
    priceCents: 2500,
    category: 'drinks',
  },
  {
    id: 'drink-lemonade',
    name: 'Fresh Lemonade',
    description: 'Hand-squeezed with a little cane sugar.',
    priceCents: 3000,
    category: 'drinks',
  },
  {
    id: 'drink-soda',
    name: 'Fountain Soda',
    description: 'Coke, Diet Coke, Sprite or Dr Pepper.',
    priceCents: 2000,
    category: 'drinks',
  },
]

export const menuById = new Map(menu.map((item) => [item.id, item]))

export const TAX_RATE = 0.08
export const DELIVERY_FEE_CENTS = 3000
export const DELIVERY_MINIMUM_CENTS = 15000
export const CURRENCY = 'GHS'

const cedis = new Intl.NumberFormat('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export function formatPrice(cents: number) {
  return `GH₵${cedis.format(cents / 100)}`
}

export function imageUrl(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`
}

export function calculateTotals(subtotalCents: number, fulfillment: 'pickup' | 'delivery') {
  const deliveryFeeCents = fulfillment === 'delivery' ? DELIVERY_FEE_CENTS : 0
  const taxCents = Math.round(subtotalCents * TAX_RATE)
  return {
    subtotalCents,
    deliveryFeeCents,
    taxCents,
    totalCents: subtotalCents + deliveryFeeCents + taxCents,
  }
}
