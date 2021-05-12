const { Schema, model } = require("mongoose");

// 1. Define your schema
let CommentSchema = new Schema({
  userName: String, 
  message: String,
  timestamps: true,
  // like this?
  user_id: {type: Schema.ObjectId, ref: "User"}
})

// 2. Define your model
let CommentModel = model('user', CommentSchema)

// 3. Export your Model with 'module.exports'
module.exports = CommentModel