function update(input, model){
    const {left_right} = input
    const {temp} = input
    const {from} = input
    const {to} = input
    var {conversion} = 0
    if(left_right){
        if(from == 'Celsius'){
            if(to == 'Celsius'){
                conversion = temp
            }
            if(to == 'Kelvin'){
                conversion = temp + 273.15
            }
            if(to == 'Fahrenheit'){
                conversion = (temp * (9/5)) + 32
            }
        }
        if(from == 'Kelvin'){
            if(to == 'Celsius'){
                conversion = temp - 273.15
            }
            if(to == 'Kelvin'){
                conversion = temp 
            }
            if(to == 'Fahrenheit'){
                conversion = ((temp - 273.15) * (9/5)) + 32
            }
        }
        if(from == 'Fahrenheit'){
            if(to == 'Celsius'){
                conversion = (temp - 32) * (5/9)
            }
            if(to == 'Kelvin'){
                conversion = ((temp - 32) * (5/9)) + 273.15
            }
            if(to == 'Fahrenheit'){
                conversion = temp 
            }
        }
        return {
            ...model,
            new_leftvalue: temp,
            new_leftunit:from,
            new_rightvalue: conversion,
            new_rightunit: to,
        }  
    }



    else{
        if(from == 'Celsius'){
            if(to == 'Celsius'){
                conversion = temp
            }
            if(to == 'Kelvin'){
                conversion = temp + 273.15
            }
            if(to == 'Fahrenheit'){
                conversion = (temp *(9/5)) + 32
            }
        }
        if(from == 'Kelvin'){
            if(to == 'Celsius'){
                conversion = temp - 273.15
            }
            if(to == 'Kelvin'){
                conversion = temp 
            }
            if(to == 'Fahrenheit'){
                conversion = ((temp - 273.15) * (9/5)) + 32
            }
        }
        if(from == 'Fahrenheit'){
            if(to == 'Celsius'){
                conversion = (temp - 32) * (5/9)
            }
            if(to == 'Kelvin'){
                conversion = ((temp - 32) * (5/9)) + 273.15
            }
            if(to == 'Fahrenheit'){
                conversion = temp 
            }
        }
        return {
            ...model,
            new_leftvalue: conversion,
            new_leftunit:to,
            new_rightvalue: temp,
            new_rightunit: from,
        }
    }
}

module.exports = {
    update
}