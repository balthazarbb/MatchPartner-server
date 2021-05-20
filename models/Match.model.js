const { Schema, model } = require("mongoose");

// require user model here
require("./User.model")
require("./Comment.model")

//define match schema
const matchSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  sports: String,
  dateAndTime: String,
  duration: String,
  numberOfParticipants: Number,
  equipment: String,

  //keeps track of all user who joined matches
  userId:[{
    type: Schema.Types.ObjectId,
    ref:"User"
}],
  commentId:[{
    type: Schema.Types.ObjectId,
    ref:"Comment"
  }]

});

//define match model
const MatchModel = model("Match", matchSchema);
//export model
module.exports = MatchModel;