const Manager = require("../lib/Manager");
const Employee =  require("../lib/Employee");

describe("Manager Class", () => {
    it("Intialization", () => {
        const manager = new Manager("Caullon", 1, "caullon78@mail.com", 5);
        expect(manager).toBeInstanceOf(Manager);
        expect(manager).toEqual({name: "Caullon", id: 1, email: "caullon78@mail.com", officeNumber: 5});
    });
    it("Should get the correct role for a Manager object", () => {
        const manager = new Manager("Gil", 6, "gil57@mail.com", 6);
        let role = manager.getRole();
        expect(role).toEqual("Manager");
    });
})
