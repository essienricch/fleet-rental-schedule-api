PORT=3000

//CREATE A NEW USER ->
POST: 'http://localhost:3000/user'

`User created successful: {\"id\":4,\"emailAddress\":\"test4@noemdoek.com\"
        \"password\":\"$2b$05$pA684dhuIHGuMkcAPuX.0u9Vb9eYlDENvy.Jq6YFtk3HupdDhyQmC\",
        \"phoneNumber\":\"090666455667\",\"role\":\"staff\",
        \"updatedAt\":\"2023-07-09T21:51:38.224Z\",\"createdAt\":\"2023-07-09T21:51:38.224Z\",
        \"driverId\":null,\"clientId\":null}`


//GET ALL USER ->
GET: `http://localhost:3000/user`

[
   
    {
        "id": 4,
        "emailAddress": "test4@noemdoek.com",
        "password": "$2b$05$pA684dhuIHGuMkcAPuX.0u9Vb9eYlDENvy.Jq6YFtk3HupdDhyQmC",
        "phoneNumber": "090666455667",
        "role": "staff",
        "createdAt": "2023-07-09T21:51:38.224Z",
        "updatedAt": "2023-07-09T21:51:38.224Z",
        "driverId": null,
        "clientId": null
    },
    {
        "id": 23,
        "emailAddress": "testdriver3@yahoo.com",
        "password": "$2b$05$uKd5pICyTkYN9al2KVXhqeVFcIQV8HNbIFxOiS/3uJ4Fx0Aaqu4MK",
        "phoneNumber": "091234567432",
        "role": "driver",
        "createdAt": "2023-07-09T22:30:01.314Z",
        "updatedAt": "2023-07-09T22:30:01.445Z",
        "driverId": 10,
        "clientId": null
    },
    {
        "id": 24,
        "emailAddress": "testdriver4@yahoo.com",
        "password": "$2b$05$huFH4PovSj4PNTIj9VgYH.9Ic.DmF6Ud42fDohLhEJRmQaBk62KPW",
        "phoneNumber": "09034672123",
        "role": "driver",
        "createdAt": "2023-07-09T22:38:18.647Z",
        "updatedAt": "2023-07-09T22:38:18.985Z",
        "driverId": 11,
        "clientId": null
    },
    {
        "id": 29,
        "emailAddress": "test-client2@yahoo.com",
        "password": "$2b$05$UcuSZkvHiJzKJLURl7hmw.FgkVW.Q1sIMCQ1VFOFeR1buYqRsj/Sm",
        "phoneNumber": "09034672123",
        "role": "client",
        "createdAt": "2023-07-09T23:03:23.307Z",
        "updatedAt": "2023-07-09T23:03:23.568Z",
        "driverId": null,
        "clientId": 2
    },
    {
        "id": 31,
        "emailAddress": "test-client3@yahoo.com",
        "password": "$2b$05$r7n9I8L8qABYoj8EM3jkze6CcAso1UZ1KMFnZ4gspmDloCil9uvGW",
        "phoneNumber": "09034672123",
        "role": "client",
        "createdAt": "2023-07-09T23:07:11.484Z",
        "updatedAt": "2023-07-09T23:07:11.678Z",
        "driverId": null,
        "clientId": 3
    }
]

//GET USER BY ID ->
GET: `http://localhost:3000/user/{id}`

`{
    "id": 1,
    "emailAddress": "test@noemdoek.com",
    "password": "234567",
    "phoneNumber": "090123455667",
    "role": "staff",
    "createdAt": "2023-07-09T20:27:43.986Z",
    "updatedAt": "2023-07-09T20:27:43.986Z",
    "driverId": null,
    "clientId": null
}`

////////////////////////////////////////////////////////////////
DRIVER:

//CREATE A NEW DRIVER ->
POST: `http://localhost:3000/driver`

    `Driver created successful: {\"firstName\":\"mr test4\",\"lastName\":\"drive-test\",
    \"fullName\":\"mr test4 drive-test\",\"driver_status\":\"available\",\"is_active\":false,
    \"id\":14,\"driverLicenseNumber\":\"234ARE678TR\",\"address\":\"lagos, nigeria\",
    \"updatedAt\":\"2023-07-09T22:49:19.208Z\",
    \"createdAt\":\"2023-07-09T22:49:19.208Z\"}`

//GET ALL DRIVER ->
GET: `http://localhost:3000/driver`

