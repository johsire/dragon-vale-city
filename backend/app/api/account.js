
const { Router } = require('express');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');

const router = new Router();

router.post('/signup', (req, res, next) => {
 const { username, password } = req.body;
 const usernameHash = hash(username);
 const passwordHash = hash(password);

 AccountTable.getAccount({ usernameHash })
  .then(({ account }) => {
    if (!account) {
      AccountTable.storeAccount({ usernameHash, passwordHash })
        .then(() => res.json({ message: 'Success!!' }))
        .catch(error => next(error));
    } else {
      const error = new Error('This username is already taken');

      error.statusCode = 409;
    };
  });

  AccountTable.storeAccount({ usernameHash, passwordHash })
    .then(() => res.json({ message: 'success!' }))
    .catch(error => next(error));
});

module.exports = router;
