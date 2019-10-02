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