const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const routes         = require('./route/routes');
const port           = 8000;

routes(app);

app.use(bodyParser.json()); // parsing of application/json type post data
app.use(bodyParser.urlencoded({     // parsing of application/x-www-form-urlencoded post data
    extended: true,
}));

app.use('/', express.static(__dirname));  //  path to static  file

// start  server
app.listen(port, (err) => {  //listen port 8000
    if(err) return console.log(`Error: ${err}`);
    console.log('We are live on port: ' + port);
});
