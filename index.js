var a;
console.log(typeof a); // 'undifiend'

a = "mohammad";
console.log(typeof a); // 'string'

a = 23;
console.log(typeof a); // 'number'

a = true;
console.log(typeof a); // 'boolean'

a = function () {};
console.log(typeof a); // 'function'

a = null;
console.log(typeof a); // 'object'

a = {};
console.log(typeof a); // 'object'

a = [1, 2, 3, 4];
console.log(typeof a); // 'object'

console.log(Array.isArray(a)); // true

console.log(s);
