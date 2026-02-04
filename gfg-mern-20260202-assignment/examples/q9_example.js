// Example for Question 9 — reduce (Advanced)

function computeTotal(cart) {
  if (!Array.isArray(cart)) throw new TypeError('cart must be an array');
  if (cart.length === 0) return { totalBeforeTax: 0, totalAfterTax: 0 };

  const totalBeforeTax = cart.reduce((sum, { price = 0 } = {}) => sum + price, 0);
  const totalAfterTax = +(totalBeforeTax * 1.18).toFixed(2);
  return { totalBeforeTax, totalAfterTax };
}

function run() {
  console.log('Q9: reduce (compute total with tax and handle empty cart)');
  const cart = [
    { item: 'Book', price: 200 },
    { item: 'Pen', price: 50 },
    { item: 'Bag', price: 750 }
  ];

  console.log('Cart:', cart);
  console.log('Computed totals:', computeTotal(cart));

  console.log('Empty cart gives:', computeTotal([]));
  console.log('---');
}

module.exports = { run, computeTotal };

if (require.main === module) run();
