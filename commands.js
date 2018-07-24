const fs = require("fs");

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput) {
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];
}

const commandLibrary = {

};

module.exports.commandLibrary = commandLIbrary;
module.exports.evaluateCmd = evaluateCmd;