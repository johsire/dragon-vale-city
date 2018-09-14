
const GenerationEngine = require('./engine');

const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
 engine.stop();
}, 20000);
























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
