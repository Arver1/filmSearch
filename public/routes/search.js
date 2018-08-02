const path = require('path');
const fs = require('fs');
const omdb = require('../omdb');
const url = require('url');

function search(req, res){
 const parsedUrl = url.parse(req.url, true);
 const { title } = parsedUrl.query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  omdb.get(title, (error, movie) => {
    if(error) throw error;
  });
  const stream = fs.createReadStream(path.resolve('movie.html'));
  stream.pipe(res);
}

module.exports = search;