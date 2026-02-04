// Example for Question 5 — Arrow Functions and `this`

// Show that arrow functions don't bind their own `this` and how to fix it.
function run() {
  console.log('Q5: Arrow Functions and this');

  const counter1 = { count: 0, increment: () => { this.count++; } };
  counter1.increment();
  console.log('Using arrow function (expected 0):', counter1.count);

  // Correct approach: use a normal function so `this` refers to the object
  const counter2 = { count: 0, increment: function () { this.count++; } };
  counter2.increment();
  console.log('Using regular function (expected 1):', counter2.count);

  // Another modern approach: use a method shorthand (also binds to the object)
  const counter3 = { count: 0, increment() { this.count++; } };
  counter3.increment();
  console.log('Using method shorthand (expected 1):', counter3.count);

  console.log('---');
}

module.exports = { run };

if (require.main === module) run();
