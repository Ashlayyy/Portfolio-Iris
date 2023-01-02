const express = require('express');
const router = express.Router()
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const functions = require('./functions');



router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public', 'index.html'));
})


router.get('/dier', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Old/Pagina', 'dier.html'));
})

router.get('/natuur', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Old/Pagina', 'natuur.html'));
})

router.get('/product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/Old/Pagina', 'product.html'));
})

router.get('/vormgeving', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/Old/Pagina', 'vormgeving.html'));
})

router.get('/photoshop', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/Old/Pagina', 'photoshop.html'));
})

router.get('/photoshop/ingekleurd', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/Old/extra/photoshop', 'ingekleurd.html'));
})


router.get('/overmij', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Old', 'overmij.html'));
})

router.get('/artis', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Old/extra/dier', 'artis.html'));
})


router.get('/examen/product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Old/extra/examens', 'product.html'));
})

router.get('/examen/3d', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Old/extra/examens', '3D.html'));
})


router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Public/html/Old', 'contact.html'));
})


router.get('/copyright', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/Old/extra/copyright', 'copyright.html'));
})

router.get('/verslag', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Public/html/Old/extra/copyright', 'copyright.html'));
})





router.get('/components/navbar/:id', async (req, res, next) => {
  if (req.params.id == 'new') {
    let html;
    html = await functions.readFile(`${path.join(__dirname, `../Public/components/navbar/navbar-new.html`)}`);
    res.send(html);
  } else {
    let html;
    html = await functions.readFile(`${path.join(__dirname, `../Public/components/navbar/navbar-old.html`)}`);
    res.send(html);
  }
})

router.get('/components/footer', async (req, res, next) => {
  let html;
  html = await functions.readFile(`${path.join(__dirname, `../Public/components/footer/footer.html`)}`);
  res.send(html);
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
