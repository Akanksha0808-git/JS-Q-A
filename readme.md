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

## ***Day 2*** 
---
## Q7- What is execution context?
### Ans- 
For Synchronous JS

    1.GEC :It includes all the variables and functions declared in the global scope.

    2.Function Execution Context
    3.Memory Allocation
    4. Code Execution

For Asynchronous JS
    
    1.Event Loop
    2.Callback Queue 
    3.Call stack
---
## Q8- What is an event loop and call stack?
### Ans-
Call Stack:

    The call stack is a data structure that keeps track of function calls in the execution context. It follows the Last-In-First-Out (LIFO) principle, meaning that the last function pushed into the stack is the first one to be executed. When a function is called, it is pushed onto the stack, and when it completes, it is popped off the stack. This allows JavaScript to keep track of function calls and their execution order.

Event Loop:
    
    The event loop is a mechanism in JavaScript that handles asynchronous operations and ensures non-blocking behavior. JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, it can perform non-blocking operations such as fetching data from an API or waiting for a timer to complete without freezing the entire program.
 The event loop works by continuously checking if the call stack is empty. If the call stack is empty, it checks if there are any pending tasks or events in the event queue. If there are, it pushes the corresponding callbacks or event handlers onto the call stack for execution. This allows JavaScript to handle asynchronous operations and callbacks in an ordered and efficient manner.

 ---   

 ## Q9-What is creation phase and execution phase?
 ### Ans-
     Creation Phase: 
     
    During this phase, JavaScript sets up the environment for code execution by creating the Variable Object, setting up the Scope Chain, and determining the value of 'this'. It also performs hoisting by moving function declarations and variable declarations to the top of their respective scopes.

Execution Phase: 
     
     In this phase, JavaScript executes the code line by line, performing variable assignments, function invocations, expression evaluations, and control flow operations.
     
---
## Q9- What is the spread operator?
### Ans- 
     - Spread operator allows us to destructure the non-primitive datatype like object and array to access elemnets individually.
    - The spread operator is a feature in JavaScript that allows an iterable (such as an array or a string) to be expanded into individual elements. The spread operator is denoted by three dots (...).
    - The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
---
## Q10- What is use of setTimeout?
    - it is used to delay the output with given time.
    - The setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
## Q11-  What is setInterval?
    - They are going to excute the code after given time peroid.
  ---
## Q12-  What are callbacks?
    - A function that can pass inside another function as an argument.
    - A callback is a function that passed as an argument to another function.
  
  ---
## Q13-  Callback Hell
    - Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
---
## Q14-  Difference between undefined vs not defined vs NaN?
1. undefine - It represents a value that is declared but has not been assigned a value or does not exist.

Example-

     var x;
     console.log(x); // Output: undefined

2. not define -
    It refers to a variable or identifier that has not been declared or does not exist within the current scope.

 Example:

    console.log(y); // Output: ReferenceError: y is not defined

        
3. NaN - Not a Number

Example:

     console.log(0 / 0); // Output: NaN
---

