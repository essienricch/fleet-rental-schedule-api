const sequelize_db = require("../config/dbconfig.js");
const {  DataTypes } = require("sequelize");



const User = sequelize_db.define("app_user",

  {
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true,
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM('staff','driver', 'client'),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = User;
