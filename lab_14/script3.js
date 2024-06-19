function findMin() {
    
    let args = Array.from(arguments);
    
   
    let min = args[0];

   
    for (let i = 1; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }

    
    return min;
}


console.log(findMin(12, 14, 4, -4, 0.2)); // => -4
