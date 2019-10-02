import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }


    get length(): number {
        return this.data.length;
    }

    // compareValues 하면 오류 발생
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}

// const collection = new NumbersCollection([1, 2, 3]);

// data.compare
// data.swap
// get length()는 data가 index.ts에서 데이터가 할당될 때 값을 get하는 역할
