const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4500;
const usersRoute = require('./routes/users');
const tasksRoute = require('./routes/tasks');
const fileUpload = require('./routes/file_upload');
const customerRoute = require('./routes/customers');
const app = express()
.use(bodyParser.json())
.use(cors())

//create a cors middleware
app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/api",usersRoute);
app.use("/api",tasksRoute);
app.use("/upload",fileUpload);
app.use("/customers_api",customerRoute);

app.listen(port,()=>{
    console.log('Server is running on port '+port);
})
