const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');

const router = require('./routes/router');
const userRoute = require('./routes/user');

const port = 3000;
const hostname = 'localhost';
const url = "mongodb://localhost:27017/sample";
const connect = mongoose.connect(url, { useNewUrlParser: true });

connect
.then((db) => console.log('connected to database'))
.catch((err) => console.log(err));

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main', layoutDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', router);
app.use('/',userRoute);

app.listen(port, hostname, () => console.log(`Listening on ${hostname}:${port}`));