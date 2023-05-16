import moment from "moment" 

// get today's date
const today = moment();
// setting the format for today's date
const todayFormatted = today.format("MM/DD/YYYY");
console.log(todayFormatted);

// get the current month
const curMonth = today.month();
console.log(curMonth);

// get the total days in the month
const totDays = today.daysInMonth();
console.log(totDays);    

// get 9 days in the future 
const future = today.add("5", "days");
console.log(future);

// get 9 days in the past 
const past = today.subtract("9", "days");
console.log(past);

// displaying the current date as an array
const timeArray = moment().toArray();
console.log(timeArray);
