const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern Class", () => {
    it("Intialization", () => {
        const intern = new Intern("Bob", 1, "bob034@mail.com", "GGC");
        
        expect(intern).toBeInstanceOf(Intern);        
        expect(intern).toEqual({name: "Bob", id: 1, email: "bob034@mail.com", school: "GGC"});
    });
    it("Should get the name of the school of the Intern object", () => {
        const intern = new Intern("Mason", 3, "mason465@mail.com", "Gwinnett Tech");
        let school = intern.getSchool();
        expect(school).toEqual("Gwinnett Tech");
    });
    it("Should get the correct role for an Intern object", () => {
        const intern = new Intern("Sadie", 6, "sadie67@mail.com", "GGC");
        let role = intern.getRole();
        expect(role).toEqual("Intern");
    });
})