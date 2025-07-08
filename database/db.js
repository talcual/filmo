
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config(); 


let database = process.env.PG_NAME ?? '';
let user = process.env.PG_USER ?? '';
let password = process.env.PG_PASSWORD ?? '';
let host = process.env.PG_HOST ?? '';
let port = process.env.PG_PORT ?? 5432;


const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'postgres'
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;