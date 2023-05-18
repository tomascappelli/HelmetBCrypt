'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const helmet = require('helmet');
const bcrypt = require('bcrypt');

app.use(helmet({
  frameguard: {         
    action: 'deny'
  },
  contentSecurityPolicy: { 
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'",'trusted-cdn.com'],
    }
  },
  dnsPrefetchControl: false
}));

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});

//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
