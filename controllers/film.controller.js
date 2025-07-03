
const films = [
    { id: 1, nombre: 'Bad Boys 2', idioma: 'ES' },
    { id: 2, nombre: 'Bad Boys 3', idioma: 'ES' },
    { id: 3, nombre: 'Fast and Furious', idioma: 'ES' },
];


module.exports = {
    create: (req, res) => {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'admin') {            
            return res.status(200).json({'response': 'ok'});
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    },
    get: (req, res) => {
        console.log('getById')
        return res.json({});
    },
    getAll : (req, res) => {
        const { q } = req.query;  
        let film_filter = films.filter(film => {
            if (q) {
                return film.nombre.toLowerCase().includes(q.toLowerCase());
            }
        }) || films;
        
        res.json(film_filter);
    },
    update: (req, res) => {
        
    },
    deleteRow: (req, res) => {

    }
  
}