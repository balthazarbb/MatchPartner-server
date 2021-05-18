const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
  myComment: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  timestamps: true,
});
const NoteModel = model("Note", NoteSchema);
module.exports = NoteModel;

/*
const { Schema, model } = require("mongoose")

//require user model here
require("./User.model")

//define comment schema
let CommentSchema = new Schema({
  userName: String, 
  message: String,
  timestamps: true,
  //like this?
  userId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }
  ]
})

//define comment model
let CommentModel = model('User', CommentSchema)

//export Model
module.exports = CommentModel
*/