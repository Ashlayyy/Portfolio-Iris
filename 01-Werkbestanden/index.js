require('dotenv').config();

const express = require('express')
const favicon = require('serve-favicon');
const app = express(); 
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser'); 
const compression = require('compression');
 
app.use(compression()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/', require('./Routes/index'));

app.use('/css', express.static('Public/css')); 
app.use('/js', express.static('Public/js'));
app.use('/html', express.static('Public/html'));
app.use('/components', express.static('Public/components'));
app.use('/download', express.static('Public/download'));
app.use('/img', express.static("../04-Archief/01 Foto's"));
app.use('/loaderio-c364995be9bfaece6ec6622e5a74a865.txt', express.static('Public/data/text.txt'))

app.use(favicon(__dirname + '/favicon.ico'));


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});