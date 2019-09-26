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

// Why Tuples?

const carSpecs: [number, number] = [400, 3345];
const carStats = {
  horsepower: 400,
  weight: 3354
};
