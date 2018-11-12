import express from 'express';
var app = express();
var port = process.env.PORT || 3000;
import { Promise, connect } from 'mongoose';
import MenuItem from './api/models/menuItemModel';
import { urlencoded, json } from 'body-parser';

/*    var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000, 
    mongoose = require('mongoose'),
    MenuItem = require('./api/models/menuItemModel'), //created model loading here
    bodyParser = require('body-parser');
*/
// mongoose instance connection url connection
Promise = global.Promise;
connect('mongodb://localhost/MenuItemdb'); 

app.use(urlencoded({ extended: true }));
app.use(json());

import routes from './api/routes/menuItemRoutes'; //importing route
routes(app); //register the route

app.listen(port);

console.log('MenuItem RESTful service started on: ' + port);
