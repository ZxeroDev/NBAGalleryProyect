let a = 5;
let b = 10;

console.log("Antes:");
console.log("a =", a);
console.log("b =", b);

// Intercambio con variable auxiliar
let temp = a;
a = b;
b = temp;

console.log("Después:");
console.log("a =", a);
console.log("b =", b);