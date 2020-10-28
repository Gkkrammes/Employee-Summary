const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const write = () => {
    console.log(team)
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    };
    fs.writeFileSync(outputPath, render(team), "utf-8");
};

const team = [];

const newEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What role would you like to create for your employee?",
            choices: [
                "Engineer",
                "Intern",
                "Done"

            ]
        }
    ])
};

// Manager
async function createManager() {
    inquirer.prompt([
// prompt name
        {
            type: "input",
            name: "name",
            message: "What is the Manger's name?"
        },
// prompt ID
        {
            type: "input",
            name: "Id",
            message: "What is the Manager's ID number?"
        },
// prompt email
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email?"
        },
// promt office number
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?"
        }
    ])
        .then(await function (answers) {
            const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber)
            team.push(manager)
            
            //ask for next employee
            init();

        })
};

// Engineer
async function createEngineer() {
    inquirer.prompt([
// prompt name
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
        },
// prompt ID
        {
            type: "input",
            name: "Id",
            message: "What is the Engineer's ID number?"
        },
// prompt email
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?"
        },
// prompt github
        {
            type: "input",
            name: "gitHub",
            message: "What is the Engineer's gitHub username?"
        },

    ])
        .then(await function (answers) {
            const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.gitHub)
            team.push(engineer)

            init();

        })
};

// Intern
async function createIntern() {
    inquirer.prompt([
// prompt name
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
        },
// prompt ID
        {
            type: "input",
            name: "Id",
            message: "What is the Intern's ID number?"
        },
// prompt email
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
        },
// prompt school
        {
            type: "input",
            name: "school",
            message: "Where does the Intern go to school?"
        }
        
    ])
        .then(await function (answers) {
            //push intern to team
            const intern = new Intern(answers.name, answers.Id, answers.email, answers.school)
            team.push(intern)

                init();
            
        })
};

async function init() {
    const role = await newEmployee();
    select(role)
};

async function select(answer) {
    switch (answer.role) {

        case ("Engineer"):
            console.log("engineer");
            createEngineer()
            break;

        case ("Intern"):
            console.log("intern");
            createIntern();
            break;

        default:
            console.log("Your team.html has been written")
            write();
            break;
    }
};

createManager();