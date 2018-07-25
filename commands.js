const fs = require("fs");

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput) {
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];

  switch (command) {
    case "echo":
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;

    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;
    
    case "head":
      commandLibrary.head(userInputArray.slice(1));
      break;

    case "tail":
      commandLibrary.tail(userInputArray.slice(1));
      break;

    default:
      commandLibrary.errorHandler();
      break;
  }
}

const commandLibrary = {
  "echo": function(userInput) {
    done(userInput);
  },

  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },

  "head": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      let dataArray = data.toString().split("\n").slice(0,5);
      // splits lines into an array and keeps array indicies 0-4 (first 5 lines)
      done(dataArray.join("\n"));
    });
  },

  "tail": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      let dataArray = data.toString().split("\n");
      // splits lines into an array
      dataArray = dataArray.slice(dataArray.length - 5)
      // keeps last 5 lines
      done(dataArray.join("\n"));
    });
  },

  "errorHandler": function() {
    done("Error - Invalid command.");
  }

};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;