let fname: string = "Shreyas";
fname = "Shettigar";

console.log(fname);

let nums: number = 90;
const numsarr: number[] = [45, 21, 3, 6];

numsarr.push(7); //But other than number type i cannot put anything

//tuples where i am specifiying each and every one
let users: [string, number, boolean] = ["Paul", 45, true];

//Array of users

let usersarr: [string, number][] = [
  ["Annie", 45],
  ["Bean", 78],
  ["Dassey", 9],
];

console.log(users[1]);

// Union ----> like an OR opeartor where I can specify this or that 😁

let studUSN: number | string;

studUSN = "4NI19IS094";

console.log(studUSN);

// now what is enum -->  "Enums allow a developer to define a set of named constants.
// Using enums it assists us easier way to document intent, or create a set of distinct cases.
// TypeScript provides both numeric and string-based enums."

// character of enum is it will now set all constants in the order of 0,1,2,3 -----> But I can change it by changing first index
enum Day {
  morning = 1,
  afternoon,
  evening,
  night,
}
// if i initialize one value using string then I have to do it for all ... It does not increment as it does for number
console.log(Day.afternoon);
console.log(Day[2]);

// Objects in TypeScript -----> 🚀

// In tuple array or something we can use many types of datatypes but in objects we can specify each and every one what contains what type of data

const employee: {
  empid: number;
  empname: string;
} = {
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
