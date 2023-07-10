
const express = require("express");
require("dotenv/config");
const sequelize_db = require("../fleet-schedule-api/src/config/dbconfig.js");
const userRoutes = require('../fleet-schedule-api/src/routes/userRoutes');
const driverRoutes = require('../fleet-schedule-api/src/routes/driverRoutes');
const vehicleRoutes = require('../fleet-schedule-api/src/routes/vehicleRoutes.js');
const clientRoutes = require('../fleet-schedule-api/src/routes/clientRoutes.js');
const scheduleRoutes = require('../fleet-schedule-api/src/routes/scheduleRoutes.js');


const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  console.log("my fleet rental schedule app loaded .....");
  res.send("Welcome to my fleet rental schedule app");
});


//user route calls:
app.use('/user', userRoutes);
//driver route calls:
app.use('/driver', driverRoutes);
//vehicle route calls:
app.use('/vehicle', vehicleRoutes);
//client route calls:
app.use('/client', clientRoutes);
//schedule route calls:
app.use('/schedule', scheduleRoutes);



//db connection test:
sequelize_db
  .authenticate()
  .then((res) => {
    console.log(
      `Connection has been established successfully with ${JSON.stringify(res)}`
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

  sequelize_db.sync({alter: true})
  .then((data) =>{`console.log(${(data)}`})
  .catch((error) => {console.log(error)});


  //reading port test:
app.listen(port, () =>
  console.log(`app is running on port: http://localhost:${port}`)
);
