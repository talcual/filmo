
const film = require('../models/Film');

module.exports = {
    create: async (req, res) => {

        const { nombre, resumen, idioma } = req.body;

        let fcreatedFilm = await film.create({
            nombre: nombre,
            resumen: resumen,
            idioma: idioma
        });

        if (fcreatedFilm) {
            console.log('Film created:', fcreatedFilm);
            return res.status(201).json({ 'response': 'ok', 'film': fcreatedFilm });
        }else {
            console.log('Error creating film');
            return res.status(500).json({ 'response': 'error', 'message': 'Error creating film' });
        }

    },
    get: (req, res) => {
        console.log('getById')
        return res.json({});
    },
    getAll : async (req, res) => {
        
        let films = await film.findAll({
            attributes: ['id', 'nombre', 'resumen', 'idioma'],
            order: [['createdAt', 'ASC']]
        });

        res.json(films);
    },
    update: (req, res) => {
        
    },
    deleteRow: (req, res) => {

    }
  
}