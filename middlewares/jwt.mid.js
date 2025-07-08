

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config(); 

const SECRET_KEY = process.env.JWT_SECRET;

function authToken(req, res, next) {
 
  let token = req.headers['authorization'];
      token = token && token.split(' ')[1];

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }
  
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token.');
    }

    req.user = decoded;
    
    next();

  })

}

module.exports = authToken;