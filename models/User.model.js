const { Schema, model } = require("mongoose");


//define match schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  favouriteSports: String,
  img: String,

  matchId:[{
    type: Schema.Types.ObjectId,
    ref:"User"
  }]
});

//define match model
const User = model('User', UserSchema);
//export model
module.exports = User;
