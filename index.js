const fs = require('fs');
const inquirer = require('inquirer');
const validate = require('./html/validate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerTemplate = require('./html/managerTemplate');
const engineerTemplate = require('./html/engineerTemplate');
const internTemplate = require('./html/internTemplate');
const finalTemplate = require('./html/finalTemplate');

const membersArr = [];
let teamName = "";

const startPrompt = () => {

    inquirer.prompt([{
      type: 'input',
      message: 'Hello. what is your team\'s name?',
      name: 'teamname',
      validate: validate.notEmpty
    }
    ])
      .then((data) => {
        teamName = data.teamname;
        managerAddition()
      })
  }

  const managerAddition = () => {
    inquirer.prompt([{
      type: 'input',
      message: 'What is the manager\'s name?',
      name: 'name',
      validate: validate.notEmpty
    },
    {
      type: 'input',
      message: 'What is the manager\'s employee ID?',
      name: 'id',
      validate: validate.numbersOnly
    },
    {
      type: 'input',
      message: 'What is the manager\'s email address?',
      name: 'email',
      validate: validate.email
    },
    {
      type: 'input',
      message: 'What is the manager\'s office number?',
      name: 'officeNumber',
      validate: validate.numbersOnly
    },
  
    ]).then(function ({ name, id, email, officeNumber }) {
      let newManager;
      newManager = new Manager(name, id, email, officeNumber);
      membersArr.push(newManager);
      employeeAddition();
  
  
    });
  
  }