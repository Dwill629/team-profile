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