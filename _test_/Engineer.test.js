const Engineer = require('../lib/Engineer');

test("Testing Engineer's github", () => {
    const gitHub = "Lebonisgood";
    const employeeGitHub = new Engineer('Lebron', 1, 'test@test.com', gitHub);
    expect(employeeGitHub.github).toBe(gitHub); 
});

test("Test getGithub module in Employee role", () => {
    const github = 'Lebronisgood';
    const employeeGitHub = new Engineer('Lebron', 1, 'test@test.com', github)
    expect(employeeGitHub.getGithub()).toBe(github);
});

test("Test getRole module in Employee role", () => {
    const role = 'Engineer';
    const employeeRole = new Engineer('Lebron', 1, 'test@test.com', role);
    expect(employeeRole.getRole()).toBe(role);
});

