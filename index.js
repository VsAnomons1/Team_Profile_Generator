const fs = require("fs");
const inquirer = require("inquirer");
const {homePageHtml, managerHtml, engineerHtml, internHtml} = require("./src/helperCode");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var devTeam = [];
function setEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the engineer's name",
            name: "engineerName"
        },
        {
            type: "input",
            message: "Enter the engineer's employee id",
            name: "engineerId"
        },
        {
            type: "input",
            message: "Enter the engineer's email",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "Enter the engineer's github",
            name: "github"
        },
    ])
    .then((response) => {
        const engineer = new Engineer(response.engineerName, parseInt(response.engineerId), response.engineerEmail, response.github)
        devTeam.push(engineerHtml(engineer));
        addMember();
    })
};

function setIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the intern's name",
            name: "internName"
        },
        {
            type: "input",
            message: "Enter the intern's employee id",
            name: "internId"
        },
        {
            type: "input",
            message: "Enter the intern's email",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Enter the intern's school",
            name: "school"
        }
    ])
    .then((response) => {
        const intern = new Intern(response.internName, parseInt(response.internId), response.internEmail, response.school);
        devTeam.push(internHtml(intern));
        addMember();
    })
}

function addMember(){
    inquirer.prompt([
        {
            type: "list",
            message: "Add the next member to your team or move to Done with Team",
            choices: ["Engineer", "Intern", "Done with Team"],
            name: "team"
        }
    ])
    .then((response) => {
        if(response.team === "Engineer"){
            setEngineer();
        }
        else if(response.team === "Intern"){
            setIntern();
        }
        else {
            fs.writeFileSync("./dist/index.html", homePageHtml(devTeam), (err) => {
                err ? new Error("html file updated unsucessfully") : console.log("html file updated with the team");
            });
        }
    })
}

inquirer.prompt([
    {
        type: "input",
        message: "Enter the manager's name",
        name: "managerName"
    },
    {
        type: "input",
        message: "Enter the manager's employee id",
        name: "managerId"
    },
    {
        type: "input",
        message: "Enter the manager's email",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Enter the manager's office id",
        name: "managerOfficeId"
    },
    {
        type: "list",
        message: "Add the next member to your team",
        choices: ["Engineer", "Intern"],
        name: "team",
    }
])
.then((response) => {
    const manager = new Manager(response.managerName, parseInt(response.managerId), response.managerEmail, parseInt(response.managerOfficeId));
    devTeam.push(managerHtml(manager));
    if(response.team === "Engineer"){
        setEngineer();
    }
    else {
        setIntern();
    }
})