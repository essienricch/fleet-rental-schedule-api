const sequelize_db = require("../config/dbconfig.js");
const { DataTypes } = require("sequelize");


const Schedule = sequelize_db.define(
  "schedule",
  {
    driver: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    customer: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicle:{
      type : DataTypes.STRING,
      allowNull: false,
    },

    purpose: {
      type: DataTypes.ENUM("personal", "official"),
      allowNull: false,
    },

    service: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    pickUp_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dropOff_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
    }
  },
  {
    timestamps: true,

  }
);


module.exports = Schedule;
