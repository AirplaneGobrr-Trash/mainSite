//Imports
const chalk = require('chalk')
const fs = require('fs')

//vars
const debugMode = false

//Functions
async function log(__args){
    console.log(__args)
}

async function debug(__args){
    if (debugMode){
        console.log(__args)
    }
}

//Exports
module.exports = {
    log,
    debug
}