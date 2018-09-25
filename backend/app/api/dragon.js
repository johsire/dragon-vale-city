
const { Router } = require('express');
const DragonTable = require('../dragon/table');
const AccountDragonTable = require('../accountDragon/table');
const { authenticatedAccount } = require ('./helper');

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
    const { dragonId, nickname } = req.body;

    DragonTable.updateDragon({ dragonId, nickname })
        .then(() => res.json({ message: 'Success! nameless dragon updated!' }))
        .catch(error => next(error));
});

module.exports = router;
