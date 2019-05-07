// Create callback
var reducer = function flatten (accumulator, value) {
    if (Array.isArray(value)) {
        // If array item is an array, flatten it recursive call
        return accumulator.concat(value.reduce(flatten, []));
    } else {
        // else append it to result array.
        return accumulator.concat(value);
    }
};

// Flatten class
function FlattenArray (inputArr) {
    // Check that input is an array to be flatten
    if (Array.isArray(inputArr)) {
        return inputArr.reduce(flatten, []);
    }
    else {
        throw new TypeError('Param should be an array');
    }
}

// Test
var inputArr = [[1,2,[3]],4];
var output = FlattenArray(inputArr);
var expected = [1,2,3,4];
var error = false;
for (var i=0; i<output.length; i++) {
    if (output[i] !== expected[i]) {
        error = true;
        break;
    }
}
if (error) {
    console.log('Array can\'t be flattened');
}
else {
    console.log('Array can be flattened');
}