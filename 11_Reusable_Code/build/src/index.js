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
var homeWin = 'H';
var awayWin = 'A';
var draw = 'D';
var manUnitedWins = 0;
// Analyze - hard to understand What each string means
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === "Man United" && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === awayWin) {
        manUnitedWins++;
    }
}
// Report
console.log("Man United Won " + manUnitedWins + " games");
