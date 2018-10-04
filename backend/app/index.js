
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');
const accountRouter = require('./api/account');


const app = express();

const engine = new GenerationEngine();

// bind obj to the actual express applictn:
app.locals.engine = engine;

// Cross Origin Resource Sharing:
// our backend server now has the same origin as the frontend: - 
// - thus our server is implementing the same origin policy: eliminating crossing the origins:
app.use(cors({ origin: 'http://localhost:1234', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/account', accountRouter);
app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) =>{
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  })
});

engine.start();

// Stop the dragon creating engine stop after 20 secs:
// setTimeout(() => {
//  engine.stop();
// }, 20000);


// ===========>>>>>>> NODEMAILER SET-UP <<<<<<==================== \\

app.post('api/send', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'lkjnr01@gmail.com',
      pass: ''
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let { text } = req.body;

  let mailOptions = {
    from: '"Lk Jnr" <lkjnr@gmail.com',
    to: 'rasjoh@gmail.com',
    subject: 'Dragon Purchase Confirmation',
    text: 'Congracualations! You are now a proud owner of a majestic dragon!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.render("contact", { msg: "Success! Email sent!" });
  });
});

module.exports = app;
