# TypeScript_Basic

Su's Road to Study TypeScript

## Goal of this study

Syntax + Features

- Understand basic types in TS
- Function typing + annotations
- Type definition files
- Arrays in TS
- Module Systems
- Classes + Refresher on OOP

Design Patterns

- Projects

### TypeScript = Javascript + A type-system

<br>
<br>

### The TypeScript(TS) Type System

- Helps us catch errors during development
- Uses "type annotations" to analyze our code
- Only <b>active</b> during development
- Doesn't provide any performance optimization

<br>
<br>

```
Typescript Code (Javascript with type annotations)
                   |
                   |
                   v
          TypeScript Compiler
                   |
                   |
                   v
          Plain old JavaScript
                   |
                   |
                   V
Browser executes plain Javascript, has no idea we wrote Typescript
```

<br>
<br>

### Typescript Javascript Converter

- typescriptlang.org/play

<br>
<br>

### Summary

- Writing Typescript is the same as writing Javascript with some <b>"extra documentation"</b>
- Typescript has no effect on how our code gets executed by the browser or Node.
- It is best to think of Typescript as being like a friend sitting behind you while you are coding.

### Environment Setup

Typescript compiler

```
npm install -g typescript ts-node
```

```
tsc --help
```

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
