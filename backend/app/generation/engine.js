
const Generation = require('./index');
const GenerationTable = require('./table');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
   this.buildNewGeneration();
  };

  stop() {
   clearTimeout(this.timer);
  }

  buildNewGeneration() {
    const generation = new Generation();

    GenerationTable.storeGeneration(generation)
      .then(({ generationId }) => {
        this.generation = generation;

        this.generation.generationId = generationId;

        console.log(this.generation, 'New Generation Objs');

        this.timer = setTimeout(
          () => this.buildNewGeneration(),
            this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch(error => console.error(error));
  }
};

module.exports = GenerationEngine;
