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

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port=process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listening on port ${port}..`));