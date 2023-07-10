require('dotenv/config');
const sequelize_db = require("../config/dbconfig.js");
const { DataTypes } = require("sequelize");
const User = require("./user");
const Schedule = require("./schedule");

const Driver = sequelize_db.define(
  "driver",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const firstname = this.getDataValue("firstName");
        return firstname.toLowerCase()
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
        if (value !== undefined) {
        this.setDataValue("lastName", value);
      }
      },
      get() {
      const lastname = this.getDataValue("lastName");
      return lastname.toLowerCase();
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

    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },

  {
    timestamps: true,
  }
);


Driver.hasOne(User, { foreignKey: 'driverId', onDelete: 'CASCADE' });
User.belongsTo(Driver, { foreignKey: 'driverId' });

Driver.hasMany(Schedule, { foreignKey: 'driverId' });
Schedule.belongsTo(Driver, { foreignKey: 'driverId', as: 'associatedDriver' });

module.exports = Driver;
