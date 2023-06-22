# JS Interview Question and Ans

<h1 align="center">Day 1</h1>
 
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
    - when trying to acceess a variable before it's declaration with let and const keyword it throws a reference Error.
    - introduce to imporve the code quality by detecting & preventing to use variable.
## Q5. What is meant by first class functions?
    1. Assign a function to a variable is first class function.
   
    2. The ability of functions to be treated as values.
   
    3. passed as arguments to other functions, and returned as values from other functions.
--- 
## Q6 . Pure Function - 
### Ans-
    A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.

    Example----

    function Sum(a, b){
    return a * b;
    }
    Sum(10, 20)
    Sum(20, 20)
    Sum(20, 30)
---
<h1 align="center">Day 2</h1>

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

<h1 align="center">Day 3</h1>

---
## Q15- What are promises and why do we need them?
### Ans- 
    - Promise are use to handle async operation in JS. easy to handle callback hell, also use to handle the error.
    - basically in promise there are Three stages
  
    1. Pending-The initial state when the asynchronous operation is still ongoing and the final value is not available yet.
     2. Resolve - (.then method)The state when the asynchronous operation has completed successfully, and the promise has a resulting value.
     3. reject - (.catch mentod)The state when the asynchronous operation has failed, and the promise has a reason for the failure.
    - initial stage of any promise is always pending.
 Promises provide several benefits:

    1.Asynchronous control flow-avoiding deeply nested callback functions known as "callback hell." Promises chain together using methods like .then() and .catch(), making it easier to reason about the flow of asynchronous operations.
    2.Error handling-.catch() handler to a promise to handle any errors 
    3.Composition-.then() handler allows you to perform a series of asynchronous tasks sequentially 
    4.Synchronization-synchronize multiple asynchronous operations using `Promise.all()` 

## Q16 - We have three promise, and we want to combine all then and catch method by using Promise.all.
### Ans-
    const promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve(" promise 1 resolve")
    },2000)
    })
    const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("Promise2 resolve")
    },1000)
    })
    const promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("Promise3 resolve")
    },1500)
    })
    Promise.all ([promise1,promise2,promise3])
    .then((result)=>{
    console.group("All promises done")
    })

## Q17- What is promise chaining?
    - Its a technique to chain multiple asynchronous operation together using promises.
    - Promise chaining is a technique in JavaScript to execute multiple asynchronous operations in a specific order by chaining promises together using the then method
    - Multiple .then method.
  Example-
    
    function delay(ms) {
    return new Promise((resolve) => {
    setTimeout(resolve, ms);
    });
    }

    delay(1000)
    .then(() => {
    console.log('First step completed');
    return delay(2000);
    })
    .then(() => {
    console.log('Second step completed');
    return delay(3000);
    })
   .then(() => {
    console.log('Third step completed');
    })
   .catch((error) => {
    console.error('An error occurred:', error);
    });

  
## Q18 -DOM - Document Object Model
### Ans-
    - Document object model. basically it is javascript mechanism by which we can change the document structure, style, and content.
    - DOM is the data representation of the objects that comprise the structure and content of a document on the web.
    - Different method in DOM
      - Id - getElementById - return unique value
      - querySelector -       return unique value    
      - Class - getElementsByClassName 
      - tag Name - getElementsByTagName
      - querySelectorAll 

    - addEventListener - (event, callback function)

## Q19- Closure -
### Ans- 
    - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
    - Closure is the combination of two function (min).
    - inner function is able to excess the outer function variable but vise-varsa not possible.
    - outer func and inner func is going to create a Lixical environment.

## Q20- How many operators do we have in JS ?
### Ans- 
    1. Arithemic operator
       1. Add, Sub, Multi, Div(/), Module (%), Expontial (**), increment ++, decrement--
    2. Assignment Operator
       1. Assign (=), Add Assign (+=), Sub Assign (-=), (*=), (/=), (%=)
    3. Bitwise Operator
       1. Bitwise OR (|), Bitwise AND (&), Bitwise NOT (~), Left shift (<<), right shift(>>)
    4. Comparision Operator
       1. equal (==), strict equal (===), Not equal (!=), Strict Not equal (!==), greate than, less than, greate than equal, less than equal
    5. Logical Operator
       1. AND (&&)
       2. OR (||)
       3. Not (!)
    6. Ternary Operator
       1. (Condition) ? "Execute True Condition" : "Execute False Condition"
    7. typeof Operator
       1. return datatype

## Q21- What are objects in javascript?
### Ans-
    - Non-premitive data type
    - store date in the form of Key-Value pair saparated by colon.
    - Key - Properties : Value 

   <h1 align="center">Day 4</h1>
   
   ----

  ## Q22- Function Constructor - 
  ### Ans-
    - A function constructor is a way to create a object using a function as a blue print or template.
    - it allow you to define a reusable structure for creating multiple object with similar properties and method.

## Q23- Call(), Apply() and Bind ()
### Ans-
     These all three methods are used to invoke a function where we are supposed to pass an object as first argument and at the time of definition we don't have mention this object as a parameter and we can access the values of object by using this keyword in function definition.
    - Call : The call method is used to invoked a function with a specific 'this' value, and arguments provide individuly.
    - The call() method invokes a function in which first argument will be the object and rest of the arguments required by function will be provided as an individual arguments.
    - Apply : Apply is similar with call, but take argument as an array.
    -  The apply() method invokes a function in which first argument will be the object and rest of the arguments will be passed as an array of elements.
    - Bind - Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
    - The bind() method returns a new function and this function will be having the reference of the object passed, now whenever you want to use this returned function in the code you can use it by passing rest of the arguments.

## Q24- Async/Await - 
### Ans-
    - An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need promise chains.


## Q25- Inheritance:
### Ans-
    - Inheritance is a fundamental concept in object-oriented programming that allows objects to inherit properties and methods from other objects. It enables code reuse, promotes modularity, and facilitates the creation of hierarchical relationships between objects.
    - In JavaScript, inheritance is typically achieved through prototype-based inheritance. Objects in JavaScript can have a prototype, which is another object from which they inherit properties and methods.

## Q26- Prototype:
### Ans-
    - The prototype is an object that is associated with every JavaScript object. It serves as a blueprint or template for creating new objects through inheritance. The prototype object contains properties and methods that are shared among all instances created from it.
    - 
