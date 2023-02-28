const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    id: {
      primaryKey: true ,
      unique: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    createdDb : {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  },{timestamps: false});
};
