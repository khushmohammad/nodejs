const express = require('express');
const app = express()
app.disable("x-powered-by");
const studentsRoute = require('./students');
app.use("/students", studentsRoute)
app.listen(3000, () => console.log("listening port = 3000"))