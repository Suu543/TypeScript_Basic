// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);

// Global Variable로 google을 이용할 수 있다.

import { User } from "./User";
import { CustomMap } from "./CustomMap";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

// Implicit Check User and Company가 addMarker Method의 interface를 충족하는지 Typescript이 자동으로 확인
customMap.addMarker(user);
customMap.addMarker(company);
