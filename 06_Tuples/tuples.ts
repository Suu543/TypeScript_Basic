// Object Representing a 'drink'
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// Type Alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ["brown", true, 40];
pepsi[0] = 40;

const sprite: Drink = ["borwn", true, 40];
const tea: Drink = ["brown", false, 0];

// Why Tuples?
// tuple은 크게 쓸모가 없다, 400, 3354라는 숫자만 보고는 어떤 의미인지 유추하기 싶지 않기 때문이다.
// Meaningful Data로 간주하기 어렵다. 그래서 Array에서는 그렇게 자주 사용하지는 않는다.
const carSpecs: [number, number] = [400, 3345];
const carStats = {
  horsepower: 400,
  weight: 3354
};

// https://pawelgrzybek.com/typescript-interface-vs-type/