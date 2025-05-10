This repository contains a high-level overview of essential TypeScript concepts commonly asked in technical interviews. It serves as a quick reference and revision guide for frontend developers and interview candidates.

# 💡 TypeScript Interview Preparation Guide

---

## 📘 Topics Covered

### ✅ Basic Data Types

- `string`, `number`, `boolean`
- `any`, `unknown`, `void`, `never`
- `null`, `undefined`
- Arrays: `number[]`, `string[]`, `Array<string>`
- Tuples: `[string, number]`
- Enums: `enum Role { Admin, Buyer, Vendor }`

### 🧱 Type vs Interface

- Both used to define custom types.
- `interface` is ideal for object shapes and supports declaration merging.
- `type` is more flexible; supports primitives, union, intersection, and aliasing.

### 🔗 Union and Intersection Types

- **Union (`|`)**: A value can be of **one** of several types.  
  _Example_: `let val: string | number;`
- **Intersection (`&`)**: Combine multiple types into one.  
  _Example_: `type FullInfo = Personal & Address;`

### 🧮 Functions in TypeScript

- Support typed parameters and return types.

```ts

---

### 🏛️ Classes & Access Modifiers
- `class`: Blueprint for creating objects with properties and methods.
- `public`: Accessible from anywhere (default modifier).
- `private`: Accessible only within the class it's defined in.
- `protected`: Accessible within the class and its subclasses.

---

## 👨‍💻 Maintained By

**Sridharakrishnan R**
https://github.com/sr10kriz

---
```
