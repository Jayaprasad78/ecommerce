// Define and export electronics products
const electronicsProducts = [
  {
    id: 1,
    name: 'Electronics1',
    price: '$199.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvg-aZreXB84S6bVcUWsLIPQkaH39sB_xDSg&s',
  },
  {
    id: 2,
    name: 'Electronics2',
    price: '$299.99',
    image: 'https://example.com/electronics2.jpg',
  },
  // Add more electronics products
];

// Define and export beauty products
const beautyProducts = [
  {
    id: 1,
    name: 'Beauty1',
    price: '$29.99',
    image: 'data:image/png;base64,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',
  },
  {
    id: 2,
    name: 'Beauty2',
    price: '$49.99',
    image: 'https://example.com/beauty2.jpg',
  },
  // Add more beauty products
];

// Define and export fashion products
const fashionProducts = [
  {
    id: 1,
    name: 'Fashion1',
    price: '$59.99',
    image: 'https://example.com/fashion1.jpg',
  },
  {
    id: 2,
    name: 'Fashion2',
    price: '$79.99',
    image: 'https://example.com/fashion2.jpg',
  },
  // Add more fashion products
];

// Define and export sports products
const sportsProducts = [
  {
    id: 1,
    name: 'Sports1',
    price: '$49.99',
    image: 'https://example.com/sports1.jpg',
  },
  {
    id: 2,
    name: 'Sports2',
    price: '$89.99',
    image: 'https://example.com/sports2.jpg',
  },
  // Add more sports products
];

// Define and export health products
const healthProducts = [
  {
    id: 1,
    name: 'Health1',
    price: '$19.99',
    image: 'https://example.com/health1.jpg',
  },
  {
    id: 2,
    name: 'Health2',
    price: '$39.99',
    image: 'https://example.com/health2.jpg',
  },
  // Add more health products
];

// Define and export stationary products
const stationaryProducts = [
  {
    id: 1,
    name: 'Stationary1',
    price: '$9.99',
    image: 'https://example.com/stationary1.jpg',
  },
  {
    id: 2,
    name: 'Stationary2',
    price: '$14.99',
    image: 'https://example.com/stationary2.jpg',
  },
  // Add more stationary products
];

// Define and export automotive products
const automotiveProducts = [
  {
    id: 1,
    name: 'Automotive1',
    price: '$199.99',
    image: 'https://example.com/automotive1.jpg',
  },
  {
    id: 2,
    name: 'Automotive2',
    price: '$299.99',
    image: 'https://example.com/automotive2.jpg',
  },
  // Add more automotive products
];

// Define and export kitchen products
const kitchenProducts = [
  {
    id: 1,
    name: 'Kitchen1',
    price: '$49.99',
    image: 'https://example.com/kitchen1.jpg',
  },
  {
    id: 2,
    name: 'Kitchen2',
    price: '$79.99',
    image: 'https://example.com/kitchen2.jpg',
  },
  // Add more kitchen products
];

// Define and export pet supply products
const petSupplyProducts = [
  {
    id: 1,
    name: 'PetSupply1',
    price: '$29.99',
    image: 'https://example.com/petsupply1.jpg',
  },
  {
    id: 2,
    name: 'PetSupply2',
    price: '$39.99',
    image: 'https://example.com/petsupply2.jpg',
  },
  // Add more pet supply products
];

// Define and export gift products
const giftProducts = [
  {
    id: 1,
    name: 'Gift1',
    price: '$19.99',
    image: 'https://example.com/gift1.jpg',
  },
  {
    id: 2,
    name: 'Gift2',
    price: '$29.99',
    image: 'https://example.com/gift2.jpg',
  },
  // Add more gift products
];

// Define and export luggage products
const luggageProducts = [
  {
    id: 1,
    name: 'Luggage1',
    price: '$99.99',
    image: 'https://example.com/luggage1.jpg',
  },
  {
    id: 2,
    name: 'Luggage2',
    price: '$149.99',
    image: 'https://example.com/luggage2.jpg',
  },
  // Add more luggage products
];

// Export all product arrays
export {
  electronicsProducts,
  beautyProducts,
  fashionProducts,
  sportsProducts,
  healthProducts,
  stationaryProducts,
  automotiveProducts,
  kitchenProducts,
  petSupplyProducts,
  giftProducts,
  luggageProducts,
};
