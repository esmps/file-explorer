//Require Node Modules
const http = require('http');
//const FS = require('fs');
//const URL = require('url');


//File Imports
const respond = require('./lib/respond.js');

//Connection Settings
const port = process.env.port || 3000;


//Create Server
const server = http.createServer(respond);


//Listen to client requests on the specific port, the port should be available
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});