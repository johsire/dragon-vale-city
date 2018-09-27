
const base64 = require('base-64');
const Dragon = require('./index');

class Breeder {
  static breedDragon({ matron, patron }) {
    const matronTraits = matron.traits;
    const patronTraits = patron.traits;

    const babyTraits = [];

    matronTraits.forEach(({ traitType, traitValue }) => {
      const matronTrait = traitValue;

      const patronTrait = patronTraits.find(
       trait => trait.traitType === traitType
      ).traitValue;

      babyTraits.push({
        traitType,
        traitValue: Breeder.pickTrait({ matronTrait, patronTrait })
      });
    });

    return new Dragon({ nickname: 'Unnamed baby-dragon', traits: babyTraits })
  }

  //   pickTraits FUNCTION DOCUMENTATION:/ (traits lottery);
  // Two incoming traits: matronTrait & patronTrait.
  // The metronTrait & patronTrait string values are encoded.
  // Both traits have their characters summed.
  // Get a range by adding both character sums.
  // Generate a random number, in that range.
  // If the number is < the matron's character sum, pick matron.
  // Else, pick patron.
  static pickTrait({ matronTrait, patronTrait }) {
   if (matronTrait === patronTrait) return matronTrait;

   const matronTraitCharSum = Breeder.charSum(base64.encode(matronTrait));
   const patronTraitCharSum = Breeder.charSum(base64.encode(patronTrait));

   const randNum = Math.floor(Math.random() * (matronTraitCharSum + patronTraitCharSum))

   return randNum < matronTraitCharSum ? matronTrait : patronTrait;
  }

  static charSum(string) {
    return string.split('').reduce(
     (sum, character) => sum += character.charCodeAt(),
      0
     );
  }
};

const fooby = new Dragon();
const gooby = new Dragon();
console.log(fooby, 'Fooby<<==xx')
console.log(gooby, 'Gooby<<==xx')

const foogooby = Breeder.breedDragon({ matron: fooby, patron: gooby });
console.log(foogooby, 'FooGooBy<<==xxx')

module.exports = Breeder;
