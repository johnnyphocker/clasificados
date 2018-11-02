const express = require('express');
const router  = express.Router();

const Add = require('../models/add');

/* GET home page */
router.get('/', (req, res, next) => {

  let {desde} = req.query || 0;
  desde = Number(desde);

  Add.find({}, (err, add) => {
    if(err) {
      console.log(err)
    }
    Add.count({}, (err, total) => {
      return res.status(200).json({
        ok: true,
        add,
        total
      });
    });
    
  })
  //.skip(desde).limit(20);

});


router.get('/anuncio/:id', (req, res, next) => {
  console.log('hola')
});


router.post('/send-email', (req, res, next) => {
  let {email, subject, message} = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'jpinzunzaa@gmail.com',
      pass: 'Coolman1-'
    }
  });
  transporter.sendMail({
    from: '"My Awesome Project 👻" <myawesome@project.com>',
    to: email, 
    subject: subject, 
    text: message,
    html: `<b>${message}</b>`
  })
  .then(info => res.status(200).json({ok: true, info}))
  .catch(error => console.log(error));
});


router.post('/formulario', (req, res, next) => {
  const {title, body, name, phone, email, category, state} = req.body;
  const add = new Add({title, body, name, phone, email, category, state});

  add.save((err, add) => {
    if(err) {
      console.log(err)
    }
    return res.status(200).json({
      ok: true,
      add
    });
  });
});





module.exports = router;
