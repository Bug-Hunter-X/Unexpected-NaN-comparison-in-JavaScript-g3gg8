function foo(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return true; // Handle NaN cases
  } else if (a === b) {
    return true; 
  }
  return false;
}

console.log(foo(NaN, NaN)); // true
console.log(foo(NaN, 0)); // false
console.log(foo(0,0)); // true