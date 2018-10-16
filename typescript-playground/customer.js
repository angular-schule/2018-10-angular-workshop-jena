"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function () {
        var _this = this;
        var self = this;
        var callback1 = function () {
            return 'Die ID ist ' + self.id;
        };
        var callback2 = function () { return "!!\nDie ID ist " + _this.id + "!!"; };
        return callback2();
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map