const Manager = require('./lib/Manager'); // Manager Library (Constructor) Import
const Engineer = require('./lib/Engineer'); // Engineer Library (Constructor) Import
const Intern = require('./lib/Intern'); // Intern Library (Constructor) Import
const inquirer = require('inquirer'); // Node.js inquirer module for: a) asking questions b) parsing input c) validating answers
const path = require('path'); // Node.js path module provides access to file/directory path 
const fs = require('fs'); // Node.js fs module to write to file
const OUTPUT_DIR = path.resolve(__dirname, 'output'); // Directs output to the output directory (existing or to be created - see lines 82, 84-86)
const outputPath = path.join(OUTPUT_DIR, 'team.html'); // Join, appends inquirer info to team.html inside the output directory. 
const render = require('./lib/htmlRenderer'); // This loads the library that will render

const teamMemberAnswers = []; // empty array creation to contain all the answers acquired during the inquirer process via the teamMemberQuestions array below.

// teamMemberQuestions:
// • Class #1 `Employee` parent class: 1) name/getName() 2) id/getId() 3) email/getEmail() 4) employee/getRole()
// • Class #2 `Manager` = Class #1 + A) phone/getPhone(), B) getRole() overridden, returns 'Manager'.
// • Class #3 `Engineer` = Class #1 + A) github/getGithub(), B) getRole() overridden, returns 'Engineer'.
// • Class #4 `Intern` = Class #1 + A) school/getSchool(), B) getRole() overriden, returns 'Intern'.

const teamMemberQuestions = [
      { type: 'input', name: 'name', message: 'Enter employee full name: ',
      validate: async (input) => {
          if ( !input ) { return 'Cannot accept an empty input field.'; }
          return true; }
      },
      { type: 'input', name: 'id', message: 'Enter employee identification number: ',
      validate: async (input) => {
          if ( !input ) { return 'Cannot accept an empty input field.'; }
          return true; }
      },
      { type: 'input', name: 'email', message: 'Enter employee e-mail: ',
          validate: async (input) => {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) { return true; }
              return 'Please enter a valid e-mail address. '; }
      },
      { type: 'list', name: 'role', message: 'Choose employee role.', choices: ['Manager', 'Engineer', 'Intern'] }, // This is the only list selector of the whole array.

            { when: input => { return input.role == 'Manager' },
            type: 'input', name: 'phoneNumber', message: 'Enter manager phone number: ',
            validate: async (input) => {
              if (/^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/.test(input)) { return true; }
              return 'Please enter a valid phone number. '; }
            },
            { when: input => { return input.role == 'Engineer' },
            type: 'input', name: 'github', message: 'Enter engineer github username:',
            validate: async (input) => {
                if (input == '' || /\s/.test(input)) { return 'Please enter a valid github username'; }
                return true; },   
            },
            { when: input => { return input.role == 'Intern' },
            type: 'input', name: 'school', message: 'Enter intern school name:',
            validate: async (input) => { if ( !input ) { return 'Please enter a school name.'; }
                return true; },
            },

      { type: 'confirm', name: 'addAnotherEmployee', message: 'Do you want to add another employee?', default: true } // Note that default is true to speed up process.
];

function assembleTeam(arraylist) { // This calls the respective constructors (library directory) to assemble the data gathered above before pushing them out as the teamMembers array.
  const teamMembers = [];
  arraylist.forEach(data => {
      const { role, name ,id, email, phoneNumber, github, school} = data;
      switch (role) {
          case 'Manager':
              const manager = new Manager(name, id, email, phoneNumber);
              teamMembers.push(manager); break;
          case 'Engineer':
              const engineer = new Engineer(name, id, email, github);
              teamMembers.push(engineer); break;
          case 'Intern':
              const intern = new Intern(name, id, email, school);
              teamMembers.push(intern); break;
      };
  });
  return teamMembers;
}

makeHTML(); // HTML Generation Function
function makeHTML() {
    inquirer.prompt(teamMemberQuestions)
        .then(answer => {
            teamMemberAnswers.push(answer); // Information gathered pushed into the teamMemberAnswers array.
            if (answer.addAnotherEmployee) { makeHTML(); }  // If another employee added, re-run the function. Otherwise, generate the list to be rendered.
            else {
                const generatedList = assembleTeam(teamMemberAnswers);
                const generatedFile = render(generatedList);

                if (!fs.existsSync(OUTPUT_DIR)){ fs.mkdirSync(OUTPUT_DIR); }; // fs module to access / create output directory

                fs.writeFile(outputPath, generatedFile, 'utf8', (error) => { // fs module to generate the team.html as specified on line 8 (const outputPath).
                    if (error)  { throw error; }
                });
            }
        });
}