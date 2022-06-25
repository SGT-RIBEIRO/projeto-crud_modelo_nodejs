// Instantiating the features
const express = require('express')
const app = express()
const path = require("path");
const {engine} = require('express-handlebars')

// Importing database connection settings
const conn = require('./db/conn')

// Importing database Task
const Task = require("./models/tasks")

// Importing the routes

const taskRoutes = require('./routes/tasksRoutes')

// template engine setup
app.engine(
    "handlebars",
    engine({
        defaultLayout: "main",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Configuration to enable reading what comes in the request body
app.use(express.urlencoded({extended: true}))

// Configuration to enable reading of JSON files
app.use(express.json())

// Configuration for reading static files
app.use(express.static(path.join(__dirname, "public")))

// Use the Routes

app.use('/task', taskRoutes)

Task.sync().then(() => {
    // Instantiating the port to run the server
    app.listen(3000)
}).catch((err) =>
    console.log(err)
)



