
// Dev-dependencies imports
const { Router } = require('express');

// Component imports
const DragonTable = require('../dragon/table');
const AccountDragonTable = require('../accountDragon/table');
const AccountTable = require('../account/table');
const { authenticatedAccount } = require ('./helper');
const { getPublicDragons } = require('../dragon/helper');

const router = new Router();

// ENDPOINTS:
router.get('/new',(req, res, next) => {
    let accountId, dragon;

    authenticatedAccount({ sessionString: req.cookies.sessionString })
        .then(({ account }) => {
            accountId = account.id;

            dragon = req.app.locals.engine.generation.newDragon();

            return DragonTable.storeDragon(dragon)
        })
        .then(({ dragonId }) => {
          dragon.dragonId = dragonId;

            return AccountDragonTable.storeAccountDragon({ accountId, dragonId });
        })
        .then(() => res.json({ dragon }))
        .catch(error => next(error));
});

router.put('/update', (req, res, next) => {
    const { dragonId, nickname, isPublic, saleValue } = req.body;

    DragonTable.updateDragon({ dragonId, nickname, isPublic, saleValue  })
        .then(() => res.json({ message: 'successfully updated dragon!' }))
        .catch(error => next(error));
});

router.get('/public-dragons', (req, res, next) => {
    getPublicDragons()
      .then(({ dragons }) => res.json({ dragons }))
      .catch(error => next(error));
  });

router.post('/buy', (req, res, next) => {
    const { dragonId, saleValue } = req.body;
    let buyId;

    DragonTable.getDragon({ dragonId })
        .then(dragon => {
            if (dragon.saleValue !== saleValue) {
                throw new Error('Sale Value is not correct');
            }

            if (!dragon.isPublic) {
                throw new Error('Dragon must be public')
            }

            return authenticatedAccount({ sessionString: req.cookies.sessionString });
        })
        .then(({ account, authenticated }) => {
            if (!authenticated) {
                throw new Error('Unauthenticated user!')
            };

            if (saleValue > acccount.balance) {
                throw new Error('Insufficient balance in your account!')
            }

            buyerId = account.id

            return AccountDragonTable.getDragonAccount({ dragonId });
        })
        .then(({ accountId }) => {
            if (accountId === buyerId) {
                throw new Error('Cannot buy your own dragon!');
            }

            const sellerId = accountId;

            return Promise.all([
                AccountTable.updateBalance({
                    accountId: buyId, value: -saleValue
                }),
                AccountTable.updateBalance({
                    accountId: sellerId, value: saleValue
                }),
                AccountDragonTable.updateDragonAccount({
                    dragonId, accountId: buyerId
                }),
                DragonTable.updateDragon({
                    dragonId, isPublic: false
                })
            ])
        })
        .then(() => res.json({ message: 'Success$$!!'}))
        .catch(error => next(error, 'error<= faile!'))
});

module.exports = router;
