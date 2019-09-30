# Design Patterns with TypeScript

```
Randomly Generate these (user + company)
 |
 |
 v
Then show on map
```

### Start

```
npm install -g parcel-bundler
// Tool to help us run TypeScript in the browser

mkdir maps
cd maps
code .

```

## How Parcel Bundler works

```
Parcel Bundler -----> index.html
                 // script of "index.ts"
                // Ah, a '.ts' file, I will compile it to JS then replace this script tag


cd maps
parcel index.html
```

## Project Structure

```
          "src" folder

        -----------Map.ts
        |
index <-----------user.ts
        |
        -----------Company.ts
```

```
npmjs.com

'faker' package

address: latitude and longitude
company:
```

```
// Coud not find a declaration file for module 'faker'
Whenever you and I are writing typescript code we are free to make use of JavaScript Libraries as much as we want to

                   --------JS Library
                  |
TypeScript code <----------JS Library
                  |
                   --------JS Library


// We can install common javascript libraries into any types good project using NPM or
we could even reference JavaScript files that you and I write ourselves inside of our project form typescript code. But there is a little caveat.

// Remember Typescript wants to check your code and it checks your code by the use of types. Typescript wants to know all the different functions that you have. What different type of arguments they take and waht type of value they return. In general, he wants to know all the different types of data that are flowing around your application. If Typescript doesn't have this information then it cannot completely check your code.

// We start to think about using JavaScript code inside of our project. Naturally all javascript code we write or make use of is not going to have any type information attached to it. In typescript can't really automatically figure out what differnt types of values are floating around Javascript code. To fix this problem, typescript has the idea of type definition files.

// You can think of a type definition file as kind of an adapter between typescript code that you and I write in javascript libraries that we try to work with it. Type definition file is going to tell the typescript compiler. All the different functions that are available inside the Javascript library. What type of argument they take and what type of value thouse functions return.


                   -----> Type Definition File---------JS Library
                       |
TypeScript code---------> Type Definition File----------JS Library
                  |
                   -----> Type Definition File----------JS Library

// Definitely Typed Naming Schema
// All these type definition files are already publicly available for you. The vast majority for popular libraries have alread been created.
@types/{library name}
      |
      |
      V
@types/faker
```
