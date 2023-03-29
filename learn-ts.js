const a = (ts, typescript) => {
    let b = `Welcome to the ${ts} @ ${typescript} world`;
    console.log(b);
};
a("Ts", "Typescript");
const obj1 = {
    name: "john",
    sign: "maverick",
};
console.log(obj1.sign);
// console.log(obj1.age); these are legitimate bugs
const test = "Gmorn Dr";
test.toLocaleLowerCase;
// test.toLocalLowerCase; these are legitimate bugs
function pop() {
    console.log("call tes");
}
pop();
function war(one, two, three, four) {
    console.log(`welcome to ${one} ${two} ${three} dated on ${four}`);
}
// war("world", "war", "||", Date()); if we pass arguments Date() this returns current date as string, while on parameter we pass explicitly four as Date object
war("world", "war", "||", new Date());
// ts types
// usecases
// "Hello" => string
// 452 => number
// true || false => boolean
// [1,2,3,0] => number[] refers array of numbers
// ['a','b','c'] => string[] refers array of strings
// ts special types
// 1. any
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// i.e;
// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// type annotations
// it means explicitly we declare a var with its type
// i.e
let myFullName = "Messi";
// type annotations on Functions
// Parameter Type Annotations
// i.e
function sayMyName(name1, desc, a) {
    console.log(`${name1}. yeah thats ${desc} right.
                 I'm ${a} now.........`);
}
sayMyName("Heisenberg", ".......", 55);
// When a parameter has a type annotation, arguments to that function will be checked:
// return type annotations
function getFavoriteNumber() {
    // its just personal preference coz, ts will know based return statements.
    return 26;
}
getFavoriteNumber();
// optional types
// means its an optional one
// i.e
function call(obj) {
    // ts object obj: { fName: string; lName?: string } => obj is a object => fName & lName its properties
    console.log(`${obj.fName} ${obj.lName}`);
}
call({ fName: "Leo", lName: "Rolex" });
// working with union types
// means combining of two existing types to new one
// i.e
function newType(username) {
    // these are union types
    console.log(`Your Username is ${username}`);
}
newType("messi10101");
// newType(101); both are okay no errors
// here more interesting one
// if you working with union types then mandatory to use methods that are common for your union types i.e (slice method common for both array & string)
// negative check i.e
// function newTypeWork(username: string | number) {
//   // these are union types
//   let usernamee = username.toUpperCase();
//   console.log(`Your Username is ${usernamee}`);
// }
// newTypeWork(101);
// if we use like this we get the below error
// Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.ts(2339)
// solution is we handle with typeof method
function asd(username) {
    // these are union types
    let usernamee = "";
    if (typeof username == "string") {
        usernamee = username.toUpperCase();
    }
    else {
        usernamee = username;
    }
    console.log(`Your Username is ${usernamee}`);
}
asd(101);
