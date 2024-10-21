// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }









// let count = 1;

// while (count <= 100) {
//   console.log(count);
//   count++;
// }



const users = [
  { firstName: "Hussain", lastName: "Abbas" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];

const fullNames = users.map(function(user) {
  return user.firstName + " " + user.lastName;
});

console.log(fullNames);  // Output: ["Hussain Abbas", "John Doe", "Jane Smith"]


