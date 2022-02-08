const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
let person = new Manager("Bob", 0, "bob1224@mail.com", 1);
console.log(person.getName())