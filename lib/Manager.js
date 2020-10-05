// Manager constructor inherits parent props from Employee then:
// 1) adds phoneNumber,
// 2) has Manager role overidding Employee role,
// 3) exports the Manager class.

const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, phoneNumber)
    {
        super(name, id, email);
        this.phoneNumber = phoneNumber;
    }
};

Manager.prototype.getRole           =   function () { return 'Manager'; };
Manager.prototype.getPhoneNumber    =   function () { return this.phoneNumber; };

module.exports = Manager;