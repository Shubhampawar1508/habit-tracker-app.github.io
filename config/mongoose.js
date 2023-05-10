const mongoose = require('mongoose');
 require('dotenv').config()
const uri = process.env.HABIT_URI;


// local db settingss
// mongoose.connect('mongodb://localhost/habit_tracker');
mongoose.connect(process.env.mongoodbUrl);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

