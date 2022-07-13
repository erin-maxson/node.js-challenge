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
        message:"What credits do you want to give on this project?",
    }
    ,{
        type:"list",
        name:"license",
        message:"Choose a license for your project.",
        choices:["MIT","IBM","Apache"]
    }
    ,{
        type:"list",
        name:"features",
        message:"What features are included in this project?",
    }
    ,{
        type:"list",
        name:"tests",
        message:"What tests (if any) are available? If none, please add No tests available.",
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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