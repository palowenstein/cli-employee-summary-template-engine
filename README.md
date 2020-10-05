## #hw10-cli-employee-summary-template-engine

<h3>HTML Team Page Generator executed via a Node Command Line Interface (CLI) in Terminal.</h3>
<p>Github Repository Page: https://github.com/palowenstein/hw10-cli-employee-summary-template-engine</p>
<p>Github Deployment Page: N/A - App is to be executed in Terminal via CLI.</p>

# Table of Contents
  * [GIF](#Gif)
  * [Overview](#Overview)
  * [Details](#Details)
  * [Instructions](#Instructions)
  * [Screenshots](#Screenshots)
  * [Video](#Video)
  * [References](#References)
  * [License](#License)
  * [Contact](#Contact)

## GIF
![CLI Team Page HTML Generator (GIF)](./demo_assets/ucla-hw10-cli-employee-summary-template-engine-demo.gif "CLI Team Page HTML Generator (GIF)")


The goal was to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, the goal was also to ensure that all unit tests pass. One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. Overall, the goal was to create a functional app where a user can use the CLI to generate an HTML page that displays information about their team, in which all tests must pass.

The process involved building a software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. A goal was also to ensure it passes all unit tests. When the user has completed building the team, the application creates an HTML file that displays a nicely formatted team roster based on the information provided by the user. 



## Overview
<ul>
<li>HTML Team Page Generator executed in Terminal via (CLI) Command Line Interface.</li>
<li>Application behaves accordingly to standard ("good") practices and dynamically generates a professional HTML file containing team information.</li>
<li>Team information is gathered by having the user answering prompts in Terminal (Inquirer engine).</li>
<li>Each prompt must validate a question gathering information such as employee name, ID, role, phone number, github profile, school attended.</li>
<li>All questions are answered via a character string except for the employee role, which is choice/list driven.</li>
<li>E-mail, Phone Number and GitHub profile have to be validated before being pushed into the Team array (see GIF).</li>
<li>Application can be tested via a simple 'npm run test' in Terminal (see below / screenshots).</li>
<li>The goal of the application is its ease of use (no code to tinker) and the automated, dynamic HTML team generator function which outputs a good looking html file.</li>
</ul>

## Details
<ul>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, .DS_Store.</li>
<li>The included package.json file includes all dependencies if the user wants to run 'npm install' instead of the instructions below</li>
</ul>

## Instructions
<ul>
<li>In Terminal, locate the application folder and enter into it via the 'cd' command: cd hw10-cli-employee-summary-template-engine</li>
<li>Run the 'npm init' command to fill the package json with the application information (screenshot #1).</li>
<li>Run the 'npm install' command to install the inquirer, jest dependencies (screenshot #2).</li>
<li>Run the 'node app.js' command to start the application in Terminal (GIF/MP4).</li>
<li>While still in Terminal, answer the following prompts (GIF/MP4):
    <ol>
    <li>Employee full name</li>
    <li>Employee identification number</li>
    <li>Employee e-mail (must pass validation)</li>
    <li>Employee role: Manager, Engineer, Intern.
        <ol>
        <li>if Manager, enter phone number (must pass validation).</li>
        <li>if Engineer, enter github username (must pass validation)</li>
        <li>if Intern, enter the school attended</li>
        </ol>
    </li>
    <li>Add another employee? (default: yes)</li>
    </ol>
<li>Once all questions have been answered, a "My Team" HTML file will be generated in the output folder (screenshot #3).</li>
<li>If the output folder doesn't exit yet, it will be created by the application (fs_write function).
</ul>

<p><i>Refer to index.js (javascript file) for code dissection.</i></p>


## Tests
<ul>
<li>In Terminal, locate the application folder and enter into it via the 'cd' command: cd hw10-cli-employee-summary-template-engine</li>
<li>Run the 'npm run test' command to run tests over all classes</li>
</ul>


## Screenshots
![CLI Team Page HTML Generator (Screenshot #1: npm init)](./demo_assets/ucla-hw10-1-cli-employee-summary-template-engine-npm-init.jpg?raw=true "CLI Team Page HTML Generator (Screenshot #1: npm init)")
<h6>CLI Team Page HTML Generator (Screenshot #1: npm init)</h6>
<br />

![CLI Team Page HTML Generator (Screenshot #2: npm install)](./demo_assets/ucla-hw10-2-cli-employee-summary-template-engine-npm-install-inquirer.jpg?raw=true "CLI Team Page HTML Generator (Screenshot #2: npm install)")
<h6>CLI Team Page HTML Generator (Screenshot #2: npm install)</h6>
<br />

![CLI Team Page HTML Generator (Screenshot #3: "My Team" HTML Page generated from user input)](./demo_assets/ucla-hw10-3-cli-employee-summary-template-engine-generated-my-team-page.jpg?raw=true "CLI Team Page HTML Generator (Screenshot #3: Generated "My Team" HTML Page)")
<h6>CLI Team Page HTML Generator (Screenshot #3: Generated "My Team" HTML Page)</h6>
<br />

![CLI Team Page HTML Generator (Screenshot #4: Testing Environment - npm run test)](./demo_assets/ucla-hw10-4-cli-employee-summary-template-engine-npm-run-test.jpg?raw=true "CLI Team Page HTML Generator (Screenshot #4: Testing Environment - npm run test)")
<h6>CLI Team Page HTML Generator (Screenshot #4: Testing Environment - npm run test)</h6>
<br />

## Video
![CLI Team Page HTML Generator Prompt Flow (MP4)](./demo_assets/ucla-hw10-cli-employee-summary-template-engine-demo.mp4 "CLI Team Page HTML Generator Prompt Flow (MP4)")
<h6>CLI Team Page HTML Generator Prompt Flow (MP4)</h6>
<br />

## References
<ul>
<li>OOP Object Oriented Programming</li>
<li>Javascript (programming language)</li>
<li>REGEX (for prompt validation)</li>
<li>Node.js / CLI for program execution</li>
<li>Package.JSON / NPM for installing dependencies</li>
<li>Inquirer (for prompt interaction, data collection).</li>
<li>Jest (for testing)</li>
<li>Skeleton, Bootstrap CSS</li>
</ul>

 ## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2020] Pierre André Lowenstein
</p>

 ## Contributions
<ul>
<li>Pull/Fork from master.</li>
<li>Create your own branch.</li>
<li>Add your own code (must be tested).</li>
<li>Push your branch.</li>
<li>Request a pull.</li>
</ul>

<p>Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)</p>
<p>For major changes, please open an issue beforehand to discuss the changes.</p>

 ## Contact
<p>
<a href="http://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:soundtrackspecialist@gmail.com" title="Courriel">Send me a 'courriel'</a>
</p>