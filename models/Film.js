

const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const film = sequelize.define(
  'Film',
  {
    nombre: { type: DataTypes.STRING, allowNull: true, },
    resumen: {type: DataTypes.STRING, allowNull: true},
    idioma: {type: DataTypes.STRING, allowNull: true},
  },
  {},
);


module.exports = film;