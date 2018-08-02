const path = require('path');
const fs = require('fs');


function notFound(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const stream = fs.createReadStream(path.resolve('error.html'));
  stream.pipe(res);
}

module.exports = notFound;