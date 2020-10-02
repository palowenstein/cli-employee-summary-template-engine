# hw10-employee-summary-cli-template-engine
Software engineering team generator command line application

- STEP #1: NPM Init, NPM Install (Inquirer, Jest).
- STEP #2: gitignore, read me shortened to necessary deliverables.
- STEP #3: Write code in app.js to cover the following: A) Gather info about dvlt team members, B) create objects for each team member (using correct classes as blueprints).

# Unit 10 OOP Homework: Template Engine - Employee Summary
• Build a Node CLI that takes in information about employees and generates an HTML webpage.
• HTML webpage displays summaries for each person.
• Testing -> code maintainable -> all units must pass test.

## Instructions
• Build a software engineering team generator command line application.
• Application will prompt user for information about 1) the team manager 2) information about the team members.
• User can input any number of team members: can be a mix of engineers and interns.
• App must pass all unit tests.
• When user has completed building team, application creates HTML file.
• HTML file displays nicely formatted team roster based on the info provided.
• Must follow [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates).:
• Must include video demstrontrating app.

## Challenge -> As a manager:
1) I want to generate a webpage that displays my team's basic info.
2) so that I have quick access to A) emails B) GitHub profiles.

## Guidelines
• Inquirer npm package to prompt the user: 1) email, 2) id, 3) specific information company role based.
  Ex: intern provides school, an engineer provides GitHub username.
• App runs as a Node CLI to gather the info.
• [inquirer] to collect user input.
• [jest] to run tests.
• Unit tests to help you build the classes necessary.

## Follow this workflow:
1. Run tests (any time with npm run test)
2. Create or update classes to pass a single test case
3. Repeat

## Dir Structure:
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests -> A) Employee.test.js B) Engineer.test.js C) Intern.test.js D) Manager.test.js
app.js         // Runs application

### Hints
Create multiple HTML templates for each type, use templates:
1) main.html 2) engineer.html 3) intern.html 4) manager.html

• Methods to be as pure as possible. Make your methods simple, easy to test.
• Different employee types should all inherit some methods and properties from 'Employee' base class.
• In HTML template files, add placeholder character to help program identify where dynamic markup begins and ends.

## Requirements
* Functional application.
* GitHub repo with unique name + README.
* User can use the CLI to generate an HTML page that displays information about their team.
* All tests must pass.

### Classes
• Project must have following classes: `Employee`, `Manager`, `Engineer`, `Intern`.
• Tests for these classes in the `tests` directory must all pass.
• Class #1 is an `Employee` parent class with following props/methods: 1) name 2) id 3) email 4) getName() 5) getId() 6) getEmail() 7) getRole(): Returns 'Employee'
• Classes #2, #3, #4 to extend `Employee` props/methods. 
• In addition, Class #2 `Manager` to include: 1) officeNumber 2) getRole(): Overridden to return 'Manager'
• In addition, Class #3 `Engineer` to include: 1) github: GitHub username 2) getGithub() 3) getRole(): Overridden to return 'Engineer'
• In addition, Class #4 `Intern` to include: 1) school 2) getSchool() 3) getRole(): Overridden to return 'Intern'

### User input
• Project must prompt user to build an engineering team, consists of manager + any number of engineers and interns.

### Roster output
• Project to generate `team.html` page in `output` directory.
• Must display nicely formatted team roster.
• Each team member to display following in no particular order: 1) Name, 2) Role, 3) ID, 4) Role-specific property (School, GitHub proLink or work number)

## Bonus
* Use validation to ensure that the information provided is in the proper expected format.
* Add the application to your portfolio.