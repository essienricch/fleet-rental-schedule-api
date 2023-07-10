const express = require('express');
const VehicleService = require('../services/vehicleService');

const router = express.Router();

// Create a vehicle:
router.post('/', async (req, res) => {
  try {

    const { vehicle_name, vehicle_model, vehicle_color, vehicle_reg_number, vehicle_image, availability_status, condition } = req.body;

    if(!vehicle_name || !vehicle_model || !vehicle_color || !vehicle_reg_number) {
      throw new Error(`fields must not be empty`)
    }
    const vehicleData = { vehicle_name, vehicle_model, vehicle_color, 
        vehicle_reg_number, vehicle_image, availability_status, condition };

    const vehicle = await VehicleService.createVehicle(vehicleData)
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Error creating vehicle.' });
  }
});

// Get all vehicles:
router.get('/', async (req, res) => {
  try {
    const vehicles = await VehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving vehicles.' });
  }
});

//Get all available vehicles:
router.get('/available', async (req, res) => {
  try {
    const available_vehicles = await VehicleService.getAllAvailableVehicles();
    res.json(available_vehicles);
  } catch(error) {
    res.status(500).json({ error: 'Error retrieving available vehicles.' });
  }
})

// Get vehicle by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await VehicleService.getVehicleById(id);
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving vehicle.' });
  }
});

// Update a vehicle:
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { vehicle_name, vehicle_model, vehicle_color, 
        vehicle_reg_number, vehicle_image, availability_status, condition } = req.body;

    const vehicleData = { vehicle_name, vehicle_model, vehicle_color, 
        vehicle_reg_number, vehicle_image, availability_status, condition };

    const vehicle = await VehicleService.updateVehicle(id, vehicleData)
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Error updating vehicle.' });
  }
});

// Delete a vehicle:
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await VehicleService.deleteVehicle(id);
    res.json({ message: 'Vehicle deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting vehicle.' });
  }
});

module.exports = router;
