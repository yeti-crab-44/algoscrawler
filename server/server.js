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
    // console.log('uri:', process.env.MONGO_URI)
    const connect = await mongoose.connect(mongoURI);
    console.log('----MongoDB connected...');
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};
connectDB();

app.use(express.json()); //to receive req.body
app.use(express.urlencoded({ extended: false }));

app.post('/api/add-problem', algoController.addProblem, (req, res) => {
  // console.log('hello you have made it through the addProblem method');
  // console.log('req.body', req.body.row);
  // console.log('res.locals.user: ', res.json(res.locals.user));
  return res.status(200).json(res.locals.algo); //.json(res.locals.user);
});

app.post('/api/add-solution', algoController.addSolution, (req, res) => {
  console.log('you have made it out of the addSolution method');
  res.status(200);
  return res.status(200).json(res.locals.solution);
});

// when view is clicked, send query to users.algo.solutions
// return status and object

// when add new problem is clicked
// redirect to add problem page
// take the body of the res and create new database entry

// when submit is clicked in add problem, redirect to when view is clicked.

// when add solution is clicked, redirect to Problem and Prompt
// take body of res and create new database entry

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
