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
      set(value) {
        this.setDataValue("password", hash(value));
      },
    },

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM('driver', 'client'),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = User;
