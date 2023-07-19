const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Engineer Class", () => {
    it("Intialization", () => {
        const engineer = new Engineer("Wade", 1, "wade01@mail.com", "wade01");
        
        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer).toEqual({name: "Wade", id: 1, email: "wade01@mail.com", github: "wade01"});
    });
    it("Should get engineer's github user when invoking the getGithub", () => {
        const engineer = new Engineer("Max", 3, "maxie12@mail.com", "maxE1");
        let github = engineer.getGithub();
        expect(github).toEqual("maxE1");
    });
    it("Should get the correct role when invoking getRole", () => {
        const engineer = new Engineer("Damion", 6, "dm142@mail.com", "Damion42");
        let role = engineer.getRole();
        expect(role).toEqual("Engineer");
    });
})