const express = require('express');
const cors=require('cors')
const app = express();
const PORT = process.env.PORT || 5001
app.use(cors());
app.use(express.json()); 
app.get('/home', function (req, res) {
    res.send("Hello")
})
app.post('/link', function (req, res) {
    let data = req.body;
    console.log(data);
    res.send("received")
})
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})