const Datatypes = require('sequelize')

const db = require('../db/conn')
const {sequelize} = require("../db/conn");

const Task = sequelize.define('Task', {
    title: {
        type: Datatypes.STRING,
        require: true,
    },
    description: {
        type: Datatypes.STRING,
        require: true,
    },
    done: {
        type: Datatypes.BOOLEAN,
        require: true,
    }
})

module.exports = Task