[
    {
        "firstName": "mr test4",
        "lastName": "drive-test",
        "fullName": "mr test4 drive-test",
        "id": 11,
        "driverLicenseNumber": "234ARE678TR",
        "address": "lagos, nigeria",
        "driver_status": "available",
        "is_active": false,
        "createdAt": "2023-07-09T22:38:18.972Z",
        "updatedAt": "2023-07-09T22:38:18.972Z"
    },
    {
        "firstName": "mr test4",
        "lastName": "drive-test4",
        "fullName": "mr test4 drive-test4",
        "id": 10,
        "driverLicenseNumber": "234ARE6783T",
        "address": "calabar, nigeria",
        "driver_status": "available",
        "is_active": false,
        "createdAt": "2023-07-09T22:30:01.427Z",
        "updatedAt": "2023-07-09T22:41:08.346Z"
    }
]

//GET DRIVER BY ID ->
GET: `http://localhost:3000/driver/{id}`

`{
    "firstName": "mr test6",
    "lastName": "test-test6",
    "fullName": "mr test6 test-test6",
    "id": 10,
    "driverLicenseNumber": "234ARE6783T",
    "address": "calabar, nigeria",
    "driver_status": "available",
    "is_active": false,
    "createdAt": "2023-07-09T22:30:01.427Z",
    "updatedAt": "2023-07-09T22:30:01.427Z"
}`

////////////////////////////////////////////////////////////////

CLIENT:
//CREATE A NEW CLIENT ->
POST: `http://localhost:3000/client`

    `{
        "firstName": "mr test",
        "lastName": "client-test",
        "fullName": "mr test client-test",
        "company_name": "british petroleum",
        "id": 4,
        "address": "lagos, nigeria",
        "updatedAt": "2023-07-09T23:12:18.967Z",
        "createdAt": "2023-07-09T23:12:18.967Z"
    }`


//GET ALL CLIENT ->
GET: `http://localhost:3000/client`

[
    {
        "firstName": "mr test2",
        "lastName": "client-test",
        "fullName": "mr test2 client-test",
        "company_name": "noemdoek",
        "id": 2,
        "address": "lagos, nigeria",
        "createdAt": "2023-07-09T23:03:23.559Z",
        "updatedAt": "2023-07-09T23:03:23.559Z"
    },
    {
        "firstName": "mr test",
        "lastName": "client-test",
        "fullName": "mr test client-test",
        "company_name": "british petroleum",
        "id": 3,
        "address": "lagos, nigeria",
        "createdAt": "2023-07-09T23:07:11.669Z",
        "updatedAt": "2023-07-09T23:07:11.669Z"
    },
    {
        "firstName": "mr test",
        "lastName": "client-test",
        "fullName": "mr test client-test",
        "company_name": "british petroleum",
        "id": 4,
        "address": "lagos, nigeria",
        "createdAt": "2023-07-09T23:12:18.967Z",
        "updatedAt": "2023-07-09T23:12:18.967Z"
    }
]

//GET CLIENT BY ID ->
GET: `http://localhost:3000/client/{id}`

`{
    "firstName": "mr test4",
    "lastName": "client-test",
    "fullName": "mr test4 client-test",
    "company_name": "dangote",
    "id": 1,
    "address": "lagos, nigeria",
    "createdAt": "2023-07-09T23:00:03.804Z",
    "updatedAt": "2023-07-09T23:00:03.804Z"
}`

////////////////////////////////////////////////////////////////////////

VEHICLE:
//CREATE A NEW VEHICLE ->
POST: `http://localhost:3000/vehicle`

    `{
        "fullDescription": "Toyota Rav 4 okay (Great Condition)",
        "availability_status": "available",
        "condition": "Great Condition",
        "id": 5,
        "vehicle_name": "Toyota",
        "vehicle_model": "Rav 4",
        "vehicle_color": "silver",
        "vehicle_reg_number": "sulphur",
        "vehicle_image": "okay",
        "updatedAt": "2023-07-09T23:27:34.576Z",
        "createdAt": "2023-07-09T23:27:34.576Z"
    }`

