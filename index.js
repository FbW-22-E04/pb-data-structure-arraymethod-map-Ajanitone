// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
  return str
    .split("-")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}

console.log("Q1:", camelize("background-color"));
console.log("Q1:", camelize("list-style-image"));
console.log("Q1:", camelize("-webkit-transition"));

console.log("-----------------------------------------------------------");

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log("Q2:", usersMapped);

console.log("-----------------------------------------------------------");

// #### 2. You have an array of user objects, each one has name, surname and id.

// * Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:
// ```js
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

let usersMapped1 = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
}));

console.log("Q2a:", usersMapped1);
console.log("-----------------------------------------------------------");
