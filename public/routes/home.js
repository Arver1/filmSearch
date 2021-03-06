const path = require('path');
const fs = require('fs');


function home(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const stream = fs.createReadStream(path.resolve('index.html'));
  stream.pipe(res);
}

module.exports = home;