//GET ALL VEHICLE ->
GET: `http://localhost:3000/vehicle`
[
    {
        "id": 1,
        "vehicle_name": "Lexus",
        "vehicle_model": "RX470",
        "vehicle_color": "black",
        "vehicle_reg_number": "workhard",
        "vehicle_image": "sporty",
        "availability_status": "available",
        "condition": "Great Condition",
        "createdAt": "2023-07-09T23:17:40.063Z",
        "updatedAt": "2023-07-09T23:17:40.063Z"
    },
    {
        "id": 2,
        "vehicle_name": "BMW",
        "vehicle_model": "470",
        "vehicle_color": "black",
        "vehicle_reg_number": "stayfocus",
        "vehicle_image": "sporty",
        "availability_status": "available",
        "condition": "Great Condition",
        "createdAt": "2023-07-09T23:18:23.518Z",
        "updatedAt": "2023-07-09T23:18:23.518Z"
    },
    {
        "id": 3,
        "vehicle_name": "Toyota",
        "vehicle_model": "Rav 4",
        "vehicle_color": "silver",
        "vehicle_reg_number": "okay",
        "vehicle_image": "okay",
        "availability_status": "available",
        "condition": "Great Condition",
        "createdAt": "2023-07-09T23:23:15.392Z",
        "updatedAt": "2023-07-09T23:23:15.392Z"
    }
]

//GET VEHICLE BY ID ->
GET: `http://localhost:3000/vehicle/{id}`

`{
    "id": 3,
    "vehicle_name": "Toyota",
    "vehicle_model": "Rav 4",
    "vehicle_color": "silver",
    "vehicle_reg_number": "okay",
    "vehicle_image": "okay",
    "availability_status": "available",
    "condition": "Great Condition",
    "createdAt": "2023-07-09T23:23:15.392Z",
    "updatedAt": "2023-07-09T23:23:15.392Z"
}`

////////////////////////////////////////////////////////////////

SCHEDULES:

//CREATE A NEW SCHEDULE ->
POST: `http://localhost:3000/schedule/{driverId}/{vehicleId}/{clientId}`

    `"schedule successfully created: {\"id\":8,
    \"driver\":\"mr test4 drive-test\",
    \"customer\":\"mr test client-test\",
    \"vehicle\":\"Lexus RX470 sporty (Great Condition)\",
    \"purpose\":\"official\",
    \"service\":\"half day\",
    \"start_date\":\"2023-07-08T09:00:00.000Z\",
    \"end_date\":\"2023-07-11T18:00:00.000Z\",
    \"pickUp_location\":\"7 Main Street\",
    \"dropOff_location\":\"6 Elm Street\",
    \"updatedAt\":\"2023-07-10T00:39:35.519Z\",
    \"createdAt\":\"2023-07-10T00:39:35.519Z\"}"`


 //GET ALL SCHEDULES ->
GET:  `http://localhost:3000/schedule`
    
    [
        {
            "id": 1,
            "driver": "mr test4 drive-test",
            "customer": "mr test2 client-test",
            "vehicle": "Lexus RX470 sporty (Great Condition)",
            "purpose": "personal",
            "service": "Rental",
            "start_date": "2023-07-07T09:00:00.000Z",
            "end_date": "2023-07-08T18:00:00.000Z",
            "pickUp_location": "123 Main Street",
            "dropOff_location": "456 Elm Street",
            "createdAt": "2023-07-10T00:18:58.496Z",
            "updatedAt": "2023-07-10T00:18:58.496Z"
        },
        {
            "id": 2,
            "driver": "mr test4 drive-test",
            "customer": "mr test2 client-test",
            "vehicle": "Lexus RX470 sporty (Great Condition)",
            "purpose": "personal",
            "service": "Rental",
            "start_date": "2023-07-07T09:00:00.000Z",
            "end_date": "2023-07-08T18:00:00.000Z",
            "pickUp_location": "123 Main Street",
            "dropOff_location": "456 Elm Street",
            "createdAt": "2023-07-10T00:20:22.773Z",
            "updatedAt": "2023-07-10T00:20:22.773Z"
        },
        {
            "id": 3,
            "driver": "mr test4 drive-test",
            "customer": "mr test2 client-test",
            "vehicle": "Lexus RX470 sporty (Great Condition)",
            "purpose": "personal",
            "service": "Rental",
            "start_date": "2023-07-07T09:00:00.000Z",
            "end_date": "2023-07-08T18:00:00.000Z",
            "pickUp_location": "123 Main Street",
            "dropOff_location": "456 Elm Street",
            "createdAt": "2023-07-10T00:22:31.559Z",
            "updatedAt": "2023-07-10T00:22:31.559Z"
        }
    ]

//GET SCHEDULES BY ID ->
GET: `http://localhost:3000/schedule/{id}`

