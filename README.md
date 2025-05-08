
# Understanding TypeScript: Interface vs Type and Special Types (any, unknown, never)

If you’re working with TypeScript, you’ve probably seen both `interface` and `type`. They might look the same at first, but they are used in different ways and have different powers. In this guide, we’ll break down the differences between them in simple words. We’ll also explore three special types in TypeScript: `any`, `unknown`, and `never`.

---

## Part 1: Interface vs Type — What’s the Difference?

Both `interface` and `type` help define the shape of data in TypeScript. This means you can use them to describe objects like a user, a product, or a setting.

### 1. Basic Syntax

```ts
interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
}
```

In this example, both `interface` and `type` are doing the same thing. They define a user with a name and age. But there are differences when we go deeper.

---

### 2. Extending

You can build on existing structures with both.

```ts
interface Admin extends User {
  role: string;
}
```

```ts
type AdminType = UserType & { role: string };
```

With `interface`, we use `extends`. With `type`, we use the `&` symbol (called intersection). Both work, but interfaces are better for long chains of inheritance.

---

### 3. Declaration Merging

You can define an `interface` more than once. TypeScript will combine them.

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dog: Animal = {
  name: "Buddy",
  age: 5,
};
```

You **cannot** do this with `type`. If you try to define the same `type` again, TypeScript will show an error.

---

### Final Thoughts on Interface vs Type

- Use **interface** when you’re working with objects, classes, or libraries like React.
- Use **type** when you need more control — for example, with unions, primitives, or tuples.

You can mix both in a project, but staying consistent helps keep your code clean and readable.

---

## Part 2: Special Types — any, unknown, and never

TypeScript tries to protect your code with type safety. But sometimes, you don’t know what type of data you’ll get. That’s when `any`, `unknown`, and `never` come in.

---

### 1. any — Turns Off Type Checking

```ts
let value: any;

value = 5;
value = "hello";

console.log(value.toUpperCase()); // No error, even if value is not a string
```

- Use when: You don’t want TypeScript to check anything.
- Danger: TypeScript won’t catch your mistakes.

---

### 2. unknown — Safe but Flexible

```ts
let data: unknown;

data = "TypeScript";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // Safe
}
```

- Use when: You get data from an API or user input.
- Benefit: You must check the type before using it.

---

### 3. never — Should Never Happen

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

```ts
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return 3.14 * 5 * 5;
    case "square":
      return 5 * 5;
    default:
      const check: never = shape; // Forces you to handle all cases
      return check;
  }
}
```

- Use when: A function should never return or a case should never happen.
- Helps: Catch mistakes and unexpected paths in your code.

---

## Conclusion

TypeScript gives you powerful tools to write safe and clean code.

- Use `interface` for object shapes and structure.
- Use `type` for flexibility and complex data types.
- Use `any` only when you must.
- Prefer `unknown` for unknown data.
- Use `never` to handle impossible cases and improve safety.



