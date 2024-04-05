const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true //* aaa@aa.a
         }
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
