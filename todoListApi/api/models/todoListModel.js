const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name :{
        type : String,
        required: 'Enter a task name'
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    status:{
        type :[{
            type: String,
            enum: ['Pending', 'In Progress', 'Completed'],
        }],
        default: ['Pending']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);