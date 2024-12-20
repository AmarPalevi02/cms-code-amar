// #!/usr/bin/env node

// const app = require('../app/api/app');
// const debug = require('debug')('server-cms:server');
// const http = require('http');

// // Get port from environment and store in Express
// const port = normalizePort(process.env.PORT|| '8888');
// app.set('port', port);

// // Create HTTP server
// const server = http.createServer(app);

// // Listen on provided port, on all network interfaces
// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// // Normalize a port into a number, string, or false
// function normalizePort(val) {
//    const port = parseInt(val, 10);
//    return isNaN(port) ? val : port >= 0 ? port : false;
// }

// // Event listener for HTTP server "error" event
// function onError(error) {
//    if (error.syscall !== 'listen') throw error;

//    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

//    // Handle specific listen errors with friendly messages
//    switch (error.code) {
//       case 'EACCES':
//          console.error(`${bind} requires elevated privileges`);
//          process.exit(1);
//          break;
//       case 'EADDRINUSE':
//          console.error(`${bind} is already in use`);
//          process.exit(1);
//          break;
//       default:
//          throw error;
//    }
// }

// // Event listener for HTTP server "listening" event
// function onListening() {
//    const addr = server.address();
//    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
//    debug(`Listening on ${bind}`);
//    console.log(`Server is running on ${bind}`);
// }


// #!/usr/bin/env node

const app = require('../app'); // mengambil instance Express
const http = require('http');

// Get port from environment and store in Express
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);
  return isNaN(port) ? val : port >= 0 ? port : false;
}

function onError(error) {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Server is running on ${bind}`);
}
