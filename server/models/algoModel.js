const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const Schema = mongoose.Schema;

const algoSchema = new Schema({
  algo_name: { type: String, required: true, unique: true },
  algo_prompt: { type: String, required: true },
  solutions: { type: Array },
});

module.exports = mongoose.model('Algo', algoSchema);
