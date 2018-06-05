var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require("./index.html")(app);
// var apiroutes = require("./app/routing/apiRoutes")(app);

app.use('/', function (req, res) {
    // res.send();
  res.sendFile(path.join(__dirname + '/index.html'));
  })

  
app.listen(PORT);

// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });
