const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true,
  },
  solutionText: {
    type: String,
    required: true,
  },
  timeComplexity: {
    type: String,
    required: false,
  },
  spaceComplexity: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Solution', solutionSchema);
