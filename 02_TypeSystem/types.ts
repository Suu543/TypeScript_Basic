// Types: 한 값이 가지고있는 다양한 properties and functions을 쉽게 확인 or 식별 할 수 있다.
const today = new Date();
today.getMonth();

// If we don't have a shortened definition of what this object is, then
// typescript is just going to default to printing out
// all the different properties and methods that the object has
const person = {
  age: 20
};
