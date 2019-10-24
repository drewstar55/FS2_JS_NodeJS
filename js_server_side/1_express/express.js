// express.js
try {
    const port = 999;
    const express = require('express');
    const app = express();
    var now = new Date();

    app.get('/', (request, response) => {
        //write a response to the client
        response.write(`Fullstack Development 2 -- running express.js\n\n`);
        response.write(`Date:` + now + `\n\n`);
        response.end(`Created server... listening on port: ` + port);
    });

    app.listen(port, () => {
        // console.log displays in the console, not the client browser
        console.log(`Created server... listening on port: ` + port);
    });
}
catch(err) {
    console.log("Message: " + err + ".");
}