import sequelize_db from "../config/dbconfig.js/sequelize_db";
import { DataTypes } from "sequelize";

const Vehicle = sequelize_db.define(
  "vehicle",
  {
    vehicle_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicle_model: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicle_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicle_reg_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicle_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    availability_status: {
      type: DataTypes.ENUM("AVAILABLE", "UNAVAILABLE"),
      defaultValue: "AVAILABLE",
    },

    condition: {
      type: DataTypes.STRING,
      defaultValue: "Great Condition",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Vehicle;
