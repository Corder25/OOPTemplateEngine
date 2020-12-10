const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Classes
const Employee = require('./lib/employee');
const mainHTML = require('./templates/mainHTML');
//Cards 
const managerC = require('./templates/managerhtml');
const engineerC = require('./templates/engineerhtml');
const internC = require('./templates/internhtml');


const teamMember = [];

inquirer
 .prompt([
    {
        type: "input",
        name: "name",
        message: "What is the managers name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Email?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is your ID?"
    },
    {
        type: "input",
        name: "office number",
        message: "What is your office number?",
    
 }]);
  

    function manager() {
        console.log("Let's build your team");
        inquirer.prompt(questionsEmployee).then(function(data){
            const manager = new Manager(data.nameManager, data.managerId, data.emailManager, data.officeNumber);
            teamMembers.push(manager);
            emptyId.push(data.managerId);
            team();
        });
    };
    
    function team() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(function(data){
            if (data.memberChoice === "Engineer"){
                engineer();
            } else if (data.memberChoice === "Intern"){
                intern();
            } else (outputTeam());
        });
    };
    
    function engineer() {
        inquirer.prompt([
            {
                type: "input",
                name:"engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name:"engineerEmail",
                message: "What is the engineer's Email?"
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?"
            }
        ]). then(function(data){
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            teamMembers.push(engineer);
            emptyId.push(data.engineerId);
            team();
        });
    };
    
    function intern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's Email?"
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's ID?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school?"
            }
        ]). then(function(data){
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            teamMembers.push(intern);
            emptyId.push(data.internId);
            team();
        });
    };
    
    function outputTeam() {
        if (fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    
    manager();


// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
