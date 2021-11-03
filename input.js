let connection;

const setupInput = (conn) => {
  connection = conn;
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
    if (key === 'w') {
      //write("Thanks for using me, ciao!")
      connection.write('Move: up');

    }    
    if (key === 'a') {
      //write("Thanks for using me, ciao!")
      connection.write('Move: left');

    }    
    if (key === 's') {
      //write("Thanks for using me, ciao!")
      connection.write('Move: down');

    }    
    if (key === 'd') {
      //write("Thanks for using me, ciao!")
      connection.write('Move: right');

    }    
    if (key === 'q') {
      //write("Thanks for using me, ciao!")
      connection.write('Say: out of my way please!!!');

    }  
  });  
};


module.exports = setupInput