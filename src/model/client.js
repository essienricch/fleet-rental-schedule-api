import sequelize_db from "../config/dbconfig.js/sequelize_db";
import { DataTypes } from "sequelize";
import User from "./user";

const Client = sequelize_db.define(
  "client",
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

Client.hasOne(User);
User.belongsTo(Client);

module.exports = Client;
