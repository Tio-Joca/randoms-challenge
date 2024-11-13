function generateNumbers (x)    {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
                    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
                    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
                    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
                    51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
    const result = [];
    let index;
    let available = 60;

    while (x > 0 && available > 0)  {
        if (available > 1)  {
            index = Math.floor(Math.random() * available--);
            result.push(numbers[index]);
            numbers.splice(index, 1);
        }   else    {
            result.push(numbers[--available]);
        }
        x--;  
    }
    return result;
}

let startExecution = performance.now();

//console.time('time');

console.log(generateNumbers(60));

//console.timeEnd('time');

let endExecution = performance.now();

console.log('\n' + (endExecution - startExecution));