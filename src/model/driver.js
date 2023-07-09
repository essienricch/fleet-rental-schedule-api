require('dotenv/config');
const sequelize_db = require("../config/dbconfig.js");
const { DataTypes } = require("sequelize");
const User = require("./user");

const Driver = sequelize_db.define(
  "driver",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const firstname = this.getDataValue("firstName");
        return firstname ? firstname.toLowerCase() : null;
      },
      set(value) {
        if (value !== undefined) {
          this.setDataValue("firstName", value);
        }
      },
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue("lastName", value);
      },
      get() {
        this.getDataValue("lastName");
      },
    },

    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
    },

    driverLicenseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "driver_address",
    },

    driver_status: {
      type: DataTypes.ENUM('available', 'not_available'),
      defaultValue: 'available',
    },
  },

  {
    timestamps: true,
  }
);


Driver.hasOne(User, { foreignKey: 'driverId', onDelete: 'CASCADE' });
User.belongsTo(Driver, { foreignKey: 'driverId' });

module.exports = Driver;
