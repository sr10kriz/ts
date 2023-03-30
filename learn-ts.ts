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

function war(one: string, two: string, three: string, four: Date) {
  console.log(`welcome to ${one} ${two} ${three} dated on ${four}`);
}

// war("world", "war", "||", Date()); if we pass arguments Date() this returns current date as string, while on parameter we pass explicitly four as Date object
war("world", "war", "||", new Date());
// if we use new Date() it creates an empty object

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

// while using any type it disables type checking

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

// 2. unknown
// unknown is a similar, but safer alternative to any.
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

// Casting is when we use the "as" keyword to say property or variable is of the casted type.

// 3. never
// never effectively throws an error whenever it is defined.
// i.e
// let sign: never = "rooster";
// the above line through error because we defined sign as 'rooster' string

// 4. undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let q: undefined = undefined;
let w: null = null;
// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.

// Ts arrays
let tsArrays: number[] = [];
tsArrays.push(101, 102, 103);
console.log(tsArrays);

// he readonly keyword can prevent arrays from being changed.
// i.e
let seqNames: readonly string[] = ["Leo"];
// seqNames.push("Messi");
// the above line through error => Property 'push' does not exist on type 'readonly string[]'.

// type inference infer means contextual
// means if we didnt specify type explicitly ts will automatically assign types under the hood based on the value provided by user
// i.e
let arrOfNum = [0, -1, -2, -3];
console.log(arrOfNum); // under the hood (let arrOfNum: number[])

// ts tuples
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
let firstTuple = ["Leo", 101, true, ["one", "two", "three"]];
console.log(firstTuple);

let assignTuple: [string, number, boolean, string[], number[]];
assignTuple = ["Messi", 101, true, ["test1", "test2"], [1, 2, 3, 4, 5]];
console.log(assignTuple);

// good practiice to use tuple as readonly
let assignTupleReadOnly: readonly [string, number, boolean, string[], number[]];

// named tuples
// i.e
let namedTuple = [101, "Sia", ["A", "B", "C"]];
let [stuId, stuName, stuRank] = namedTuple; // destructuring
console.table(`
    Student Id ${stuId}
    Student Name ${stuName} 
    Student Rank ${stuRank}
`);

// clear example explanation
// If you have ever used React before you have worked with tuples more than likely.

// useState returns a tuple of the value and a setter function.

// const [firstName, setFirstName] = useState('Dylan') is a common example.

// here firstName is string, setFirstName is function => example of tuple

// Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.

// object types
// i.e
let objectDog: {
  name: string;
  color: string;
  age: number;
  behaviour: string[];
};

objectDog = {
  name: "Zeus",
  color: "Black",
  age: 1,
  behaviour: ["naughty", "calm", "maverick"],
};

console.table(objectDog);

// ts enums
// two types
// 1. numeric 2. string
// https://www.w3schools.com/typescript/typescript_enums.php

// type annotations
// it means explicitly we declare a var with its type
// i.e
let myFullName: string = "Messi";
let myFullName1: number = 12;
let myFullName2: boolean = true;
let myFullName3: string[] = ["Messi", "Ronaldo"];
let myFullName4: number[] = [1, 2, 3, 4];

console.log(
  `${myFullName} || ${myFullName1} || ${myFullName2} || ${myFullName3} || ${myFullName4}`
);

// type annotations on Functions
// Parameter Type Annotations
// i.e
function sayMyName(name1: string, desc: string, a: number) {
  console.log(`${name1}. yeah thats ${desc} right.
                 I'm ${a} now.........`);
}

sayMyName("Heisenberg", ".......", 55);

// When a parameter has a type annotation, arguments to that function will be checked:

// return type annotations
function getFavoriteNumber(): number {
  // its just personal preference coz, ts will know based return statements.
  return 26;
}

getFavoriteNumber();

// optional types
// means its an optional one
// i.e
function call(obj: { fName: string; lName?: string }) {
  // ts object obj: { fName: string; lName?: string } => obj is a object => fName & lName its properties as params to this function
  console.log(`${obj.fName} ${obj.lName}`);
}
call({ fName: "Leo", lName: "Rolex" });

