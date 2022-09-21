//Commands:
//set, get, has, push

const fs = require('fs')
var data = {}
var fileName = "database.json"

async function save(){
    fs.writeFileSync(fileName, JSON.stringify(data))
}

async function load(){
    data = JSON.parse(fs.readFileSync(fileName, "utf8"))
    return data
}

async function set(path, value){
    await load()
    var path = path.split(".")
    var current = data
    //Save the value to the correct path
    for (var i = 0; i < path.length; i++) {
        if (i == path.length - 1) {
            current[path[i]] = value
        } else {
            if (!current[path[i]]) {
                current[path[i]] = {}
            }
            current = current[path[i]]
        }
    }
    //Save current to data
    //data = current
    await save()
}

async function has(path) {
    await load()
    var path = path.split(".")
    var current = data
    //Check if the value is in the correct path
    for (var i = 0; i < path.length; i++) {
        if (i == path.length - 1) {
            return current[path[i]] != undefined
        } else {
            if (!current[path[i]]) {
                return false
            }
            current = current[path[i]]
        }
    }
}

async function push(path, value) {
    await load()
    var path = path.split(".")
    var current = data
    //Push the value to the correct path
    for (var i = 0; i < path.length; i++) {
        if (i == path.length - 1) {
            current[path[i]].push(value)
        } else {
            if (!current[path[i]]) {
                current[path[i]] = {}
            }
            current = current[path[i]]
        }
    }
    //Save current to data
    //data = current
    await save()
}

async function get(path) {
    await load()
    var path = path.split(".")
    var current = data
    //Get the value from the correct path
    for (var i = 0; i < path.length; i++) {
        if (i == path.length - 1) {
            return current[path[i]]
        } else {
            if (!current[path[i]]) {
                return undefined
            }
            current = current[path[i]]
        }
    }
}


module.exports = {
    set,
    get,
    has,
    push,
    save,
    load
}