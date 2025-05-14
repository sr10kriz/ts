/* lets revisit Ts */

/* to check ts version - tsc -v */
/* to install ts - npm i -g typescript */

/* 1. how js differ from ts */
/* 
  Js vs Ts 
    #1 
      - Js is dynamically typed
      - Ts is statically typed

    #2 
      - Js errors/exceptions will be deducted at runtime
      - TS errors/exceptions are caught at compile time (before running)

    #3 
      - JS is interpreted by the browser directly
      - TS must be compiled to JS (TS → JS → Browser), we need to use the below command
      - tsc filename.ts to compile ts file to js file eg: tsc learn-ts.ts

    #4
      - In JS, variable types are not explicitly defined
      - In TS, types are explicitly defined to prevent runtime/compile-time errors

    #5
      - JS has limited support for OOP concepts
      - TS supports better OOP using interfaces, classes, and access modifiers
*/

/* 2. Basic Types (datatypes) */

/* # number/int */
let tsId: number;
tsId = 101;
// tsId = 99.10; /* valid */
console.log("tsc tsId", tsId); // 101

/* # string */
let tsString: string;
tsString = "Calm";
console.log("tsc tsString", tsString); // Calm

/* # boolean */
let tsBoolean: boolean;
tsBoolean = true;
// tsBoolean = 101; // while compiling it throws error (Type 'number' is not assignable to type 'boolean'.)
console.log("tsc tsBoolean", tsBoolean);

/* # null / undefined */
let tsNull: null;
tsNull = null;
console.log("tsc tsNull", tsNull); // null
let tsUndefined: undefined;
tsUndefined = undefined;
console.log("tsc tsUndefined", tsUndefined); // undefined

/* # any - disables type checking (can be anything) */
let tsAny: any;
tsAny = 101;
tsAny = "Calm";
tsAny = true;
console.log("tsc tsAny", tsAny); // true

/* # unknown - like any (but safer) requries type checking before use */
let tsUnkown: unknown;
tsUnkown = 101;
if (typeof tsUnkown === "number") {
  console.log("tsc tsUnkown if", tsUnkown); // 101
} else {
  console.log("tsc tsUnkown else", tsUnkown); // 101
}

/* # void used in functions that return nothing */
/* function tsVoidFu(): void {
  console.log("tsc tsVoidFu");
}
tsVoidFu(); // return nothing */

/* # never used in functions that never return i.e infinite loop/throw errors */
/* function tsNeverFu(): never {
  throw new Error("tsc tsNeverFu");
}
tsNeverFu(); // never returns */

/* # object */
let tsObject: object;
tsObject = {
  a: "a",
  b: "b",
};
console.log("tsc tsObject", tsObject); // { a: 'a', b: 'b' }

/* # array */
let tsArray: number[]; /* for array of numbers */
tsArray = [1, 2, 3];
console.log("tsc tsArray", tsArray); // [1,2,3]

let tsArrayString: string[];
tsArrayString = ["a", "b", "c"];
console.log("tsc tsArrayString", tsArrayString); // ['a','b','c']

/* # tuple (fixed length array with specific dataypes) */
let tsTuple: [string, number, boolean, object, number[]];
tsTuple = ["a", 1, false, tsObject, tsArray];
console.log("tsc tsTuple", tsTuple);

/* # enum
   - used to create a set of named constants, useful when if you have fixed set of values and want to use all around 
   - by default enum members are assigned by numeric values starting from 0, see below
*/
enum Role { // this is enum structure
  Admin, // this we called as enum member value 0
  Buyer, // value 1
  Vendor, // value 2
}

let tsEnumAdmin: Role = Role.Admin;
console.log("tsc tsEnumAdmin", tsEnumAdmin); // 0

let tsEnumBuyer: Role = Role.Buyer;
console.log("tsc tsEnumBuyer", tsEnumBuyer); // 1

/* # passing default values to enum */
enum RoleString {
  Admin = "Admin",
  Buyer = "Buyer",
  Vendor = "Vendor",
}

let tsEnumStrAdmin: RoleString = RoleString.Admin;
console.log("tsc tsEnumStrAdmin", tsEnumStrAdmin); // Admin

/* # heterogeneous enum means mixed of numeric and string */
enum User {
  Name = "Admin",
  isLoggedIn = 1,
  token = "DSFDSdsfdsf$REWxcxzcc",
}

