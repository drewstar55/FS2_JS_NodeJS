try {
    // Variables are being set as constants for easier access to the app
    // For production this set up may not be optimal
    //  Require the HTTP module for basic server functionality
    const http = require("http");
    //  Set the hostname, can also be an address (e.g. 127.0.0.1)
    const hostname = 'localhost';
    //  Set the port, for this test we’re using 999
    const port = 999;
    //Create a server object and listen on the port we set for requests
    const server = http.createServer((req, res) => {
      //Set the response variables
      //  HTTP status code 200 OK
      res.statusCode = 200;
      //  HTTP header as plain text
      res.setHeader('Content-Type', 'text/plain');
      //  Text to be displayed
      res.end('Hello World\n');
    });

    console.log(`test`)
    //  Now that everything is set up, the server listens for requests
    //  When a request comes in to the server it will pass the port and host info
    //  The values passed when the function is called can then be displayed
    server.listen(port, hostname, () => {
      console.log(`http://${hostname}:${port}/` + ' ok');
    });
  }
  catch(err) {
    console.log("Msg: " + err + ".");
  }
  finally {
    console.log("Finally");
  }
