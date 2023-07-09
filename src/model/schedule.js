import sequelize_db from "../config/dbconfig.js/sequelize_db";
import { DataTypes } from "sequelize";
import Driver from "./driver";
import Client from "./client";

const Schedule = sequelize_db.define(
  "schedule",
  {
    driver: {
      name: DataTypes.STRING,
      allowNull: false,
    },

    customer: {
      name: DataTypes.STRING,
      allowNull: false,
    },

    purpose: {
      type: DataTypes.ENUM("PERSONAL", "OFFICIAL"),
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
  },
  {
    timestamps: true,

    createdAt: {
      primaryKey: true,
      field: "created_at",
    },
  }
);

Schedule.hasOne(Driver);
Driver.belongsTo(Schedule);

Schedule.hasOne(Client);
Client.belongsTo(Schedule);

module.exports = Schedule;
