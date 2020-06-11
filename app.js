const getNotes = require('./notes.js');
const chalk = require('chalk');
//const validator = require('validator');

const msg = getNotes();

console.log(msg);

/* console.log(validator.isEmail('chadrs@example.com'));
console.log(validator.isURL('httr:/example.com')); */

console.log(chalk.green.inverse.bold('Success!!'));