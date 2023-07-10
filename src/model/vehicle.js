const sequelize_db = require("../config/dbconfig.js");
const { DataTypes } = require("sequelize");


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
      unique:true
    },

    vehicle_image: {
      type: DataTypes.STRING,
    
    },

    availability_status: {
      type: DataTypes.ENUM("available", "unavailable"),
      defaultValue: "available",
    },

    condition: {
      type: DataTypes.STRING,
      defaultValue: "Great Condition",
    },
  },
  {
    timestamps: true,
    getterMethods: {
      fullDescription() {
        return `${this.vehicle_name} ${this.vehicle_model} ${this.vehicle_image} (${this.condition})`;
      }
    }
  });



module.exports = Vehicle;
