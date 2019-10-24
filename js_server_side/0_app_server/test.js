//
// test.js
//
try { 
     // Variables are being set as constants for easier access to the app
    // For production this set up may not be optimal
    // Require the HTTP module for basic server functionality
    const http = require("http");
    // Set the hostname, can also be an address (e.g. 127.0.0.1)
    const hostname = 'localhost';
    // Set the port to 1212
    // Common port usage reference:
    // https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
    const port = 1212;
    var now = new Date();
    //Create a server object and listen on the port we set for requests
    const server = http.createServer((request, response) => {
    //Set the response variables
    //  HTTP status code 200 OK
    response.statusCode = 200;
    //  HTTP header as plain text
    response.setHeader('Content-Type', 'text/plain');
    //write a response to the client
    response.write(`Fullstack Development 2 -- Server-Side Scripting\n\n`);
    response.write(`Date:${now}\n\n`);
    
    //  Response text displayed
    response.end(`Created server listening on http://${hostname}:${port}/`);
    
    });
    //console.log(`test`)
    //  Now that everything is set up, the server listens for requests
    //  When a request comes in to the server it will pass the port and host info
    //  The values passed when the function is called can then be displayed
    server.listen(port, hostname, () => {console.log(`http://${hostname}:${port}/` + ' ok');});
}
catch(err) {
  console.log("Msg: " + err + ".");
}
