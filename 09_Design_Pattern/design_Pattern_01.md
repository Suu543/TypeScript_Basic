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

```
click right click on faker module and go to definition and check out the type

Convetion inside of typescript is to never use default export statements. Now of course there will be some people out there who disagree and who want to still use default statements.

All I'm saying is that in the typescript world it's a little bit more community convention to not use default exports.
```

```
Generate a Google Dev Project at
- http://console.developers.google.com
     |
     |
     v
Enable Google Maps support inside the project
     |
     |
     v
Generate an API Key
     |
     |
     v
Add the google maps script tag to our HTML file

https://maps.googleapis.com/maps/api/js?key=
```

# Hiding Functionality

```
           |---> new
Company ---
           |---> Reference companyName/catchPhrase/lat/lng

        |---> new
User ---
        |---> Reference name/lat/lng



// Calling these might break our app!
               |------> setZoom
               |-------> setCenter
Google Map --- |-------> setStreetView
               |-------> getHeading
               |-------> setHeading
               |-------> panTo



// Ideal things we can do in index.ts file
         ---> new
company |
         ---> Reference name/slogan/lat/lng
----------------------------------------------------
         ---> new
User    |
         ---> Reference name/age/lat/lng
----------------------------------------------------
                ---> new
CustomMap      |
                ---> addMarker

// The important thing here is that Google map and all of its associated dangerous functions and methods right here will not be (위에 구글 맵 부분) easily exposed inside of our index.ts file. So if another engineer came into our project, they can't just open up that index.ts file and start calling random methods on the Google map. Instead, we've hidden all those methods we've wrapped them all up and taken them away from engineers and hidden them behind the facade of sorts or this kind of like black box of custom map.
The only thing you can do with custom map is to create a new map and add a marker to it again.

If we have a program where these are like the only things you can do, chances are it's going to be way more challenging for people to come into our app and start to break things.

Once again this logic to create a Google map is going to wrap up all that stuff into our new class is going to wrap up the Google map and try to hide its existence from other engineers. So they can't accidentally break the application.
```

# Why Use Private Modifiers? Here's Why

- By creating this custom map class it's going to allow us to kind of isolate the Google map and only expost a bare minimum amount of functionality. In total at the end of the day
  the only thing we can do inside of our index.ts file is to create a company reference its properties, create a user reference its properties create a map and then add a marker to it.

```
Add bad code for creating markers

             |
             |
             v

Refactor into a better approach using interfaces
```

```
company
--------
property         value
------------------------
companyName      string
catchPhrase      string
location         {lat: number, lng: number}



user
---------
property         value
-----------------------
name             string
location         {lat: number, lng: number}


In Common Point

company
--------
property         value
------------------------
location         {lat: number, lng: number}



user
---------
property         value
-----------------------
location         {lat: number, lng: number}

```

```
Bad Approach!





Map.ts
import User from './User';
import Company from './Company';

class Map {                                ------------>            User.ts
   addMarker(mappable: User | Company) {         |             class User {
     console.log(mappable.lat);                  |                 lat: number;
   }                                             |                 lng: number;
}                                                |             }
                                                 |
                                                 |
                                                 ----->             Company.ts
                                                               class Company {
                                                                   lat: number;
                                                                   lng: number;
                                                               }

만약에 CarLot.ts , Park.ts 등이 추가되면 추가적으로
import Park from ...
import CarLot for ...
mappable: User | Company | Park | CarLot
해야하는 문제가 발생한다.





Good Approach!

CustomMap.ts
// Instructions on how to be an argument to 'addMarker'

class CustomMap {                         ----------------->         User.ts
   addMarker(mappable: Mappable) {                 |              class User {
                                                   |              }
   }                                               |
}                                                  |-------->      Company.ts
                                                                  class Company {

                                                                  }









                              |----------------------         User
                              |                                ^
                              |                                |
interface Mappable <---------                                  |
                              |                  Must satisfy interface 'Mappable' to work |                   with the CustomMap's addMarker method
                              |------------------------------  |
        |                                                      |
        v                                                      v
addMarker Method                                             Company
```

# Wrap Up

- 1. The fist important thing we covered was that we wanted to restrict the amount of API surface area exposed inside of index.ts. In other words, if another engineer opened up our project and only had access to this file right here (index.ts). We wanted to limit the number of things that they could do. They could only do thing that you and I had specifically allowed inside of our application. For example, another engineer could only create an instance of a user and read its name property and its location. Another engineer could only create a companny and then reference its company name catachphrase and location.
     And with customMap, another engineer could only create an instance of a customMap and then call that addMarker method. In as far as our code is concerned that's the only thing that other engineers can do inside of here.

The most important aspect of this was that we wanted to restrict access to that Google map that we created because remember the Google map had a ton of different properties associated with it. So to make sure that other engineers could not mess with this thing we added on that private modifier. The private modifier means that we can only reference this property from methods inside of the customMap.

For example, back inside of index.ts, if we tried to refer to customMap.googleMap, we got the error message that said this is a private property and you cannot access to it unless you are inside of the class customMap. I know 100 percent what you're thinking but steven other engineers can just open up this file and start calling this or accesing this proeprty directly from inside this class. Yes I agree with you.Another engineer code to open up this file.

But the idea here was simplay that if we viewed custumMap as being like a black box or kind of like a mystery things of sorts we "limited the damage the other engineers can do". We just exposed the bare minimum amount of functionality to allow our application to work and nothing more. So another engineer can open up that file but if you just kind of view this variable right here by itself there's only two things we can do with it to create an instance and addMarker that's it. Nothing Else.

- 2. The next big thing we spoke about was our interface inside of customMap. So we ran into many issues around this addMarker function. We initially saw that we had two different addMarker function one for business or one for companies. And when we had that duplicated definition, we had a lot of duplicated code. So as an initial approach we tried to say that addMarker could take many differnt types (Bad Approach 부분). The bad thing about this approach is that it's set up a dependency between customMap and all the different things that we would want to map inside of our application. So as soon as we started to add in more things that could be represented on the map as a marker, well we had to go back and update customMap which would have been a very easy time for us to accidentally introduces bugs into our application.

To fix this problem, we invented the dependency here. We said instead of customMap trying to accomodate all these differnt classes, we instead say Hey other classes you have to accommodate customMap. So inside of custom map at the very top we put some instructions on how another class or instance of the class could be an argumnet to addMarker. We did that by defining an interface. That was equivalent to customMap kind of standing up for itself.

- Big Killer feature of typescript is the interplay between classes and interfaces and that's exactly what you are seeing right here. This right here is the killer feature of Typescript and this is how we're going to write awesome code.

```
 Typical Typescript File

Interface Definitions for working with this class (20%)
Class definition (80%)

```

1. Restrict API Surface Area
2. Use interfaces to set up a type of dependency between type the differen classes inside of application
3. Help typescript put errors in the correct location by using this implements clauses on classes.
