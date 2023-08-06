// 1. Sum Zero
function addToZero(arr) {
    const set = new Set();

    for (let num of arr) {
        if (set.has(-num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}

/* Predicting runtime complexity: O(n) - The function 
 iterates through the input array once, and the operations 
performed inside the loop (adding to and checking the set) 
are constant time operations. */

console.log("\nSOLUTION 1")
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));



// 2. Unique Characters
function hasUniqueChars(word) {
    const charSet = new Set();

    for (let char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

/* Predicting Runtime complexity: O(n) - The function 
iterates through the input word once, and the operations 
performed inside the loop are constant time operations. */

console.log("\nSOLUTION 2")
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));



// 3. Pangram Sentence
function isPangram(sentence) {
    const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
    const lowerCaseSentence = sentence.toLowerCase();

    for (let char of lowerCaseSentence) {
        if (alphabetSet.has(char)) {
            alphabetSet.delete(char);
        }
    }

    return alphabetSet.size === 0;
}

/* Predicting Runtime complexity: O(n) - The function 
iterates through the input sentence once, and the operations 
performed inside the loop (deleting from the set) are 
constant time operations. */

console.log("\nSOLUTION 3")
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));



// 4. Longest Word
function findLongestWord(words) {
    let longestWordLength = 0;

    for (let word of words) {
        const wordLength = word.length;
        if (wordLength > longestWordLength) {
            longestWordLength = wordLength;
        }
    }

    return longestWordLength;
}
/* Predicting Runtime Complexity: O(n) - The function 
iterates through the input array of words once, and the 
operations performed inside the loop (comparing word lengths) 
are constant time operations. */

console.log("\nSOLUTION 4")
console.log(findLongestWord(["hi", "hello"]));
