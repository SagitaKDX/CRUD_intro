const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://minhltgcs230050:14122005anhchiemminhle12@fgwweb2cluster.jsksk65.mongodb.net/?retryWrites=true&w=majority&appName=FGWWeb2Cluster');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);
console.log('Todo list RESTful API server started on: ' + port);