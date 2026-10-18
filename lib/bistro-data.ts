export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'seafood' | 'starters' | 'mains_pizza' | 'bar' | 'desserts';
  price: number;
  description: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  verificationStatus: 'verified' | 'unconfirmed';
  image: string;
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'EazyDiner' | 'Zomato';
  text: string;
  highlightDish?: string;
  verifiedVisit: boolean;
  location?: string;
}

export const BISTRO_INFO = {
  name: 'Canvas Bistro Bar',
  subtitle: 'Lively Bistro, Artisanal Coffee & Bar in CBD Belapur',
  phone: '075959 59339',
  phoneClean: '07595959339',
  phoneIntl: '+917595959339',
  whatsappUrl: 'https://wa.me/917595959339?text=Hi%20Canvas%20Bistro%20Bar%2C%20I%20would%20like%20to%20reserve%20a%20table%20or%20inquire%20about%20the%20menu.',
  address: {
    line1: '7, Uran Road, Nilgiri Gardens, Ekta Vihar',
    sector: 'Sector 26, CBD Belapur',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    pincode: '400614',
    full: '7, Uran Road, Nilgiri Gardens, Ekta Vihar, Sector 26, CBD Belapur, Navi Mumbai, Maharashtra 400614',
    landmark: '1.3 km from CBD Belapur Station (5 min drive) · Near Nilgiri Gardens',
  },
  hours: {
    display: 'Daily: 11:30 AM – 2:00 AM (Closes 2 AM)',
    lunch: '11:30 AM – 4:00 PM',
    happyHours: '4:00 PM – 8:00 PM',
    dinnerBar: '7:00 PM – 2:00 AM',
    sundayBuffet: 'Every Sunday: 12:30 PM – 4:00 PM',
  },
  costForTwo: '₹1,000 – ₹1,300 for two (₹400 – ₹1,200 per person)',
  parentGroup: 'Pavithra Hospitality (pavithrahospitality.com)',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Canvas+Bistro+Bar+CBD+Belapur+Navi+Mumbai',
  googleMapsEmbed: 'https://maps.google.com/maps?q=7,%20Uran%20Road,%20Nilgiri%20Gardens,%20Ekta%20Vihar,%20Sector%2026,%20CBD%20Belapur,%20Navi%20Mumbai,%20Maharashtra%20400614&t=&z=15&ie=UTF8&iwloc=&output=embed',
  partnerPlatforms: ['EazyDiner', 'Swiggy', 'Zomato'],
};

