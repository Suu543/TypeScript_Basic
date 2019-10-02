export class NumbersCollection {
    constructor(public data: number[]) { }

    get length(): number {
        return this.data.length;
    }

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
