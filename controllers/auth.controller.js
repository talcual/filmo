

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'admin') {            
            return res.status(200).json({'response': 'ok'});
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