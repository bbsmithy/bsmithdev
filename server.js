var express = require('express');
var port = process.env.PORT || 3000;
const pug = require('pug');
var app = express();
(path = require('path')), (publicDir = path.join(__dirname, 'public'));
app.use(express.static(publicDir));
app.set('view engine', 'pug');

const home = pug.renderFile('public/views/home.pug');
const about = pug.renderFile('public/views/about.pug');
const contact = pug.renderFile(`public/views/contact.pug`);

app.get('/', function(req, res) {
  res.send(home);
});

app.get('/about', function(req, res) {
  res.send(about);
});

app.get('/posts', function(req, res) {
  const post = pug.renderFile(`public/posts/${req.query.title}.pug`);
  res.send(post);
});

app.get('/contact', function(req, res) {
  res.send(contact);
});

app.listen(port);
module.exports = app;
