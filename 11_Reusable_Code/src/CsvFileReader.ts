import fs from 'fs'
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult'

// 각 자리마다 특정 Type이 있으니까 tuple을 이용해서 Type-Guard하기
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
    // data: string[][] = [];
    data: MatchData[] = [];

    constructor(public filename: string) { }

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            // We need type-guard here instead of (Date | string | number | MatchResult)[]
            .map((row: string[]): MatchData => {
                /* single row */
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    // Which is called type assertion
                    // 'H', 'A', 'D'
                    row[5] as MatchResult,
                    row[6]
                ];
            })
    }
}