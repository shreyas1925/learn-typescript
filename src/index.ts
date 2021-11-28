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

type Emp = {
  //we can also do in this way other than writing these stuffs in the part where Emp is written in employee object
  empid: number;
  empname: string;
};

const employee: Emp = {
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

let cid: any = 90; //only from "any" type we can go for other type not like number to string and stuffs

let new_cid = cid as string;

// or

let new__cid = <number>cid;

new_cid = "444";
new__cid = 444;
console.log(new_cid);
console.log(new__cid);

// Functions

const average = (a: number, b: number): number => {
  return (a + b) / 2;
};

console.log(average(5, 4));

const greet = (name: string | number): void => {
  console.log(`Hello ✌️ Welcome to Typescript ${name}`);
};
greet("Shreyas");

// interfaces

//same like objects but there are some differences and extra features
// interface is like defined strutured we have go on it's way

interface Students {
  //some extra features like
  readonly gender: string;
  age?: number; // ? stands for optional
  studid: number;
  studname: string;
}

const students: Students = {
  studid: 5,
  studname: "Benjamin",
  gender: "male",
};

// Functions in Typescript

interface sum {
  (x: number, y: number): number;
  //in interface i am declaring right here that what my
  // variales datatye are and I cannot change this in function
}

const addition: sum = (a: number, b: number): number => {
  return a + b;
};

console.log(addition(19, 25));

// Classes with interfaces

interface Details {
  id: number;
  name: string;
}

class EmpDetails implements Details {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  login() {
    return `${this.name} logged in successfuly`;
  }
}

const shreyas = new EmpDetails(5, "Shreyas");
console.log(shreyas.login());

//subclasses inside the class

class employeeStatus extends EmpDetails {
  position: string;

  constructor(id: number, name: string, status: string) {
    super(id, name);
    this.position = status;
  }
}

const emp = new employeeStatus(455, "Shreyas", "Senior Engineer");

// generics

function functionArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numarr = functionArray<number>([2, 54, 4, 6, 6]);
let stringarr = functionArray<string>(["Shreyas", "Praveen", "Manohara"]);

// <T> in the sense type where as it can take any type

stringarr.push("Manuuuu");
// stringarr.push(7); cannot
console.log(stringarr);
