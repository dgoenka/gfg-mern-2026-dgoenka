// Example for Question 10 — Real-World Debugging (map vs filter)

function run() {
  console.log('Q10: Real-World Debugging (map vs filter)');
  const users = [
    { name: 'A', active: true },
    { name: 'B', active: false },
    { name: 'C', active: true }
  ];

  // Buggy version (what was given):
  const buggy = users.map(user => { if (user.active) { user.name; } });
  console.log('Buggy output (expected array with names of active users, but this is wrong):', buggy);

  // Fixed: use filter to select active users, then map to names
  const activeUsers = users.filter(u => u.active).map(u => u.name);
  console.log('Fixed output (expected ["A", "C"]):', activeUsers);

  console.log('Difference between map and filter:');
  console.log('- map transforms each element and returns an array of same length.');
  console.log('- filter selects a subset and returns only matching elements.');
  console.log('---');
}

module.exports = { run };

if (require.main === module) run();
