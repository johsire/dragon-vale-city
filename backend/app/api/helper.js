
const Session = require('../account/session'); 
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');

const setSession = ({ username, res, sessionId  }) => {
 return new Promise((resolve, reject) => {
   let session, sessionString;

   if (sessionId) {
      sessionString = Session.sessionString({ username, id: sessionId });
      setSessionCookie({ sessionString, res });

      resolve({ message: 'Session Restored!' })
   } else {
      session = new Session({ username });
      sessionString = session.toString();

      AccountTable.updateSessionId({
        sessionId: session.id,
        usernameHash: hash(username)
       })
       .then(() => {
         setSessionCookie({ sessionString, res })

           resolve({ message: 'Session Initiated!'})
         })

         .catch(error => reject(error));
    };
  });
}; 

const setSessionCookie = ({ sessionString, res }) => {
  res.cookie('sessionString', sessionString, {
    expire: Date.now() + 3600000,
    httpOnly: true,
    // secure: true  use with https
    });
};

const authenticatedAccount = ({ sessionString }) => {
  return new Promise ((resolve, reject) => {
    if (!sessionString || !Session.verify(sessionString)) {
      const error = new Error('Invalid Session');
  
      error.statusCode = 400;
  
      return next(error);
    } else {
      const { username, id } = Session.parse(sessionString);
      // console.log(hash(username), 'username hash IN ELSE STATEMENT');
  
    AccountTable.getAccount({ usernameHash: hash(username) })
      .then(({ account }) => {
        const authenticated = account.sessionId === id;
        resolve({ account, authenticated });
      })
      .catch(error => reject(error));
    }
  })
};

module.exports = { setSession, authenticatedAccount };
