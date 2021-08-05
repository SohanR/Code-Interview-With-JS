# Code-Interview-With-JS
Coding interviews problem and solutions with Javascript.

This repo is about practice Coding with most common topics thats asked by tech companies like bigO hash table etc and will try to solve some company questions with javascript.

I also practice coding in few platform like [leetcode](https://github.com/SohanR/LeetCode-solution) ,[hackerRank](https://github.com/SohanR/HackerRank) and [codeforces](https://github.com/SohanR/codeforces), i have separate repo for each platform.


# Big O

## Type of Big Os

- **O(1)**: Constant- no loops
- **O(log N)**: Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search).
- **O(n)**: Linear- for loops, while loops through n items.
- **O(n log(n))**: Log Liniear- usually sorting operations
- **O(n^2)**: Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops.
- **O(2^n)**: Exponential- recursive algorithms that solves a problem of size N.
- **O(n!)**: Factorial- you are adding a loop for every element.

**Iterating through half a collection is still O(n)**
**Two separate collections: O(a * b)**

## What can cause time in a function?

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

## Rule Book

- **Rule 1**: Always worst Case
- **Rule 2**: Remove Constants
- **Rule 3**: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
    - plus(+) for steps in order
    - multiply(*) for nested steps
- **Rule 4**: Drop Non-dominant terms

## What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations



# What are companies looking for ?

- ### 1.Analytic Skills

    How can you think through a problems and analyze things, and when you're coding during interview they want to hear your thought process and how you go from not knowing the answer to solving the problem.
- ### 2.Coding SKills

    Is your code clean well, organized readable ?
- ### 3.Technical Skills

    Did you just memorize things or do you understand the pros and cons of different solutions ?

- ### 4.Communication Skills

    Does your personality match their companies personality ? Can you communicate well with others with the team most likely you won't be working by yourself but with others.


# Good Code
## The 3 pillars of good code:
- 1. Readable 
- 2. Time Complexity
- 3. Space Complexity


## Good code checklist

- [✅]It works 
- [✅]Good use of data structures
- [✅]Code Re-use/ Do Not Repeat Yourself
- [✅]Modular - makes code more readable, maintainable and testable
- [✅]Less than O(N^2). We want to avoid nested loops if we can since they are expensive. Two
separate loops are better than 2 nested loops
- [✅]Low Space Complexity --> Recursion can cause stack overflow, copying of large arrays may
exceed memory of machine