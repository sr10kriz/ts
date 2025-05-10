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
var tsId;
tsId = 101;
// tsId = 99.10; /* valid */
console.log("tsc tsId", tsId); // 101
/* # string */
var tsString;
tsString = "Calm";
console.log("tsc tsString", tsString); // Calm
/* # boolean */
var tsBoolean;
tsBoolean = true;
// tsBoolean = 101; // while compiling it throws error (Type 'number' is not assignable to type 'boolean'.)
console.log("tsc tsBoolean", tsBoolean);
/* # null / undefined */
var tsNull;
tsNull = null;
console.log("tsc tsNull", tsNull); // null
var tsUndefined;
tsUndefined = undefined;
console.log("tsc tsUndefined", tsUndefined); // undefined
/* # any - disables type checking (can be anything) */
var tsAny;
tsAny = 101;
tsAny = "Calm";
tsAny = true;
console.log("tsc tsAny", tsAny); // true
/* # unknown - like any (but safer) requries type checking before use */
var tsUnkown;
tsUnkown = 101;
if (typeof tsUnkown === "number") {
    console.log("tsc tsUnkown if", tsUnkown); // 101
}
else {
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
var tsObject;
tsObject = {
    a: "a",
    b: "b",
};
console.log("tsc tsObject", tsObject); // { a: 'a', b: 'b' }
/* # array */
var tsArray; /* for array of numbers */
tsArray = [1, 2, 3];
console.log("tsc tsArray", tsArray); // [1,2,3]
var tsArrayString;
tsArrayString = ["a", "b", "c"];
console.log("tsc tsArrayString", tsArrayString); // ['a','b','c']
/* # tuple (fixed length array with specific dataypes) */
var tsTuple;
tsTuple = ["a", 1, false, tsObject, tsArray];
console.log("tsc tsTuple", tsTuple);
/* # enum
   - used to create a set of named constants, useful when if you have fixed set of values and want to use all around
   - by default enum members are assigned y numeric values starting from 0, see below
*/
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Buyer"] = 1] = "Buyer";
    Role[Role["Vendor"] = 2] = "Vendor";
})(Role || (Role = {}));
var tsEnumAdmin = Role.Admin;
console.log("tsc tsEnumAdmin", tsEnumAdmin); // 0
var tsEnumBuyer = Role.Buyer;
console.log("tsc tsEnumBuyer", tsEnumBuyer); // 1
/* # passing default values to enum */
var RoleString;
(function (RoleString) {
    RoleString["Admin"] = "Admin";
    RoleString["Buyer"] = "Buyer";
    RoleString["Vendor"] = "Vendor";
})(RoleString || (RoleString = {}));
var tsEnumStrAdmin = RoleString.Admin;
console.log("tsc tsEnumStrAdmin", tsEnumStrAdmin); // Admin
/* # heterogeneous enum means mixed of numeric and string */
var User;
(function (User) {
    User["Name"] = "Admin";
    User[User["isLoggedIn"] = 1] = "isLoggedIn";
    User["token"] = "DSFDSdsfdsf$REWxcxzcc";
})(User || (User = {}));
var tsEnumStNu = User.token;
console.log("tsc tsEnumStNu", tsEnumStNu); // DSFDSdsfdsf$REWxcxzcc
/* # reverse mapping
    - in enum useful with value we may able to access the enum member and assign those member
    - This reverse mapping is not available for string enums.
*/
var tsEnumRs = User[1];
console.log("tsc tsEnumRs", tsEnumRs); // Name
var UserObj = {
    name: "A",
    age: 20,
    sex: "male",
    height: 5.5,
    weight: 50,
};
console.log("ts UserObj", UserObj);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var a = function (ts, typescript) {
    var b = "Welcome to the ".concat(ts, " @ ").concat(typescript, " world");
    console.log(b);
};
a("Ts", "Typescript");
var obj1 = {
    name: "john",
    sign: "maverick",
};
console.log(obj1.sign);
// console.log(obj1.age); these are legitimate bugs
var test = "Gmorn Dr";
test.toLocaleLowerCase;
// test.toLocalLowerCase; these are legitimate bugs
function pop() {
    console.log("call tes");
}
pop();
function war(one, two, three, four) {
    console.log("welcome to ".concat(one, " ").concat(two, " ").concat(three, " dated on ").concat(four));
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
var q = undefined;
var w = null;
// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
// Ts arrays
var tsArrays = [];
tsArrays.push(101, 102, 103);
console.log(tsArrays);
// the readonly keyword can prevent arrays from being changed.
// i.e
var seqNames = ["Leo"];
// seqNames.push("Messi");
// the above line through error => Property 'push' does not exist on type 'readonly string[]'.
// type inference infer means contextual
// means if we didnt specify type explicitly ts will automatically assign types under the hood based on the value provided by user
// i.e
var arrOfNum = [0, -1, -2, -3];
console.log(arrOfNum); // under the hood (let arrOfNum: number[]) -> arrayOfNum is array of numbers type
// ts tuples
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
var firstTuple = ["Leo", 101, true, ["one", "two", "three"]];
console.log(firstTuple);
var assignTuple;
assignTuple = ["Messi", 101, true, ["test1", "test2"], [1, 2, 3, 4, 5]];
console.log(assignTuple);
// good practiice to use tuple as readonly
var assignTupleReadOnly;
// named tuples
// i.e
var namedTuple = [101, "Sia", ["A", "B", "C"]];
var stuId = namedTuple[0], stuName = namedTuple[1], stuRank = namedTuple[2]; // destructuring
console.table("\n    Student Id ".concat(stuId, "\n    Student Name ").concat(stuName, " \n    Student Rank ").concat(stuRank, "\n"));
var ooo;
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
var objectDog;
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
var myFullName = "Messi";
var myFullName1 = 12;
var myFullName2 = true;
var myFullName3 = ["Messi", "Ronaldo"];
var myFullName4 = [1, 2, 3, 4];
console.log("".concat(myFullName, " || ").concat(myFullName1, " || ").concat(myFullName2, " || ").concat(myFullName3, " || ").concat(myFullName4));
// type annotations on Functions
// Parameter Type Annotations
// i.e
function sayMyName(name1, desc, a) {
    console.log("".concat(name1, ". yeah thats ").concat(desc, " right.\n                 I'm ").concat(a, " now........."));
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
    console.log("".concat(obj.fName, " ").concat(obj.lName));
}
call({ fName: "Leo", lName: "Rolex" });
// working with union types
// means combining of two existing types to new one
// i.e
function newType(username) {
    // these are union types
    console.log("Your Username is ".concat(username));
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
    var usernamee = "";
    if (typeof username == "string") {
        usernamee = username.toUpperCase();
    }
    else {
        usernamee = username;
    }
    console.log("Your Username is ".concat(usernamee));
}
asd(101);
function personDetails(details) {
    console.log("\n        this is ".concat(details.firstName).concat(details.lastName, ",\n        this is my area of interest ").concat(details.interest, "\n    "));
}
personDetails({
    firstName: "Leo",
    lastName: "Messi",
    interest: ["Barca", "Argentina", "Ballon D'or", "Repeat"],
});
function printCoord(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's x value is ".concat(pt.y));
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
    console.log("this function returns nothing");
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
    console.log("".concat(q, " is mandatory, w is non-mandatory"));
}
optParams("q");
// default params with default values
function defParams(aaaa, bbbb) {
    if (bbbb === void 0) { bbbb = 990; }
    console.log(aaaa + bbbb);
}
defParams(10);
// rest params
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log(a + b + rest.reduce(function (p, c) { return p + c; }, 0));
}
add(1, 2, 3);
var bless = function (value) { return value * 10; };
bless(10);
// ts casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// Casting is the process of overriding a type.
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
// there are two ways to use casting
// 1. using as keyboard
// i.e
var x = "LionelMessi";
console.log(x.length);
// 2. using <> angle brackets
// i.e
var y = "MateoMessi";
console.log(y.length);
// the second type of casting not applicable below
//  This type of casting will not work with TSX, such as when working on React files.
// force casting
// means converting type to unknown then as desired
// i.e string => unknown => number
var z = "QQQQQQQQQQQQQQQQ";
console.log(z);
console.log(typeof z);
console.log(z.split(""));
console.log(z);
console.log(typeof z);
// logs undefined
// index signatures
// The syntax of an index signature is simple and looks similar to the syntax of a property. But with one difference: write the type of the key inside the square brackets: { [key: KeyType]: ValueType }
var indexObj = {};
indexObj.age = 20;
console.log(indexObj);
console.log(typeof indexObj.age);
// need clarity on index signatures
// ts classes
// i.e
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var objPerson = new Person("Leo", 35);
// let objPerson = new Person();
console.log(objPerson);
// objPerson.name = "Leo"; // need clarity
// objPerson.age = 35; // need clarity
// members visibility three types
// 1. public => (default) allows access to the class member from anywhere
// 2. private => allows members within the class only
// 3. protected => allow class members from it self & classes that inherit it
// i.e with constructor
var Car = /** @class */ (function () {
    function Car(name, model, rate) {
        this.name = name;
        this.model = model;
        this.rate = rate;
    }
    Car.prototype.getCardet = function () {
        var a = "\n    Name: ".concat(this.name, "\n    Model: ").concat(this.model, "\n    Rate: ").concat(this.rate, "\n    ");
        return a;
    };
    return Car;
}());
var getCarDetails = new Car("", "", 2000000000);
getCarDetails.model = "PF-F3";
getCarDetails.name = "Porsche";
console.log(getCarDetails.getCardet());
var Mathme = /** @class */ (function () {
    function Mathme(a, b) {
        this.a = a;
        this.b = b;
    }
    Mathme.prototype.subValue = function () {
        var aaa = this.a - this.b;
        return aaa;
    };
    return Mathme;
}());
var subtractionV = new Mathme(10000, 222);
console.log(subtractionV.subValue());
var partial = {};
partial.x = "hhaha";
var required = {
    x: "test",
    y: 1,
    z: [1, 2, 3],
};
// need clarity
// required.x = 'hhaha';
// required.y = 1111111;
// required.z = [1,2];
// classes
var Family = /** @class */ (function () {
    function Family(man1, man2) {
        this.man1 = man1;
        this.man2 = man2;
    }
    Family.prototype.callFamily = function () {
        console.log("This is ".concat(this.man1, " && he is ").concat(this.man2, " we are brothers"));
    };
    Family.prototype.getNames = function () {
        // this.man1;
        return this.man2;
    };
    return Family;
}());
var family = new Family("albert", "blizzard");
family.callFamily();
var man2 = family.getNames();
console.log(man2);
var Likes = /** @class */ (function () {
    function Likes(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    Likes.prototype.userOnClick = function () {
        this.likesCount += this.isSelected ? 1 : -1;
    };
    Object.defineProperty(Likes.prototype, "getLikes", {
        get: function () {
            return this.likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Likes.prototype, "getIsSelected", {
        get: function () {
            return this.isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return Likes;
}());
var likesOnPOst = new Likes(10, false);
var qq = likesOnPOst.userOnClick();
console.log("Likes ".concat(likesOnPOst.getLikes, " isSelected ").concat(likesOnPOst.getIsSelected));
