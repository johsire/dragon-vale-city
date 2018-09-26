
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

  static getDragonAccount({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT "accountId" FROM accountDragon WHERE "dragonId" = $1',
        [dragonId],
        (error, response) => {
          if (error) return reject(error);

          resolve({ accountId: response.rows[0].accountId });
        }
      )
    })
  }

  static updateDragonAccount({ dragonId, accountId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE accountDragon SET "accountId" = $1 WHERE "dragonId" = $2',
        [accountId, dragonId],
        (error, response) => {
          if (error) return reject(error)

          resolve();
        }
      )
    })
  };
};

AccountDragonTable.getDragonAccount({ dragonId: 3 })
  .then(({ accountId }) => console.log('AcctId', accountId))
  .catch(error => console.error(error, 'err <==xxx'));
  
AccountDragonTable.updateDragonAccount({ dragonId: 2, accountId: 2 })
  .then(() => console.log('Successss@@!!'))
  .catch(error => console.error(error, 'errr <<xx==xx'))

module.exports = AccountDragonTable;
