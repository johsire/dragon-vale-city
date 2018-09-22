
const { Router } = require('express');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');
const { setSession } = require('./helper')

const router = new Router();

router.post('/signup', (req, res, next) => {
 const { username, password } = req.body;
 const usernameHash = hash(username);
 const passwordHash = hash(password);

 AccountTable.getAccount({ usernameHash })
  .then(({ account }) => {
    if (!account) {
      return AccountTable.storeAccount({ usernameHash, passwordHash })
    } else {
      const error = new Error('This username is already taken');

      error.statusCode = 409;

        throw error;
      }
    })
    .then(() => {
      return setSession({ username, res})
    })
    .then(({ message }) => res.json({ message }))
    .catch(error => next(error));
});


router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  AccountTable.getAccount({ usernameHash: hash(username) })
    .then(({ account }) => {
      if (account && account.passwordHash === hash(password)) {
        const { sessionId } = account;

        return setSession({ username, res, sessionId })
      } else {
        const error = new Error ('Invalid username/password');

        error.statusCode = 409;

        throw error;
      }
    })
    .then(({ message }) => res.json({ message }))
    .catch(error => next(error));
});

router.get('/authenticated', (req, res, next) => {
  const { sessionString } = req.cookies;

  if (!sessionString || !sessionStorage.verify(sessionString)) {
    const error = new Error('Invalid Session');

    error.statusCode = 400;

    return next(error);
  } else {
    const { username, id } = Session.parse(sessionString);

  AccountTable.getAccount({ usernameHash: hash(username) })
    .then(({ account }) => {
      const authenticated = account.sessionId === id;

      res.json({ authenticated });
    })
    .catch(error => next (error));
  }
});

module.exports = router;
