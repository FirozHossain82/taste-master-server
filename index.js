const express = require("express");
const app = express();
const cors = require("cors");
const  port = process.env.port || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('The Taste Master Server is Running')
})

app.listen(port, ()=>{
    console.log(`Taste Master  Api is running on port: ${port}`);
})