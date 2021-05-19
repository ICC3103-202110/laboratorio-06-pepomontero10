const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {new_leftvalue} = model
    const {new_leftunit} = model
    const {new_rightvalue} = model
    const {new_rightunit} = model
    return [
        {LeftValue: new_leftvalue, LeftUnit: new_leftunit, 
        RightValue: new_rightvalue, RightUnit: new_rightunit},
    ]
}

function inputForm(model){
    const {input} = model
    const message = 'Left temperature is source?'
    const message2 = 'Temperature value to convert?'
    const message3 = 'From?'
    const message4 = 'To?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt([
        {
            name: 'left',
            type: 'confirm',
            message: message,
            default: '(Y/n)',
        },
        {
            name: 'temp',
            type: 'number',
            message: message2,
            default: 0,
        },
        {
            name: 'from',
            type: 'list',
            message: message3,
            default: input,
            choices: choices
        },
        {
            name: 'to',
            type: 'list',
            message: message4,
            default: input,
            choices: choices
        }
    ])
}


// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}