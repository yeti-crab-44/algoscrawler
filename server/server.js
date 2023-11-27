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

app.put('/api/add-solution', algoController.addSolution, (req, res) => {
  return res.status(200).json(res.locals.solution);
});

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
