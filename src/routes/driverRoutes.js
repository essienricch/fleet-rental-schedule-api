const express = require('express');
const DriverService = require('../services/driverService');
const UserService = require('../services/userService');

const router = express.Router();

// Create a driver:
router.post('/', async (req, res) => {
    try {
      console.log("driver route ....")
      const { emailAddress, password, phoneNumber, firstName, lastName, driverLicenseNumber, address } = req.body;
  
      if (!emailAddress || !password || !firstName || !lastName || !driverLicenseNumber || !address || !phoneNumber) {
        throw new Error('Fields cannot be empty');
      }
  
      const role = 'driver';
      const userData = { emailAddress, password, phoneNumber, role };
  
      console.log("Create the user")
      const user = await UserService.createUser(userData);
      console.log(user)

      console.log('Create the driver')
      const driverData = { firstName, lastName, driverLicenseNumber, address };
      const driver = await DriverService.createDriver(driverData);
  
      console.log('Associate the driver with the user')
      await user.setDriver(driver)
      
      
  
      res.status(201).json(`Driver created successful: ${JSON.stringify(driver)}`);
    } catch (error) {
      res.status(500).json({ error: 'Error creating driver.' });
    }
  });
  

// Get all drivers:
router.get('/', async (req, res) => {
  try {
    const drivers = await DriverService.getAllDrivers();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving drivers.' });
  }
});

//Get all In-active Drivers:

router.get('/inactive', async (req, res) => {
  try {
    const inactive_drivers = await DriverService.getAllInactiveDrivers();
    res.json(inactive_drivers)
  }catch (error) {
    res.status(500).json({ error: 'Error retrieving In-active Drivers.' });
  }
});

// Get driver by ID:
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await DriverService.getDriverById(id);
    res.json(driver);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving driver.' });
  }
});

// Update a driver:
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, driverLicenseNumber, address} = req.body;
    const driverData = { firstName, lastName, driverLicenseNumber, address };
    const driver = await DriverService.updateDriver(id, driverData);
    res.json(driver);
  } catch (error) {
    res.status(500).json({ error: 'Error updating driver.' });
  }
});

// Delete a driver:
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await DriverService.deleteDriver(id);
    res.json({ message: 'driver deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting driver.' });
  }
});

module.exports = router;
