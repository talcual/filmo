
const authToken = require('../middlewares/jwt.mid.js')

function authRouter(express){
    const router = express.Router()
    const { login, logout, profile } = require('../controllers/auth.controller.js')

    router.use('/logout', authToken) // Protect login route
    router.use('/profile', authToken) // Protect logout route

    router.post('/login', login)
    router.post('/logout', logout)
    router.post('/profile', profile)

    return router
}

module.exports = authRouter