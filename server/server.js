const express = require('express');
const app = express();
const path = require('path');

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
