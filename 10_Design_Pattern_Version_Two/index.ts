import { Sorter } from './src/Sorter';
import { NumbersCollection } from './src/NumbersCollection';
import { CharactersCollection } from "./src/CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);