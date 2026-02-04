// Example for Question 4 — Scope (var, let, const)

// Demonstrates how `var` is function-scoped/hoisted vs `let` block-scoped.
function run() {
  console.log('Q4: Scope (var vs let)');

  // Original (using var)
  for (var i = 0; i < 3; i++) {}
  // `var` is function-scoped, so `i` is still accessible here and equals 3
  console.log('Using var - value of i after loop (expected 3):', i);

  // Using `let` in the loop header — block scoped
  try {
    for (let j = 0; j < 3; j++) {}
    // `j` is not defined here because `let` is block-scoped — this will throw
    console.log('Using let in header - value of j after loop (expected ReferenceError):', j);
  } catch (err) {
    console.log('Using let in header - accessing j after loop throws (expected):', err.message);
  }

  // Declare with let outside the loop — predictable block scope but still accessible
  let k = 0;
  for (k = 0; k < 3; k++) {}
  console.log('Let declared outside loop - k after loop (expected 3):', k);

  console.log('---');
}

module.exports = { run };

// Run when executed directly
if (require.main === module) run();
