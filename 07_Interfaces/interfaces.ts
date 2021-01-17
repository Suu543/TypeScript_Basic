// Long Type Annotations
const oldCar = {
  name: "Hello",
  year: 2000,
  broken: true
};

// Long Type Annotations은 길어 읽기가 힘들다
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

// Interface를 이용해 Long Type Annotations을 고쳐보자
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
// drinkdrink랑 newCar 둘 다 summary method가 있기 때문에 재사용이가능하다.
printSummary(drinkdrink);

