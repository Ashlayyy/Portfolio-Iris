const express = require('express');
const router = express.Router()
const path = require('path');
const nodemailer = require('nodemailer');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public', 'index.html'));
})


router.get('/dier', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Pagina', 'dier.html'));
})

router.get('/natuur', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Pagina', 'natuur.html'));
})

router.get('/product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/Pagina', 'product.html'));
})

router.get('/product/campagne', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/extra/product', 'campagne.html'));
})


router.get('/overmij', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html', 'overmij.html'));
})

router.get('/artis', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/extra/dier', 'artis.html'));
})


router.get('/examen/product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/extra/examens', 'product.html'));
})

router.get('/examen/3d', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/extra/examens', '3D.html'));
})


router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html', 'contact.html'));
})



router.post('/sendEmail', (req, res, next) => {
  console.log(req.body)
  res.send('info ontvangen')
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'irismeijerportfolio@gmail.com',
          pass: 'wybfihryeolgyled'
        }
      });
      
      var mailOptions = {
        from: 'Iris Meijer',
        to: 'zandwerven2015@gmail.com',
        subject: 'Contact formulier portfolio',
        text: `
          Hallo iris,

          Je hebt een nieuw bericht van je portfolio website.

          Naam: 
          ${req.body.voornaam} ${req.body.achternaam}


          Email: 
          ${req.body.email}
 
          Telefoon nummer: 
          ${req.body.telefoon}


          Bericht: 
          ${req.body.bericht}

        
          Als je wilt reageren kun je de gegevens van bovenstaand bericht gebruiken. 
        `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})



module.exports = router;
