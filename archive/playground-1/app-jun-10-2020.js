const fs = require('fs');

const nextLine = '\n';

//fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
fs.appendFileSync('notes.txt', `${nextLine}Adding some more junk to this file!`);