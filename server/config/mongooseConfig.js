let mongoose =  require('mongoose')
require('dotenv').config()

function mongodbConnection(){
mongoose.connect(process.env.MONGO_DATABASE)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
 .once('open', function() {
  console.log("Database connected");
});
}

module.exports = mongodbConnection