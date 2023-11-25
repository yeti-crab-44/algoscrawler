const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {type: String, required: true},
    algos: [{
        algo_name: String,
        solutions: [{
            solution_name: String,
            solution_notes: String,
            solution_code: String
        }]
    }]
});

ModuleFilenameHelpers.exports = mongoose.model('User', userSchema);