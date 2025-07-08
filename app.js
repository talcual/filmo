
const express   = require('express')
const app       = express()
const cors      = require('cors')
const dbm       = require('./models/index');
const port      = 3002;

dbm(); // Initialize the database and models

// Config Middlewares
app.use(cors())
app.use(express.json())


// Import Routes
const authRouter = require('./routes/auth.route.js');
const filmRouter = require('./routes/films.route.js')

// Routes Invoked
app.use('/app/auth', authRouter(express));
app.use('/app/film', filmRouter(express));

// Listen
app.listen(port, () => {
    console.log('App iniciada en el puerto :', port);
})