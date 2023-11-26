const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const Schema = mongoose.Schema;

const algoSchema = new Schema({
  algo_name: { type: String, required: true, unique: true },
  algo_prompt: { type: String, required: true },
  solutions: { type: Array },
  // {
  //   solution1: {
  //     solution_1_code: { type: String },
  //     solution_1_time_complexity: { type: String },
  //     solution_1_space_complexity: { type: String },
  //     solution_1_additional_notes: { type: String },
  //   },
  // },
  // {
  //   solution2: {
  //     solution_2_code: { type: String },
  //     solution_2_time_complexity: { type: String },
  //     solution_2_space_complexity: { type: String },
  //     solution_2_additional_notes: { type: String },
  //   },
  // },
  // {
  //   solution3: {
  //     solution_3_code: { type: String },
  //     solution_3_time_complexity: { type: String },
  //     solution_3_space_complexity: { type: String },
  //     solution_3_additional_notes: { type: String },
  //   },
  // },
});

module.exports = mongoose.model('Algo', algoSchema);
