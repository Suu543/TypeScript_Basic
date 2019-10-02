"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// You can pass in any object anything whatsoever that has there three properties.
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// collection은 NumbersCollection은 data이기 때문에
// 동일하게 compare, swap method를 사용할 수 있다. 그리고 this.collection 을 이용해 length 를 할당하면
// 자동으로 getter가 그 값을 할당한다.
