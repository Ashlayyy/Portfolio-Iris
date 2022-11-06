const express = require('express')
const favicon = require('serve-favicon');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/', require('./Routes/index'));

app.use('/css', express.static('Public/css'));
app.use('/js', express.static('Public/js'));
app.use('/html', express.static('Public/html'));

app.use('/download', express.static('Public/download'))

app.use('/img', express.static("../04 Archief/01 Foto's"));


app.use(favicon(__dirname + '/favicon.ico'));


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});