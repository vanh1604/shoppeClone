const mockData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    rating: 4.5,
    loc: "Hanoi",
    status: "Yeu thich",
    note: ["rẻ vô địch", "mua kèm deal sốc", "giam 10k"],
    discount: 15,
    bestSeller: 1745,
    description:
      "High-quality wireless headphones with noise-cancelling feature, comfortable ear pads, and 30-hour battery life.",
    image:
      "https://images.unsplash.com/photo-1735528655501-cf671a3323c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Audio",
    lastUpdated: "2025-03-05",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 59.99,
    rating: 4.2,
    loc: "Hanoi",
    status: "Yeu thich",
    discount: 45,
    bestSeller: 46,
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "Portable Bluetooth speaker with clear sound quality and 12 hours of playtime, perfect for outdoor use.",
    image:
      "https://images.unsplash.com/photo-1735528655501-cf671a3323c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Audio",
    lastUpdated: "2025-02-20",
  },
  {
    id: 3,
    name: "Smartphone Stand",
    price: 19.99,
    rating: 4.8,
    loc: "Hanoi",
    status: "Yeu thich",
    discount: 45,
    bestSeller: 200,
    bestSeller: 79,
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "Adjustable smartphone stand with sturdy base, ideal for video calls, watching movies, or reading.",
    image: "https://via.placeholder.com/150?text=Smartphone+Stand",
    category: "Accessories",
    lastUpdated: "2025-03-01",
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    price: 39.99,
    rating: 4.6,
    loc: "Hanoi",
    bestSeller: 5789,
    discount: 45,
    status: "Yeu thich",
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "Energy-efficient LED desk lamp with adjustable brightness and color temperature, perfect for home office use.",
    image: "https://via.placeholder.com/150?text=LED+Desk+Lamp",
    category: "Home & Office",
    lastUpdated: "2025-03-03",
  },
  {
    id: 5,
    name: "Fitness Tracker Watch",
    price: 129.99,
    rating: 4.7,
    discount: 45,
    loc: "Hanoi",
    bestSeller: 324,
    status: "Yeu thich",
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "A sleek fitness tracker with heart rate monitor, sleep tracking, step counting, and waterproof design.",
    image: "https://via.placeholder.com/150?text=Fitness+Tracker+Watch",
    category: "Wearables",
    lastUpdated: "2025-01-25",
  },
  {
    id: 6,
    name: "Portable Power Bank",
    price: 25.99,
    rating: 4.4,
    discount: 45,
    bestSeller: 567678,
    loc: "Hanoi",
    status: "Yeu thich",
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "Compact power bank with 10,000mAh capacity, fast charging capabilities, and dual USB ports.",
    image: "https://via.placeholder.com/150?text=Portable+Power+Bank",
    category: "Accessories",
    lastUpdated: "2025-02-10",
  },
  {
    id: 7,
    name: "Laptop Sleeve",
    price: 29.99,
    rating: 4.3,
    discount: 45,
    bestSeller: 3425,
    loc: "Hanoi",
    status: "Yeu thich",
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "Stylish and protective laptop sleeve with water-resistant fabric and a soft interior lining to protect your device.",
    image: "https://via.placeholder.com/150?text=Laptop+Sleeve",
    category: "Accessories",
    lastUpdated: "2025-03-04",
  },
  {
    id: 8,
    name: "Smart Thermostat",
    price: 149.99,
    rating: 4.9,
    discount: 45,
    loc: "Hanoi",
    status: "Yeu thich",
    bestSeller: 790,
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "Smart thermostat with remote control, energy-saving features, and easy installation.",
    image: "https://via.placeholder.com/150?text=Smart+Thermostat",
    category: "Home Automation",
    lastUpdated: "2025-03-02",
  },
  {
    id: 9,
    name: "Electric Toothbrush",
    price: 69.99,
    rating: 4.7,
    loc: "Hanoi",
    bestSeller: 124,
    discount: 45,
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    status: "",
    description:
      "Powerful electric toothbrush with multiple brushing modes and a 2-minute timer for thorough cleaning.",
    image: "https://via.placeholder.com/150?text=Electric+Toothbrush",
    category: "Personal Care",
    lastUpdated: "2025-03-03",
  },
  {
    id: 10,
    name: "Gaming Mouse",
    price: 49.99,
    rating: 4.6,
    discount: 45,
    loc: "Hanoi",
    status: "Yeu thich",
    bestSeller: 2345,
    note: ["rẻ vô địch", "mua kèm deal sốc"],
    description:
      "Ergonomic gaming mouse with customizable buttons, adjustable DPI, and RGB lighting.",
    image: "https://via.placeholder.com/150?text=Gaming+Mouse",
    category: "Accessories",
    lastUpdated: "2025-02-15",
  },
];
export default mockData;
