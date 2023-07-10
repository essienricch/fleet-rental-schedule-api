const Vehicle = require('../model/vehicle');

class VehicleService {

    
  static async createVehicle(vehicleData) {
    try {
      const vehicle = await Vehicle.create(vehicleData);
      return vehicle;
    } catch (error) {
      throw new Error(`Error creating vehicle: ${error.message}`);
    }
  }

  
  static async getAllVehicles() {
    try {
      const vehicles = await Vehicle.findAll();
      return vehicles;
    } catch (error) {
      throw new Error(`Error retrieving vehicles: ${error.message}`);
    }
  }

  static async getAllAvailableVehicles() {
    try {
      const availableVehicles = await Vehicle.findAll({
        where: { availability_status: 'available' },
      });
      return availableVehicles;
    } catch (error) {
      throw new Error(`Error retrieving available vehicles: ${error.message}`);
    }
  }

  
  static async getVehicleById(id) {
    try {
      const vehicle = await Vehicle.findByPk(id);
      if (!vehicle) {
        throw new Error(`Vehicle with ID ${id} not found`);
      }
      return vehicle;
    } catch (error) {
      throw new Error(`Error retrieving vehicle: ${error.message}`);
    }
  }


  
  static async updateVehicle(id, vehicleData) {

    try {

      const vehicle = await Vehicle.findByPk(id);
      if (!vehicle) {
        throw new Error(`vehicle with ID ${id} not found`);
      }
      await vehicle.update(vehicleData);
      return vehicle;

    } catch (error) {
      throw new Error(`Error updating vehicle: ${error.message}`);
    }
  }



  static async deleteVehicle(id) {
    try {
      const vehicle = await Vehicle.findByPk(id);
      if (!vehicle) {
        throw new Error(`Vehicle with ID ${id} not found`);
      }
      await vehicle.destroy();

    } catch (error) {
      throw new Error(`Error deleting vehicle: ${error.message}`);
    }
  }
}

module.exports = VehicleService;
