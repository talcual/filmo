
function authRouter(express){
    const router = express.Router()
    const { login, logout, profile } = require('../controllers/auth.controller.js')

    router.post('/login', login)
    router.post('/logout', logout)
    router.post('/profile', profile)

    return router
}

module.exports = authRouter