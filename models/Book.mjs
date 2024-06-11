import {  Sequelize } from 'sequelize';
import sequelize from '../config/database.mjs';

const Book = sequelize.define('Book', {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  autor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'books',
  timestamps: false,
});

export default Book;
