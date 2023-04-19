const Manager = require("../lib/manager");

test("Test Manager's officeNumber", () => {
    const officeNumber = 111111111;
    const employeeOfficeNumber = new Manager("Lebron", 1, "test@test.com", officeNumber);
    expect(employeeOfficeNumber.officeNumber).toBe(officeNumber);
});

test("Test getOfficeNumber method in Manager role", () => {
    const officeNumber = 111111111;
    const employeeOfficeNumber = new Manager("Lebron", 1, "test@test.com", officeNumber);
    expect(employeeOfficeNumber.getOfficeNumber()).toBe(officeNumber);
});

test("Test getRole method in Manager role", () => {
    const role = "Manager";
    const employeeRole = new Manager("Lebron", 1, "test@test.com", role);
    expect(employeeRole.getRole()).toBe(role);
});