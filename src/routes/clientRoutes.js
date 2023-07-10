const express = require('express');
const ClientService = require('../services/clientService');
const UserService = require('../services/userService');

const router = express.Router();

// Create a client:
router.post('/', async (req, res) => {
    try {
      const { emailAddress, password, phoneNumber, firstName, lastName,  address, company_name } = req.body;
  
      if (!emailAddress || !password || !firstName || !lastName || !company_name || !address || !phoneNumber) {
        throw new Error('Fields cannot be empty');
      }
  
      const role = 'client';
      const userData = { emailAddress, password, phoneNumber, role };
      
      // Create the user
      const user = await UserService.createUser(userData);
  
      // Create the client
      const clientData = { firstName, lastName, company_name, address };
      const client = await ClientService.createClient(clientData)
  
      // Associate the client with the user
      await user.setClient(client)
  
      res.status(201).json(client);
    } catch (error) {
      res.status(500).json({ error: 'Error creating client.' });
    }
  });
  

// Get all clients:
router.get('/', async (req, res) => {
  try {
    const clients = await ClientService.getAllClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving clients.' });
  }
});

// Get client by ID:
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await ClientService.getClientById(id);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving driver.' });
  }
});

// Update a client:
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName,  address, company_name } = req.body;
    const clientData = { firstName, lastName,  address, company_name };
    const client = await ClientService.updateClient(id, clientData);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Error updating client.' });
  }
});

// Delete a client:
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ClientService.deleteClient(id);
    res.json({ message: 'client deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting client.' });
  }
});

module.exports = router;
