var Employee = require("../lib/Employee");

describe("Employee Class", () => {
    it("Initialization", () => {
        const employee = new Employee("Billy", 1, "billy123@mail.com");
        expect(employee).toBeInstanceOf(Employee);
        expect(employee).toEqual({name: "Billy", id: 1, email: "billy123@mail.com"});
    });
    it("Should get the name value when calling the getName function", () => {
        const employee = new Employee("Sam", 2, "sammy021@mail.com");
        let name = employee.getName();
        expect(name).toEqual("Sam");
    });
    it("Should get the id value when calling the getId function", () => {
        const employee = new Employee("Will", 0, "will01@mail.com");
        let id = employee.getId();
        expect(id).toEqual(0);
    });
    it("Should get the email value when calling the getEmail function", () => {
        const employee = new Employee("Julie", 4, "julie0309@mail.com");
        let email = employee.getEmail();
        expect(email).toEqual("julie0309@mail.com");
    });
    it("Should get the role value when calling the getRole function", () => {
        const employee = new Employee("Miguel", 1, "miguel54@mail.com");
        let role = employee.getRole();
        expect(role).toEqual("Employee");
    });
})