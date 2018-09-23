
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

module.exports = app;


















// const Generation = require('./generation');

// // an instance of the generation class & save it to a lower case genertn variable:
// const generation = new Generation();
// console.log(generation, 'this is the NEW generation sonnnn!')

// const gooby = generation.newDragon();
// console.log(gooby, 'heeeyy ittsss goooobbbbyyyy!!!')

// setTimeout(() => {
//   const mimar = generation.newDragon();
//   console.log(mimar, 'mimmmmaaarr....yaaayyyyy!!')
// }, 15000);
// ----------------------------------------------------------------------------------------------------------
// const Dragon = require('./dragon');

// const fooey = new Dragon({ 
//   birthdate: new Date(), 
//   nickname: 'fooey' 
// });

// const baloo = new Dragon({ 
//   birthdate: new Date(), 
//   // nickname: 'baloo' 
//   traits: [{ traitType: 'backgroundColor', traitValue: 'green'}]
// });

// const mimar = new Dragon();

// setTimeout(() => {
// const gooby = new Dragon();
// console.log('gooby', gooby);
// }, 3000);


// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);
