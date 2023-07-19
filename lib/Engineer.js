const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        if(typeof github === "string"){
            this.github = github;
        }
        else {
            throw new Error("This is an invalid format. Must be string.");
        }
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;