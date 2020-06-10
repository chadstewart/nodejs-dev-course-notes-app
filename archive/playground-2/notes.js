const fs = require('fs');

const nextLine = '\n';

const makeNote = (noteName, dataInput) => {

    fs.writeFileSync(noteName, dataInput);
    return console.log('File successfully made!');

};

const updateNote = (noteName, dataInput) => {

    fs.appendFileSync(noteName, nextLine + dataInput);
    return console.log('Data successfully appended to file!');

};

const interface = {
    makeNote,
    updateNote,
};

module.exports = interface;