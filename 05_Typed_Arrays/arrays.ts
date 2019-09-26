const carMakers: string[] = ["ssangyong", "kia", "hyundae"];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [["k3"], ["k5"], ["k7"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // Error

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types string | Date
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());
importantDates.push(new Date());
