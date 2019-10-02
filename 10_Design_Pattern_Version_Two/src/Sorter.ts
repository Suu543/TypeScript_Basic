interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

// You can pass in any object anything whatsoever that has there three properties.

export class Sorter {

    constructor(public collection: Sortable) { }

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }

            }
        }
    }
}

// collection은 NumbersCollection은 data이기 때문에
// 동일하게 compare, swap method를 사용할 수 있다. 그리고 this.collection 을 이용해 length 를 할당하면
// 자동으로 getter가 그 값을 할당한다.