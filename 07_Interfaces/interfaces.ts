// Long Type Annotations
const oldCar = {
  name: "Hello",
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

printVehicle(oldCar);

// Fixing Long Annotations with Interfaces
// 새로운 type이라 생각해도 무방 한 것 같다
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const interfaceVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

interfaceVehicle(oldCar);

// Syntax Aroung Interfaces
interface Vehicle1 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // return string
}

const newCar = {
  name: "Hello",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  }
};

const interfaceNewCar = (newCar: Vehicle1): void => {
  console.log(newCar.summary());
};

interfaceNewCar(newCar);

// Functions in Interfaces
// Reuse를 위해 General 한 naming
interface Reportable {
  summary(): string; // return string
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newCar);

// Code Reuse with interfaces
const drinkdrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

// 위의 newCar 처럼 reusable 가능
printSummary(drinkdrink);
