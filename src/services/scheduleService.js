const Schedule = require('../model/schedule');
const { Op } = require("sequelize");

class ScheduleService {

    
  static async createSchedule(scheduleData) {
    console.log("Creating Schedule")
    try {
      console.log('entered try block ')
      console.log(scheduleData)
      const schedule = await Schedule.create(scheduleData);
      console.log(schedule)
      return schedule;
    } catch (error) {
      throw new Error(`Error creating schedule: ${error.message}`);
    }
  }

  
  static async getAllSchedules() {
    try {
      const schedules = await Schedule.findAll();
      return schedules;
    } catch (error) {
      throw new Error(`Error retrieving schedules: ${error.message}`);
    }
  }

  
  static async getScheduleById(id) {
    try {
      const schedule = await Schedule.findByPk(id);
      if (!schedule) {
        throw new Error(`Schedule with ID ${id} not found`);
      }
      return schedule;
    } catch (error) {
      throw new Error(`Error retrieving schedule: ${error.message}`);
    }
  }

  static async  getSchedulesByDateRange(startDate, endDate) {
    try {
      const schedules = await Schedule.findAll({
        where: {
          createdAt: {
            [Op.between]: [startDate, endDate],
          },
        },
      });
      return schedules;
    } catch (error) {
      throw new Error(`Error getting schedules: ${error.message}`);
    }
  }

  static async getSchedulesByCreatedDate(createdDate) {
    try {
      const schedules = await Schedule.findAll({
        where: {
          createdAt: {
            [Op.gte]: createdDate,
          },
        },
      });
      return schedules;
    } catch (error) {
      throw new Error(`Error getting schedules: ${error.message}`);
    }
  }


  
  static async updateSchedule(id, scheduleData) {

    try {

      const schedule = await Schedule.findByPk(id);
      if (!schedule) {
        throw new Error(`Schedule with ID ${id} not found`);
      }
      await schedule.update(scheduleData);
      return schedule;

    } catch (error) {
      throw new Error(`Error updating schedule: ${error.message}`);
    }
  }



  static async deleteSchedule(id) {
    try {
      const schedule = await Schedule.findByPk(id);
      if (!schedule) {
        throw new Error(`Schedule with ID ${id} not found`);
      }
      await schedule.destroy();

    } catch (error) {
      throw new Error(`Error deleting schedule: ${error.message}`);
    }
  }
}

module.exports = ScheduleService;
