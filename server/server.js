const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoDBConnect = require('./config/db');
const corsOptions = require('./config/corsSetup');
const errorHandler = require('./middlewares/errorHandler');
const userRoute = require('./routes/userRoutes');
const authRoute = require('./routes/authRoute');

// initialization
const app = express();

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// environment vars
const PORT = process.env.PORT || 5050;

// routing
app.use('/api/v1/user', userRoute);
app.use('/api/v1/auth', authRoute);

// error handler
app.use(errorHandler);

// app listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`running: http://localhost:${PORT}`.random);
});
