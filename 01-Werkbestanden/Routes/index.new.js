const express = require("express");
const router = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");
const functions = require("./functions");

/*
    Homepage
*/
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../Public", "index.html"));
});

/*
    Portfolio
*/
router.get("/portfolio", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Portfolio", "portfolio.html")
  );
});
/*
    Dier
*/
router.get("/dier", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Portfolio/pages", "dier.html")
  );
});
/*
    Artis
*/
router.get("/artis", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Portfolio/pages", "artis.html")
  );
});
/*
    Natuur
*/
router.get("/natuur", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Portfolio/pages", "natuur.html")
  );
});
/*
    Product
*/
router.get("/product", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Portfolio/pages", "product.html")
  );
});
/*
    Vormgeving
*/
router.get("/vormgeving", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Portfolio/pages", "vormgeving.html")
  );
});
/*
    Photoshop
*/
router.get("/photoshop", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Portfolio/pages", "photoshop.html")
  );
});
/*
    Photoshop ingekleurd
*/
router.get("/photoshop/ingekleurd", (req, res, next) => {
  res.sendFile(
    path.join(
      __dirname,
      "../Public/html/New/Portfolio/pages",
      "photoshop-ingekleurd.html"
    )
  );
});

/*
    Overmij
*/
router.get("/overmij", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Overmij", "overmij.html")
  );
});
/*
    Examen product
*/
router.get("/examen/product", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Overmij", "examen_product.html")
  );
});
/*
    Examen graphics
*/
router.get("/examen/graphics", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Overmij", "examen_graphics.html")
  );
});

/*
    Contact
*/
router.get("/contact", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Contact", "contact.html")
  );
});
/*
    Contact formulier versturen
*/
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

/*
    Copyright
*/
router.get("/copyright", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Footer/Copyright", "copyright.html")
  );
});
/*
    Sitemap
*/
router.get("/sitemap", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Footer/Sitemap", "sitemap.html")
  );
});
/*
    Verslag
*/
router.get("/verslag", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/New/Stage", "verslag.html")
  );
});

/*
    Navbar component
*/
router.get("/components/navbar/:id", async (req, res, next) => {
  if (req.params.id != 'new' && req.params.id != 'old') return res.send('This version does not exist!');
  res.send(await functions.readFile(
    `${path.join(__dirname, `../Public/components/navbar/navbar-${req.params.id}.html`)}`
  ));
});

/*
    Footer component
*/
router.get("/components/footer", async (req, res, next) => {
  res.send(await functions.readFile(
    `${path.join(__dirname, `../Public/components/footer/footer.html`)}`
  ));
});

module.exports = router;
