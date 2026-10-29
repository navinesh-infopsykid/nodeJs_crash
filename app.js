const express = require("express");

const {getAllApplications,}= require(
    "./controllers/applications.controller"
)
const applicationsRouter = require("./routes/applications.routes");

const app = express();

app.use(express.json());

app.get('/', getAllApplications);

app.use((req,res)=>{
    res.status(404).json({
        success:false, error : "Route not found"
    });
});

app.use((err, req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({
        success:false, error : "Internal Server Error"
    });
});

app.listen(3000, ()=> console.log("Job Tracker running on 3000 http://localhost:3000/"));