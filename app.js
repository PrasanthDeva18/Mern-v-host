const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./config/db')();
const path=require('path')
const VehicleRoute = require('./routes/vechicle');

app.use(cors()) 
app.use(express.json());

app.use("/api/vehicle", VehicleRoute);

//static files
app.use(express.static(path.join(__dirname,'./build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'))
})

const port = process.env.port || 8080
app.listen(port,()=>{
    console.log("listening on the port: 8080");
})
