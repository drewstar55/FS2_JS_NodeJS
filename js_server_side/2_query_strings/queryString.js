//
// queryString.js
//
try { 
      // Variables are being set as constants for easier access to the app
      // Require the HTTP module for basic server functionality
      const http = require('http');
      // Set the hostname
      const hostname = 'localhost';
      // Set the port to 80 for this exercise
      const port = 80;
      // current Date and Time
      var now = new Date();
      //Create a server object and listen on the port we set for requests
      const server = http.createServer((request, response) => {
            // HTTP status code 200 OK
            // HTTP header as text/html
            response.writeHead(200, {'Content-Type': 'text/html'});
            var url = require('url');
             //  Split the URL into parts
            var queryData = url.parse(request.url, true);
            // Write response to the client
            response.write('Fullstack Development 2 -- Query Strings Exercise<br><br>');
            response.write('Current Date: ' + now + '<br><br>');
            response.write('Pathname is: ' + queryData.pathname + '<br><br>');
            if (queryData.search != null) {
                response.write('Query string is: ' + queryData.search + '<br><br>');
            } else {
                response.write('URL contains no query string<br><br>');
            }
            // Response end
            response.end(`Created server listening on http://${hostname}:${port}/`);
    });
    //  Now that everything is set up, the server listens for requests
    //  When a request comes in to the server it will pass the port and host info
    //  The values passed when the function is called can then be displayed
    server.listen(port, hostname, () => {console.log(`http://${hostname}:${port}/` + ' ok');});
}
catch(err) {
  console.log("Msg: " + err + ".");
}