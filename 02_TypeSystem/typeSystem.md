# Two Distinct Categories of knowledge that we need

```
Syntax + Features
      |
      |
      v
What is an interface?
What is the syntax for defining an interface?
```

```
Design Patterns with TS
      |
      |
      v
How do we use interfaces to write reusable code?
```

# The study flow of typeSystem

- Plain Definition
- Why do we care?
- Examples
- When to use this?

# Definition

<b>Type</b>: Easy way to refer to the different properties + functions that a value has

ex)
<b>"red"</b>

- Definition: It's a string
- TypeScript Definition: It is a value that has all properties + methods that we assume that a string has, such as indexOf(), concat(), includes(), etc...

# Types

```
Type              Values That Have This Type
------ |---------------------------------------------------
string           'hi there', "", "Hello World"
number           .05, -20, 400
boolean           true false
Date              new Date()
Todo              {id: 1, completed: true, title: "world"}
```

# Two different categories of types in TS

```
                             --> number, boolean, void, undefined
            Primitive Types:
                             --> string, symbol, null
Types --------------------------------------------------------------
                             --> functions, arrays
            Object Types
                             --> classes, objects
```

# Why do we care about types?

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

# Where do we use types?

- <b>EveryWhere!</b>

# Course Goals
- Understand basic types in TS
- Function typing + annotations
- Type Definition files           -----> Syntax + Features
- Arrays in TS
- Modules System
- Classes + Refresher on OOP
- Projects - Design Patterns

# Quiz

- What is type? An shortcut to refer to the different properties and function that a value has

- In Typescript, what has a type?
- Any value

- Why do we care about types?
- They give the Typescript Compiler information to analyze our code for errors
