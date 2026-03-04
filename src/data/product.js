
const products = [
  {
    "id": 1,
    "name": "Ethereal Peak Backpack",
    "price": 89.99,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    "description": "A minimalist, water-resistant backpack designed for the modern urban explorer. Features a 15-inch padded laptop sleeve."
  },
  {
    "id": 2,
    "name": "Lunar Echo Headphones",
    "price": 249.50,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    "description": "Immersive noise-canceling technology paired with 40-hour battery life. Experience studio-quality sound anywhere."
  },
  {
    "id": 3,
    "name": "MacBook-Pro",
    "price": 500.00,
    "image": "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    "description": "Elevate your morning ritual with this matte-finish ceramic kettle. Precision pour spout for artisanal drip coffee."
  },
  {
    "id": 4,
    "name": "Terra Firma Sneakers",
    "price": 120.00,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    "description": "Eco-friendly footwear crafted from recycled ocean plastics. Lightweight, breathable, and designed for all-day comfort."
  },
  {
    "id": 5,
    "name": "Nova Smart Watch",
    "price": 199.99,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    "description": "Track your health with precision. Features blood oxygen monitoring, GPS, and a stunning Always-On display."
  },
  {
    "id": 6,
    "name": "Obsidian Mechanical Keyboard",
    "price": 155.00,
    "image": "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
    "description": "Tactile precision in every keystroke. Crafted with an aluminum frame and customizable RGB backlighting for pros."
  },
  {
    "id": 7,
    "name": "Zenith Espresso Machine",
    "price": 450.00,
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=800",
    "description": "Bring the café experience home. Dual-boiler system for simultaneous milk steaming and espresso extraction."
  },
  {
    "id": 8,
    "name": "Aura Desk Lamp",
    "price": 45.00,
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800",
    "description": "Smart LED lighting with adjustable color temperatures. Reduces eye strain during late-night coding sessions."
  },
  {
    "id": 9,
    "name": "Atlas Leather Wallet",
    "price": 38.00,
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
    "description": "Slim, full-grain leather wallet with RFID blocking technology. Holds up to 8 cards and cash without the bulk."
  },
  {
    "id": 10,
    "name": "Vortex Portable Speaker",
    "price": 79.00,
    "image": "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=800",
    "description": "360-degree sound with deep bass. IPX7 waterproof rating makes it perfect for pool parties or rugged camping."
  },
  {
    "id": 11,
    "name": "Coffee",
    "price": 7.00,
    "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHww",
    "description": "360-degree sound with deep bass. IPX7 waterproof rating makes it perfect for pool parties or rugged camping."
  },{
    "id": 12,
    "name": "portable Flower Vase",
    "price": 109.00,
    "image": "https://images.unsplash.com/photo-1647156776850-0923ec49bc90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZsb3dlcnMlMjB2YXNlfGVufDB8fDB8fHww",
    "description": "360-degree sound with deep bass. IPX7 waterproof rating makes it perfect for pool parties or rugged camping."
  }
]

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
