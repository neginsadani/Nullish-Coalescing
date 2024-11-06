const products = [
  { name: "Book", price: 20 },
  { name: "Pen", price: null },
  { name: "Notebook", price: undefined },
  { name: "Backpack" },
];

products.forEach((product) => {
  const price = product.price ?? 50;

  console.log(`Product: ${product.name}, Price: ${price}`);
});
