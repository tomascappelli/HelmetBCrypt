'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 13;
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

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});

//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash('sUperpassw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('sUperpassw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
