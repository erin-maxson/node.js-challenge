// TODO: Include packages needed for this application
const inquirer=require('inquirer')
const generateMarkdown= require("./generateMarkdown")
const fs=require('fs') 
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is your project title?"
    },
    {
        type:"input",
        name:"description",
        message:"What is your project description?"
    },
    {
        type:"input",
        name:"table",
        message:"What do you want to add to your table of contents? Add all that apply. (Ex: Installation, usage, Credits, License)"
    },
    {
        type:"input",
        name:"installation",
        message:"How do you install your project?"
    }
    ,{
        type:"input",
        name:"usage",
        message:"How do you use this project?",
    }
    ,{
        type:"input",
        name:"credits",
        message:"What credit do you want to give on this project (Ex: You and your team or just you)?",
    }
    ,{
        type:"list",
        name:"license",
        message:"Choose a license for your project.",
        choices:["MIT","Apache"]
    }
    ,{
        type:"input",
        name:"features",
        message:"What features are included in this project?",
    }
    ,{
        type:"input",
        name:"contributions",
        message:"How do you want users to contribute to this project?",
    }
    ,{
        type:"input",
        name:"tests",
        message:"What tests (if any) are available? If none, please add No tests available.",
    }
    ,{
        type:"input",
        name:"github",
        message:"Please add your Github username here so users can contact you with any questions.",
    }
    ,{
        type:"input",
        name:"email",
        message:"Add your email address here so users can contact you with any questions.",
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(filenName, data);
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data=>{
        console.log(data)
       fs.writeFileSync("./output/README.md",generateMarkdown(data) )
    })

}

// Function call to initialize app
init();