let tsEnumStNu: User = User.token;
console.log("tsc tsEnumStNu", tsEnumStNu); // DSFDSdsfdsf$REWxcxzcc

/* # reverse mapping 
    - in enum useful with value we may able to access the enum member and assign those member 
    - This reverse mapping is not available for string enums. (applicable only for numeric enums)
*/
let tsEnumRs: string = User[1];
console.log("tsc tsEnumRs", tsEnumRs); // Name

/* 3. Interfaces 
    - used to define structure of a object
    - can be extended (inheritance)
    - can be merged
    - interface designed only for non-primitives
*/
interface UserInt {
  name: string;
  age: number;
  sex: string;
}

/* # merging interface */
interface UserInt {
  height: number;
  weight: number;
}

let UserObj: UserInt = {
  name: "A",
  age: 20,
  sex: "male",
  height: 5.5,
  weight: 50,
};
console.log("tsc UserObj", UserObj);

/* # extending interfaces (inheritance) */
interface BuyerUser extends UserInt {
  behavior: string;
}
let Bu: BuyerUser = {
  name: "B",
  age: 30,
  sex: "female",
  height: 6.5,
  weight: 60,
  behavior: "Calm",
};

console.log("tsc interface extends", Bu);

/* 4. Type
    - can define any kind of datatypes i.e string, number, object, unions, intersections, tuples etc...
    - more flexible and powerful than interfaces
    - cannot be merged
*/

/* # for object */
type tsTypeObj = {
  a: string;
  b: number;
};

/* # for arrays */
type tsTypeArr = number[];

/* # for tuples */
type tsTypeTup = [number, number, string, number[], string[]];

/* # for function */
type tsTypeFunc = (param: string) => string;

/* 5. Union / Intersections */

/* # union (denoted by |) i.e anger or calm
    - union type allows variable to be one of a several types i.e this or that
    - syntax: let a: string | number
*/
function greed(param: string | number) {
  return param;
}
console.log("union string", greed("messi"));
console.log("union number", greed(10));

/* # Intersection (denoted by &) i.e calm and kind
    - intersection type combines multiple types into one, it must satisfy all types
    - syntax: see below
*/
type A = {
  a: string;
};
type B = {
  b: string;
};

type AB = A & B; // here AB type must have both a and b properties
let InterSec: AB = {
  a: "A",
  b: "B",
};
console.log("tsc Intersection", InterSec); // this is how intersection works

/* 6. Access Modifiers 
    - it controls visibility of class members, properties and methods
    - public (default) - accessible from anywhere
    - private - accessible only within the class
    - protected - accessible within the class and subclassess
*/

/* # public */
class Messi {
  public nickname: string;

  constructor(nickname: string) {
    this.nickname = nickname;
  }

  /* inside class, all functions we denoted as methods */
  public messii() {
    return this.nickname;
  }
}

let M = new Messi("GREATEST OF ALL");
console.log("tsc classes public", M.nickname); // allowed
console.log("tsc classes public", M.messii()); // allowed

/* # private */
class Bank {
  private balance: number;
  public accnum: number;

  constructor(balance: number, accnum: number) {
    this.balance = balance;
    this.accnum = accnum;
  }

  getAccnumber() {
    return this.accnum;
  }
}

let B = new Bank(100000, 22334455);
console.log("tsc classes private", B.accnum); // allowed
console.log("tsc classes private", B.getAccnumber()); // allowed
// console.log("tsc classes private", B.balance); // throw error Property 'balance' is private and only accessible within class 'Bank'.

/* # protected */
class Animal {
  protected name: string;
  protected nature: string;

  constructor(name: string, nature: string) {
    this.name = name;
    this.nature = nature;
  }

  protected move() {
    return `${this.name} is a ${this.nature}`;
  }
}

class Dog extends Animal {
  checkMe() {
    return this.move(); // allowed only accessible inside subclass
  }
}

let dog = new Dog("Dog", "Omnivores");
console.log("tsc classess protected", dog.checkMe());
// console.log("tsc classess protected", dog.move); // throws error Property 'move' is protected and only accessible within class 'Animal' and its subclasses.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// if we use new Date() it creates an Date object with current date & time

// ts types
// usecases

// "Hello" => string
// 452 => number
// true || false => boolean

// array of numbers
// two ways to declare array of numbers
// 1. [1,2,3,0] => number[] refers array of numbers
// 2. [1,2,3,0] => Array<number>

