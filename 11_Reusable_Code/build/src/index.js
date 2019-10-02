"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// Load and Parse
var matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
    // String, not buffer
})
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
// Draw가 사용되지않았다고 지우면 모든 dataset을 알지못하기 때문에 이 문제를 방지하기위해 ENUM을 사용하자
// Object는 다양한 용도로 사용되는데 이 경우 정확이 어떤 용례로 사용했는지 명시하기위해 enum keyword 사용하자
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';
var manUnitedWins = 0;
// Analyze - hard to understand What each string means
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// Report
console.log("Man United Won " + manUnitedWins + " games");
