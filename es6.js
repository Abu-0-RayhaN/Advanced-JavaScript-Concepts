const person = {
  name: "Mosh",
  walk() {},
  talk() {
    console.log(this); //this refers to person object
  },
};
person.talk();
const talk = person.talk; //reference of talk function
talk(); //when excuting talk this keyword of talk function will refer to window object. you can solve this by using bind method
const talks = person.talk.bind(person);
talks(); //now this keyword refers to person object

/////Arrow function
const square = function (number) {
  return number * number;
};
const Square = (number) => {
  return number * number;
};
const square3 = (number) => number * number;

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: true },
];

const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});
const activeJobs2 = jobs.filter((job) => job.isActive);

//map
const color = ["red", "green", "blue"];
const item = color.map((color) => `<li>${color}</li>`);
// console.log(item);

//destructuring
const address = {
  street: "",
  city: "",
  country: "",
};
// const street = address.street;
// const city = address.city;
// const country = address.country;
//instead of this we can write like this
const { street, city, country } = address;
//or we can shorten the name
const { street: st, city: ct, country: cnt } = address;

//spread
const first = [1, 2, 3];
const second = [4, 5, 6];
// const combined = first.concat(second);
const combined = [...first, 8, ...second, 7];
// console.log(combined);

const f = { name: "Mosh" };
const s = { job: "instructor" };
const combined1 = { ...f, ...s, location: "Australia" };
console.log(combined1);

//class and inheritance modularing
//Default -> import -- from '';
//named -> import {---} from '';
import { Person } from "./person";
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
