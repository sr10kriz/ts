// export {};
// Another cause of the error is having a glitch due to legacy script files. If you only have a single definition for the function in the file, add the export {} line to your file to make it an ES Module
// reference https://bobbyhadz.com/blog/typescript-duplicate-function-implementation
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
let q = undefined;
let w = null;
// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
// Ts arrays
let tsArrays = [];
tsArrays.push(101, 102, 103);
console.log(tsArrays);
// the readonly keyword can prevent arrays from being changed.
// i.e
let seqNames = ["Leo"];
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
let assignTuple;
assignTuple = ["Messi", 101, true, ["test1", "test2"], [1, 2, 3, 4, 5]];
console.log(assignTuple);
// good practiice to use tuple as readonly
let assignTupleReadOnly;
// named tuples
// i.e
let namedTuple = [101, "Sia", ["A", "B", "C"]];
let [stuId, stuName, stuRank] = namedTuple; // destructuring
console.table(`
    Student Id ${stuId}
    Student Name ${stuName} 
    Student Rank ${stuRank}
`);
let ooo;
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
let objectDog;
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
let myFullName = "Messi";
let myFullName1 = 12;
let myFullName2 = true;
let myFullName3 = ["Messi", "Ronaldo"];
let myFullName4 = [1, 2, 3, 4];
console.log(`${myFullName} || ${myFullName1} || ${myFullName2} || ${myFullName3} || ${myFullName4}`);
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
    // ts object obj: { fName: string; lName?: string } => obj is a object => fName & lName its properties as params to this function
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
function personDetails(details) {
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
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's x value is ${pt.y}`);
}
printCoord({ x: 100, y: 500 });
// on otherhand in type alias its not possible
// type bird = {
//   lastName: string;
// };
// through an error (Error: Duplicate identifier 'bird')
// strictNullChecks off => means values of the variables not checked it leads to bugs
// strictNullChecks on  => it will check the value so less bugs
function liveDangerously(x) {
    /* ? operator => its an optional one */
    // No error
    console.log(x.toFixed());
    // x! => the ! sign means the value can’t be null or undefined.
}
liveDangerously(111);
// ts functions
// we can explicitly defines wht the function returns
// i.e
function funcTest(aaa) {
    return 2 * aaa;
}
funcTest(101);
// void => means function doesn't return any value
// i.e
function returnVoid() {
    console.log(`this function returns nothing`);
}
returnVoid();
// params
function params(aaaa, bbbb) {
    console.log(aaaa + bbbb);
}
params(10, 990);
// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.
// optional params
function optParams(q, w) {
    console.log(`${q} is mandatory, w is non-mandatory`);
}
optParams("q");
// default params with default values
function defParams(aaaa, bbbb = 990) {
    console.log(aaaa + bbbb);
}
defParams(10);
// rest params
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add(a, b, ...rest) {
    console.log(a + b + rest.reduce((p, c) => p + c, 0));
}
add(1, 2, 3);
const bless = (value) => value * 10;
bless(10);
// ts casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
// there are two ways to use casting
// 1. using as keyboard
// i.e
let x = "LionelMessi";
console.log(x.length);
// 2. using <> angle brackets
// i.e
let y = "MateoMessi";
console.log(y.length);
// the second type of casting not applicable below
//  This type of casting will not work with TSX, such as when working on React files.
// force casting
// means converting type to unknown then as desired
// i.e string => unknown => number
let z = "QQQQQQQQQQQQQQQQ";
console.log(z);
console.log(typeof z);
console.log(z.split(""));
console.log(z);
console.log(typeof z);
// logs undefined
// index signatures
// The syntax of an index signature is simple and looks similar to the syntax of a property. But with one difference: write the type of the key inside the square brackets: { [key: KeyType]: ValueType }
let indexObj = {};
indexObj.age = 20;
console.log(indexObj);
console.log(typeof indexObj.age);
// need clarity on index signatures
// ts classes
// i.e
class Person {
    constructor(name, age) {
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
    constructor(name, model, rate) {
        this.name = name;
        this.model = model;
        this.rate = rate;
    }
    getCardet() {
        let a = `
    Name: ${this.name}
    Model: ${this.model}
    Rate: ${this.rate}
    `;
        return a;
    }
}
let getCarDetails = new Car('', '', 2000000000);
getCarDetails.model = 'PF-F3';
getCarDetails.name = 'Porsche';
console.log(getCarDetails.getCardet());
class Mathme {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    subValue() {
        let aaa = this.a - this.b;
        return aaa;
    }
}
const subtractionV = new Mathme(10000, 222);
console.log(subtractionV.subValue());
let partial = {};
partial.x = 'hhaha';
let required = {
    x: 'test',
    y: 1,
    z: [1, 2, 3]
};
// need clarity
// required.x = 'hhaha';
// required.y = 1111111;
// required.z = [1,2];
// classes
class Family {
    constructor(man1, man2) {
        this.man1 = man1;
        this.man2 = man2;
    }
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
    constructor(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    userOnClick() {
        this.likesCount += (this.isSelected) ? 1 : -1;
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
console.log(`Likes ${likesOnPOst.getLikes} isSelected ${likesOnPOst.getIsSelected}`);
