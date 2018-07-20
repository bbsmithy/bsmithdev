var express = require('express');
var port = process.env.PORT || 3000;
const pug = require('pug');
var app = express();
(path = require('path')), (publicDir = path.join(__dirname, 'public'));
app.use(express.static(publicDir));
app.set('view engine', 'pug');

const home = pug.renderFile('public/views/home.pug', {
  name: 'Test'
});

app.get('/', function(req, res) {
  res.send(home);
});

app.get('/posts', function(req, res) {
  const post = pug.renderFile(`public/posts/${req.query.title}.pug`, {
    title: 'test'
  });
  res.send(post);
});

app.listen(port);
module.exports = app;