// array of string
// two ways to declare array of string

// 1. ['a','b','c'] => string[] refers array of strings
// 2. ['a','b','c'] => Array<string> refers array of strings

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

// the readonly keyword can prevent arrays from being changed.
// i.e
let seqNames: readonly string[] = ["Leo"];
// seqNames.push("Messi");
// the above line through error => Property 'push' does not exist on type 'readonly string[]'.

// type inference infer means contextual
// means if we didnt specify type explicitly ts will automatically assign types under the hood based on the value provided by user
// i.e
let arrOfNum = [0, -1, -2, -3];
console.log(arrOfNum); // under the hood (let arrOfNum: number[]) -> arrayOfNum is array of numbers type

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

interface iuy {
  id: number;
  name: string;
  behaviour: string[];
}
let ooo: Array<iuy>;
ooo = [{ id: 1, name: "Failure", behaviour: ["fail", "failed"] }];
console.log(ooo);

// clear example explanation
// If you have ever used React before you have worked with tuples more than likely.

// useState returns a tuple of the value and a setter function.

// const [firstName, setFirstName] = useState('Dylan') is a common example.

// here firstName is string, setFirstName is function => example of tuple

// Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.

// object types
// i.e
let objectDog: {
  // declare a object
  name: string;
  color: string;
  age: number;
  behaviour: string[];
};

objectDog = {
  // assign values to declared object
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
console.log(<unknown>y.length);
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

// ts classes
// i.e
class Person {
  // Person is a class
  name: string; // these are members of the Person class
  age: number; // these are members of the Person class
  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let objPerson = new Person("Leo", 35);
// let objPerson = new Person();
console.log(objPerson);
// objPerson.name = "Leo"; // need clarity
// objPerson.age = 35; // need clarity

// members visibility three types
// 1. public => (default) allows access to the class member from anywhere
// 2. private => allows members within the class only
// 3. protected => allow class members from it self & classes that inherit it

// i.e with constructor
class Car {
  private rate: number;
  public name: string;
  public model: string;
  public constructor(name: string, model: string, rate: number) {
    this.name = name;
    this.model = model;
    this.rate = rate;
  }
  public getCardet(): string {
    let a = `
    Name: ${this.name}
    Model: ${this.model}
    Rate: ${this.rate}
    `;
    return a;
  }
}

let getCarDetails = new Car("", "", 2000000000);
getCarDetails.model = "PF-F3";
getCarDetails.name = "Porsche";

console.log(getCarDetails.getCardet());
// need clarity

// inheritance - implements
interface sub {
  subValue: () => number;
}
class Mathme implements sub {
  protected readonly a: number;
  protected readonly b: number;
  public constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  public subValue(): number {
    let aaa = this.a - this.b;
    return aaa;
  }
}

const subtractionV = new Mathme(10000, 222);
console.log(subtractionV.subValue());

// generics
// need clarity

// utility types
// these types helps us to manipulate types\
// 1. Partial -> changes all properties of object to optional
// i.e
interface partialTest {
  x: string;
  y: number;
  z: number[];
}
let partial: Partial<partialTest> = {};
partial.x = "hhaha";

// 2.Required -> changes all properties of an object to required
interface requiredTest {
  x: string;
  y: number;
  z?: number[];
}
let required: Required<requiredTest> = {
  x: "test",
  y: 1,
  z: [1, 2, 3],
};
// need clarity
// required.x = 'hhaha';
// required.y = 1111111;
// required.z = [1,2];

// classes

class Family {
  constructor(public man1?: string, private man2?: string) {}
  callFamily() {
    console.log(`This is ${this.man1} && he is ${this.man2} we are brothers`);
  }
  getNames() {
    // this.man1;
    return this.man2;
  }
}

let family = new Family("albert", "blizzard");
family.callFamily();
let man2 = family.getNames();
console.log(man2);

class Likes {
  constructor(private likesCount: number, private isSelected: boolean) {}
  userOnClick(): void {
    this.likesCount += this.isSelected ? 1 : -1;
  }

  get getLikes() {
    return this.likesCount;
  }
  get getIsSelected() {
    return this.isSelected;
  }
}

let likesOnPOst = new Likes(10, false);
let qq = likesOnPOst.userOnClick();
console.log(
  `Likes ${likesOnPOst.getLikes} isSelected ${likesOnPOst.getIsSelected}`
);
