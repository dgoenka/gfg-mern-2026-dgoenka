// Example for Question 6 — Control Flow Refactoring (switch, invalid input handling)

function getDayType(day) {
  // Normalize input to avoid case-sensitivity issues
  if (typeof day !== 'string') return 'Invalid day';
  const d = day.trim();

  switch (d) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return 'Weekday';
    case 'Saturday':
    case 'Sunday':
      return 'Weekend';
    default:
      return 'Invalid day';
  }
}

function run() {
  console.log('Q6: Control Flow Refactoring');
  const tests = ['Monday', 'Saturday', 'Funday', null, ' Sunday '];
  for (const t of tests) {
    console.log(`Input: ${JSON.stringify(t)} -> ${getDayType(t)}`);
  }
  console.log('---');
}

module.exports = { run, getDayType };

if (require.main === module) run();
