const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const quizRoutes = require('./api/routes/quiz');


//logging in dev Env
app.use(morgan('dev'));

//Parsing the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route Definations
app.use('/quiz', quizRoutes);

//Allowing CORS and Handling pre-flight request
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Control-Type,Accept,Autherization");

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET,PATCH');
        return res.status(200).json({});
    }
    next();
});

//Handling undefined Routes
app.use((req, res, next) => {
    const error = new Error('Requested Route is not found');
    error.status = 404;
    next(error);
});

//Unhandled error handling
app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({
            error: {
                message: error.message || 'Internal Server Error'
            }
        });
});

module.exports = app;