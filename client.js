const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: okk")
  });
  
  conn.on('data', (data) => {
    console.log(data);
    conn.end();
  });
  // conn.end('end', () => {
  //   //conn.write('Name: Ummm');
  //   console.log('you ded cuz you idled');
  // });

  return conn;
};


module.exports = connect;