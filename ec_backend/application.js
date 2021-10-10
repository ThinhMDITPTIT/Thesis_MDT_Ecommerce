const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

const errorMiddleware = require('./middleware/error');

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({ path: 'ec_backend/config/config.env' });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require('./routes/product-route');
const user = require('./routes/user-route');
const order = require('./routes/order-route');
const payment = require('./routes/payment-route');

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment);

// app.use(express.static(path.join(__dirname, '../ec_frontend/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../ec_frontend/build/index.html'));
// });

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
