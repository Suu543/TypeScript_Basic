# Interfaces

- Creates a new type, describing the property names and value type of an object

```
Interfaces + Classes = How we get really strong code reuse in TS
```

## General Plan with Interfaces

```
                                ----- oldCivic

Interface Reportable <----------    (Must satisfy the 'Reportable' interfaces to work
        |                             with 'printSummary')
        |                       ----- drink
        |
        v
(Reportable is a gateKeeper to 'printSummary')
printSummary Function
```

## General Strategy for Reusable Code in TS

- Create functions that accept arguments that are typed with interfaces
- Objects/classes can decide to 'implement' a given interface to work with a function

```
                          Object #1

Interface XYZ  <-------    (Must satisfy the 'XYZ' interfaces to work with 'some func')
      |
      |                   Object #2
      |
      V
   some function


```

- The goal of an interface is to define a new type

```
// What will Typescript do to decide if coffeeCup is of type Cup?

interface Cup {
    volume: number;
    height: number;
}

const coffeeCup = {
    volume: 3000,
    height: 20
}

// Typescript will iterate through all the properties of the interface and make sure
// coffeeCup has the same properties with the same type
```

```
// The pineTree object successfully implements the Tree interface
interface Tree {
    height: number;
    name: string
}

const pineTree = {
    height: 2000,
    name: 'pine'
}
```

```
// the washDishes object does not implement the Todo interface because interface expects /// id to be a number, but washDishes provided a string

interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

const washDishes = {
    id: 'ABOJ0UJ2',
    name: 'Do the dishes',
    completed: false
}

```

```
// The washDishes object implements both the Todo and Model interfaces because has all ///// the same property names and types of Todo and Model

interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

interface Model {
    id: number;
}

const washDishes = {
    id: 20,
    name: 'Do the dishes',
    completed: false
}
```

## Quiz
1. The goal of an interface is to:
    - Define a new type

2. Take a look at the following code. What will Typescript do to decide if `coffeeCup` is of type

```typescript
interface Cup {
    volume: number;
    height: number;
}

const coffeeCup = {
    volume: 300,
    height: 20
}

```
- Typescript will iterate through all the properties of the interface and make sure `coffeeCup` has the same properties with the same type

3. Does this `pineTree` object successfuly implement the `Tree` interface? Yes

```typescript
interface Tree {
    height: number;
    name: string;
}

const pineTree = {
    height: 200,
    name: 'pine'
}
```

4. Does the `washDishes` object implement the `Todo` interface

```typescript
interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

const washDishes = {
    id: 'ABCD-1234-ABCD-1234',
    name: 'Do the dishes',
    completed: false
}
```

- No because the `Todo` interface expects `id` to be a `number`, but `washDishes` provided a `string`

5. Does `washDishes` implement both the `Todo` and `Model` interfaces

```typescript
interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

interface Model {
    id: number;
}

const washDishes = {
    id: 20,
    name: "Do the dishes",
    completed: false
}
```
- Yes, because `washDishes` has all the same property names and types of `Todo` and `Model`

6. Actually in TS the implementation of the interface is implicit. Meaning if the properties of a class has those methods which is mentioned in the interface then TS will think that it implements the interface.

Will be easy for you if try out a code and check for yourself. 

```typescript
  height: number;
  width: number;
}
 
class PrintTree {
  tree: Tree;
  constructor(tree: Tree) {
    this.tree = tree;
  }
 
  print() {
    console.log(`height: ${this.tree.height}`);
  }
}
 
class PineTree {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
}
 
const printTree = new PrintTree(new PineTree(100, 20));
printTree.print();
```
- As you can see TS doesn't complain because the PineTree has the exact same properties as the interface. Think of it as a shape of how the object should look. As long as it matches the look TS says okay this is a Tree and won't complain.


