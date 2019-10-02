import fs from 'fs';

// Load and Parse
const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
    // String, not buffer
})
    .split('\n')
    .map((row: string) => {
        return row.split(',');
    });

let manUnitedWins = 0;

// Analyze
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === 'H') {
        manUnitedWins++
    } else if (match[2] === "Man United" && match[5] === 'A') {
        manUnitedWins++;
    }
}

// Report
console.log(`Man United Won ${manUnitedWins} games`)