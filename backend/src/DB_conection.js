require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sCharacter = require('./models/Character.js')
const UserModel = require('./models/User.js')
const FavoriteModel = require('./models/Favorite.js')

/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(
   // URL
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);

sCharacter(sequelize);

/* Ejecicio 5  */
UserModel(sequelize);
FavoriteModel(sequelize);

/* Ejecicio 6 */
const {User, Favorite} = sequelize.models;

/* Se establece las realaciones de muchos a muchos */
User.belongsToMany(Favorite, {through: 'user_favorite'})
Favorite.belongsToMany(User, {through: 'user_favorite'})

module.exports = {
   //...sequelize.models,
   User,
   Favorite,
   conn: sequelize,
};
