let array = [2, 3, 4, 5];
let productWhile = 1;
let i = 0;


while (i < array.length) {
    productWhile *= array[i];
    i++;
}

console.log("Добуток елементів масиву (за допомогою циклу while):", productWhile);
