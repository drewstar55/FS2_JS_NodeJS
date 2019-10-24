//
// serveFiles.js
//
try { 
      // Setting up modules
      // Variables are being set as constants for easier access to the app
      // Require the HTTP module for basic server functionality
      const http = require('http');
      // Set the hostname
      const hostname = 'localhost';
      // Set the port to 80 for this exercise
      const port = 80;
      // current Date and Time
      var now = new Date();
      // URL handling
      var url = require('url');
      // File serving
      var fs = require('fs');
      //Create a server object and listen on the port for requests
      const server = http.createServer((request, response) => {
          var queryData = url.parse(request.url, true);  // parse the URL data
          // test if queryData contains '?'
          var query = "";
          if (queryData.href.includes('?')) {
            // assign a ﬁle name for retrieval
            query = "page" + queryData.search.replace('?','');  
          } else {
            query = "index";
          }
          // Read the ﬁle. If it exists send the contents back, if not return a 404 error
          fs.readFile('../0_app_client/' + query + '.html', function(err, data) {
              if (err) {
                  response.writeHead(404, {'Content-Type': 'text/html'});
                  response.end("404 Not Found");
              } else {
                // HTTP status code 200 OK, HTTP header as plain text
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
                response.end();
              }
          });  
      });
      //  Now that everything is set up, the server listens for requests
      //  When a request comes in to the server it will pass the port and host info
      //  The values passed when the function is called can then be displayed
      server.listen(port, hostname, () => {console.log(`http://${hostname}:${port}/` + ' ok');});
}
catch(err) {
  console.log("Msg: " + err + ".");
}
