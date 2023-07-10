const express = require('express');
const ScheduleService = require('../services/scheduleService');
const DriverService = require('../services/driverService');
const VehicleService = require('../services/vehicleService');
const ClientService = require('../services/clientService');


const router = express.Router();

// Create a schedule:
router.post('/:driverId/:vehicleId/:customerId', async (req, res) => {
  console.log('schedule route ....')
    
    try {

        const { driverId, vehicleId, customerId } = req.params
        

        console.log(driverId)
        console.log(vehicleId)
        console.log(customerId)

        const driver_name = await DriverService.getDriverById(driverId)
        const vehicle_name = await VehicleService.getVehicleById(vehicleId)
        const customer_name = await ClientService.getClientById(customerId)

        console.log('gotten both driver and vehicle names')
        const { purpose, service, start_date, end_date, pickUp_location, dropOff_location } = req.body;

            if (!driver_name || !vehicle_name || !customer_name || !purpose || !service || 
                !start_date || !end_date || !pickUp_location || !dropOff_location){
                throw new Error('Fields cannot be empty');
            }

            const driver = driver_name.fullName
            const vehicle = vehicle_name.fullDescription
            const customer = customer_name.fullName
  
        const scheduleData = { driver,  customer, vehicle, purpose, service,
           start_date, end_date, pickUp_location, dropOff_location, vehicleId: vehicle_name.id, driverId: driver_name.id}
              console.log('schedule data ready ..')

      // Create the schedule:
      const schedule = await ScheduleService.createSchedule(scheduleData)
            console.log(schedule)
      if(schedule){
        console.log('updating driver and  vehicle status')
        
        await driver_name.update({is_active: true})
        await vehicle_name.update({availability_status: 'unavailable'});

        res.status(201).json(`schedule successfully created: ${JSON.stringify(schedule)}`);
      }else {
        throw new Error('schedule not created')
      }
  
    } catch (error) {
      res.status(500).json({ error: 'Error creating schedule.' });
    }
  });
  

// Get all schedule:
router.get('/', async (req, res) => {
  try {
    const schedules = await ScheduleService.getAllSchedules();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving schedules.' });
  }
});

// Get schedule by ID:
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await ScheduleService.getScheduleById(id);
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving schedule.' });
  }
});

//get schedule based on date range specified: 
router.get('/', async (req, res) => {
    try {

      const { start_date, end_date } = req.query.params;

  
      const schedules = await ScheduleService.getSchedulesByDateRange(start_date, end_date);
  
      res.status(200).json(schedules);
    } catch (error) {
      res.status(500).json({ error: 'Error getting schedules.' });
    }
  });

//get schedule based on a particular date specified: 
router.get('/', async (req, res) => {
  console.log('get schedule based on date: ')

    try {
      console.log("entered try block")
      const { createdDate } = req.query.params; 
     
      const schedules = await ScheduleService.getSchedulesByCreatedDate(createdDate);
  
      res.status(200).json(schedules);

    } catch (error) {
      res.status(500).json({ error: 'Error getting schedules.' });
    }
  });

// Update a schedule:
router.put('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const { driver, vehicle, customer, purpose, service, 
        start_date, end_date, pickUp_location, dropOff_location} = req.body;

    const scheduleData = { driver, vehicle, customer, purpose, service, 
        start_date, end_date, pickUp_location, dropOff_location}
    const schedule = await ScheduleService.updateSchedule(id, scheduleData);
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Error updating schedule.' });
  }
});

// Delete a schedule:
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ScheduleService.deleteSchedule(id);
    res.json({ message: 'schedule deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting schedule.' });
  }
});

module.exports = router;
