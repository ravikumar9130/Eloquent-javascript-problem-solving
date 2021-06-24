// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.

function range(start, end) {
    let total = 0;
    let array =[]
    for (let i = start; i <= end; i++){
        total += i
        
       array.push(total);
        
    }
    console.log(array)
    console.log(array.pop())
   
}
range(1,10)