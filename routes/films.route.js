
const authToken = require('../middlewares/jwt.mid.js')

function filmRouter(express){
    const router = express.Router()
    
    router.use(authToken)

    const { create, get, getAll, update, deleteRow } = require('../controllers/film.controller.js')

    router.post('/create', create)
    router.get('/get/:id', get)
    router.get('/get', getAll)
    router.put('/update', update)
    router.delete('/delete', deleteRow)

    return router
}

module.exports = filmRouter

