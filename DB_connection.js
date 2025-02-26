require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;
const FavoriteModel = require("./models/Favorite")
const UserModel = require("./models/User");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize( DB_DEPLOY, 
   // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { 
      logging: false,
      native: false,
      dialectOptions: {
         ssl: {
            require: true,
         }
      } 
   }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize);
UserModel(sequelize);
//! sequelize = { models : { Favorite: Favorite, User: User}}

//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
//* User = sequelize.models.User;
//* Favorite = sequelize.models.User;
//* Favorite  N:N  User
User.belongsToMany(Favorite, { through:"user_favorite"});
//* User N:N Favorite
Favorite.belongsToMany(User, { through:"user_favorite"});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
