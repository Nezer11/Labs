function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

let inputString = 'i like java script';
let outputString = capitalizeWords(inputString);
console.log(outputString); 