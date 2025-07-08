

const sequelize = require('../database/db');
const userFilm = require('./UserFilm');
const film = require('./Film');

module.exports = function(){
    (async () => {
        console.log(" >> ", userFilm.name);
        console.log(" >> ", film.name);
        console.log(" ");

        //User.hasMany(Event, { foreignKey: 'host_id' });
        //Event.hasMany(SettingEvent, { foreignKey: 'id_event' });
        //Event.hasMany(Asistente, { foreignKey: 'id_event' });

        await sequelize.sync({
            force: false, // true to drop and recreate tables
            alter: true // true to update the table structure
        });

    })();
}

