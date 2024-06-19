let x = 1;
let y = 2;

// Конкатенація рядків
let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

// Порівняння чисел з рядком
let res2 = Boolean(x < y) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

// Порівняння чисел
let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

// Виконання невірної математичної операції
let res4 = x - "a";
console.log(res4); // NaN
console.log(typeof res4); // "number"