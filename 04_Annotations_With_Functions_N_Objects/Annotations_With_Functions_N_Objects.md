# Annotations With Functions And Objects
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

```
Type Annotations for functions: Code we add to Tell Typescript what type of arguments a function will receive and what type of values it will return

Type Inference for functions: Typescript tries to figure out what type of value a function will return

```

```
        No Type Inference                           Type inference works
        for arguments                               out output, but we won't use it
           a: number                                  
Arguments                   --> Addition       --> number (output)
           b: number


const add = (a: number, b: number): number => {
    return a + b;
};


```