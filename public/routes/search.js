const path = require('path');
const fs = require('fs');


function search(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const stream = fs.createReadStream(path.resolve('movie.html'));
  stream.pipe(res);
}

module.exports = search;