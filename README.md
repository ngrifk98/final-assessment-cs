# Assessment - Summary

This repository contains my solutions for the assessment, including the code for the problems provided and the analysis for each task. 

## Contents

1. [Introduction](#introduction)
2. [Steps to Run the Code](#steps-to-run-the-code)
3. [Problem Solutions](#problem-solutions)
   - Step 1: Runtime Analysis
   - Step 2: Problem Solutions
     - Problem 1: Sum Zero
     - Problem 2: Unique Characters
     - Problem 3: Pangram Sentence
     - Problem 4: Longest Word
4. [Explanation and Extra Credit](#explanation-and-extra-credit)
5. [Conclusion](#conclusion)

## Introduction

This assessment includes two main steps. In Step 1, we analyzed the runtime of the given code in "runtime.js" and identified the differences between the two functions, `doublerAppend` and `doublerInsert`. Additionally, we measured the execution time of each function for various array sizes to compare their scalability.

In Step 2, we solved four coding problems in JavaScript and provided the runtime complexity for each solution. The problems included checking for zero-sum pairs, unique characters in a word, identifying a pangram sentence, and finding the length of the longest word in a list.

## Steps to Run the Code

To run the code for each problem, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the directory where the code is located.
3. For Step 1 (runtime.js), run the command `node runtime.js` to observe the timing results for different array sizes.
4. For Step 2 (problems.js), you can copy the code for each problem function into your preferred JavaScript environment or run a specific function using Node.js.

## Problem Solutions

### Problem 1: Sum Zero

The `addToZero` function checks if any two numbers in a given array sum to zero. The solution uses a set to keep track of seen elements and returns `true` if a zero-sum pair is found, otherwise `false`.

**Runtime Complexity**: O(n) - The function iterates through the input array once, and the operations inside the loop are constant time.

### Problem 2: Unique Characters

The `hasUniqueChars` function checks if a given word contains only unique characters. It uses a set to keep track of seen characters and returns `true` if all characters are unique, otherwise `false`.

**Runtime Complexity**: O(n) - The function iterates through the input word once, and the operations inside the loop are constant time.

### Problem 3: Pangram Sentence

The `isPangram` function checks if a given sentence is a pangram (contains all English alphabet letters at least once). It uses a set to track seen letters and returns `true` if all letters are present, otherwise `false`.

**Runtime Complexity**: O(n) - The function iterates through the input sentence once, and the operations inside the loop are constant time.

### Problem 4: Longest Word

The `findLongestWord` function finds the length of the longest word in a list of words. It returns the length of the longest word found.

**Runtime Complexity**: O(n) - The function iterates through the input array of words once, and the operations inside the loop are constant time.

## Explanation and Extra Credit

For an in-depth explanation and the extra credit section, please refer to the attached Word document.

## Conclusion

This assessment provided the opportunity to analyze code performance, implement solutions for coding problems, and analyze the runtime complexities of the solutions. It also included an exploration of space complexity and the comparison of different functions' scalability.