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
    conn.write("Name: MMM")
  });
 
  // let time = 10
  // const timer = function () {
  //     setTimeout(() => {
  //       conn.write("Move: up")
  //     }, time + 10); 
  //     time += 10
  //     setTimeout(() => {
  //       conn.write("Move: up")
  //     }, time + 10); 
  //     time += 10
  //     setTimeout(() => {
  //       conn.write("Move: right")
  //     }, time + 10); 
  //     time += 10
  //     setTimeout(() => {
  //       conn.write("Move: up")
  //     }, time + 10); 
  //     time += 10
  //     setTimeout(() => {
  //       conn.write("Move: right")
  //     }, time + 10); 
  //     time += 10
  //     setTimeout(() => {
  //       conn.write("Move: right")
  //     }, time + 10);
  //     time += 100
  //     setTimeout(() => {
  //       conn.write("Move: down")
  //     }, time + 10);
  //     time += 10
  // }
  
  // conn.on('connect', () => {
  //   setInterval(timer, 10)
  // });
  

  conn.on('data', (data) => {
    console.log(data);
    conn.end();
  });
  
  return conn;
};


module.exports = connect;