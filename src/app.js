

const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});
app.get('/users',(req,res)=>{
    res.status(200);
    res.send("hello from user");
})

app.listen(PORT, '0.0.0.0' ,(error) =>{
    if(!error)
        console.log("Server is Successfully Runningand App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