export const MENU_ITEMS: MenuItem[] = [
  // Item 1 (Featured on Homepage)
  {
    id: 'c1',
    name: 'Artisanal Barista Latte',
    category: 'coffee',
    price: 210,
    description: 'Freshly pulled double espresso shot poured over velvety steamed micro-foam milk with intricate rosetta latte art.',
    isVeg: true,
    isChefSpecial: true,
    verificationStatus: 'verified',
    image: '/images/artisanal_coffee_latte_1792235217264.jpg',
    isFeatured: true,
  },
  // Item 2 (Featured on Homepage)
  {
    id: 's1',
    name: 'Signature Grilled Fish Fillet & Herb Butter',
    category: 'seafood',
    price: 495,
    description: 'Pan-seared fresh catch with garlic emulsion, lemon rosemary reduction, sautéed butter greens, and baby potatoes.',
    isVeg: false,
    isChefSpecial: true,
    verificationStatus: 'verified',
    image: '/images/seafood_platter_signature_1792235218169.jpg',
    isFeatured: true,
  },
  // Item 3 (Featured on Homepage)
  {
    id: 'st2',
    name: 'Canvas Red Cook Paneer',
    category: 'starters',
    price: 345,
    description: 'Cottage cheese cubes wok-seared in rich oriental spicy glaze with bell peppers, spring onions, and roasted sesame.',
    isVeg: true,
    isChefSpecial: true,
    verificationStatus: 'verified',
    image: '/images/dish_red_cook_paneer_1792237202215.jpg',
    isFeatured: true,
  },
  // Item 4 (Featured on Homepage)
  {
    id: 'st6',
    name: 'Charcoal Roasted Chicken Tikka',
    category: 'starters',
    price: 385,
    description: 'Smoky boneless chicken morsels steeped in Kashmiri red chilli and mustard oil marinade, charred over charcoal.',
    isVeg: false,
    isChefSpecial: true,
    verificationStatus: 'verified',
    image: '/images/dish_charcoal_chicken_tikka_1792237202332.jpg',
    isFeatured: true,
  },
  // Item 5 (Featured on Homepage)
  {
    id: 'p1',
    name: 'Wild Mushroom & Basil Truffle Pizza',
    category: 'mains_pizza',
    price: 445,
    description: 'Hand-stretched sourdough crust, roasted wild mushrooms, San Marzano tomato sauce, fresh mozzarella, and truffle oil.',
    isVeg: true,
    verificationStatus: 'unconfirmed',
    image: '/images/dish_woodfired_pizza_truffle_1792237203595.jpg',
    isFeatured: true,
  },
  // Item 6 (Featured on Homepage)
  {
    id: 'b1',
    name: 'Smoked Oakwood Whiskey Sour',
    category: 'bar',
    price: 480,
    description: 'Bourbon shaken with freshly squeezed Meyer lemon, aromatic bitters, egg white foam, and applewood smoke infusion.',
    isVeg: true,
    isChefSpecial: true,
    verificationStatus: 'unconfirmed',
    image: '/images/signature_craft_cocktail_1792235219096.jpg',
    isFeatured: true,
  },

  // Additional Menu Items for Full Menu Page
  {
    id: 'c2',
    name: 'Classic Dark Roast Cappuccino',
    category: 'coffee',
    price: 180,
    description: '100% Arabica artisanal roast with balanced dense foam, cocoa dust dusting, and rich hazelnut undertones.',
    isVeg: true,
    verificationStatus: 'verified',
    image: '/images/artisanal_coffee_latte_1792235217264.jpg',
  },
  {
    id: 'c3',
    name: 'Canvas Slow Cold Brew Tonic',
    category: 'coffee',
    price: 230,
    description: '18-hour cold steeped single-origin coffee poured over chilled botanical tonic water with charred orange wheel.',
    isVeg: true,
    isChefSpecial: true,
    verificationStatus: 'verified',
    image: '/images/signature_craft_cocktail_1792235219096.jpg',
  },
  {
    id: 's2',
    name: 'Spice Fish Fingers with Tartar Dip',
    category: 'seafood',
    price: 395,
    description: 'Golden spiced crumbed bhetki fingers seasoned with coastal spices, served with in-house lemon caper tartar sauce.',
    isVeg: false,
    verificationStatus: 'verified',
    image: '/images/seafood_platter_signature_1792235218169.jpg',
  },
  {
    id: 's3',
    name: 'Prawns Salt N Pepper Crispy Crunch',
    category: 'seafood',
    price: 445,
    description: 'Wok-tossed plump sea prawns tossed with crushed Sichuan peppercorns, scallions, and roasted garlic.',
    isVeg: false,
    verificationStatus: 'verified',
    image: '/images/seafood_platter_signature_1792235218169.jpg',
  },
  {
    id: 's4',
    name: 'Rawas Kalimiri Charred Tikka',
    category: 'seafood',
    price: 525,
    description: 'Fresh Indian salmon chunks marinated with freshly cracked black peppercorns, hung curd, and cooked in clay tandoor.',
    isVeg: false,
    isChefSpecial: true,
    verificationStatus: 'verified',
    image: '/images/dish_charcoal_chicken_tikka_1792237202332.jpg',
  },
  {
    id: 'st1',
    name: 'Classic Greek Feta Salad',
    category: 'starters',
    price: 295,
    description: 'Crisp English cucumbers, vine-ripened tomatoes, Kalamata olives, bell peppers, and barrel-aged feta with herb vinaigrette.',
    isVeg: true,
    verificationStatus: 'verified',
    image: '/images/dish_red_cook_paneer_1792237202215.jpg',
  },
  {
    id: 'st3',
    name: 'Smoked BBQ Baby Potatoes',
    category: 'starters',
    price: 285,
    description: 'Oven-roasted baby potatoes tossed in house bourbon BBQ glaze, spring garlic, and spiced sour cream.',
    isVeg: true,
    verificationStatus: 'verified',
    image: '/images/dish_charcoal_chicken_tikka_1792237202332.jpg',
  },
  {
    id: 'st4',
    name: 'Chicken Wings with Chive Sour Cream',
    category: 'starters',
    price: 365,
    description: 'Slow-smoked juicy chicken wings glazed in spicy peri-peri marinade, served with chilled herb sour cream dip.',
    isVeg: false,
    verificationStatus: 'verified',
    image: '/images/dish_charcoal_chicken_tikka_1792237202332.jpg',
  },
  {
    id: 'p2',
    name: 'Smoked Chicken & Jalapeño Crisp Pizza',
    category: 'mains_pizza',
    price: 485,
    description: 'Artisanal wood-fired thin crust topped with smoked shredded chicken, pickled jalapeños, red onions, and aged cheddar.',
    isVeg: false,
    verificationStatus: 'unconfirmed',
    image: '/images/dish_woodfired_pizza_truffle_1792237203595.jpg',
  },
  {
    id: 'b2',
    name: 'Belapur Sunset Citrus Spritz',
    category: 'bar',
    price: 420,
    description: 'Aperol, sparkling wine, blood orange reduction, splash of soda, and fragrant rosemary sprig.',
    isVeg: true,
    verificationStatus: 'unconfirmed',
    image: '/images/signature_craft_cocktail_1792235219096.jpg',
  },
  {
    id: 'b3',
    name: 'Classic Long Island Iced Tea',
    category: 'bar',
    price: 490,
    description: 'Quintessential highball combining vodka, gin, rum, tequila, triple sec, citrus blend, and splash of cola.',
    isVeg: true,
    verificationStatus: 'verified',
    image: '/images/signature_craft_cocktail_1792235219096.jpg',
  },
  {
    id: 'd1',
    name: 'Sizzling Walnut Brownie with Gelato',
    category: 'desserts',
    price: 260,
    description: 'Fudgy roasted walnut brownie presented on sizzling cast iron with dark chocolate fudge and Madagascar vanilla gelato.',
    isVeg: true,
    verificationStatus: 'verified',
    image: '/images/dish_sizzling_brownie_gelato_1792237203076.jpg',
  },
];

