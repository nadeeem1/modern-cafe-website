import type { MenuCategory, MenuCategoryFilter, MenuItem } from "../types";

/**
 * The full café menu. Items marked `featured` appear in the
 * "House favourites" strip on the home page.
 */
export const menuItems: MenuItem[] = [
  // ——— Coffee ———
  {
    id: "espresso",
    name: "Espresso",
    description: "A syrupy double shot of our current single origin — cocoa, dried fruit, gentle brightness.",
    price: 3.5,
    category: "coffee",
    image: "https://images.pexels.com/photos/302893/pexels-photo-302893.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Espresso extracting from a portafilter into a white cup.",
  },
  {
    id: "cortado",
    name: "Cortado",
    description: "Equal parts espresso and silky steamed milk, served in a small glass. Short, warm, honest.",
    price: 4.25,
    category: "coffee",
    image: "https://images.pexels.com/photos/31851151/pexels-photo-31851151.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Barista pouring steamed milk into a small coffee at the bar.",
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Ristretto shots under a thin veil of microfoam. Stronger than a latte, softer than a cortado.",
    price: 4.75,
    category: "coffee",
    image: "https://images.pexels.com/photos/14633306/pexels-photo-14633306.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Hand holding a ceramic cup of flat white with rosetta latte art.",
    tags: ["vegetarian"],
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "A classic third-each build with a deep, spoonable foam, dusted with single-origin cocoa.",
    price: 4.5,
    category: "coffee",
    image: "https://images.pexels.com/photos/31139336/pexels-photo-31139336.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Cappuccino with heart-shaped latte art on a wooden café table.",
    tags: ["vegetarian"],
  },
  {
    id: "signature-latte",
    name: "House Latte",
    description: "Double espresso, steamed Jersey milk and a touch of demerara. Also great on oat — no upcharge.",
    price: 4.95,
    category: "coffee",
    image: "https://images.pexels.com/photos/37034126/pexels-photo-37034126.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Warm-toned latte with intricate tulip latte art in a cozy café.",
    tags: ["vegetarian", "vegan"],
    featured: true,
  },
  {
    id: "pour-over",
    name: "Slow-Bar Pour Over",
    description: "Rotating single origin brewed by hand at the slow bar. Ask what is on the scale this week.",
    price: 5.5,
    category: "coffee",
    image: "https://images.pexels.com/photos/17641094/pexels-photo-17641094.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Barista hand-pouring water over a filter brew at the slow bar.",
    tags: ["vegan"],
  },
  {
    id: "cold-brew",
    name: "18-Hour Cold Brew",
    description: "Coarse-ground, steeped overnight and poured over one very large, very clear cube of ice.",
    price: 4.75,
    category: "coffee",
    image: "https://images.pexels.com/photos/13735958/pexels-photo-13735958.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Cold brew coffee being poured into a glass filled with ice.",
    tags: ["vegan"],
  },
  {
    id: "maple-mocha",
    name: "Maple Mocha",
    description: "Espresso, dark chocolate ganache and Oregon maple, finished with a pinch of smoked salt.",
    price: 5.5,
    category: "coffee",
    image: "https://images.pexels.com/photos/29642267/pexels-photo-29642267.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Barista dusting cocoa over a freshly made mocha behind the bar.",
    tags: ["vegetarian"],
    featured: true,
  },
  {
    id: "matcha-latte",
    name: "Ceremonial Matcha",
    description: "Stone-ground matcha whisked to order with your choice of milk — hot or over ice.",
    price: 5.25,
    category: "coffee",
    image: "https://images.pexels.com/photos/17366787/pexels-photo-17366787.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Bright green matcha latte with heart-shaped foam art in a white cup.",
    tags: ["vegetarian", "vegan"],
  },

  // ——— Pastries ———
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    description: "Laminated over three days with cultured butter. Shattering outside, honeycomb inside.",
    price: 3.75,
    category: "pastries",
    image: "https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Golden, flaky butter croissants lined up on a bakery tray.",
    tags: ["vegetarian"],
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Twice-baked with orange-zest frangipane and toasted almonds, finished with raw sugar.",
    price: 4.75,
    category: "pastries",
    image: "https://images.pexels.com/photos/28871875/pexels-photo-28871875.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Twice-baked croissants dusted with powdered sugar in the pastry case.",
    tags: ["vegetarian"],
    featured: true,
  },
  {
    id: "pain-au-chocolat",
    name: "Pain au Chocolat",
    description: "Dark chocolate batons wrapped in our croissant dough. Best slightly warm, always by 8 AM.",
    price: 4.25,
    category: "pastries",
    image: "https://images.pexels.com/photos/36405065/pexels-photo-36405065.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Pain au chocolat on a plate beside a cappuccino.",
    tags: ["vegetarian"],
  },
  {
    id: "croissant-board",
    name: "Mini Croissant Board",
    description: "Three baby croissants with cultured butter, seasonal jam and flaky salt. Built for sharing.",
    price: 6.5,
    category: "pastries",
    image: "https://images.pexels.com/photos/5112517/pexels-photo-5112517.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Golden croissants arranged on a wooden serving tray.",
    tags: ["vegetarian"],
  },
  {
    id: "pastry-box",
    name: "Weekend Pastry Box",
    description: "Six of the morning's best, boxed to go. Pre-order Friday — they never make it to noon.",
    price: 19.0,
    category: "pastries",
    image: "https://images.pexels.com/photos/32422492/pexels-photo-32422492.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Freshly baked croissants packed in a craft pastry box.",
    tags: ["vegetarian"],
  },

  // ——— Breakfast ———
  {
    id: "avocado-egg-toast",
    name: "Avocado & Egg Toast",
    description: "Sourdough from the bakers next door, smashed avocado, sunny egg, chili crunch and lime.",
    price: 9.5,
    category: "breakfast",
    image: "https://images.pexels.com/photos/7937471/pexels-photo-7937471.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Avocado toast topped with a sunny-side-up egg, radish and tomatoes.",
    tags: ["vegetarian"],
    featured: true,
  },
  {
    id: "poached-egg-sourdough",
    name: "Poached Egg & Greens",
    description: "Silky poached egg on toasted levain with garlicky kale, whipped feta and pickled shallot.",
    price: 10.5,
    category: "breakfast",
    image: "https://images.pexels.com/photos/8542164/pexels-photo-8542164.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Poached egg resting on avocado toast on a ceramic plate.",
    tags: ["vegetarian", "gluten-free"],
  },
  {
    id: "buttermilk-pancakes",
    name: "Buttermilk Pancakes",
    description: "Tall, tang-edged stack with whipped brown butter, warm maple and candied pecans.",
    price: 10.0,
    category: "breakfast",
    image: "https://images.pexels.com/photos/22873812/pexels-photo-22873812.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Stack of buttermilk pancakes with syrup on a breakfast plate.",
    tags: ["vegetarian"],
  },
  {
    id: "berry-french-toast",
    name: "Brioche French Toast",
    description: "Thick-cut brioche soaked overnight, griddled and piled with macerated market berries.",
    price: 10.75,
    category: "breakfast",
    image: "https://images.pexels.com/photos/36904805/pexels-photo-36904805.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "French toast topped with fresh strawberries and blackberries.",
    tags: ["vegetarian"],
  },
  {
    id: "morning-plate",
    name: "The Morning Plate",
    description: "Two eggs any style, avocado, roasted tomatoes, greens and grilled sourdough. Until 1 PM.",
    price: 11.5,
    category: "breakfast",
    image: "https://images.pexels.com/photos/7719180/pexels-photo-7719180.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Full breakfast plate with eggs, avocado toast and greens on marble.",
    tags: ["vegetarian"],
  },
];

export const menuCategories: { id: MenuCategoryFilter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "coffee", label: "Coffee" },
  { id: "pastries", label: "Pastries" },
  { id: "breakfast", label: "Breakfast" },
];

export const categoryDescriptions: Record<MenuCategory, string> = {
  coffee: "Espresso pulled on the Synesso, filter on the slow bar. Beans roasted twenty steps from your table.",
  pastries: "Laminated, proofed and baked in-house every morning. Gone when they are gone.",
  breakfast: "Plates from the little kitchen, served daily until 1 PM — 2 PM on weekends.",
};

export const featuredItems = menuItems.filter((item) => item.featured);

export function countByCategory(category: MenuCategoryFilter): number {
  if (category === "all") return menuItems.length;
  return menuItems.filter((item) => item.category === category).length;
}
