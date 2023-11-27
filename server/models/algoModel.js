const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const Schema = mongoose.Schema;

// const algoSchema = new Schema({
//   algo_name: { type: String, required: true },
//   algo_prompt: { type: String, required: true },
//   solutions: { type: Array },
// });

const solutionSchema = new Schema({
  solution: {
    type: String,
  },
});

const algoSchema = new Schema({
  algo_name: { type: String, required: true },
  algo_prompt: { type: String, required: true },
  solutions: [solutionSchema], // use the solutionSchema for the solutions array
});

module.exports = mongoose.model('Algo', algoSchema);
