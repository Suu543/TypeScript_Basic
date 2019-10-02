# Configuring the TS Compiler

```
tsc --init

Inside tsconfig.json

"outDir": "./build",
"rootDir": "./src",

tsc -w
node build/index.js

npm i nodemon concurrently
```

```
Automation:

"start:build": "tsc -w",
"start:run": "npx nodemon build/index.js",
"start": "concurrently npm:start:*"

```


### Project
```
// Array Of numbers
[10, 5, 18, -3] ----> [-3, 5, 10, 18]

// String
'PoaJB' ----> 'aBJoP'

// Linked List
10 --> -3 --> 27 --> 5  ---------> -3 --> 5 --> 10 --> 27
```

```
// Bubble Sort
0 10 -1 5

Is 0 > 10? If so, swam them

0 -1 10 5
IS 10 > -1? If so, swap them

0 -1 5 10
IS 10 > 5? If so, swap them

After one iteration, bubble sort guarantess that the greatest element all the way to the right hand side because we are comparing each pair in sequence.

0 -1 5 10
IS 0 > -1? IF so, swap them

-1 0 5 10
IS 0 > 5? If so, swap them

Now we are guaranteed on the second iteration to have our second to last element B in the corect location.

-1 0
IS -1 > 0? If so, swap them
세번째로 큰 수 보장 끝.
```

```
Unsorted -----> Sorted
X a a a         a a a X

String은 Immutable 이기 때문에 숫자처럼 변경이 불가능하다.
그러므로 charCodeAt을 이용해서 각 string을 ASCII 숫자로 인식해서
비교후 변경하는 방식을 취해야한다.
```

```
Union Types (or Operator)

Company
-------------------------------
property              value
--------------------------------
companyName           string
catchPhrase           string
location            {lat: number, lng: number}


user
----------------------------------
property              value
----------------------------------
name                  string
location            {lat: number, lng: number}



## Type Guard

Narrow type of a value to a primitive type

typeof ---> number, string, boolean, symbol

Narrow down every otehr type of value

instaneof ---> Every other value that is created with a constructor function

# Sorter.ts
class Sorter {
    sort() {
        for() for()
        if(this.collection.compare()) {
            this.collection.swap
        }
    }
}

# NumbersCollection.ts
class NumbersCollection {
    data: number[];
    swap(i, j)
    compare(i, j)
    length: number
}

```