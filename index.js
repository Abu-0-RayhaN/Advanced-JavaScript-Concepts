const items = [
  { name: "Bike", price: 100 },
  { name: "Tv", price: 200 },
  { name: "Album", price: 20 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 53 },
  { name: "Computer", price: 1000 },
  { name: "keyboard", price: 100 },
];
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
// console.log(filteredItems)

const itemNames = items.map((e) => {
  return e.name;
});
// console.log(itemNames)

const foundItem = items.find((item) => {
  return item.name === "Album";
});
// console.log(foundItem)
items.forEach((item) => {
  // console.log(item)
});

const hasExpensiveItems = items.some((item) => {
  return item.price <= 100;
});
// console.log(hasExpensiveItems)

const hasExpensive = items.some((item) => {
  return item.price <= 100;
});
// console.log(hasExpensive)

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
// console.log(total)
const number = [1, 2, 3, 4, 5];
const includesTwo = number.includes(55);
// console.log(includesTwo)
// console.log(items.reverse());
// console.log(['a','f','d','b','e'].sort())
// console.log(items.slice(0,3))
const a = ["banana", "apple", "chili", "chili"];
a.splice(2, -1, "orange", "Kiwi", "jack fruit");
// console.log(a);
// a.splice(3,1);
let set = new Set(a);
set.add("ice cream");
set.forEach((e) => {
  if (!e.startsWith("b")) {
    // console.log(e);
  }
});
try {
  console.log("Start of try runs");
  unicycle;
  console.log("End of try runs --never reached");
} catch (e) {
  console.log("Error has occured: " + e);
} finally {
  console.log("This is always run");
}
