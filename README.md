# fleet-rental-schedule-api
A RESTFul API CRUD implementation for fleet rental service where i used the monolithic system architecture and deployed using Render Web Services.

TOOLS: 
// tools used for building this project....
Node Js
Express Framework
Bcrypt(for password hashing)
PostgreSQL(Structured Query Language => needed my tables to be well structured)
Sequelize ORM(used for validation, defining my model instances and also defined my entity relationships)
Postman for testing.


// Port server:
PORT : 3000

//Endpoints allowed for the project:
POST, GET, PUT, DELETE

//Endpoints for the project:
ENDPOINTS specified => (USER, DRIVER, CLIENT, VEHICLE, SCHEDULE)

USER:

//CREATE A NEW USER ->
POST: http://localhost:3000/user

//GET ALL USER ->
GET: http://localhost:3000/user

//GET USER BY ID ->
GET: http://localhost:3000/user/{id}

//UPDATE USER BY ID->
PUT: http://localhost:3000/user/{id}

//DELETE USER BY ID ->
DELETE: http://localhost:3000/user/{id}

////////////////////////////////////////////////////////////////

DRIVER:
//CREATE A NEW DRIVER ->
POST: http://localhost:3000/driver

//GET ALL DRIVER ->
GET: http://localhost:3000/driver

//GET DRIVER BY ID ->
GET: http://localhost:3000/driver/{id}

//UPDATE DRIVER BY ID->
PUT: http://localhost:3000/driver/{id}

//DELETE DRIVER BY ID ->
DELETE: http://localhost:3000/driver/{id}

//GET ALL IN-ACTIVE DRIVER ->
GET: http://localhost:3000/driver/inactive


////////////////////////////////////////////////////////////////

CLIENT:
//CREATE A NEW CLIENT ->
POST: http://localhost:3000/client

//GET ALL CLIENT ->
GET: http://localhost:3000/client

//GET CLIENT BY ID ->
GET: http://localhost:3000/client/{id}

//UPDATE CLIENT BY ID->
PUT: http://localhost:3000/client/{id}

//DELETE CLIENT BY ID ->
DELETE: http://localhost:3000/client/{id}

////////////////////////////////////////////////////////////////////////

VEHICLE:
//CREATE A NEW VEHICLE ->
POST: http://localhost:3000/vehicle

//GET ALL VEHICLE ->
GET: http://localhost:3000/vehicle

//GET VEHICLE BY ID ->
GET: http://localhost:3000/vehicle/{id}

//UPDATE VEHICLE BY ID->
PUT: http://localhost:3000/vehicle/{id}

//DELETE VEHICLE BY ID ->
DELETE: http://localhost:3000/vehicle/{id}

//GET ALL  AVAILABLE VEHICLE ->
GET: http://localhost:3000/vehicle/available



////////////////////////////////////////////////////////////////


SCHEDULES:

//CREATE A NEW SCHEDULE ->
POST: http://localhost:3000/schedule/{driverId}/{vehicleId}/{clientId}

//GET ALL SCHEDULES ->
GET: http://localhost:3000/schedule


//GET SCHEDULES BY ID ->
GET: http://localhost:3000/schedule/{id}

//UPDATE SCHEDULE:
PUT: http://localhost:3000/schedule/{id}

//DELETE SCHEDULE BY ID ->
DELETE: http://localhost:3000/schedule/{id}

//GET SCHEDULE BASED ON SPECIFIED DATE ->
GET: http://localhost:3000/schedule?createddate=2023-07-07

//GET ALL SCHEDULE BASED ON DATE RANGE ->
GET: http://localhost:3000/schedule?startDate=2023-07-01&endDate=2023-07-31