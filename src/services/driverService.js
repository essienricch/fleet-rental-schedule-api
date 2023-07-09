const Driver = require('../model/driver');

class DriverService {

    
  static async createDriver(driverData) {
    try {
      const driver = await Driver.create(driverData);
      return driver;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  
  static async getAllDrivers() {
    try {
      const drivers = await Driver.findAll();
      return drivers;
    } catch (error) {
      throw new Error(`Error retrieving users: ${error.message}`);
    }
  }

  
  static async getDriverById(id) {
    try {
      const driver = await Driver.findByPk(id);
      if (!driver) {
        throw new Error(`User with ID ${id} not found`);
      }
      return driver;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }


  //Update user by id:
  static async updateDriver(id, driverData) {

    try {

      const driver = await Driver.findByPk(id);
      if (!driver) {
        throw new Error(`User with ID ${id} not found`);
      }
      await driver.update(driverData);
      return driver;

    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }



  static async deleteDriver(id) {
    try {
      const driver = await Driver.findByPk(id);
      if (!driver) {
        throw new Error(`User with ID ${id} not found`);
      }
      await driver.destroy();

    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

module.exports = DriverService;
