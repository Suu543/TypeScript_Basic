"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// Load and Parse 
// Let's solve the problem that the source of the data is hardcoded
// const matches = fs.readFileSync('football.csv', {
//     encoding: 'utf-8'
//     // String, not buffer
// })
//     .split('\n')
//     .map((row: string) => {
//         return row.split(',');
//     });
// 1. 재사용성을 위해 CsvFileReader 생성
// 2. outside API 에서 받아와도 이용하기위해 하지만 현재는 football 파일에만 이용할 수 있다.
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// const dateOfFirstMatch = reader.data[0][0];
// console.log(dateOfFirstMatch);
// Draw가 사용되지않았다고 지우면 모든 dataset을 알지못하기 때문에 이 문제를 방지하기위해 ENUM을 사용하자
// Object는 다양한 용도로 사용되는데 이 경우 정확이 어떤 용례로 사용했는지 명시하기위해 enum keyword 사용하자
// enum - enumeration
// enum MatchResult {
//     HomeWin = 'H',
//     AwayWin = 'A',
//     Draw = "D"
// }
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
var manUnitedWins = 0;
// Analyze - hard to understand What each string means
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// Report
console.log("Man United Won " + manUnitedWins + " games");
