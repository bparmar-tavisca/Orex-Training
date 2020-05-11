"use strict";
exports.__esModule = true;
var TestHelper = /** @class */ (function () {
    function TestHelper() {
    }
    TestHelper.prototype.findOccurance = function (text, charToSearch, startPosition) {
        var retValue = [];
        do {
            var index = text.indexOf(charToSearch, 0);
            if (index != -1) {
                text = text.substr(index + 1);
                retValue.push(index);
            }
        } while (index != -1);
        return retValue;
    };
    TestHelper.prototype.countSentences = function (text) {
        var retValue = 0;
        retValue = text.split(".").length - 1;
        return retValue;
    };
    // = value.slice(0,1).toUpperCase()+value.slice(1,value.length
    TestHelper.prototype.formatText = function (text) {
        var tempStr = text.split(".");
        tempStr.forEach(function (value, index) {
            tempStr[index] = tempStr[index].trim();
            tempStr[index] = value.slice(0, 1).toUpperCase() + value.slice(1, value.length);
        });
        return tempStr.join(' ').toString();
    };
    return TestHelper;
}());
exports.TestHelper = TestHelper;
