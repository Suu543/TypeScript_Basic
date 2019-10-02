"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Converting Date Strings to Dates
exports.dateStringToDate = function (datString) {
    // 28/10/2018
    var dateParts = datString.split('/') /* ['28', '10', '2018'] */
        .map(function (value) {
        return parseInt(value);
    });
    // January is supposed to be zero
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
