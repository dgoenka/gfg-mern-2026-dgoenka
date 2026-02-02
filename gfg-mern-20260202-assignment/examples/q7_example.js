// Example for Question 7 — Loop Selection

function run() {
  console.log('Q7: Loop Selection');
  const scores = [10, 20, 30, 40];

  console.log('Using for...of:');
  for (const score of scores) {
    console.log(score);
  }

  console.log('Using traditional for (index):');
  for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
  }

  console.log('When to prefer each:');
  console.log('- Use for...of for direct value iteration and clearer syntax.');
  console.log('- Use for with index when you need the index, to loop partially, or complex increments.');
  console.log('---');
}

module.exports = { run };
