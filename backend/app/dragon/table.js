
const pool = require('../../databasePool');

class DragonTable {
 static storeDragon(dragon) {
   const { birthdate, nickname, generationId } = dragon;

   return new Promise((resolve, reject) => {
     pool.query(
       `INSERT INTO dragon(birthdate, nickname, "generationId")
        VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nicknamem, generationId],
        (error, response) => {
          if (error) return reject(error);

          const draginId = response.rows[0].id;

          resolve({ draginId });
        }
      )
   });
 }
};

module.exports = DragonTable;
