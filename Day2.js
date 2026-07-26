// // callback function
// function hello(n1, n2, callback) {
//     console.log("Hello World");
//     callback();
// }
// let a = 10;
// let b = 20;
// console.log(hello(a, b, sayHi));
// console.log(hello(a, b, sayHello));
// console.log((hello(a, b, function demo() {
//     console.log("callback is calling");
// })));

// function sayHi() {
//     console.log("callback function");
// }
// sayHi();

// function sayHello() {
//     console.log("This is 2nd callback function");
// }
// sayHello();



// promises
const promiseOne = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    resolve("Promise resolved");
});
promiseOne.then((data) => {
    console.log("Promise resolved with data:", data);
}).catch((error) => {
    console.error("Promise rejected with error:", error);
});
