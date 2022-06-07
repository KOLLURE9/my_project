const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//create connection with mongodb 
const connect = mongoose.connect;
connect(URL);

//open connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!")
});

//const userRouter = require("./routes/user.route.js");
//const staffRouter = require("./routes/user.route.js");
const physicalPatientRouter = require("./routes/physicalPatient.profile.route.js");
const onlinePatientRouter = require("./routes/onlinePatient.profile.route.js");
const chechupDetailsRouter = require("./routes/checkupDetails.route.js");
const doctorProfileRouter = require("./routes/doctor.profile.route.js");
//const paymentRouter = require("./routes/payment.route.js");

//app.use("/user",userRouter);
//app.use("/doctor",staffRouter);
//app.use("/admin",staffRouter);
//app.use("/receptionist",staffRouter);
//app.use("/labAssistant",staffRouter);
app.use("/physicalPatient",physicalPatientRouter);
app.use("/onlinePatient",onlinePatientRouter);
app.use("/checkupDetails",chechupDetailsRouter);
app.use("/profile",doctorProfileRouter);
//app.use("/payment",paymentRouter);

//listen to PORT
app.listen(4002, () =>
  console.log('Example app listening on port no: 4000!'),
);
