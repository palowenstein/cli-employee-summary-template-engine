// Trilogy Test Code except: //
// I did swap getOfficeNumber() for getPhoneNumber() as it was more obvious.
// same for officeNumber which became phoneNumber.

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.phoneNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get phone number via getPhoneNumber()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getPhoneNumber()).toBe(testValue);
});