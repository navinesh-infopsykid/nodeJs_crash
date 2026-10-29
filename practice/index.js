const express = require("express");

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.method);
    next();
})

app.get("/", (req,res)=>{
    res.send("WELCOME HOME")
})

app.get("/app/:id", (req,res)=>{
    res.send(`WELCOME HOME with ID ${req.params.id}`)
})

app.get("/app", (req,res)=>{
    const {status} = req.query;
    res.send(`Filtering by status ${status}`)
})

app.listen(3000, ()=> console.log("Server runnin on 3000"));
