const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const TaskSchema = new Schema({
    description: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;