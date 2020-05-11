"use strict";
exports.__esModule = true;
var SortHelper = /** @class */ (function () {
    function SortHelper() {
    }
    SortHelper.prototype.sort = function (input) {
        return input.sort(this.compare);
    };
    SortHelper.prototype.revers = function (input) {
        return this.sort(input).reverse();
    };
    SortHelper.prototype.compare = function (a, b) {
        var rtValue = 0;
        if (a.length == b.length)
            rtValue = 0;
        if (a.length < b.length)
            rtValue = -1;
        if (a.length > b.length)
            rtValue = 1;
        return rtValue;
    };
    return SortHelper;
}());
exports.SortHelper = SortHelper;
