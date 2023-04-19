const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const fs = require("fs");


const greatTeam = [];
const { generate } = require("../src/generate");


class Teams {
    constructor() {

    }
     newestTeam() {
        return inquirer.prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Manager's name?"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Manager's ID?"
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Manager's Email?"
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Manager's office number?"
                },
            ])
            .then(data => {

                greatTeam.push(new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber));
                this.extraMember();
            });
    };

    newestIntern() {
        return inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Intern's name?"
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Intern ID?"
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Intern Email?"
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "Intern's School?"
                },
            ])
            .then(data => {
                greatTeam.push(new Intern(data.internName, data.internId, data.internEmail, data.internSchool));
                this.extraMember()

            });
    };

    newestEngineer() {
        return inquirer.prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Engineer's name?"
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Engineer ID?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Engineer Email?"
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "Engineer's Github?"
                },
            ])
            .then(data => {
                greatTeam.push(new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub));
                this.addMember();
            });
    }
    extraMember() {
        return inquirer.prompt(
            {
                    type: "list",
                    name: "addMember",
                    message: "Add more members?",
                    choices: ["Add an Engineer", "Add an Intern", "No more"]
            }
        )
            .then((data)=> {
                if (data.addMember === "Add an Intern") this.newestIntern();
                else if (data.addMember === "Add an engineer") this.newestEngineer(); 
                else fs.writeFile("./dist/index.html", generate(team), err => (console.error(err), console.log("test",team)))
            }
                )
            
    }
}

module.exports = Teams;

