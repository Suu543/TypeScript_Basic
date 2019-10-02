class Sorter {
    // public 있으면 생략 collection: number[]

    constructor(public collection: number[] | string) {
        // public 있으면 생략 this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // All of this only wokrs if collection is number[]
                // If collection is an array of numbers
                // Type Guard
                if (this.collection instanceof Array) {
                    // collection === number[]
                    // Typescript is 100% aware of it.
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // Only going to work if collection is a string
                // If collection is a string, do this logic instead:
                // ~Logic to compare and swap characters in a string
                // Add another type-guard
                // Be aware of typeof vs instanceof
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}


const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);