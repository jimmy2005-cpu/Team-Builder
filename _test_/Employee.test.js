const Employee = require('../lib/Employee');

test("Testing employee name", () => {
    const name = "Lebron";
    const employeeName = new Employee(name);
    expect(employeeName.name).toBe(name);
});

test("Testing employee id",() => {
    const id = 1;
    const employeeId = new Employee("Lebron", id);
    expect(employeeId.id).toBe(id);

});

test("Testing employee email", () => {
    const email = "test@test.com";
    const employeeEmail = new Employee('Lebron', 3, email);
    expect(employeeEmail.email).toBe(email);
});

test("Testing getName method in Employee role", () => {
    const name = "Lebron";
    const employeeName = new Employee(name);
    expect(employeeName.getName()).toBe(name);
});

test("Testing getId method in Employee role", () => {
    const id = 1;
    const employeeId = new Employee('Lebron', id);
    expect(employeeId.getId()).toBe(id);
});

test("Testing getEmail method in Employee role", () => {
    const email = 'test@test.com';
    const employeeEmail = new Employee('Lebron', 1, email);
    expect(employeeEmail.getEmail()).toBe(email);
});

test("Testing getRole method in Employee role", () => {
    const role = "Employee";
    const employeeRole = new Employee('Lebron', 1, "test@test.com", role);
    expect(employeeRole.getRole()).toBe(role);
});