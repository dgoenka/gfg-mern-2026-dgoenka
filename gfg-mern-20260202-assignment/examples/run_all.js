// Runner to execute all question examples
const q4 = require('./q4_example');
const q5 = require('./q5_example');
const q6 = require('./q6_example');
const q7 = require('./q7_example');
const q8 = require('./q8_example');
const q9 = require('./q9_example');
const q10 = require('./q10_example');

async function runAll() {
  console.log('Running all examples from examples/');
  q4.run();
  q5.run();
  q6.run();
  q7.run();
  q8.run();
  q9.run();
  q10.run();
  console.log('All examples finished.');
}

if (require.main === module) runAll();

module.exports = { runAll };
