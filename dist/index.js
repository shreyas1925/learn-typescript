"use strict";
let fname = "Shreyas";
fname = "Shettigar";
console.log(fname);
let nums = 90;
const numsarr = [45, 21, 3, 6];
numsarr.push(7); //But other than number type i cannot put anything
//tuples where i am specifiying each and every one
let users = ["Paul", 45, true];
//Array of users
let usersarr = [
    ["Annie", 45],
    ["Bean", 78],
    ["Dassey", 9],
];
console.log(users[1]);
// Union ----> like an OR opeartor where I can specify this or that 😁
let studUSN;
studUSN = "4NI19IS094";
console.log(studUSN);
// now what is enum -->  "Enums allow a developer to define a set of named constants.
// Using enums it assists us easier way to document intent, or create a set of distinct cases.
// TypeScript provides both numeric and string-based enums."
// character of enum is it will now set all constants in the order of 0,1,2,3 -----> But I can change it by changing first index
var Day;
(function (Day) {
    Day[Day["morning"] = 1] = "morning";
    Day[Day["afternoon"] = 2] = "afternoon";
    Day[Day["evening"] = 3] = "evening";
    Day[Day["night"] = 4] = "night";
})(Day || (Day = {}));
// if i initialize one value using string then I have to do it for all ... It does not increment as it does for number
console.log(Day.afternoon);
console.log(Day[2]);
const employee = {
    empid: 74,
    empname: "Shreyas",
};
// employee.empid = "589"; cannot because it must be a number
console.log(employee.empid);
// const employees = {    <-----  like this all we cannot because we know if i specify this like what
//  have done below it takes example number as a value but it's not so specify in the above way
//   empid:number ,
//   empname: "Shreyas",
// };
// Type assertions
let cid = 90; //only from "any" type we can go for other type not like number to string and stuffs
let new_cid = cid;
// or
let new__cid = cid;
new_cid = "444";
new__cid = 444;
console.log(new_cid);
console.log(new__cid);
// Functions
const average = (a, b) => {
    return (a + b) / 2;
};
console.log(average(5, 4));
const greet = (name) => {
    console.log(`Hello ✌️ Welcome to Typescript ${name}`);
};
greet("Shreyas");
const students = {
    studid: 5,
    studname: "Benjamin",
    gender: "male",
};
const addition = (a, b) => {
    return a + b;
};
console.log(addition(19, 25));
