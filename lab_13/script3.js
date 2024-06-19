
let age = parseInt(prompt("Скільки вам років?"));

if (!isNaN(age)) {
    if (age >= 18) {
        console.log("Ви досягли повнолітнього віку.");
    } else {
        console.log("Ви ще надто молоді.");
    }
} else {
    console.log("Будь ласка, введіть число.");
}
