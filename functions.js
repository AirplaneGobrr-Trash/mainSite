const Cryptr = require('cryptr')

async function generate18DigitNumber(){
    let number = '';
    for(let i = 0; i < 18; i++){
        number += Math.floor(Math.random() * 10);
    }
    return number;
}

async function generateToken(password, userID){
    const cryptr = new Cryptr(password);
    const token = cryptr.encrypt(userID);
    return token;
}

console.log(generate18DigitNumber());
console.log(generateToken());