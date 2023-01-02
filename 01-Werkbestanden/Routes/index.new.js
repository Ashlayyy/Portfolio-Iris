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
    path.join(__dirname, "../Public/html/new/Portfolio", "portfolio.html")
  );
});
/*
    Dier
*/
router.get("/dier", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Portfolio/pages", "dier.html")
  );
});
/*
    Artis
*/
router.get("/artis", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Portfolio/pages", "artis.html")
  );
});
/*
    Natuur
*/
router.get("/natuur", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Portfolio/pages", "natuur.html")
  );
});
/*
    Product
*/
router.get("/product", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Portfolio/pages", "product.html")
  );
});
/*
    Vormgeving
*/
router.get("/vormgeving", (req, res, next) => {
  res.sendFile(
    path.join(
      __dirname,
      "../Public/html/new/Portfolio/pages",
      "vormgeving.html"
    )
  );
});
/*
    Photoshop
*/
router.get("/photoshop", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Portfolio/pages", "photoshop.html")
  );
});
/*
    Photoshop ingekleurd
*/
router.get("/photoshop/ingekleurd", (req, res, next) => {
  res.sendFile(
    path.join(
      __dirname,
      "../Public/html/new/Portfolio/pages",
      "photoshop-ingekleurd.html"
    )
  );
});

/*
    Overmij
*/
router.get("/overmij", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Overmij", "overmij.html")
  );
});
/*
    Examen product
*/
router.get("/examen/product", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Overmij", "examen_product.html")
  );
});
/*
    Examen graphics
*/
router.get("/examen/graphics", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Overmij", "examen_graphics.html")
  );
});

/*
    Contact
*/
router.get("/contact", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Contact", "contact.html")
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
    path.join(__dirname, "../Public/html/new/Copyright", "copyright.html")
  );
});
/*
    Verslag
*/
router.get("/verslag", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "../Public/html/new/Stage", "verslag.html")
  );
});

/*
    Navbar component
*/
router.get("/components/navbar/:id", async (req, res, next) => {
  if (req.params.id == "new") {
    let html;
    html = await functions.readFile(
      `${path.join(__dirname, `../Public/components/navbar/navbar-new.html`)}`
    );
    res.send(html);
  } else {
    let html;
    html = await functions.readFile(
      `${path.join(__dirname, `../Public/components/navbar/navbar-old.html`)}`
    );
    res.send(html);
  }
});

/*
    Footer component
*/
router.get("/components/footer", async (req, res, next) => {
  let html;
  html = await functions.readFile(
    `${path.join(__dirname, `../Public/components/footer/footer.html`)}`
  );
  res.send(html);
});

module.exports = router;
