const { Schema, model } = require("mongoose");

//require user model here
require("./User.model")

//define match schema
const matchSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  sports: String,
  dateAndTime: String,
  Duration: Number,
  NumberOfParticipants: Number,
  Equipment: String,
  userId:[{
    type: Schema.Types.ObjectId,
    ref:"User"
  }]

});

//define match model
const MatchModel = model("Match", matchSchema);
//export model
module.exports = MatchModel;