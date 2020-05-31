// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const verifyRoute = require('./verify.route');
const claimRoute = require('./claim.route');
const claimpRoute = require('./claimp.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/verify', verifyRoute);
app.use('/claim', claimRoute);
app.use('/claimp', claimpRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});