const notes = require('./notes');

const testAddNote = "Making the file!";
const testAppendNote = "Adding junk to the file!";

const testFile = 'test.txt';

//notes.makeNote(testFile, testAddNote);
notes.updateNote(testFile, testAppendNote);

/* const add = require('./utils.js');

const sum = add(4, -2);

console.log(sum); */