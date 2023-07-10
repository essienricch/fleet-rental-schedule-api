const Client = require('../model/client');

class ClientService {

    
  static async createClient(clientData) {
    try {
      const client = await Client.create(clientData);
      return client;
    } catch (error) {
      throw new Error(`Error creating Client: ${error.message}`);
    }
  }

  
  static async getAllClients() {
    try {
      const clients = await Client.findAll();
      return clients;
    } catch (error) {
      throw new Error(`Error retrieving Clients: ${error.message}`);
    }
  }

  
  static async getClientById(id) {
    try {
      const client = await Client.findByPk(id);
      if (!client) {
        throw new Error(`Client with ID ${id} not found`);
      }
      return client;
    } catch (error) {
      throw new Error(`Error retrieving Client: ${error.message}`);
    }
  }



  static async updateClient(id, clientData) {

    try {

      const client = await Client.findByPk(id);
      if (!client) {
        throw new Error(`Client with ID ${id} not found`);
      }
      await client.update(clientData);
      return client;

    } catch (error) {
      throw new Error(`Error updating client: ${error.message}`);
    }
  }



  static async deleteClient(id) {
    try {
      const client = await Client.findByPk(id);
      if (!client) {
        throw new Error(`Client with ID ${id} not found`);
      }
      await client.destroy();

    } catch (error) {
      throw new Error(`Error deleting client: ${error.message}`);
    }
  }
}

module.exports = ClientService;
