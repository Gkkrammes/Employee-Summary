// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github); 
        this.gitHub = this.gitHub;   
    } 

        getRole() {
            return "Engineer";
        }

        getGitHub() {
            return this.gitHub;
        }
    }


module.exports = Engineer;