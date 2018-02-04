'use strict';

const process = require('process');
const body_parser = require('body-parser');  
const fs = require('fs');
const path = require('path'); 
const express = require('express');
const app = express();

app.enable('trust proxy');
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// require('./routes/main_routes')(app, knex);
// require('./routes/doc_routes')(app, knex);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  // res.send(`<h1>Express</h1>
  //         <p>Because that's the way we'll have it on the Matthew Express.</p>`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app; 