export const FEATURED_6_MENU_ITEMS = MENU_ITEMS.slice(0, 6);

export const SUNDAY_BUFFET_DETAILS = {
  title: 'The Grand Sunday Brunch Buffet',
  tagline: 'Lively All-You-Can-Eat Spread with Coastal Seafood & Live Counters',
  timings: 'Every Sunday · 12:30 PM to 4:00 PM',
  pricing: [
    { type: 'Unlimited Vegetarian Buffet', price: 799, unit: 'per guest (+ taxes)', status: 'verified' },
    { type: 'Unlimited Non-Veg & Seafood Buffet', price: 899, unit: 'per guest (+ taxes)', status: 'verified' },
    { type: 'Buffet + Unlimited Craft Drinks Add-on', price: 1499, unit: 'per guest (+ taxes)', status: 'unconfirmed' },
  ],
  spreadHighlights: [
    { title: 'Live Barbecue & Grill Counter', desc: 'Charcoal chicken tikka, grilled fish bites, BBQ baby potatoes, and paneer skewers prepared live on your request.' },
    { title: 'Diverse Seafood Selection', desc: 'Fish fingers with homemade tartar, wok-tossed spicy prawns, and coastal fish curry with steamed rice.' },
    { title: 'Chef Special Biryani & Mains', desc: 'Fragrant Awadhi Dum Biryani, hand-tossed breads, rich gravies, and oriental stir-fry options.' },
    { title: 'Artisanal Salad & Mezze Bar', desc: 'Fresh Greek salad, crunchy garden greens, house hummus, pita crisps, and dressings.' },
    { title: 'Dessert Wonderland', desc: 'Sizzling brownie bites, miniature mousse cups, warm gulab jamun, and artisanal pastry display.' },
  ],
  image: '/images/sunday_buffet_spread_1792235219365.jpg',
  bookingAdvice: 'Pre-booking is highly recommended on weekends due to high demand.',
};

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Rohan Deshmukh',
    rating: 5,
    date: 'Recent Google Review',
    source: 'Google Reviews',
    location: 'CBD Belapur, Navi Mumbai',
    text: 'Canvas Bistro Bar is one of CBD Belapur’s true gems. The coffee during the afternoon is artisanal quality, and in the evening the bistro vibe with live music transforms the entire place. The Red Cook Paneer and Grilled Fish were outstanding!',
    highlightDish: 'Grilled Fish & Red Cook Paneer',
    verifiedVisit: true,
  },
  {
    id: 'r2',
    author: 'Ananya Iyer',
    rating: 5,
    date: 'Verified EazyDiner Review',
    source: 'EazyDiner',
    location: 'Seawoods, Navi Mumbai',
    text: 'Visited for the Sunday buffet with my family. At ₹799/₹899 it is exceptional value in Navi Mumbai. Generous seafood spread, attentive staff, and very pleasant interior ambiance with warm wood decor.',
    highlightDish: 'Sunday Brunch Buffet',
    verifiedVisit: true,
  },
  {
    id: 'r3',
    author: 'Vikramjit Singh',
    rating: 5,
    date: 'Verified Zomato Review',
    source: 'Zomato',
    location: 'Kharghar, Navi Mumbai',
    text: 'Great spot for corporate hangouts and chill evenings. They stay open till 2 AM which is super convenient in Belapur. Spice Fish Fingers and Chicken Wings are top tier finger foods with craft drinks.',
    highlightDish: 'Spice Fish Fingers',
    verifiedVisit: true,
  },
  {
    id: 'r4',
    author: 'Sneha Patil',
    rating: 5,
    date: 'Recent Google Review',
    source: 'Google Reviews',
    location: 'Nerul, Navi Mumbai',
    text: 'The Greek Salad was super fresh and the Charcoal Chicken Tikka had the right smoky aroma. Beautiful dark wood ambiance with golden lighting. Staff is very prompt. Will be booking a table again soon!',
    highlightDish: 'Greek Salad & Chicken Tikka',
    verifiedVisit: true,
  },
  {
    id: 'r5',
    author: 'Amitesh Kulkarni',
    rating: 4.5,
    date: 'Verified Google Review',
    source: 'Google Reviews',
    location: 'Vashi, Navi Mumbai',
    text: 'The barista roasts are genuinely impressive for a bistro bar. Had the Cold Brew Tonic and Truffle Mushroom Pizza. Exceptional interior aesthetic, warm yellow lighting, perfect for business catchups.',
    highlightDish: 'Cold Brew & Truffle Pizza',
    verifiedVisit: true,
  },
  {
    id: 'r6',
    author: 'Dr. Meera Nambiar',
    rating: 5,
    date: 'Verified EazyDiner Review',
    source: 'EazyDiner',
    location: 'CBD Belapur',
    text: 'Celebrated my husband’s birthday in their private dining section. From the welcome drinks to the sizzling walnut brownie and live acoustic singer, the hospitality was flawless.',
    highlightDish: 'Private Dining & Sizzling Brownie',
    verifiedVisit: true,
  },
  {
    id: 'r7',
    author: 'Kunal Singhania',
    rating: 4.5,
    date: 'Verified Zomato Review',
    source: 'Zomato',
    location: 'Sanpada, Navi Mumbai',
    text: 'Happy hours 1+1 on cocktails is a steal in Sector 26! Smoked Whiskey Sour is prepared with theater. Highly recommend reserving in advance on Friday nights.',
    highlightDish: 'Smoked Whiskey Sour',
    verifiedVisit: true,
  },
];

