# Introduction

```
             Node std Lib          code we write   
CSV Data -->   Load -->     Parse --> Analyze --> Report

```

- nodejs.org/api



```
           -------> Type Definition File   -----> JS Library 
 
Typescript -------> Type Definition File   -----> JS Library
 
           -------> Type Definition File   -----> Node JS Standard Lib ---> fs, http, os


npm install @types/node

```

## Parsing Idea
```
"10/08/2018, Man United, adasd, 2, 1, H, A mARRINER"   ----> string

                        |
                        |  .split('\n')
                        v

[
    "10/08/2018, Man United, adasd, 2, 1, H, A mARRINER", -----> string[]
    ""10/08/2018, Man United, adasd, 2, 1, H, A mARRINER"
]
                        |
                        | map + split
                        v
[
    ["10/08/2018, Man United, adasd, 2, 1, H, A mARRINER"], -----> string[][]
    ["10/08/2018, Man United, adasd, 2, 1, H, A mARRINER"]
]

```

```
10/18/2018 | Man United | Lecister | 2 | 1 | H | A Marriner
      0          1            2      3   4   5       6

```

```
Build the app with a traditional JS Approach
                    |
                    |
                    v
Point out some things that aren't so great
                    |
                    |
                    v
        Refactor with Typescript!
```

## Issues
- Magin String Comparisons
- Source of data is hardcoded
- Data array is all strings, even though it might have numbers in it
- Variable named after a specific team
- Analysis type is fixed
- No ability to output the report in different formats

## Enums - When to use Enums?
- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from TS to JS
- Primary Goal is to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at compile time.

```
Show we use an enum to represent...

1. Primary colors on a color picker? YES ---> YELLOW, RED, BLUE
2. The set of movie categories on Netflix ---> No, it is not fixed
3. The titles of all blog posts by a particular user? ---> No, it can be updated in the future
4. Size of a drink on an ordering menu? ---> Yes
5. All years since the year 1750? It might be possible but it is too big to use enum because we normally use enum for a rather small set of vlaues.
6. the 'read' status of a text message? Yes


```

### Extracting CSV Reading

```
CsvFileReader

Fields                         Methods
filename: string               read(): void
data: string[][]

```
## Data Types

```
'10/18/2018' | Man United | Lecister | '2' | '1'     | H          | A Marriner
      0          1            2      3   4   5                          6
parseData
   Date                                  parseInt

   Date        String      String        number    MatchResult       string


```