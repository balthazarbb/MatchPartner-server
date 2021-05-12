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
let CommentModel = model('user', CommentSchema)

//eExport Model
module.exports = CommentModel