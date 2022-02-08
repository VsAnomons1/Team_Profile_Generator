const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return github;
    }
    getRole(){
        return "Engineer";
    }
}
let student = new Engineer("Bily", 1, "billy123@gmail.com", "biiy123");
console.log(student.name);