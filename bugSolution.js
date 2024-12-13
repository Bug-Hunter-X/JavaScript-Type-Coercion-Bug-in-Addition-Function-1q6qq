function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  if (a === null || b === null) {
    return null;
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo('1', 2)); // Error: Inputs must be numbers
console.log(foo(1, '2')); // Error: Inputs must be numbers