const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require("cors")
const path = require('path')
const app = express()
const logger = require('morgan');
const compresson = require('compression')

app.use(compresson())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(cors())

const routeMyJobs = require('./my_jobs/route')
const routeBlog = require('./blog/route')
const routeProject = require('./projects/route')
const routeFeature = require('./feature/route')
const routeTechstack = require('./techstack/route')

const v1 = '/code-amar/v1'

app.use(`${v1}/`, routeMyJobs)
app.use(`${v1}/`, routeBlog)
app.use(`${v1}/`, routeProject)
app.use(`${v1}/`, routeFeature)
app.use(`${v1}/`, routeTechstack)

module.exports = app