// working with union types
// means combining of two existing types to new one
// i.e
function newType(username: string | number) {
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

function asd(username: string | number) {
  // these are union types
  let usernamee: string | number = "";
  if (typeof username == "string") {
    usernamee = username.toUpperCase();
  } else {
    usernamee = username;
  }
  console.log(`Your Username is ${usernamee}`);
}
asd(101);

// type alias (applicable to all primitives)
// means store types in one identifier
// syntax
type getName = {
  firstName: string;
  lastName: string;
  interest: string[];
};

function personDetails(details: getName) {
  console.log(`
        this is ${details.firstName}${details.lastName},
        this is my area of interest ${details.interest}
    `);
}

personDetails({
  firstName: "Leo",
  lastName: "Messi",
  interest: ["Barca", "Argentina", "Ballon D'or", "Repeat"],
});

// types alias with union types
// i.e
type id = string | number; // | denotes or operator

// interfaces very similar to type alias (interfaces are only apply to objects)
// key difference
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// syntax
interface point {
  x: number;
  y: number;
}

function printCoord(pt: point) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's x value is ${pt.y}`);
}

printCoord({ x: 100, y: 500 });

// interface is extendable
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
// its an natural beheaviour by interface
// i.e
interface animal {
  name: string;
}
interface carnivores extends animal {
  behaviour: string;
  foodOne: string;
}

// while type aliases are extended via intersections
// i.e
type bird = {
  name: string;
};

type behaviours = bird & {
  speciality: string;
  food: string;
};

// adding new properties to interface
// i.e
interface carnivores {
  foodTwo: string;
}

// on otherhand in type alias its not possible
// type bird = {
//   lastName: string;
// };
// through an error (Error: Duplicate identifier 'bird')

// strictNullChecks off => means values of the variables not checked it leads to bugs
// strictNullChecks on  => it will check the value so less bugs

function liveDangerously(x?: number | null) {
  /* ? operator => its an optional one */
  // No error
  console.log(x!.toFixed());
  // x! => the ! sign means the value can’t be null or undefined.
}
liveDangerously(111);

// ts functions
// we can explicitly defines wht the function returns
// i.e
function funcTest(aaa: number): number {
  return 2 * aaa;
}
funcTest(101);

// void => means function doesn't return any value
// i.e
function returnVoid(): void {
  console.log(`this function returns nothing`);
}
returnVoid();

// params
function params(aaaa: number, bbbb: number) {
  console.log(aaaa + bbbb);
}
params(10, 990);

// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

// optional params
function optParams(q: string, w?: string) {
  console.log(`${q} is mandatory, w is non-mandatory`);
}
optParams("q");

// default params with default values
function defParams(aaaa: number, bbbb: number = 990) {
  console.log(aaaa + bbbb);
}
defParams(10);

// rest params
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add(a: number, b: number, ...rest: number[]) {
  console.log(a + b + rest.reduce((p, c) => p + c, 0));
}
add(1, 2, 3);

// ts Type Alias with functions
type bless = (val: number) => number;
const bless: bless = (value) => value * 10;
bless(10);

// ts casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

// there are two ways to use casting
// 1. using as keyboard
// i.e
let x: any = "LionelMessi";
console.log((x as string).length);

// 2. using <> angle brackets
// i.e
let y: any = "MateoMessi";
console.log(<string>y.length);
// the second type of casting not applicable below
//  This type of casting will not work with TSX, such as when working on React files.

// force casting
// means converting type to unknown then as desired
// i.e string => unknown => number
let z: string = "QQQQQQQQQQQQQQQQ";
console.log(z as unknown);
console.log(typeof z);
console.log(z.split(""));
console.log(z as unknown as number);
console.log(typeof z);

// logs undefined

// index signatures
// The syntax of an index signature is simple and looks similar to the syntax of a property. But with one difference: write the type of the key inside the square brackets: { [key: KeyType]: ValueType }
let indexObj: { [age: string]: number } = {};
indexObj.age = 20;
console.log(indexObj);
console.log(typeof indexObj.age);

// need clarity on index signatures
