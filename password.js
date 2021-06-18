const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log('Welcome to the Password Validator Tool');


reader.question('Can you enter a password?', function(anser){
    if (answer.length >= 10) {
        console.log('Successfully created your new password');
    } else {
        console.log('Your password needs to be at least 10 characters long');
    }
});