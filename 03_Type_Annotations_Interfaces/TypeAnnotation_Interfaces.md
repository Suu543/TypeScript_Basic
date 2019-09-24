# Type Annotations + Type Inference

```
 Variables
    |
    |
    v
 Functions
    |
    |
    v
 Objects
```

- Type Annotations: Code we add tell TypeScript what type of value a variable will refer to
- Type Inference: Typescript tries to figure out what type of value a variable refers to

```
Type Annotations   < ----- >      Type Inference
 
We (developers)                   Typescript guesses 
tell TypeScript                   the type
The Type
```

```
         Primitive Types: number, boolean, void, undefined, string, symbol, null
Types -
         Object Types: functions, arrays, classes, objets
        
```

## Type Inference

```
const color = 'red';
     |          |
     |          |
     V          v
Variable       Variable
Declaration    Initialization

If declaration and initialization are on the same line,
TypeScript will figure out the type of 'color' for us
```


```
Type Annotations
- When to use
-- When we declare a variable on one line then initialize it later
-- When we want a variable to have a type that can't be inferred
-- When a function returns the 'any' type and we need to clarify the value


Type Inference
- When to use
-- Always!!
```

``` 
// Even though there is no error, why do we need type annotation?
const json = `{"x":10, "y": 20}`;
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y : 20};

- ex)
'false' --> JSON.parse() --> boolean
'4' --> JSON.parse() --> number
'{"value": 5}' --> JSON.parse() --> {value: number}
'{"name":"alex"}' --> JSON.parse() --> {name: string}

-- The above parsing example could be one of the reasons why we need any type.
- ex)
'false' --> JSON.parse()
'4' --> JSON.parse()                  ---> Any
'{"value": 5}' --> JSON.parse() 
'{"name":"alex"}' --> JSON.parse() 

```

## any type
- A type, just as 'string' or 'boolean' are
- Means TS has no idea what this is -can't check for correct property references
- Avoid variables with 'any' at all costs because if we use any type it means there is no such things that TS can do.

## Delayed Initialization
