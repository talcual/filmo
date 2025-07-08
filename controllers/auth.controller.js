
const User = require('../models/UserFilm');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config(); 

const SECRET_KEY = process.env.JWT_SECRET;

module.exports = {
    login: async (req, res) => {
        const { username, password } = req.body;

        let validUser = await User.findOne({ where: { email: username, password:password } });

        if (validUser) {    
            console.log('User found:', validUser);
            const token = jwt.sign({ username:validUser.email, nombre: validUser.nombre }, SECRET_KEY, { expiresIn: '1h' });        
            return res.status(200).json({'response': 'ok', 'token': token});
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    },
    logout: (req, res) => {
        console.log('getById')
        return res.json({});
    },
    profile: (req, res) => {
        
    },
  
}