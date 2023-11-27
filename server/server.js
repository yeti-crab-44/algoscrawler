const express = require('express');
const app = express();
const path = require('path');
const algoController = require('./controllers/algoController.js');
const mongoose = require('mongoose');

const mongoURI =
  'mongodb+srv://algoscrawler:TeamYetiCrab@algoscrawler.jclszjj.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);
    console.log('----MongoDB connected...');
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};
connectDB();

app.use(express.json()); //to receive req.body
app.use(express.urlencoded({ extended: false }));

//@GET get a problem
app.get('/api/problems/:problemId', algoController.getProblem, (req, res) => {
  return res.status(200).json(res.locals.problem);
});

//@POST add a solution to a problem
app.post('/api/problems/:problemId', algoController.addSolution, (req, res) => {
  return res.status(200).json(res.locals.updatedProblem);
});

//@POST add a new problem
app.post('/api/add-problem', algoController.addProblem, (req, res) => {
  return res.status(200).json(res.locals.algo);
});

// @GET get all problems
app.get('/api/problems', algoController.getAllProblems, (req, res) => {
  return res.status(200).json(res.locals.allProblems);
});

// when view is clicked, send query to users.algo.solutions
// return status and object

// when add new problem is clicked
// redirect to add problem page
// take the body of the res and create new database entry

// when submit is clicked in add problem, redirect to when view is clicked.

// when add solution is clicked, redirect to Problem and Prompt
// take body of res and create new database entry

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.use('*', (req, res) => {
  res.status(404).send('Error 404!');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: "I'm sorry, I can't find the page you're looking for." },
  };
  const errorObj = Object.assign({}, defaultErr, err);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
module.exports = app;
