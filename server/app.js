'use strict';

const express = require('express')
  , path = require('path')
  , app = express()
  ;

app.get('*', function response(req, res) {
  res.sendFile(path.join('../src/public/index.html'));
});

console.log('app listening on port 3000');
app.listen(3000);