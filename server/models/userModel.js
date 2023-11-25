const mongoose = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');
const Schema = mongoose.Schema;

// ///////

// const mongoURI = 'mongodb+srv://algoscrawler:TeamYetiCrab@algoscrawler.jclszjj.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'Users'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.log(err));

// /////

const userSchema = new Schema({
  username: { type: String, required: true },
  //   algos: [
  //     {
  //       algo_name: String,
  //       solutions: [
  //         {
  //           solution_name: String,
  //           solution_notes: String,
  //           solution_code: String,
  //         },
  //       ],
  //     },
  //   ],
});

module.exports = mongoose.model('User', userSchema);
