class Employee {
    constructor(name, id, email){
        if(typeof name === "string" && typeof id === "number" && typeof email === "string"){
            this.name = name;
            this.id = id;
            this.email = email;
        }
        else {
            throw new Error("Given input is not in the correct format");
        }
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee"
    }

}

module.exports = Employee;