`{
    "id": 1,
    "driver": "mr test4 drive-test",
    "customer": "mr test2 client-test",
    "vehicle": "Lexus RX470 sporty (Great Condition)",
    "purpose": "personal",
    "service": "Rental",
    "start_date": "2023-07-07T09:00:00.000Z",
    "end_date": "2023-07-08T18:00:00.000Z",
    "pickUp_location": "123 Main Street",
    "dropOff_location": "456 Elm Street",
    "createdAt": "2023-07-10T00:18:58.496Z",
    "updatedAt": "2023-07-10T00:18:58.496Z"
}`

//GET SCHEDULE BASED ON SPECIFIED DATE ->
GET: `http://localhost:3000/schedule?createddate=2023-07-07`

[
    {
        "id": 3,
        "driver": "mr test4 drive-test",
        "customer": "mr test2 client-test",
        "vehicle": "Lexus RX470 sporty (Great Condition)",
        "purpose": "personal",
        "service": "Rental",
        "start_date": "2023-07-07T09:00:00.000Z",
        "end_date": "2023-07-08T18:00:00.000Z",
        "pickUp_location": "123 Main Street",
        "dropOff_location": "456 Elm Street",
        "createdAt": "2023-07-10T00:22:31.559Z",
        "updatedAt": "2023-07-10T00:22:31.559Z"
    },
   
    {
        "id": 6,
        "driver": "mr test4 drive-test",
        "customer": "mr test2 client-test",
        "vehicle": "Lexus RX470 sporty (Great Condition)",
        "purpose": "official",
        "service": "Full Day",
        "start_date": "2023-07-07T09:00:00.000Z",
        "end_date": "2023-07-10T18:00:00.000Z",
        "pickUp_location": "145 Main Street",
        "dropOff_location": "456 Elm Street",
        "createdAt": "2023-07-10T00:27:58.536Z",
        "updatedAt": "2023-07-10T00:27:58.536Z"
    },
    {
        "id": 1,
        "driver": "John Doe",
        "customer": "Jane Smith",
        "vehicle": "Toyota Camry",
        "purpose": "personal",
        "service": "Rental",
        "start_date": "2023-07-07T09:00:00.000Z",
        "end_date": "2023-07-08T18:00:00.000Z",
        "pickUp_location": "123 Main Street",
        "dropOff_location": "456 Elm Street",
        "createdAt": "2023-07-10T00:18:58.496Z",
        "updatedAt": "2023-07-10T00:44:29.000Z"
    }
]

//GET ALL SCHEDULE BASED ON DATE RANGE ->
GET: `http://localhost:3000/schedule?startDate=2023-07-01&endDate=2023-07-31`

[
    {
        "id": 3,
        "driver": "mr test4 drive-test",
        "customer": "mr test2 client-test",
        "vehicle": "Lexus RX470 sporty (Great Condition)",
        "purpose": "personal",
        "service": "Rental",
        "start_date": "2023-07-07T09:00:00.000Z",
        "end_date": "2023-07-08T18:00:00.000Z",
        "pickUp_location": "123 Main Street",
        "dropOff_location": "456 Elm Street",
        "createdAt": "2023-07-10T00:22:31.559Z",
        "updatedAt": "2023-07-10T00:22:31.559Z"
    },
   
    {
        "id": 6,
        "driver": "mr test4 drive-test",
        "customer": "mr test2 client-test",
        "vehicle": "Lexus RX470 sporty (Great Condition)",
        "purpose": "official",
        "service": "Full Day",
        "start_date": "2023-07-07T09:00:00.000Z",
        "end_date": "2023-07-10T18:00:00.000Z",
        "pickUp_location": "145 Main Street",
        "dropOff_location": "456 Elm Street",
        "createdAt": "2023-07-10T00:27:58.536Z",
        "updatedAt": "2023-07-10T00:27:58.536Z"
    },
    {
        "id": 1,
        "driver": "John Doe",
        "customer": "Jane Smith",
        "vehicle": "Toyota Camry",
        "purpose": "personal",
        "service": "Rental",
        "start_date": "2023-07-07T09:00:00.000Z",
        "end_date": "2023-07-08T18:00:00.000Z",
        "pickUp_location": "123 Main Street",
        "dropOff_location": "456 Elm Street",
        "createdAt": "2023-07-10T00:18:58.496Z",
        "updatedAt": "2023-07-10T00:44:29.000Z"
    }
]