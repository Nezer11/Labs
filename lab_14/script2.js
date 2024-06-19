let array = [2, 3, 4, 5];
let productFor = 1;


for (let i = 0; i < array.length; i++) {
    productFor *= array[i];
}

console.log("Добуток елементів масиву (за допомогою циклу for):", productFor);
