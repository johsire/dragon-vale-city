
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

module.exports = { setSession };
