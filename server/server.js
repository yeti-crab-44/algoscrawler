const express = require('express');
const app = express();
const path = require('path');
const algoController = require('./controllers/algoController.js');
const mongoose = require('mongoose');

const mongoURI =
  'mongodb+srv://algoscrawler:TeamYetiCrab@algoscrawler.jclszjj.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(mongoURI);

const connectDB = async () => {
  try {
    // console.log('uri:', process.env.MONGO_URI)
    const connect = await mongoose.connect(mongoURI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

connectDB();

app.use(express.json()); //to receive req.body
app.use(express.urlencoded({ extended: false }));

app.post('/api/add-problem', algoController.testDB, (req, res) => {
  console.log('hello');
  console.log('req.body', req.body);
  console.log('res.locals.user: ', res.json(res.locals.user));
  res.status(200).json(res.locals.user);
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
  console.log(path.join(__dirname, '../src/index.html'));
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
