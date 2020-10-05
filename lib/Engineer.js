// Engineer constructor inherits parent props from Employee then:
// 1) adds github,
// 2) has Engineer role overidding Employee role,
// 3) exports the Engineer class.

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }
};

Engineer.prototype.getRole      =   function () { return 'Engineer'; };
Engineer.prototype.getGithub    =   function () { return this.github; };

module.exports = Engineer;