export const OFFERS_AND_SPECIALS = [
  {
    id: 'o1',
    title: 'Happy Hours 1+1 Special',
    timing: 'Daily 4:00 PM – 8:00 PM',
    description: 'Enjoy 1+1 on selected craft brews, draught pours, and signature cocktails before the dinner rush.',
    status: 'verified',
    tag: 'Popular Evening Deal',
  },
  {
    id: 'o2',
    title: 'Executive Corporate Lunch Combos',
    timing: 'Monday to Friday · 12:00 PM – 3:30 PM',
    description: 'Curated 3-course business lunch with choice of starter, main course, bread/rice, and barista brewed coffee or soft beverage.',
    status: 'unconfirmed',
    tag: 'CBD Belapur Corporates',
  },
  {
    id: 'o3',
    title: 'Live Acoustic Music Weekends',
    timing: 'Wed, Fri, Sat & Sun from 8:00 PM',
    description: 'Unwind with soulful live acoustic musicians and retro band sets in an intimate bistro ambiance.',
    status: 'verified',
    tag: 'Live Entertainment',
  },
  {
    id: 'o4',
    title: 'Private Dining Room & Celebrations',
    timing: 'Available by advance booking',
    description: 'Exclusive private dining section suitable for birthday gatherings, team dinners, and anniversary celebrations.',
    status: 'verified',
    tag: 'Private Room',
  },
];
