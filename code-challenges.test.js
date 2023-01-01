// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// function: Declare a function fibReturn that will return an array containing the numbers of the fibonacci sequence.
// input: A number greater than two. Create a conditional that will identify numbers greater than 2.
// output: an array of numbers that corresponds to the length of the fibbonacci sequence. 

describe("fibReturn", () => {
  it("returns an array containing the requested values of the fibonacci sequence", () => {
    expect(fibReturn(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibReturn(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
  const fibReturn = (n) => {
    if (n===2)
    {
      return [1, 1];
    }
    else
    {
      var fibSeq = fibReturn(n - 1);
      fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
      return fibSeq;
    }
  }
console.log(fibReturn(fibLength1))
console.log(fibReturn(fibLength2))
// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// Function: Create a function called smallToBig that takes an object and returns the values of the key value pairs as an array. Take that new array and use the sort built in method to sort values from smallest to biggest and return the new sorted array.
// Input: Object
// Output: array of sortest values.
describe("smallToBig", () => {
  it("Sorts items in object from least to greatest", () => {
    expect(smallToBig({
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60})).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(smallToBig({
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    })).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

const smallToBig = (object) => {
  let array2 = Object.values(object)
   let sorted = array2.sort((a,b) => a - b)
     return sorted
}
console.log(smallToBig(studyMinutesWeek1))
console.log(smallToBig(studyMinutesWeek2))
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// Function: Create a function that takes in the values of the array and returns the first number plus the second number and so on. 
// Input: an array of numbers that are to be added accumulatively and added to a secondary array. 
// Output: an array of numbers with accumulative values. 
// Method: declare a function.
// Create a new array to take in the accumulative value of the first value.
// create two seperate variables x and y to work independantly within the program
// create conditional statements in order to filter the first value from the program without actually adding anything to it. 
// create a for loop that allows for incrementation of the array[i] that lasts until the length of the array. 
// push sum of two variables to new array
// return the new array.
// a) Create a test with expect statements for each of the variables provided.
describe("addToMe",()=>{
 it("adds accumulating values", () => {
    expect(addToMe([100, -17, -23, -9])).toEqual([100, 83, 60, 51])
    expect(addToMe([250, -89, 100, -96])).toEqual([250, 161, 261, 165])
    expect(addToMe([])).toEqual([])
})
})
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
const addToMe = (array) => {
  let x = array[0]
  let newArray = []
  for(i = 0; i < array.length; i++){
    if(i === 0){
      let sum = x
    newArray.push(sum)
    } else {
    let y = array[i]
    let sum = x + y
     x = sum
    newArray.push(sum)
  }
  }
  return newArray
  }
addToMe(accountTransactions1)
addToMe(accountTransactions2)
addToMe(accountTransactions3)
