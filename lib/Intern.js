const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        if(typeof school === "string"){
            this.school = school;
        }
        else {
            throw new Error("This is an invalid format. Must be string.");
        }
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;