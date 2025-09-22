## Intro to JS

---

### 🧸 Variables: Boxes with Names

```js
let x = 5;
const myName = "Michael";
```

- **`let`**: Imagine you have a box with a label on it. You can change what’s inside later.
  Example: `let x = 5;` means we made a box called **x** and put the number **5** inside. Later, we could put a different number in there.

- **`const`**: This is a special box you’re **not allowed to change** after you fill it.
  Example: `const myName = "Michael";` means we made a box called **myName**, and inside is the word (string) **"Michael"**. You can’t change it later.

---

### 📝 Data Types: Different Kinds of Toys

JavaScript has different types of “things” you can put in boxes:

1. **Strings** (words, letters, text)

```js
let a = "ABC";
let b = ` my name is ${myName} `;
```

- `"ABC"` is a **string** — text wrapped in quotes.
- The funny `` ` ` `` marks (backticks) let you put other boxes inside with `${ }`.
  So if **myName** is `"Michael"`, then `b` becomes `" my name is Michael "`.

---

2. **Numbers** (like in math)

```js
const c = 74;
```

That’s just the number **74**.

---

3. **Booleans** (true/false switches)

```js
let d = true;
let e = false;
```

Think of these like **light switches** — on/off, yes/no.

---

4. **Null and Undefined**

```js
let f = null;
let g;
```

- **null** means an empty toy box on purpose (you know it’s empty).
- **undefined** means you forgot to put anything in the toy box yet.

---

### 🎲 Functions: Reusable Machines

```js
function add(x, y) {
  console.log(x + y);
  return x + y;
}
```

A **function** is like a little machine you build. You give it stuff, it does something, and it can give you something back.

This function is called `add`. It takes two things (`x` and `y`), adds them, shows the answer with `console.log`, and then gives the answer back with `return`.

Example:

```js
let result = add(5, 15);
```

Here, the add-machine is fed **5** and **15**. It prints **20** and saves the answer in the box called **result**.

---

### 📦 Scope: Where Boxes Exist

```js
function test() {
  const x = 15;
  const y = 20;
  add(x, y);
}
console.log(x, y);
```

- Inside the **test** machine, we made new boxes called `x` and `y`. These boxes only live **inside the test machine**.
- This is called **local scope** or **function scope** — like toys in your friend’s house that you can’t play with in your own house.
- When we try `console.log(x, y);` outside the machine, the computer gets confused because `y` only exists **inside** the test function.

---

### 🖥️ Talking to the Computer

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

This part is like asking the computer to let us talk to it.

- `require("readline")` brings in a tool that lets us ask questions and get answers.
- The code that’s commented out with `/* ... */` would ask, “What is your name?” and then print whatever you typed.

---

✅ So in short:

- **Variables** are boxes.
- **Data types** are the different things you can put in the boxes (numbers, text, switches, empty).
- **Functions** are little machines you build to do jobs.
- **Scope** is about where your toys (variables) are allowed to be used.

---
