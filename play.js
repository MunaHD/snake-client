const net = require("net");
const connect = require("./client");
// establishes a connection with the game server
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      //write("Thanks for using me, ciao!")
      process.stdout.write('bye. \n');
      process.exit();
    }    
  });  
};

setupInput()

console.log("Connecting ...");
connect();


