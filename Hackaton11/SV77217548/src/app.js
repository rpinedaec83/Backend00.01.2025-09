const express = require('express');
const morgan = require('morgan');

const materialRoute = require('./routes/material.route');
const supplyRoute = require('./routes/supply.route');
const employeeRoute = require('./routes/employee.route');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.json({ok: true}));
app.use('/api/materials', materialRoute);
app.use('/api/supplies', supplyRoute);
app.use('/api/employees', employeeRoute);

app.use(errorHandler);

module.exports = app;