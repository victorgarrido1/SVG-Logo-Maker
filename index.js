//inquirer import statement 
const inquirer = require("inquirer");

//file system module import statement 
const fs = require("fs");
const { writeFile } = require("fs/promises")

//import classes from the shapes directory
const { Triangle, Circle, Square } = require("./lib/shapes");
//imputing the text class
const { Text } = require("./lib/text");

 {

    //files as a empty string
let svgString = "";

//sets the width and height of the logo container
svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
//continue here victor
//tag g wraps into the text
svgString += "<g>";


}

//function that uses inquirer prompt to the user to answer questions
function promptUser() {
    inquirer
    .prompt([
        {
            type:"input",
            message: "What would you like your logo to display?",
            name: "text",
        },
        {
            type:"input",
            message: "Choose the text color (Enter a keyword)",
            name: "textColor",
        },
        {
            type:"list",
            message: "What shape would you like the logo to render?",
            choices: ["Triangle","Square", "Circle"],
            name: "shape",
        },
        {
            type:"input",
            message: "What colors would you like your logo to have?",
            name: "colors",
        },
    ])

    .then(( { text, textColor, shape, colors }) => {
        let selectedShape;

        switch (shape) {
            case "Triangle":
                selectedShape = new Triangle();
                break;

                case "Square":
                    selectedShape = new Square();
                    break;

            case "Circle":
                selectedShape = new Circle();
                break;

                default: 
                console.log("Invalid shape selected");
                return;
        }

       //this is what renders the pictures or svg 
        selectedShape.setColor(colors);
        const textCol = new Text ();
        textCol.setText(text, textColor);
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            ${selectedShape.render()}
                            ${textCol.render()}
                            
                        </g>
                    </svg>`
        
                    ;
        return writeFile("logo.svg", svg);
    })
    .catch((error) => {
        console.error(error);
    });
}



// Call the promptUser function to start the process
promptUser();
    


