const User = require('../model/user');
const bcrypt = require('bcrypt');

class UserService {

    // Create a new user:
  static async createUser(userData) {
    console.log("user service ....")
    try {
      const { password } =  userData
      console.log(password)
      const hashedpassword = await bcrypt.hash(password, 5)
      console.log(hashedpassword)
      userData.password = hashedpassword
      const user = await User.create(userData);
        console.log(`user id: ${user.id}`)

      if (user.role === 'driver') {
        console.log('this is a driver...')
      }
        console.log('client')
      if (user.role === 'client') {
        console.log('this is a client...')
      }
      console.log('user saved and return....')
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Get all users:
  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(`Error retrieving users: ${error.message}`);
    }
  }

  //Get a user by id:
  static async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }


  //Update user by id:
  static async updateUser(id, userData) {

    try {

      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      await user.update(userData);
      return user;

    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  //Delete user by id:

  static async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }
      await user.destroy();

    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

module.exports = UserService;
