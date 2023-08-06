const perf = require('execution-time')();

function doublerAppend(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given array?

// Timing results for different array sizes
const results = [];

function timeFunctionExecution(func, array, label) {
    perf.start(); // Starts timer
    func(array);
    let result = perf.stop(); // Stops timer and save time results
    results.push({ label, time: result.preciseWords });
}

timeFunctionExecution(doublerAppend, tinyArray, 'tinyArray');
timeFunctionExecution(doublerAppend, smallArray, 'smallArray');
timeFunctionExecution(doublerAppend, mediumArray, 'mediumArray');
timeFunctionExecution(doublerAppend, largeArray, 'largeArray');
timeFunctionExecution(doublerAppend, extraLargeArray, 'extraLargeArray');

timeFunctionExecution(doublerInsert, tinyArray, 'tinyArray');
timeFunctionExecution(doublerInsert, smallArray, 'smallArray');
timeFunctionExecution(doublerInsert, mediumArray, 'mediumArray');
timeFunctionExecution(doublerInsert, largeArray, 'largeArray');
timeFunctionExecution(doublerInsert, extraLargeArray, 'extraLargeArray');

console.log('Results for the different array sizes');
console.table(results);
