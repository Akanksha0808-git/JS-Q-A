# JS Interview Question and Ans

## ***Day 1*** 
 ---
## Q1 Difference between “ == “ and “ === “ operators.
### Ans-
      1. The "==" operator performs type coercion,    which means it   tries to convert the operands to a common type before making the comparison. For example, if you compare a string and a number using "==" like "10" == 10, it will try to convert the string to a number and then compare the values. In this case, it would return true because the string "10" can be converted to the number 10.

     2. On the other hand, the "===" operator does not perform type coercion. It compares both the value and the type of the operands directly. So, "10" === 10 would return false because the string "10" is not of the same type as the number 10.
---
## Q2- What are the differences between var, let and const?
### var - 
    1. Redeclare and reinitilized
    2. Global scope and Function Scope
    3. Hoisting
    4. Used before introduce ES6
### let
    1. not Redeclare and reinitilized
    2. no Hoisting
    3. Block scope, Global Scope
    4. TDZ
    5. introduce in ES6
### const
    1. not Redeclare and Not reinitilized 
    2. no Hoisting
    3. Block scope, Global Scope
    4. TDZ
    5. introduce in ES6
---
## Type of Scope
    1. Global Scope
    2. Function Scope
    3. Block Scope
    4. 
## Q3. Hoisting -
### Ans-
    Hoisting is the js mechanism where var and function declaration are moved to top of their scope before code execution.
    1. function Hoisting
    2. var keyword Hoisting
   Examples----

   
    console.log(a);
    var a = 10;

    Abc();
    function Abc(){
    console.log("Section!!!");
    }

## Q4. What is a Temporal Dead Zone (TDZ)?
    - when trying to acceess a variable before it's decleration with let and const keyword it throws a reference Error.
    - introduce to imporve the code quality by detecting & preventing to use variable.
## Q5. What is meant by first class functions?
    1. Assign a function to a variable is first class function.
   
    2. The ability of functions to be treated as values.
   
    3. passed as arguments to other functions, and returned as values from other functions.
--- 
## Q6 . Pure Function - 
    A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.

    Example----

    function Sum(a, b){
    return a * b;
    }
    Sum(10, 20)
    Sum(20, 20)
    Sum(20, 30)
---


