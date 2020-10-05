// The constructor code below associates the employee data inputs from app.js
// with the corresponding Employee class props (name, id, email)
// before being exported as 'Employee' so that it can be imported
// into the engineer, intern, manager classes and enriched from there.
// Note that the first letter of the constructor object function's name
// is an upper case to distinguish it from a variable / constant.
// This also applies to the other constructors in the other library files.

class Employee {
    constructor (name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }
};

Employee.prototype.getName  =   function () { return this.name; }
Employee.prototype.getId    =   function () { return this.id; }
Employee.prototype.getEmail =   function () { return this.email; }
Employee.prototype.getRole  =   function () { return 'Employee'; }

module.exports = Employee;