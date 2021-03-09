const employee = require('../lib/Employee')
const Intern = require('../lib/Intern')


describe('Intern Class', () => {

    it('Can instantiate Intern instance', () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe('object');
    })

    describe('Constructor', () => {

        it('should set the Intern\'s school', () => {
            const school = 'UNC';
            const intern = new Intern('Devon', '5', 'devon@test.com', 'UNC');
            expect(intern.school).toBe(school);
        }); 

    });

    describe('getSchool()', () => {
        it('should return the Intern\'s school', () => {
            const school = 'UNC';
            const intern = new Intern('Devon', '5', 'devon@test.com', 'UNC');
            expect(intern.getSchool()).toBe(school);
        })
    });


    describe('getrole()', () => {
        it('should return "Intern"', () => {
            const testRole = 'Intern';
            const intern = new Intern('Devon', '5', 'devon@test.com', 'UNC');
            expect(intern.getRole()).toBe(testRole);
        });
    });
});