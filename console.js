// The console object in Node.js is crucial for debugging and logging. Its methods, such as console.log(), console.info(), and console.error(), can display messages, warnings, and errors. Other useful methods include console.time() and console.timeEnd() for measuring performance, console.table() for displaying tabular data, and console.trace() for printing a stack trace.
// Overall, the console object is an essential tool for developers working with Node.js, providing a range of useful methods for debugging and performance analysis. However, it is important to exercise caution when using it in production environments to prevent any potential negative impact on performance or security.

const demo = {part1: "This is a demonstration", part2: "of the console.log() method", part3: " "}

// Show full demo variable
console.log(demo)
// Show part 1 of demo 
console.log(demo.part1)
// Show part 2 of demo
console.log(demo.part2)
// Show full demo variable
console.log(demo.part1, demo.part2)

// Displaying error with console.error() 
if (demo.part3 === " ") {
    console.error("This is an error. No text found.")
}

// Start the timer
console.time("How long does a for loop take to execute 5 million times?")
// Creating for loop that executes 5000000 times
for (let i = 0; i < 5000000; i++) {
    // Insert code here
  }
  
// Stop the timer and display the time it took
console.timeEnd("How long does a for loop take to execute 5 million times?")


const student1 = {student: "John", grade: "90"}
const student2 = {student: "Michelle", grade: "100"}
const student3 = {student: "Joy", grade: "65"}
const student4 = {student: "Roy", grade: "30"}

// Display a table with the index, student name, and student grade
console.table([student1, student2, student3, student4])
// Display only index and student name
console.table([student1, student2, student3, student4], ["student"])
// Display only index and grade
console.table([student1, student2, student3, student4], ["grade"])
