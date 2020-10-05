// Intern constructor inherits parent props from Employee then:
// 1) adds school,
// 2) has Intern role overidding Employee role,
// 3) exports the Intern class.

const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }
};

Intern.prototype.getRole    =   function () { return 'Intern'; };
Intern.prototype.getSchool  =   function () { return this.school; };

module.exports = Intern;