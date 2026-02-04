// Example for Question 8 — Array Method Refactor (filter + map)

function run() {
  console.log('Q8: Array Method Refactor (filter + map)');
  const numbers = [1, 2, 3, 4, 5];

  // Original code (preserved as comment):
  /*
  const numbers = [1, 2, 3, 4, 5];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i] * 2);
    }
  }
  */

  // Refactored using filter and map
  const result = numbers.filter(n => n % 2 === 0).map(n => n * 2);
  console.log('Expected result: [4, 8]');
  console.log('Actual result:', result);

  console.log('Why forEach is not suitable here:');
  console.log('- forEach is for side-effects and always returns undefined. filter/map are chainable and return new arrays.');
  console.log('---');
}

module.exports = { run };

if (require.main === module) run();
