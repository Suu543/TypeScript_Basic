import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'


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

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);
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


let manUnitedWins = 0;

// Analyze - hard to understand What each string means
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

// Report
console.log(`Man United Won ${manUnitedWins} games`)