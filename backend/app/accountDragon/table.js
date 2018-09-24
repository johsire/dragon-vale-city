
const pool = require('../../databasePool');

class AccountDragonTable {
  static storeAccountDragon({ accountId, dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO accountDragon("accountId", "dragonId") VALUES($1, $2)',
        [accountId, dragonId],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      )
    });
  }

  static getAccountDragons({ accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT "dragonId" FROM accountDragon WHERE "accountId" = $1',
        [accountId],
        (error, response) => {
          if (error) return reject(error);

          resolve({ accountDragons: response.rows });
        }
      )
    })
  }
};

// AccountDragonTable.storeAccountDragon({
//   accountId: 1, dragonId: 3
// }).then(() => console.log('stored account dragon'))
//   .catch(error => console.error(error, 'error<<==xxx'));


// AccountDragonTable.getAccountDragons({ accountId: 2 })
//   .then(({ accountDragons }) => console.log('accountDragons', accountDragons))
//   .catch(error => console.error(error, 'error <==xxxxx'))

module.exports = AccountDragonTable;
