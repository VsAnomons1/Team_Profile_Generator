const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        if(typeof officeNumber === "number"){
            this.officeNumber = officeNumber;
        }
        else {
            throw new Error("This in invalid format. Must be a number");
        }
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;