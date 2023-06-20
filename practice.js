//Q5

function Display(){

    let time =new Date();
    let hr = time.toLocaleTimeString();
    console.log(hr);

    setInterval(()=>{
        Display();
    },1000);


}
Display();




//Q9-Spread operator

//------Using Array---------

// Example 1: Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Copying an array
const originalArr = [1, 2, 3];
const copiedArr = [...originalArr];
console.log(copiedArr); // Output: [1, 2, 3]
console.log(originalArr === copiedArr); // Output: false (they are different arrays)

// Example 3: Adding elements to an existing array
const existingArr = [1, 2, 3];
const newArr = [...existingArr, 4, 5];
console.log(newArr); // Output: [1, 2, 3, 4, 5]

// Example 4: Converting iterable objects to arrays
const string = 'Hello';
const charArr = [...string];
console.log(charArr); // Output: ['H', 'e', 'l', 'l', 'o']




//--------spread opeartor using function--------------

function sumNumbers(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  
  const sum = sumNumbers(...numbers);
  
  console.log(sum); // Output: 6
  
  //--------spread opeartor using object--------------

  const person = {
    name: 'AK',
    age: 22,
  };
  
  const Info = {
    city: 'New York',
      ...person
  };
  
  
  console.log(person);
  console.log(Info);
  

//Q13-
asyncOperation1((error, result1) => {
    if (error) {
      handleError(error);
    } else {
      asyncOperation2(result1, (error, result2) => {
        if (error) {
          handleError(error);
        } else {
          asyncOperation3(result2, (error, result3) => {
            if (error) {
              handleError(error);
            } else {
              // ... more nested callbacks
            }
          });
        }
      });
    }
  });
  

