let car = { engine: { cylinders: 4, horsepower: 200 } };
let { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;

console.log(engineCylinders); // 4
console.log(engineHorsepower); // 200