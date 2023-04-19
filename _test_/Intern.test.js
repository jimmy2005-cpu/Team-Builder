const Intern = require('../lib/Intern');

test("Test intern's attending school", () => {
    const school = "University of New Brunswick";
    const intern = new Intern('Lebron', 1, 'test@test.com', school);
    expect(intern.school).toBe(school);
});

test("Test getSchool module in Intern role", () => {
    const school = "University of New Brunswick";
    const intern = new Intern('Leborn', 1, 'test@test.com', school);
    expect(intern.getSchool()).toBe(school);
});

test("Test getRole module in Intern role", () => {
    const role = "Intern";
    const employeeRole = new Intern("Lebron", 1, 'test@test.com', role);
    expect(employeeRole.getRole()).toBe(role);
});