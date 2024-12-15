const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const app = express();

// Middleware
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Routes
const routeMyJobs = require('./app/api/my_jobs/route');
const routeBlog = require('./app/api/blog/route');
const routeProject = require('./app/api/projects/route');
const routeFeature = require('./app/api/feature/route');
const routeTechstack = require('./app/api/techstack/route');

app.get('/', (req, res) => {
   res.send('Hello world');
});

const v1 = '/code-amar/v1';
app.use(`${v1}/`, routeMyJobs);
app.use(`${v1}/`, routeBlog);
app.use(`${v1}/`, routeProject);
app.use(`${v1}/`, routeFeature);
app.use(`${v1}/`, routeTechstack);

// Ekspor untuk mode server dan AWS Lambda
module.exports = app;
module.exports.handler = require('serverless-http')(app);
