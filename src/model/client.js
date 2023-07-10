const sequelize_db = require("../config/dbconfig.js");
const { DataTypes } = require("sequelize");
const User = require("./user");

const Client = sequelize_db.define(
  "client",
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
       let lastname = this.getDataValue("lastName");
       return lastname.toLowerCase();
      },
    },

    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "client_address",
    },

    company_name: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue("company_name");
      },
    },
  },
  {
    timestamps: true,
  }
);


Client.hasOne(User, { foreignKey: 'clientId', onDelete: 'CASCADE' });
User.belongsTo(Client, { foreignKey: 'clientId' });

module.exports = Client;
