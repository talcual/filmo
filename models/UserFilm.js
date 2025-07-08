
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const userFilm = sequelize.define(
  'UserFilm',
  {
    nombre: { type: DataTypes.STRING, allowNull: false, },
    apellido: {type: DataTypes.STRING,},
    email: {type: DataTypes.STRING, allowNull: false, unique: true,},
    telefono: {type: DataTypes.STRING,},
    password: {type: DataTypes.STRING, allowNull: false,},
  },
  {},
);


module.exports = userFilm;