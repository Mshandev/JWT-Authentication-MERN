require('dotenv').config();
const express=require('express');
const path = require('path');
const app=express();
const cors=require('cors');
const connection=require('./db');
const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth');

// database connection
connection();

//middlewares
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "build")));
//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.get("*", (req, res) =>
  res.sendFile(path.resolve("build", "index.html"))
);
const port=process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listening on port ${port}..`));