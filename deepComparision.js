// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.
// 80
// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values
// of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can use the typeof operator.
let a = 2;
let b = 2;
function deepEqual(a,b) {
    if ( a === b ) {
        console.log("Value and datatype both are equal")
    }
}
if ( a ==  b) {
   

    
    console.log("Only the values are equal");
    deepEqual(a, b)
    return true;
} else {
    console.log("the two values are not equal")
}


