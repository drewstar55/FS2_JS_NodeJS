//
// jsonQuery.js
//
try { 
    // Require the HTTP module for basic server functionality
    const http = require('http');
    // Set the hostname
    const hostname = 'localhost';
    // Listen on port 80 for this exercise 
    const port = 80;
    // URL handling
    var url = require('url');
    // File serving
    var fs = require('fs');
    //Create a server object and listen on the port we set for requests
    const server = http.createServer((request, response) => {
        var queryData = url.parse(request.url, true);  // parse URL data
        // test if queryData contains '?'
        var query = '';
        if (queryData.href.includes('?')) {
            query = queryData.search.replace('?','');
            // create an object of key:value pairs from query string
            var result = {};
            query.split('&').forEach(function(part) {
                var item = part.split('=');
                result[item[0]] = decodeURIComponent(item[1]);
            });
        } 
        //  Read JSON ﬁle, if it exists send contents back, if not return 404 error
        fs.readFile('clients.json', function(err, data) {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.end('404 Not Found');
            } else {
                // HTTP status code 200 OK, HTTP header as plain text
                response.writeHead(200, {'Content-Type': 'text/html'});
                // convert to JavaScript object
                var obj = JSON.parse(data);
                // flag matching record
                var matchFound = false;
                // examine JSON records for a match to query string
                for (var i = 0; i < obj.length; i++) {
                    var object = obj[i];
                    if (JSON.stringify(result) === JSON.stringify(obj[i])) {
                        // found an exact match
                        response.write('<p>JSON file has record matching query string</p>');         
                        response.write(JSON.stringify(obj[i]));
                        matchFound = true;
                        break;
                    }
                }        
            }
            if (!matchFound) {
                response.write('<p>No matching record in JSON file<p>');
            }
            response.end();
        });  
    });
    //  Now that everything is set up, server listens for requests
    //  When a request comes in to the server it will pass the port and host info
    //  The values passed when the function is called can then be displayed
    server.listen(port, hostname, () => {console.log(`http://${hostname}:${port}/` + ' ok');});
}
catch(err) {
console.log('Msg: ' + err);
}
